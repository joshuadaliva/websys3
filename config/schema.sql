CREATE DATABASE IF NOT EXISTS arkipaisi CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE arkipaisi;

-- Users table (admin, collector, vendor)
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  role ENUM('admin','collector','vendor') NOT NULL,
  email VARCHAR(255),
  first_name VARCHAR(100),
  last_name VARCHAR(100),
  mobile VARCHAR(20),
  avatar VARCHAR(500),
  is_active TINYINT(1) DEFAULT 1,
  last_login DATETIME,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Stalls table
CREATE TABLE IF NOT EXISTS stalls (
  id INT AUTO_INCREMENT PRIMARY KEY,
  stall_number VARCHAR(20) NOT NULL UNIQUE,
  floor VARCHAR(50) DEFAULT '1st Floor',
  section VARCHAR(100) NOT NULL,
  stall_type VARCHAR(100) NOT NULL,
  base_rate DECIMAL(10,2) DEFAULT 0.00,
  size VARCHAR(50),
  description TEXT,
  photo VARCHAR(500),
  status ENUM('vacant','posted','occupied','paid','overdue','partial','reserved') DEFAULT 'vacant',
  payment_status ENUM('paid','overdue','partial','not_applicable') DEFAULT 'not_applicable',
  vendor_id INT,
  posted_at DATETIME,
  application_deadline DATETIME,
  map_x INT,
  map_y INT,
  map_width INT,
  map_height INT,
  is_archived TINYINT(1) DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (vendor_id) REFERENCES users(id) ON DELETE SET NULL
);

-- Applications table
CREATE TABLE IF NOT EXISTS applications (
  id INT AUTO_INCREMENT PRIMARY KEY,
  application_number VARCHAR(20) NOT NULL UNIQUE,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  mobile VARCHAR(20) NOT NULL,
  email VARCHAR(255) NOT NULL,
  address TEXT NOT NULL,
  age INT NOT NULL,
  preferred_stall_id INT NOT NULL,
  second_choice_stall_id INT,
  intended_business TEXT NOT NULL,
  previous_experience TEXT,
  government_id_photo VARCHAR(500),
  selfie_with_id VARCHAR(500),
  pre_screening_status ENUM('pending','passed','rejected') DEFAULT 'pending',
  qualification_status ENUM('pending','awaiting_documents','under_review','qualified','rejected') DEFAULT 'pending',
  selection_status ENUM('pending','for_raffle','selected','not_selected') DEFAULT 'pending',
  upload_token VARCHAR(255),
  upload_token_expiry DATETIME,
  is_archived TINYINT(1) DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (preferred_stall_id) REFERENCES stalls(id),
  FOREIGN KEY (second_choice_stall_id) REFERENCES stalls(id) ON DELETE SET NULL
);

-- Application documents
CREATE TABLE IF NOT EXISTS application_documents (
  id INT AUTO_INCREMENT PRIMARY KEY,
  application_id INT NOT NULL,
  name VARCHAR(255) NOT NULL,
  file_path VARCHAR(500) NOT NULL,
  status ENUM('pending','approved','rejected') DEFAULT 'pending',
  uploaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  reviewed_at DATETIME,
  review_notes TEXT,
  FOREIGN KEY (application_id) REFERENCES applications(id) ON DELETE CASCADE
);

-- Vendors table
CREATE TABLE IF NOT EXISTS vendors (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  application_id INT,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  mobile VARCHAR(20),
  email VARCHAR(255),
  address TEXT,
  business_name VARCHAR(255),
  business_type VARCHAR(100),
  stall_id INT,
  contract_start DATE,
  contract_end DATE,
  contract_document VARCHAR(500),
  monthly_rate DECIMAL(10,2) DEFAULT 0.00,
  status ENUM('active','suspended','expired','terminated') DEFAULT 'active',
  total_paid DECIMAL(10,2) DEFAULT 0.00,
  current_balance DECIMAL(10,2) DEFAULT 0.00,
  is_archived TINYINT(1) DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL,
  FOREIGN KEY (application_id) REFERENCES applications(id) ON DELETE SET NULL,
  FOREIGN KEY (stall_id) REFERENCES stalls(id) ON DELETE SET NULL
);

