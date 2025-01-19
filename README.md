# Notion Clone

> A modern, feature-rich clone of Notion built with the latest web technologies. This application offers seamless content creation and management with features such as nested pages, real-time editing, and customizable themes. A demo link to try out the application is included below.


## Demo
[Notion Clone Demo](https://notes-taking-app-beta.vercel.app/)

## Tech Stack

- **Next.js:** Framework for building high-performance React applications.
- **Clerk:** Authentication solution for seamless GitHub login integration.
- **Tailwind CSS:** Utility-first CSS framework for responsive and modern design.
- **shadcn/ui:** Reusable components and design system for rapid UI development.
- **Convex:** Backend as a service for real-time, scalable data handling.
- **BlockNote:** Rich text editing toolkit for intuitive and flexible content creation.

## Features

1. **Authentication:** Log in securely using GitHub.
2. **Dashboard:** Centralized view for managing your pages and settings.
3. **Light/Dark Mode:** Toggle between light and dark themes.
4. **Page Management:**
   - Create, edit, and delete pages.
   - Publish pages for public access.
   - Set pages as private for restricted access.
   - Restore deleted pages from the trash.
5. **Nested Pages:** Organize pages within pages for better hierarchy.
6. **Real-Time Editing:** Changes are reflected instantly across devices.
7. **Customizable Themes:** Personalize the look and feel of the application.
8. **Intuitive UI:** Designed for ease of use and functionality.

## Getting Started
Follow these steps to clone and run the project locally:

### Prerequisites
- **Node.js:** Ensure you have Node.js (v16 or newer) installed on your system.
- **Git:** Version control system to clone the repository.

### Installation
1. Clone the repository:
   ```bash
    git clone https://github.com/danekkkk/notion-clone.git
    cd notion-clone
    ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
- Create a `.env.local` file in the root directory.
- Add the following variables with appropriate values:
  ```bash
  CONVEX_DEPLOYMENT=<YOUR_CONVEX_DEPLOYMENT>
  NEXT_PUBLIC_CONVEX_URL=<YOUR_CONVEX_URL>
  NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=<YOUR_CLERK_PUBLIC_KEY>
  CLERK_SECRET_KEY=<YOUR_CLERK_SECRET_KEY>
  EDGE_STORE_ACCESS_KEY=<YOUR_EDGE_STORE_ACCESS_KEY>
  EDGE_STORE_SECRET_KEY=<YOUR_EDGE_STORE_SECREC_KEY>
  ```
- Run the development server:
  ```bash
  npx convex docs
  npm run dev
  ```
- Open the application:
Navigate to `http://localhost:3000` in your browser to view the app.

## Contributions
Contributions are welcome! Feel free to submit issues, feature requests, or pull requests to enhance the project.

## Contact
For questions or feedback, please reach out to @danekkkk.
