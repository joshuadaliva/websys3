# ARKIPAISI — Public Market Stall Rental Management System

A web-based management system for public market stall rentals built with Express.js, EJS, and JS. The platform serves three user roles — Admin, Collector, and Vendor — each with a dedicated portal for managing stalls, payments, and operations at the ARKIPAISI Public Market.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Routes](#routes)
  - [Public Routes](#public-routes)
  - [Admin Routes](#admin-routes)
  - [Collector Routes](#collector-routes)
  - [Vendor Routes](#vendor-routes)
- [Core Functionalities](#core-functionalities)
  - [Admin Portal](#admin-portal)
  - [Collector Portal](#collector-portal)
  - [Vendor Portal](#vendor-portal)
- [Shared UI Components](#shared-ui-components)

---

## Features

- Public-facing landing page with stall listings, application form, and application tracking
- Admin dashboard for managing stalls, vendors, payments, applications, and reports
- Collector portal for recording payments, managing assigned stalls, and generating monthly summaries
- Vendor portal for viewing payment history, submitting inquiries, and managing profile/settings
- Role-based sidebar navigation and shared header/layout partials
- Responsive design with light/dark theme toggle
- Custom 404 page with animated stall illustration

---

## Tech Stack

| Layer          | Technology                          |
| -------------- | ----------------------------------- |
| Runtime        | [Node.js](https://nodejs.org/)      |
| Framework      | [Express.js](https://expressjs.com/) |
| View Engine    | [EJS](https://ejs.co/)             |
| Dev Server     | [Nodemon](https://nodemon.io/)      |

---

## Project Structure

```
websys3/
├── app.js                        # Application entry point
├── package.json                  # Dependencies and scripts
├── controllers/
│   ├── admin/                    # Admin controller modules
│   │   ├── authController.js
│   │   ├── dashboardController.js
│   │   ├── stallManagementController.js
│   │   ├── vendorManagementController.js
│   │   ├── applicationManagementController.js
│   │   ├── paymentManagementController.js
│   │   ├── archivingController.js
│   │   ├── notificationController.js
│   │   ├── reportsController.js
│   │   └── settingsController.js
│   ├── collector/                # Collector controller modules
│   │   ├── authController.js
│   │   ├── dashboardController.js
│   │   ├── myStallsController.js
│   │   ├── paymentsController.js
│   │   ├── monthlySummaryController.js
│   │   ├── notificationsController.js
│   │   ├── profileController.js
│   │   └── settingsController.js
│   └── vendor/                   # Vendor controller modules
│       ├── authController.js
│       └── vendorPortalController.js
├── routes/
│   ├── adminRoutes.js            # Admin route definitions
│   ├── collectorRoutes.js        # Collector route definitions
│   └── vendorRoutes.js           # Vendor route definitions
├── middlewares/
│   └── notFound.js               # 404 handler middleware
├── views/
│   ├── index.ejs                 # Public landing page
│   ├── 404.ejs                   # Custom 404 page
│   ├── partials/
│   │   ├── header.ejs            # Shared top navigation bar
│   │   └── sidebar.ejs           # Role-based sidebar navigation
│   ├── admin/                    # Admin view templates
│   ├── collector/                # Collector view templates
│   └── vendor/                   # Vendor view templates
└── public/
    ├── css/                      # Stylesheets (per-role + shared)
    │   ├── colors.css
    │   ├── index.css
    │   ├── admin/
    │   ├── collector/
    │   └── vendor/
    └── js/                       # Client-side scripts (per-role + shared)
        ├── index.js
        ├── admin/
        ├── collector/
        └── vendor/
```

---

## Prerequisites

- Node.js (v18 or later recommended)
- npm (comes with Node.js)

---

## Installation

1. Install dependencies

   ```bash
   npm install
   ```

   This installs the following packages:

   | Package   | Purpose                              |
   | --------- | ------------------------------------ |
   | express   | Web framework                        |
   | ejs       | Templating engine                    |
   | mongoose  | MongoDB ODM    for future development|                      
   | multer    | Multipart form / file upload handler |
   | nodemon   | Auto-restart dev server on changes   |

---

## Running the Application

Development mode (auto-restarts on file changes):

```bash
npm start
```

This runs `nodemon app.js` as defined in `package.json`.

Manual start (without auto-restart):

```bash
node app.js
```

The server starts on port 5000 by default. Open your browser and navigate to:

```
http://localhost:5000
```

---

## Routes

### Public Routes

| Method | Path | Description |
| ------ | ---- | ----------- |
| `GET`  | `/`  | Landing page — browse available stalls, view the application process, submit a pre-screening form, track an application, and read the FAQ. |

Any unmatched route returns the custom 404 page.

---

### Admin Routes

All admin routes are prefixed with `/admin`.

| Method | Path                              | Controller                        | Description                                                                      |
| ------ | --------------------------------- | --------------------------------- | -------------------------------------------------------------------------------- |
| `GET`  | `/admin/login`                    | `authController.showLoginPage`              | Admin login page.                                                                |
| `GET`  | `/admin/dashboard`                | `dashboardController.showDashboard`         | Admin dashboard with market overview and key metrics.                             |
| `GET`  | `/admin/stall-management`         | `stallManagementController.showStallManagement` | Interactive stall map with floor plan, stall details, payment status, and posting controls. |
| `GET`  | `/admin/vendor-management`        | `vendorManagementController.showVendorManagement` | Vendor directory with status summary (active, suspended, expired, terminated).    |
| `GET`  | `/admin/application-management`   | `applicationManagementController.showApplicationManagement` | Review and manage incoming vendor applications.                                  |
| `GET`  | `/admin/payment-management`       | `paymentManagementController.showPaymentManagement` | Oversee all payment records and transactions.                                    |
| `GET`  | `/admin/archiving`                | `archivingController.showArchivingPage`     | Archive management for historical records.                                       |
| `GET`  | `/admin/notification-management`  | `notificationController.showNotificationManagement` | Manage and send notifications to collectors/vendors.                             |
| `GET`  | `/admin/reports`                  | `reportsController.showReports`             | Generate and view market reports.                                                |
| `GET`  | `/admin/settings`                 | `settingsController.showSettings`           | Admin system settings.                                                           |

---

### Collector Routes

All collector routes are prefixed with `/collector`.

| Method | Path                         | Controller                              | Description                                                                              |
| ------ | ---------------------------- | --------------------------------------- | ---------------------------------------------------------------------------------------- |
| `GET`  | `/collector/login`           | `authController.showLoginPage`                    | Collector login page.                                                                    |
| `GET`  | `/collector/dashboard`       | `dashboardController.showDashboard`               | Collector dashboard — daily collection stats, recent collections, overdue accounts, tasks, activity feed, and collection progress. |
| `GET`  | `/collector/my-stalls`       | `myStallsController.showMyStalls`                 | Interactive stall map showing all assigned stalls with payment status and stall details.  |
| `GET`  | `/collector/payments`        | `paymentsController.showPayments`                 | Payment management — confirm online payments, record cash payments, view overdue accounts, and browse payment history. |
| `GET`  | `/collector/monthly-summary` | `monthlySummaryController.showMonthlySummary`     | Monthly collection summary with transaction breakdown, outstanding accounts, and totals.  |
| `GET`  | `/collector/notifications`   | `notificationsController.showNotifications`       | View notifications (overdue alerts, payment confirmations, system announcements).          |
| `GET`  | `/collector/profile`         | `profileController.showProfile`                   | Collector profile — personal info, employment details, assignment info, performance stats, and activity log. |
| `GET`  | `/collector/settings`        | `settingsController.showSettings`                 | Collector settings — appearance, notification preferences, collection defaults, and map options. |

---

### Vendor Routes

All vendor routes are prefixed with `/vendor`.

| Method | Path                  | Controller                               | Description                                                                                  |
| ------ | --------------------- | ---------------------------------------- | -------------------------------------------------------------------------------------------- |
| `GET`  | `/vendor/login`       | `authController.showLoginPage`                     | Vendor login page.                                                                           |
| `GET`  | `/vendor/dashboard`   | `vendorPortalController.showDashboard`             | Vendor dashboard — stall info, balance due, payment stats, recent payments, open inquiries, and market notices. |
| `GET`  | `/vendor/payments`    | `vendorPortalController.showPayments`              | Full payment history for the vendor's stall, including paid/unpaid status and payment methods. |
| `GET`  | `/vendor/inquries`    | `vendorPortalController.showInquiry`               | Inquiry/ticket system — view, create, and reply to support tickets (payment concerns, stall maintenance, contract renewal). |
| `GET`  | `/vendor/profile`     | `vendorPortalController.showProfile`               | Vendor profile — personal details, stall assignment, contract info, and payment/inquiry stats. |
| `GET`  | `/vendor/settings`    | `vendorPortalController.showSettings`              | Vendor settings — appearance, notification toggles, privacy options, and app info.            |

---

## Core Functionalities

### Admin Portal

The Admin portal provides full control over market operations:

- Dashboard — High-level overview of the entire market with key metrics and quick actions.
- Stall Management — Visual, interactive floor-plan map of all market stalls across multiple floors and sections (Eatery, RTW, Service, Miscellaneous/Pasalubong, Vegetables, Fruits, Ukay-Ukay, Eggs). Each stall shows its payment status (`paid`, `partial`, `overdue`, `vacant`), assigned vendor, monthly rate, payment history, and contract expiry. Admins can toggle whether a stall is publicly posted for application.
- Vendor Management — Complete vendor directory with profile details (contact info, stall assignment, contract dates, monthly rate, outstanding balance). Vendors are categorized by status: `active`, `suspended`, `expired`, or `terminated`. Summary statistics are computed from live data.
- Application Management — Review incoming pre-screening applications submitted through the public landing page.
- Payment Management — Monitor and manage all payment transactions across the market.
- Archiving — Access and manage archived records.
- Notification Management — Create and manage notifications sent to collectors and vendors.
- Reports — Generate operational and financial reports.
- Settings — Configure system-wide preferences.

### Collector Portal

The Collector portal is designed for market revenue collectors:

- Dashboard — Real-time collection statistics for the day: total collected amount, receipts issued, overdue account count, and assigned stall count. Includes a recent collections table, overdue accounts list, collection progress by payment method (Cash, GCash, Maya), a task checklist, activity feed, and a calendar view.
- My Stalls — Interactive stall map highlighting the collector's assigned stalls. Each stall shows vendor info, payment status, rate, balance, and payment history. Stalls are organized by floor and section. Summary stats (total assigned, paid, overdue, partial, vacant) are calculated dynamically.
- Payments — Three-tab payment workflow:
  - Online Payments — Queue of pending GCash/Maya payments awaiting confirmation, plus already-confirmed online payments.
  - Cash Collection — Record walk-in cash payments with auto-generated Official Receipt (OR) numbers. Includes a cash receipts log for the day.
  - Payment History — Searchable log of all posted transactions with OR numbers, amounts, methods, and timestamps.
  - Overdue Accounts — List of vendors with outstanding balances, days overdue, and overdue amounts.
- Monthly Summary — Month-by-month collection report with transaction tables, outstanding accounts, and totals. Supports switching between months via a dropdown.
- Notifications — Notification center with overdue alerts, payment received confirmations, and system messages. Tracks read/unread status with badge counts.
- Profile — Personal information, employment details (position, department, hire date, supervisor), stall assignment summary, performance metrics (collection rate, ORs issued, on-time rate), and a recent activity log.
- Settings — Configurable preferences for appearance (theme, font size, compact layout), notification types and reminder time, collection defaults (auto-fill amount, OR format, proof upload), and map display options.

### Vendor Portal

The Vendor portal gives stall tenants access to their account:

- Dashboard — At-a-glance view of the vendor's stall details (stall number, location, type, size, monthly rate, contract dates, reference code, assigned collector), current balance due, total paid, recent payment table, open inquiry count, and market office notices.
- Payments — Complete payment ledger for the vendor's stall. Each row shows the billing period, OR number, amount, payment method (Cash, GCash, Maya), issuer (collector name or auto-posted), date, and status (`paid` / `unpaid`). Payment stats (balance due, total paid, count of paid/unpaid periods) are computed automatically.
- Inquiries — Ticket-based support system. Vendors can submit inquiries under categories like Payment Concern, Stall Condition, or Contract Renewal. Each ticket has a threaded message history between the vendor and the Market Office. Tickets are tracked by status: `open`, `waiting`, or `resolved`.
- Profile — Vendor's personal details, stall assignment, contract information, and aggregate payment/inquiry statistics.
- Settings — Appearance preferences (theme, language), notification toggles (payment reminders, inquiry replies, market announcements, contract expiry alerts), privacy options (show history to collector, two-factor auth), and application version info.

---

## Shared UI Components

- Header (`views/partials/header.ejs`) — Top navigation bar shared across all portals. Displays the app name, breadcrumb (role-aware), search bar (admin/collector only), theme toggle, notification bell, and user avatar pill with initials.
- Sidebar (`views/partials/sidebar.ejs`) — Role-based sidebar navigation. Renders different menu items depending on the user's role (`admin`, `collector`, or `vendor`). Highlights the currently active route. Includes badge counts for items like pending applications or unread notifications.
- 404 Page (`views/404.ejs`) — Custom "This Stall Is Empty" 404 page with an animated market stall illustration, particle effects, and navigation links back to the landing page.
