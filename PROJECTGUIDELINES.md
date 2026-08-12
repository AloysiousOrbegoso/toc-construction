# Guidelines

**A. User / Client Side (Front-End)**

Focuses on end-user experience, ease of navigation, accessibility, and primary workflow completion.

**Account & Profile Management**

- User registration/sign-up
  - Email
  - Social Logins / OAuth
- Profile setup and management
  - Avatar
  - Contact information
  - Preferences
- Password reset and security settings
  - 2FA / MFA

**Core User Workflows**

- **Search & Discovery**
  - Search bar with filters, categories, and sorting
  - Examples: date, popularity, price, status
- **Interactive Actions**
  - Primary actions based on the platform type
  - Examples: submitting requests, placing orders, booking services, creating content
- **Dashboard / Feed**
  - Real-time updates
  - Personal status tracking
  - Activity history

**Communication & Notifications**

- In-app notifications
- Email / SMS alerts
- Direct messaging
- Support chat
- Commenting system

**Transactions & Billing** *(if applicable)*

- Payment gateway integration
  - Stripe
  - PayPal
  - GCash
  - Maya
- Invoice generation
- Order tracking
- Transaction history


**B. Admin Side (Back-Office / Dashboard)**

Focuses on operational control, system monitoring, content moderation, and user management.

**User Management (RBAC — Role-Based Access Control)**

- View, search, and filter user accounts
- Ban, suspend, verify, or activate accounts
- Role assignment
  - Super Admin
  - Editor
  - Moderator
  - Support Agent

**Content & Data Moderation**

- CMS / CRUD operations
  - Create
  - Read
  - Update
  - Delete
- Manage content, listings, or catalog items
- Approval workflows for user-submitted content
- Management of flagged items

**Analytics & Operational Reporting**

- KPI Dashboard
  - Daily Active Users (DAU)
  - Revenue
  - System Health
  - Conversion Rates
- Exportable reports
  - CSV
  - PDF
  - Excel

**System Settings & Configuration**

- Platform configuration
  - Feature flags
  - Maintenance mode
  - System-wide banners
- Audit logs
  - Tracking admin actions
  - Security and compliance

**Customer Support & Ticket Resolution**

- View and respond to user support tickets
- Manage refund requests
- Respond to user inquiries


**C. System-Wide & Technical Functionalities**

**Security & Compliance**

- SSL encryption
- GDPR / privacy compliance
- Rate limiting
- Data encryption at rest

**API & Integrations**

- Third-party integrations
  - CRM
  - Payment gateways
  - Marketing tools
  - Email service providers

**Automations**

- Scheduled jobs / cron jobs
- Automated email sequences
- Transactional notifications


# What's Handed Over

**Homepage**

- `about.html` - About Us page
- `careers.html` - Careers and job openings
- `contact.html` - Contact information and form
- `projects.html` - Showcase of projects


# Remaining Tasks

To complete the application functionality, the following tasks still need to be done:

- **Backend Development**
  - Set up a Node.js and Express server environment.
  - Configure environment variables (`.env`) for ports and database connection strings.
  - Choose and connect a database (e.g., MongoDB or PostgreSQL).
  - Create schemas for contact form submissions, job applications, and project lists.
  - Create `POST /api/contact` for contact form data.
  - Create `POST /api/careers` for job applications.
  - Create `GET /api/projects` to fetch dynamic project listings.

- **Frontend Development**
  - Ensure that the website is fully responsive across all devices and screen sizes.