-- Collectors table
CREATE TABLE IF NOT EXISTS collectors (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  mobile VARCHAR(20),
  email VARCHAR(255),
  route VARCHAR(255),
  assigned_sections TEXT,
  status ENUM('active','inactive','suspended') DEFAULT 'active',
  total_collected DECIMAL(10,2) DEFAULT 0.00,
  hire_date DATE DEFAULT (CURRENT_DATE),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Collector assignments
CREATE TABLE IF NOT EXISTS collector_assignments (
  id INT AUTO_INCREMENT PRIMARY KEY,
  collector_id INT NOT NULL,
  stall_id INT NOT NULL,
  assigned_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  is_active TINYINT(1) DEFAULT 1,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  UNIQUE KEY unique_assignment (collector_id, stall_id),
  FOREIGN KEY (collector_id) REFERENCES collectors(id) ON DELETE CASCADE,
  FOREIGN KEY (stall_id) REFERENCES stalls(id) ON DELETE CASCADE
);

-- Payments table
CREATE TABLE IF NOT EXISTS payments (
  id INT AUTO_INCREMENT PRIMARY KEY,
  or_number VARCHAR(50) UNIQUE,
  vendor_id INT NOT NULL,
  stall_id INT,
  amount DECIMAL(10,2) NOT NULL,
  payment_date DATE DEFAULT (CURRENT_DATE),
  payment_method ENUM('cash','gcash','maya','bank_transfer','other') DEFAULT 'cash',
  status ENUM('paid','overdue','due_today','under_review','partial','pending') DEFAULT 'pending',
  period_from DATE,
  period_to DATE,
  collected_by INT,
  collector_id INT,
  or_documentation VARCHAR(500),
  proof_image VARCHAR(500),
  notes TEXT,
  is_archived TINYINT(1) DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (vendor_id) REFERENCES vendors(id),
  FOREIGN KEY (stall_id) REFERENCES stalls(id) ON DELETE SET NULL,
  FOREIGN KEY (collected_by) REFERENCES users(id) ON DELETE SET NULL,
  FOREIGN KEY (collector_id) REFERENCES collectors(id) ON DELETE SET NULL
);

-- Documents table
CREATE TABLE IF NOT EXISTS documents (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  file_path VARCHAR(500) NOT NULL,
  file_type VARCHAR(100),
  file_size INT,
  category ENUM('application','vendor','contract','or_documentation','government_id','selfie','business_permit','barangay_clearance','other') DEFAULT 'other',
  related_type ENUM('application','vendor','payment','stall'),
  related_id INT,
  uploaded_by INT,
  status ENUM('active','archived','deleted') DEFAULT 'active',
  is_archived TINYINT(1) DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (uploaded_by) REFERENCES users(id) ON DELETE SET NULL
);

-- Notifications table
CREATE TABLE IF NOT EXISTS notifications (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  type ENUM('payment','application','system','reminder','overdue','inquiry','general') DEFAULT 'general',
  recipient_id INT,
  recipient_role ENUM('admin','collector','vendor'),
  is_read TINYINT(1) DEFAULT 0,
  read_at DATETIME,
  related_type ENUM('payment','application','vendor','stall','inquiry'),
  related_id INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (recipient_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Message logs (simulated SMS/email)
CREATE TABLE IF NOT EXISTS message_logs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  type ENUM('sms','email') NOT NULL,
  recipient VARCHAR(255) NOT NULL,
  recipient_name VARCHAR(200),
  subject VARCHAR(255),
  message TEXT NOT NULL,
  status ENUM('sent','failed','pending','queued') DEFAULT 'sent',
  related_type ENUM('application','vendor','payment','reminder'),
  related_id INT,
  sent_by INT,
  sent_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  error_message TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (sent_by) REFERENCES users(id) ON DELETE SET NULL
);

-- Inquiry tickets
CREATE TABLE IF NOT EXISTS inquiry_tickets (
  id INT AUTO_INCREMENT PRIMARY KEY,
  ticket_number VARCHAR(20) UNIQUE,
  vendor_id INT NOT NULL,
  user_id INT,
  subject VARCHAR(255) NOT NULL,
  category ENUM('billing','maintenance','complaint','general','other') DEFAULT 'general',
  severity ENUM('low','medium','high','urgent') DEFAULT 'medium',
  status ENUM('open','in_progress','resolved','closed') DEFAULT 'open',
  resolved_at DATETIME,
  closed_at DATETIME,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (vendor_id) REFERENCES vendors(id),
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL
);

-- Inquiry messages
CREATE TABLE IF NOT EXISTS inquiry_messages (
  id INT AUTO_INCREMENT PRIMARY KEY,
  ticket_id INT NOT NULL,
  sender_id INT,
  sender_role ENUM('admin','vendor'),
  message TEXT NOT NULL,
  sent_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (ticket_id) REFERENCES inquiry_tickets(id) ON DELETE CASCADE,
  FOREIGN KEY (sender_id) REFERENCES users(id) ON DELETE SET NULL
);

-- Raffles table
CREATE TABLE IF NOT EXISTS raffles (
  id INT AUTO_INCREMENT PRIMARY KEY,
  stall_id INT NOT NULL,
  stall_name VARCHAR(100),
  draw_date VARCHAR(20),
  draw_time VARCHAR(20),
  status ENUM('waiting','scheduled','live','completed','cancelled') DEFAULT 'waiting',
  winner_raffle_number INT,
  winner_name VARCHAR(200),
  winner_application_id INT,
  drawn_at DATETIME,
  was_rescheduled TINYINT(1) DEFAULT 0,
  logs JSON,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (stall_id) REFERENCES stalls(id),
  FOREIGN KEY (winner_application_id) REFERENCES applications(id) ON DELETE SET NULL
);

-- Raffle participants
CREATE TABLE IF NOT EXISTS raffle_participants (
  id INT AUTO_INCREMENT PRIMARY KEY,
  raffle_id INT NOT NULL,
  raffle_number INT NOT NULL,
  name VARCHAR(200) NOT NULL,
  application_id INT,
  FOREIGN KEY (raffle_id) REFERENCES raffles(id) ON DELETE CASCADE,
  FOREIGN KEY (application_id) REFERENCES applications(id) ON DELETE SET NULL
);

-- Market settings
CREATE TABLE IF NOT EXISTS market_settings (
  id INT AUTO_INCREMENT PRIMARY KEY,
  setting_key VARCHAR(100) NOT NULL UNIQUE,
  setting_value TEXT,
  setting_type VARCHAR(50) DEFAULT 'string',
  description VARCHAR(255),
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Payment methods
CREATE TABLE IF NOT EXISTS payment_methods (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  code VARCHAR(50) NOT NULL UNIQUE,
  is_active TINYINT(1) DEFAULT 1,
  account_name VARCHAR(200),
  account_number VARCHAR(100),
  instructions TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Payment account settings
CREATE TABLE IF NOT EXISTS payment_account_settings (
  id INT AUTO_INCREMENT PRIMARY KEY,
  method_id INT NOT NULL,
  account_name VARCHAR(200),
  account_number VARCHAR(100),
  is_active TINYINT(1) DEFAULT 1,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (method_id) REFERENCES payment_methods(id) ON DELETE CASCADE
);

-- Fee rates
CREATE TABLE IF NOT EXISTS fee_rates (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  stall_type VARCHAR(100),
  amount DECIMAL(10,2) NOT NULL,
  frequency ENUM('monthly','quarterly','annually','one_time') DEFAULT 'monthly',
  is_active TINYINT(1) DEFAULT 1,
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- User preferences
CREATE TABLE IF NOT EXISTS user_preferences (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL UNIQUE,
  theme ENUM('light','dark','system') DEFAULT 'light',
  notifications_enabled TINYINT(1) DEFAULT 1,
  email_notifications TINYINT(1) DEFAULT 1,
  sms_notifications TINYINT(1) DEFAULT 1,
  default_payment_method VARCHAR(50) DEFAULT 'cash',
  auto_generate_or TINYINT(1) DEFAULT 0,
  default_map_view VARCHAR(20) DEFAULT 'grid',
  show_labels TINYINT(1) DEFAULT 1,
  show_profile TINYINT(1) DEFAULT 1,
  show_activity TINYINT(1) DEFAULT 1,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Activity logs
CREATE TABLE IF NOT EXISTS activity_logs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  action VARCHAR(255) NOT NULL,
  description TEXT,
  category ENUM('auth','payment','application','vendor','stall','system','settings') DEFAULT 'system',
  ip_address VARCHAR(45),
  metadata JSON,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL
);

-- Sessions table (for express-session with MySQL store)
CREATE TABLE IF NOT EXISTS sessions (
  session_id VARCHAR(128) PRIMARY KEY,
  expires INT UNSIGNED NOT NULL,
  data MEDIUMTEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Insert default market settings
INSERT IGNORE INTO market_settings (setting_key, setting_value, setting_type, description) VALUES
('market_name', 'ARKIPAISI Public Market', 'string', 'Name of the market'),
('market_address', '', 'string', 'Market address'),
('contact_number', '', 'string', 'Contact number'),
('market_email', '', 'string', 'Market email'),
('operating_hours', '6:00 AM - 6:00 PM', 'string', 'Operating hours'),
('total_floors', '2', 'number', 'Total floors'),
('payment_due_day', '5', 'number', 'Day of month payment is due'),
('grace_period_days', '5', 'number', 'Grace period in days'),
('late_penalty_rate', '0', 'number', 'Late penalty percentage'),
('auto_reminder_enabled', '1', 'boolean', 'Auto send payment reminders'),
('reminder_days_before', '3', 'number', 'Days before due date to send reminder');

-- Insert default payment methods
INSERT IGNORE INTO payment_methods (name, code, is_active) VALUES
('Cash', 'cash', 1),
('GCash', 'gcash', 1),
('Maya', 'maya', 1),
('Bank Transfer', 'bank_transfer', 1);

-- Insert default fee rates
INSERT IGNORE INTO fee_rates (name, stall_type, amount, frequency, description) VALUES
('Dry Goods Stall', 'Dry Goods', 1500.00, 'monthly', 'Monthly rental for dry goods stalls'),
('Wet Goods Stall', 'Wet Goods', 2000.00, 'monthly', 'Monthly rental for wet goods stalls'),
('Food Stall', 'Food', 2500.00, 'monthly', 'Monthly rental for food stalls'),
('General Merchandise', 'General', 1800.00, 'monthly', 'Monthly rental for general merchandise stalls');
