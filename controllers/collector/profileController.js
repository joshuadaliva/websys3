const user = {
  initials:   'JR',
  firstName:  'Juan',
  lastName:   'Reyes',
  middleName: 'Ramos',
  fullName:   'Juan R. Reyes',
  role:       'Market Collector',
  employeeId: 'EMP-2024-047',
  phone:      '+63 912 345 6789',
  email:      'jrreyes@pili.gov.ph',
  address:    'Brgy. San Jose, Pili, Camarines Sur',
};

const employment = {
  position:       'Market Collector',
  department:     'Revenue Collection',
  dateHired:      'March 15, 2024',
  assignedMarket: 'Pili Public Market (PPMB-23)',
  supervisor:     'Maria C. Santos',
};

const stats = {
  totalStalls: 47,
  orsIssued:   312,
  onTimeRate:  '98%',
};

const assignment = {
  totalStalls:        47,
  groundFloorStalls:  28,
  secondFloorStalls:  19,
  routeUpdated:       'March 15, 2026',
  collectionSchedule: 'Monday – Saturday',
  collectionHours:    '7:00 AM – 5:00 PM',
};

const performance = {
  totalCollected:    '₱14,800',
  collectionRate:    '21% of target',
  orsIssuedMonth:    14,
  outstandingAccts:  7,
  onTimeRate:        '98%',
};

const activityLog = [
  { text: 'OR-2026-0843 issued to Tindahan ni Maria — PHP 900',       time: 'Mar 8, 2026 at 10:02 AM' },
  { text: 'OR-2026-0841 assigned to Maya payment from Buko Fresh',      time: 'Mar 9, 2026 at 11:00 AM' },
  { text: 'SMS reminder sent to Pedro Carinderia (Stall #4)',           time: 'Mar 9, 2026 at 9:05 AM'  },
  { text: 'OR-2026-0840 issued to Juan Loading — PHP 700',             time: 'Mar 8, 2026 at 8:30 AM'  },
  { text: 'OR-2026-0839 issued to Nena Food House — PHP 800',          time: 'Mar 8, 2026 at 8:05 AM'  },
  { text: 'Monthly summary report downloaded for February 2026',        time: 'Mar 1, 2026 at 4:10 PM'  },
  { text: 'Profile information updated',                                 time: 'Feb 28, 2026 at 2:20 PM' },
  { text: 'Password changed successfully',                               time: 'Feb 15, 2026 at 9:45 AM' },
];

const security = {
  lastLogin: 'Mar 19, 2026 at 7:04 AM',
  device:    'Chrome on Android',
  notifPrefs: {
    paymentReceived:      true,
    overdueAlerts:        true,
    systemAnnouncements:  false,
  },
};

const showProfile = (req, res) => {
  res.render('collector/profile', {
    user, employment, stats,
    assignment, performance,
    activityLog, security,
  });
};

module.exports = { showProfile };
