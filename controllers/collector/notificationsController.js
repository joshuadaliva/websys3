const notifications = [
  {
    id: 0,
    type: "overdue",
    read: false,
    title: "Overdue Account: Carla Bautista",
    desc: "Stall #06 (GF Miscellaneous) has been overdue for 48 days. Outstanding balance: PHP 4,800. Consider following up personally.",
    time: "Today, 8:00 AM",
    tag: "overdue",
  },
  {
    id: 1,
    type: "payment",
    read: false,
    title: "Payment Received: Ana Lim",
    desc: "PHP 1,500 received via Maya for Stall #19 (SF Vegetable). OR-2026-0844 has been auto-issued. Account is now current.",
    time: "Today, 9:14 AM",
    tag: "payment",
  },
  {
    id: 2,
    type: "overdue",
    read: false,
    title: "Overdue Reminder: Pedro Carinderia",
    desc: "Stall #4 (GF Eatery) is 45 days overdue. Balance: PHP 1,600. An SMS reminder has been sent automatically.",
    time: "Today, 9:00 AM",
    tag: "overdue",
  },
  {
    id: 3,
    type: "payment",
    read: true,
    title: "Payment Received: Luis Villanueva",
    desc: "PHP 2,000 received via GCash for Stall #11 (SF Vegetable Section). OR-2026-0846 issued. Partial overdue balance remains.",
    time: "Today, 10:45 AM",
    tag: "payment",
  },
  {
    id: 4,
    type: "payment",
    read: true,
    title: "OR Assigned: Buko Fresh",
    desc: "OR-2026-0841 was assigned to the Maya payment from Stall #5 (SF Fruit). Payment of PHP 850 has been posted.",
    time: "Today, 11:00 AM",
    tag: "payment",
  },
  {
    id: 5,
    type: "system",
    read: true,
    title: "Monthly target at 21%",
    desc: "Your collection for March 2026 is PHP 14,800 out of a PHP 68,000 target. 12 collection days remain this month.",
    time: "Today, 7:30 AM",
    tag: "system",
  },
  {
    id: 6,
    type: "system",
    read: true,
    title: "Route updated by admin",
    desc: "Your assigned stall route has been updated. Stall #28 (SF Vegetable) has been added to your collection route starting April 2026.",
    time: "Yesterday, 4:15 PM",
    tag: "system",
  },
  {
    id: 7,
    type: "overdue",
    read: true,
    title: "Overdue Alert: Ganda Clothes",
    desc: "Stall #13 (GF RTW Section) has been overdue for 30 days. Outstanding balance: PHP 2,000. Escalated to supervisor.",
    time: "Yesterday, 8:00 AM",
    tag: "overdue",
  },
];

function getNotifCounts(notifList) {
  return {
    total: notifList.length,
    unread: notifList.filter((n) => !n.read).length,
  };
}

const showNotifications = (req, res) => {
  const counts = getNotifCounts(notifications);
  res.render("pages/collector/notifications", { notifications, counts });
};

module.exports = { showNotifications };
