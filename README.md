
# 📊 Dashboard UI

A **responsive dashboard UI** built using **React**, **shadcn/ui**, **Tailwind CSS**, and **React Router** for a frontend developer test assignment. The project features a collapsible sidebar for mobile, a dynamic data table with filtering/sorting, and responsive layouts optimized for all screen sizes.

---

## 🚀 Features

* **🔗 Sidebar Navigation**

  * Uses `sidebar-07` component from `shadcn/ui`
  * **Desktop:** Fixed sidebar with navigation links
  * **Mobile:** Hamburger menu toggle, close button, and overlay for smooth UX

* **📋 Data Table**

  * Based on `dashboard-01` layout
  * Displays dummy user data (ID, name, email, role, status)
  * Supports **filtering** by name or email
  * **Sorting** on all columns (ascending/descending)
  * Includes a **loading skeleton** for enhanced UX

* **📱 Responsive Design**

  * Fully responsive using Tailwind CSS utility classes

* **🔀 Routing**

  * Implements `React Router` to navigate between **Dashboard** and **Settings** pages

* **🧼 Clean Codebase**

  * Organized folder structure
  * Modular and reusable components

---

## 🛠️ Installation

### Prerequisites

Ensure you have Node.js (v18 or later) and npm installed:

```bash
node -v
npm -v
```

---

### 1. Create a New Vite Project

```bash
npm create vite@latest dashboard-ui -- --template react
cd dashboard-ui
```

---

### 2. Install Core Dependencies

```bash
npm install react@18.2.0 react-dom@18.2.0 react-router-dom@6.22.0
```

---

### 3. Install and Configure Tailwind CSS

```bash
npm install -D tailwindcss@3.4.1 postcss@8.4.33 autoprefixer@10.4.17
npx tailwindcss init -p
```

**Update `tailwind.config.js`:**

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

**Add Tailwind directives to `src/index.css`:**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

### 4. Install `shadcn/ui` and Components

```bash
npx shadcn@latest init
```

**Add Required Components:**

```bash
npx shadcn@latest add sidebar-07
npx shadcn@latest add dashboard-01
npx shadcn@latest add button
npx shadcn@latest add table
npx shadcn@latest add skeleton
```

**Install Additional Dependencies:**

```bash
npm install @radix-ui/react-slot@1.0.2 class-variance-authority@0.7.0 lucide-react@0.441.0 tailwindcss-animate@1.0.7
```

---

### 5. Project Structure

```
src/
├── assets/
├── components/  
├── pages/
│   ├── Dashboard.jsx
│   ├── Settings.jsx
│    ├── Sidebar.jsx
│    ├── DataTable.jsx
│    ├── LoadingSkeleton.jsx
├── App.jsx
├── main.jsx
├── index.css
```

---

### 6. Configure Vite

Ensure `vite.config.js` includes the React plugin:

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
```

---

### 7. Enable Path Aliases (Optional)

Create a `jsconfig.json` file in the root for absolute imports:

```json
{
  "compilerOptions": {
    "baseUrl": "src",
    "paths": {
      "@/*": ["*"]
    }
  }
}
```

---

## 📸 Screenshots

(https://github.com/MaheshMaddela123/shadcn-dashboard/issues/1#issue-3070270976)

