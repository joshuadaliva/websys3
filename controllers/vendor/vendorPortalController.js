/* ─── VENDOR / STALL ─────────────────────────────────────── */
const vendor = {
  initials:   'CB',
  firstName:  'Carla',
  lastName:   'Bautista',
  middleName: 'Mendoza',
  fullName:   'Carla M. Bautista',
  phone:      '+63 912 345 6789',
  email:      'carla.bautista@email.com',
  address:    'Brgy. Doon, Pili, Camarines Sur',
  vendorId:   'VND-009',
};

const stall = {
  number:           '#06',
  location:         'Ground Floor — Misc/Pasalubong',
  locationShort:    'Ground Floor — Misc',
  type:             'Dry Goods',
  size:             '3 × 3 m²',
  monthlyRate:      1200,
  contractStart:    'March 15, 2024',
  contractExpires:  'December 31, 2026',
  referenceCode:    'PIL-#06-MAR26',
  collector:        'Juan R. Reyes',
  status:           'active',
};

/* ─── PAYMENTS ───────────────────────────────────────────── */
const payments = [
  { id: 0, period: 'March 2026',    or: '',             amount: 1200, method: '',      issuedBy: '',              date: '',             status: 'unpaid' },
  { id: 1, period: 'February 2026', or: 'OR-2026-0801', amount: 1200, method: 'Cash',  issuedBy: 'Juan R. Reyes', date: 'Feb 5, 2026',  status: 'paid'   },
  { id: 2, period: 'January 2026',  or: 'OR-2026-0732', amount: 1200, method: 'GCash', issuedBy: 'Auto-posted',   date: 'Jan 8, 2026',  status: 'paid'   },
  { id: 3, period: 'Dec 2025',      or: 'OR-2025-1198', amount: 1200, method: 'Cash',  issuedBy: 'Juan R. Reyes', date: 'Dec 6, 2025',  status: 'paid'   },
  { id: 4, period: 'Nov 2025',      or: 'OR-2025-1098', amount: 1200, method: 'Maya',  issuedBy: 'Auto-posted',   date: 'Nov 4, 2025',  status: 'paid'   },
  { id: 5, period: 'Oct 2025',      or: 'OR-2025-1002', amount: 1200, method: 'Cash',  issuedBy: 'Juan R. Reyes', date: 'Oct 7, 2025',  status: 'paid'   },
  { id: 6, period: 'Sep 2025',      or: 'OR-2025-0901', amount: 1200, method: 'GCash', issuedBy: 'Auto-posted',   date: 'Sep 5, 2025',  status: 'paid'   },
  { id: 7, period: 'Aug 2025',      or: 'OR-2025-0812', amount: 1200, method: 'Cash',  issuedBy: 'Juan R. Reyes', date: 'Aug 8, 2025',  status: 'paid'   },
];

/* ─── INQUIRIES / TICKETS ────────────────────────────────── */
const tickets = [
  {
    id: 0,
    subject:   'March 2026 payment not reflected',
    category:  'Payment Concern',
    status:    'open',
    unread:    true,
    createdAt: 'Today, 10:42 AM',
    messages: [
      { from: 'vendor', name: 'Carla Bautista',  text: 'Good morning. I sent my March 2026 payment via GCash using reference code PIL-#06-MAR26 yesterday at around 3PM. The amount was PHP 1,200. But it is still not showing as paid. Please check. Thank you.', time: 'Yesterday, 3:48 PM' },
      { from: 'office', name: 'Market Office',   text: 'Good afternoon po, Carla. We received your message. Can you please send us the GCash reference number or a screenshot of the transaction for faster processing?',                                           time: 'Yesterday, 4:20 PM' },
      { from: 'vendor', name: 'Carla Bautista',  text: 'Here is my GCash ref: 241218123456789. I also sent a screenshot via the market Facebook page.',                                                                                                               time: 'Yesterday, 4:35 PM' },
      { from: 'office', name: 'Market Office',   text: 'Thank you po. We found the transaction. Your payment has been posted and OR-2026-0902 has been issued. You can now see it in your payment history. Sorry for the inconvenience!',                             time: 'Today, 8:30 AM'     },
    ],
  },
  {
    id: 1,
    subject:   'Request: fix broken stall shelf',
    category:  'Stall Condition',
    status:    'waiting',
    unread:    true,
    createdAt: 'Mar 15, 9:10 AM',
    messages: [
      { from: 'vendor', name: 'Carla Bautista', text: 'Good day! I would like to report that one of the shelves inside my stall (#06, Ground Floor) is broken. The left bracket broke last week. Please send someone to fix it.', time: 'Mar 15, 9:10 AM'  },
      { from: 'office', name: 'Market Office',  text: 'Thank you for reporting this, Carla. We have logged a maintenance request. Our team will visit Stall #06 within 3 to 5 working days.',                                        time: 'Mar 15, 11:00 AM' },
    ],
  },
  {
    id: 2,
    subject:   'Contract renewal inquiry',
    category:  'Contract Renewal',
    status:    'resolved',
    unread:    false,
    createdAt: 'Feb 20, 2:00 PM',
    messages: [
      { from: 'vendor', name: 'Carla Bautista', text: 'Good afternoon. My stall contract expires on December 31, 2026. What is the process for renewal? I would like to renew early.',                                                                                    time: 'Feb 20, 2:00 PM'  },
      { from: 'office', name: 'Market Office',  text: 'Good afternoon po! The renewal process starts 60 days before expiry. We will send a formal notice in October 2026. Just keep your payments up to date and there are no pending violations.',                        time: 'Feb 20, 3:15 PM'  },
      { from: 'vendor', name: 'Carla Bautista', text: 'Okay understood. Thank you!',                                                                                                                                                                                       time: 'Feb 20, 3:22 PM'  },
      { from: 'office', name: 'Market Office',  text: 'You are welcome po! This ticket will now be marked as resolved.',                                                                                                                                                    time: 'Feb 20, 3:25 PM'  },
      { from: 'system', text: 'Ticket marked as resolved by Market Office.',                                                                                                                                                                                                time: 'Feb 20, 3:25 PM'  },
    ],
  },
];

