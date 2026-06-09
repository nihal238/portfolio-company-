# Softonex Solutions — Multi-Page React App

A fully structured, multi-page React application for Softonex Solutions.

## Folder Structure

```
softonex-app/
├── index.html                  # HTML entry point
├── package.json                # Dependencies & scripts
├── vite.config.js              # Vite configuration
└── src/
    ├── main.jsx                # React root mount
    ├── App.jsx                 # Router — maps paths to pages
    ├── theme.js                # Design tokens, colors, global CSS
    ├── data/
    │   └── index.js            # All site data (projects, team, jobs, etc.)
    ├── components/
    │   ├── Layout.jsx          # Navbar + Footer (shared across all pages)
    │   └── UI.jsx              # Reusable components: Reveal, Card, Button, Tag, etc.
    └── pages/
        ├── Home.jsx            # Landing page — hero, services preview, portfolio, testimonials
        ├── About.jsx           # Company story, milestones, values, team preview
        ├── Services.jsx        # Full services list, delivery process, tech stack
        ├── Portfolio.jsx       # Filterable project grid + case study modal
        ├── Team.jsx            # Leadership grid + culture section
        ├── Blog.jsx            # Featured post + article grid
        ├── Careers.jsx         # Job listings (accordion) + perks
        └── Contact.jsx         # Contact form, office info, FAQ accordion
```

## Pages

| Page       | Route        | Description                                             |
|------------|--------------|--------------------------------------------------------|
| Home       | `/`          | Hero, stats, services, featured work, testimonials, CTA |
| About      | `/about`     | Company story, timeline, values, team preview           |
| Services   | `/services`  | 6 services, delivery process, full tech stack           |
| Portfolio  | `/portfolio` | Filterable grid with case study modal pop-ups           |
| Team       | `/team`      | Leadership cards (click to expand bio) + culture perks  |
| Blog       | `/blog`      | Featured article + article card grid                    |
| Careers    | `/careers`   | 6 job listings with expandable details + apply CTA      |
| Contact    | `/contact`   | Form, two offices, FAQ accordion                        |

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Navigation

The app uses a lightweight hash-based router built into `App.jsx` (no external routing library needed). Navigation is handled via the `navigate(path)` function passed as a prop to every page.

To add a new page:
1. Create `src/pages/NewPage.jsx`
2. Add the route to the `ROUTES` object in `App.jsx`
3. Add the nav item to `NAV_ITEMS` in `src/data/index.js`
