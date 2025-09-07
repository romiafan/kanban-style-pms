# Kanban PMS Frontend

This is the React frontend for the Kanban-style Project Management System.

## Folder Structure

- `src/components/` — Reusable UI components (Navbar, TaskCard, Column, ProjectCard)
- `src/pages/` — Main pages (Dashboard, Login, Register, ProjectView)
- `src/services/` — API logic (axios calls)
- `src/assets/` — Static assets (images, etc.)

## Sensitive Data

- All secrets and API URLs are stored in `.env` (which is gitignored).

## Setup

1. Install dependencies: `npm install`
2. Set up `.env` with your backend API URL.
3. Run: `npm run dev`

## Contributing

- Keep components small and focused.
- Use clear prop names and add comments.
- Avoid hardcoding sensitive info.
- Add new components/pages in their respective folders.

## Expansion

- To add new features, create new components in `src/components/` and new pages in `src/pages/`.
- API calls should go in `src/services/`.

---

For questions, see the backend README or ask the project maintainer.
