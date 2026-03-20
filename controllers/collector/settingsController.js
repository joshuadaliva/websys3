const settings = {
  appearance: {
    theme: "light", // 'light' | 'dark' | 'auto'
    fontSize: "md", // 'sm' | 'md' | 'lg'
    compactLayout: false,
  },
  notifications: {
    paymentAlerts: true,
    overdueReminders: true,
    systemAnnouncements: false,
    reminderTime: "8:00 AM",
  },
  collection: {
    autoFillAmount: true,
    orFormat: "num", // 'num' = OR-YYYY-0000 | 'dash' = OR-0000
    showProofUpload: true,
    defaultPaymentPeriod: true,
  },
  map: {
    defaultFloor: "Ground Floor",
    highlightMyStalls: true,
    showTooltips: true,
  },
  about: {
    appName: "ARKIPAISI Market Management System",
    version: "v1.0.0-beta",
    market: "Pili Public Market (PPMB-23)",
    lastSync: "Mar 19, 2026 at 7:04 AM",
  },
};

const showSettings = (req, res) => {
  res.render("pages/collector/settings", { settings });
};

module.exports = { showSettings };
