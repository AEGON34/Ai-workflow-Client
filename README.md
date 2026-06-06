# Writeflow AI

**Live Link**: [https://writeflow-ai-app.vercel.app/](https://writeflow-ai-app.vercel.app/)

Writeflow AI is a modern, AI-powered web application designed to streamline content creation workflows. Built with cutting-edge web technologies, it provides a seamless and intuitive environment for users to generate, manage, and edit content using the power of Artificial Intelligence.

## 🚀 Features

- **AI-Powered Editor**: An intelligent workspace to write, edit, and enhance content with AI assistance.
- **Workflow Templates**: Access and utilize predefined templates to jumpstart your writing processes.
- **User Dashboard**: A comprehensive dashboard to manage your generated items, projects, and personal settings.
- **Authentication**: Secure user authentication and session management handled via Next-Auth.
- **Responsive Design**: A fully responsive interface that looks great on desktop, tablet, and mobile devices, featuring both Light and Dark modes.
- **Admin Panel**: Dedicated administrative tools for platform management.

## 🛠️ Tech Stack

This project is built using a modern React ecosystem:

- **Framework**: [Next.js](https://nextjs.org/) (App Router, v14)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/) & [shadcn/ui](https://ui.shadcn.com/)
- **State Management**: [Zustand](https://zustand-demo.pmnd.rs/)
- **Authentication**: [Next-Auth](https://next-auth.js.org/)
- **Form Handling**: [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)
- **Data Fetching**: [Axios](https://axios-http.com/)
- **Charts**: [Recharts](https://recharts.org/)

## 📂 Project Structure

```text
src/
├── app/          # Next.js App Router (Pages, Layouts, API Routes)
│   ├── (auth)/   # Authentication pages (Login/Register)
│   ├── admin/    # Admin dashboard pages
│   ├── dashboard/# User dashboard
│   ├── editor/   # Core AI editor interface
│   ├── explore/  # Explore templates and community items
│   └── templates/# Template management
├── components/   # Reusable UI components (shadcn, custom components)
├── hooks/        # Custom React hooks
├── lib/          # Utility functions and library configurations
├── store/        # Zustand global state management (e.g., authStore)
├── styles/       # Global CSS (globals.css)
└── types/        # TypeScript type definitions
```

## 💻 Getting Started Locally

To run the project on your local machine, follow these steps:

1. **Clone the repository** (if applicable):
   ```bash
   git clone <repository-url>
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env.local` file in the root directory and add the necessary environment variables (e.g., Database URLs, Next-Auth secrets, API keys).

4. **Run the development server**:
   ```bash
   npm run dev
   ```

5. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## 📜 Scripts

- `npm run dev`: Starts the Next.js development server.
- `npm run build`: Builds the application for production.
- `npm run start`: Starts the Next.js production server.
- `npm run lint`: Runs ESLint to check for code quality issues.