/* ─── NOTICES ────────────────────────────────────────────── */
const notices = [
  { title: 'March 2026 payment now due',                               date: 'Mar 1, 2026'  },
  { title: 'Market hours update: Now open until 6PM on weekdays',      date: 'Feb 28, 2026' },
  { title: 'Annual contract renewal reminder',                         date: 'Feb 15, 2026' },
];

/* ─── SETTINGS ───────────────────────────────────────────── */
const settings = {
  appearance: {
    theme:    'light',   // 'light' | 'dark' | 'auto'
    language: 'English',
  },
  notifications: {
    paymentReminders:      true,
    inquiryReplies:        true,
    marketAnnouncements:   true,
    contractExpiryAlerts:  true,
  },
  privacy: {
    showHistoryToCollector: true,
    twoFactorAuth:          false,
  },
  about: {
    appName: 'ARKIPAISI Market Management System',
    version: 'v1.0.0-beta',
    market:  'Pili Public Market (PPMB-23)',
  },
};

/* ─── HELPERS ────────────────────────────────────────────── */
function getPaymentStats(paymentList) {
  const unpaid = paymentList.filter(p => p.status === 'unpaid');
  const paid   = paymentList.filter(p => p.status === 'paid');
  return {
    balanceDue:   unpaid.reduce((s, p) => s + p.amount, 0),
    duePeriod:    unpaid[0]?.period || null,
    totalPaid:    paid.reduce((s, p) => s + p.amount, 0),
    paidCount:    paid.length,
    unpaidCount:  unpaid.length,
  };
}

function getInquiryStats(ticketList) {
  const open = ticketList.filter(t => t.status === 'open' || t.status === 'waiting').length;
  return { openCount: open, totalCount: ticketList.length };
}

/* ─── CONTROLLERS ────────────────────────────────────────── */
const showDashboard = (req, res) => {
  const pStats = getPaymentStats(payments);
  const iStats = getInquiryStats(tickets);
  // Recent 4 payments for dashboard table
  const recentPayments = payments.slice(0, 4);
  res.render('vendor/dashboard', { vendor, stall, pStats, iStats, recentPayments, notices });
};

const showPayments = (req, res) => {
  const pStats = getPaymentStats(payments);
  res.render('vendor/payments', { vendor, stall, payments, pStats });
};

const showInquiry = (req, res) => {
  const iStats = getInquiryStats(tickets);
  res.render('vendor/inquries', { vendor, stall, tickets, iStats });
};

const showProfile = (req, res) => {
  const pStats = getPaymentStats(payments);
  const iStats = getInquiryStats(tickets);
  res.render('vendor/profile', { vendor, stall, pStats, iStats });
};

const showSettings = (req, res) => {
  res.render('vendor/settings', { vendor, stall, settings });
};

module.exports = {
  showDashboard,
  showPayments,
  showInquiry,
  showProfile,
  showSettings,
};
