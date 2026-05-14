require('dotenv').config();
const mysql = require('mysql2/promise');
const bcrypt = require('bcryptjs');
const fs = require('fs');
const path = require('path');

async function seed() {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    port: parseInt(process.env.DB_PORT) || 3306,
    multipleStatements: true,
  });

  try {
    // Run schema
    const schema = fs.readFileSync(path.join(__dirname, 'schema.sql'), 'utf8');
    await connection.query(schema);
    console.log('Schema created successfully');

    // Create admin user
    const hashedPassword = await bcrypt.hash('admin123', 12);
    await connection.query(
      `INSERT IGNORE INTO arkipaisi.users (username, password, role, email, first_name, last_name, is_active)
       VALUES (?, ?, 'admin', ?, ?, ?, 1)`,
      ['admin', hashedPassword, 'admin@arkipaisi.com', 'System', 'Admin']
    );
    console.log('Admin user created (username: admin, password: admin123)');

    // Create demo collector
    const collectorPassword = await bcrypt.hash('collector123', 12);
    const [collectorResult] = await connection.query(
      `INSERT IGNORE INTO arkipaisi.users (username, password, role, email, first_name, last_name, is_active)
       VALUES (?, ?, 'collector', ?, ?, ?, 1)`,
      ['collector1', collectorPassword, 'collector1@arkipaisi.com', 'Juan', 'Dela Cruz']
    );
    if (collectorResult.insertId) {
      await connection.query(
        `INSERT IGNORE INTO arkipaisi.collectors (user_id, first_name, last_name, mobile, email, route, assigned_sections, status)
         VALUES (?, ?, ?, ?, ?, ?, ?, 'active')`,
        [collectorResult.insertId, 'Juan', 'Dela Cruz', '09171234567', 'collector1@arkipaisi.com', 'Route A', 'Section A,Section B']
      );
    }
    console.log('Demo collector created (username: collector1, password: collector123)');

    // Create demo stalls
    const stalls = [
      ['S-001', '1st Floor', 'Section A', 'Dry Goods', 1500.00, '3x3m', 'Corner stall near entrance'],
      ['S-002', '1st Floor', 'Section A', 'Dry Goods', 1500.00, '3x3m', 'Adjacent to main aisle'],
      ['S-003', '1st Floor', 'Section A', 'Wet Goods', 2000.00, '4x3m', 'Near water supply'],
      ['S-004', '1st Floor', 'Section B', 'Food', 2500.00, '4x4m', 'Food court area'],
      ['S-005', '1st Floor', 'Section B', 'Food', 2500.00, '4x4m', 'Food court area with ventilation'],
      ['S-006', '2nd Floor', 'Section C', 'General', 1800.00, '3x3m', 'Second floor general area'],
      ['S-007', '2nd Floor', 'Section C', 'Dry Goods', 1500.00, '3x3m', 'Near stairs'],
      ['S-008', '2nd Floor', 'Section D', 'General', 1800.00, '3x4m', 'Corner stall with window'],
    ];

    for (const s of stalls) {
      await connection.query(
        `INSERT IGNORE INTO arkipaisi.stalls (stall_number, floor, section, stall_type, base_rate, size, description, status)
         VALUES (?, ?, ?, ?, ?, ?, ?, 'vacant')`,
        s
      );
    }
    // Post some stalls
    await connection.query(
      `UPDATE arkipaisi.stalls SET status = 'posted', posted_at = NOW(),
       application_deadline = DATE_ADD(NOW(), INTERVAL 30 DAY) WHERE stall_number IN ('S-001', 'S-004', 'S-006')`
    );
    console.log('Demo stalls created (8 stalls, 3 posted)');

    // Create demo vendor
    const vendorPassword = await bcrypt.hash('vendor123', 12);
    const [vendorUserResult] = await connection.query(
      `INSERT IGNORE INTO arkipaisi.users (username, password, role, email, first_name, last_name, is_active)
       VALUES (?, ?, 'vendor', ?, ?, ?, 1)`,
      ['vendor1', vendorPassword, 'vendor1@email.com', 'Maria', 'Santos']
    );

    if (vendorUserResult.insertId) {
      // Get an occupied stall
      await connection.query(
        `UPDATE arkipaisi.stalls SET status = 'occupied', vendor_id = ? WHERE stall_number = 'S-002'`,
        [vendorUserResult.insertId]
      );
      const [stallRows] = await connection.query(`SELECT id FROM arkipaisi.stalls WHERE stall_number = 'S-002'`);
      const stallId = stallRows[0] ? stallRows[0].id : null;

      const [vendorResult] = await connection.query(
        `INSERT IGNORE INTO arkipaisi.vendors (user_id, first_name, last_name, mobile, email, address, business_name, business_type, stall_id, contract_start, contract_end, monthly_rate, status)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, CURDATE(), DATE_ADD(CURDATE(), INTERVAL 1 YEAR), ?, 'active')`,
        [vendorUserResult.insertId, 'Maria', 'Santos', '09181234567', 'vendor1@email.com', '123 Main St, Manila', 'Santos Dry Goods', 'Dry Goods', stallId, 1500.00]
      );

      // Create some demo payments
      if (vendorResult.insertId) {
        const vendorId = vendorResult.insertId;
        const months = ['2026-01', '2026-02', '2026-03', '2026-04'];
        for (let i = 0; i < months.length; i++) {
          await connection.query(
            `INSERT INTO arkipaisi.payments (or_number, vendor_id, stall_id, amount, payment_date, payment_method, status, period_from, period_to)
             VALUES (?, ?, ?, ?, ?, 'cash', 'paid', ?, ?)`,
            [`OR-2026-${String(i + 1).padStart(3, '0')}`, vendorId, stallId, 1500.00, `${months[i]}-05`, `${months[i]}-01`, `${months[i]}-28`]
          );
        }

        // Assign collector to some stalls
        const [collectorRows] = await connection.query(`SELECT id FROM arkipaisi.collectors LIMIT 1`);
        if (collectorRows[0]) {
          const [allStalls] = await connection.query(`SELECT id FROM arkipaisi.stalls LIMIT 5`);
          for (const s of allStalls) {
            await connection.query(
              `INSERT IGNORE INTO arkipaisi.collector_assignments (collector_id, stall_id, is_active) VALUES (?, ?, 1)`,
              [collectorRows[0].id, s.id]
            );
          }
        }
      }
    }
    console.log('Demo vendor created (username: vendor1, password: vendor123)');

    // Create demo notifications
    const [adminUser] = await connection.query(`SELECT id FROM arkipaisi.users WHERE role = 'admin' LIMIT 1`);
    if (adminUser[0]) {
      await connection.query(
        `INSERT INTO arkipaisi.notifications (title, message, type, recipient_id, recipient_role)
         VALUES ('Welcome', 'Welcome to ARKIPAISI Market Management System', 'system', ?, 'admin')`,
        [adminUser[0].id]
      );
      await connection.query(
        `INSERT INTO arkipaisi.notifications (title, message, type, recipient_id, recipient_role)
         VALUES ('New Application', 'A new stall application has been submitted', 'application', ?, 'admin')`,
        [adminUser[0].id]
      );
    }

    // Create demo application
    const [postedStalls] = await connection.query(`SELECT id FROM arkipaisi.stalls WHERE status = 'posted' LIMIT 2`);
    if (postedStalls.length > 0) {
      await connection.query(
        `INSERT IGNORE INTO arkipaisi.applications
         (application_number, first_name, last_name, mobile, email, address, age, preferred_stall_id, second_choice_stall_id, intended_business, previous_experience, pre_screening_status, qualification_status)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'pending', 'pending')`,
        ['APP-2026-001', 'Ramon', 'Flores', '09191234567', 'ramon@email.com', '456 Sample Ave, Manila', 35,
         postedStalls[0].id, postedStalls[1] ? postedStalls[1].id : null, 'Selling dried fish and seafood products', '5 years in retail']
      );
    }
    console.log('Demo application created');

    console.log('\n--- Seed completed successfully ---');
    console.log('Login credentials:');
    console.log('  Admin:     admin / admin123');
    console.log('  Collector: collector1 / collector123');
    console.log('  Vendor:    vendor1 / vendor123');

  } catch (error) {
    console.error('Seed error:', error.message);
    throw error;
  } finally {
    await connection.end();
  }
}

seed().catch(err => {
  console.error('Seed failed:', err);
  process.exit(1);
});
