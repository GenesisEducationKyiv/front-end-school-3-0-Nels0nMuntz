# 🎶 Track Manager

A modern and user-friendly music track management interface built with:

- **React**
- **TanStack Query**
- **TanStack Table**
- **shadcn/ui**
- **Tailwind CSS**
- **Vite**

The project follows the **Feature-Sliced Design (FSD)** methodology for scalable and maintainable code organization.

## ✨ Features

- 🎧 **Track List View** with pagination, sorting, filtering, and search
- ➕ **Create**, ✏️ **Edit**, and 🗑️ **Delete** tracks via modal forms
- 📁 **Audio file uploads** with validation and inline playback

## 🧪 Extra Tasks

- 🔁 **Bulk delete** tracks
- ⚡ **Optimistic UI updates**


## Optimization Features

- **Lazy Loading**  
  Non-critical components such as dialogs are loaded on demand, reducing initial bundle size and speeding up load times.

- **Bundle Analyzer**  
  Integrated [`vite-bundle-analyzer`](https://github.com/btd/vite-plugin-bundle-analyzer) to visualize and inspect bundle content for optimization.

- **Source Maps**  
  Optional source maps for easier debugging. Enable by adding `VITE_ENABLE_SOURCEMAP=true` to the `.env` file.
