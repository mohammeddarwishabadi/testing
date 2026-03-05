# MDA | Football Analysis

A complete full-stack football analytics platform using **Next.js + TailwindCSS** on the frontend and **Node.js + Express + MongoDB** on the backend.

## Brand-aligned design
- Background: `#0B0F14`
- Accent: `#00FF9C`
- Typography: Montserrat (headings), Open Sans (body)
- Style: dark, clean, data-driven dashboard UI inspired by your provided logo.

> The project includes a neon-green branded logo asset at `frontend/public/logo.svg` that matches the identity style. Replace it with your exact uploaded logo file if needed while keeping the same filename.

## Full folder structure

```text
.
├── backend
│   ├── .env.example
│   ├── package.json
│   ├── scripts
│   │   └── seed.js
│   └── src
│       ├── app.js
│       ├── config
│       │   └── db.js
│       ├── controllers
│       │   ├── authController.js
│       │   ├── postController.js
│       │   └── predictionController.js
│       ├── middleware
│       │   └── auth.js
│       ├── models
│       │   ├── Post.js
│       │   ├── Prediction.js
│       │   └── User.js
│       ├── routes
│       │   ├── authRoutes.js
│       │   ├── postRoutes.js
│       │   └── predictionRoutes.js
│       └── server.js
├── frontend
│   ├── app
│   │   ├── admin
│   │   │   ├── dashboard
│   │   │   │   └── page.js
│   │   │   └── login
│   │   │       └── page.js
│   │   ├── analysis
│   │   │   └── page.js
│   │   ├── blog
│   │   │   └── page.js
│   │   ├── data-viz
│   │   │   └── page.js
│   │   ├── predictions
│   │   │   └── page.js
│   │   ├── globals.css
│   │   ├── layout.js
│   │   └── page.js
│   ├── components
│   │   ├── ChartSection.js
│   │   ├── Footer.js
│   │   ├── MatchStatsCard.js
│   │   ├── Navbar.js
│   │   ├── PageIntro.js
│   │   ├── PostCard.js
│   │   └── PredictionCard.js
│   ├── lib
│   │   └── dummyData.js
│   ├── public
│   │   └── logo.svg
│   ├── jsconfig.json
│   ├── next.config.mjs
│   ├── package.json
│   ├── postcss.config.js
│   └── tailwind.config.js
└── README.md
```

## Frontend highlights
- Home page with hero/logo, featured analysis, latest predictions, recent stats.
- Analysis page with post + stats cards.
- Predictions page with probability bars and confidence scores.
- Data Visualization page with interactive Chart.js graphs.
- Blog page for long-form posts.
- Admin login + admin dashboard form for creating analysis posts.
- Reusable components: `Navbar`, `PostCard`, `MatchStatsCard`, `PredictionCard`, `ChartSection`, `Footer`.
- Framer Motion intro animation.

## Backend API
Base URL: `http://localhost:5000/api`

### Auth
- `POST /auth/login`

### Posts
- `GET /posts`
- `POST /posts` (admin token required)
- `PUT /posts/:id` (admin token required)
- `DELETE /posts/:id` (admin token required)

### Predictions
- `GET /predictions`
- `POST /predictions` (admin token required)
- `PUT /predictions/:id` (admin token required)
- `DELETE /predictions/:id` (admin token required)

## Database collections
### `Posts`
- title
- match
- teams
- stats
- xg
- shots
- possession
- analysis_text
- charts

### `Predictions`
- match
- teams
- win_probability
- expected_goals
- confidence

### `Users`
- email
- password
- role

## Dummy data & seed
`backend/scripts/seed.js` creates:
- Admin user: `admin@mda.com` / `admin123`
- Sample analysis post
- Sample prediction

## Run locally

### 1) Backend
```bash
cd backend
cp .env.example .env
npm install
npm run seed
npm run dev
```

### 2) Frontend
```bash
cd frontend
npm install
# optional if backend is not at default URL
# echo "NEXT_PUBLIC_API_URL=http://localhost:5000/api" > .env.local
npm run dev
```

Open: `http://localhost:3000`

## Notes
- Replace `frontend/public/logo.svg` with your exact provided logo export if you want pixel-perfect branding.
- Admin actions require JWT in localStorage (`mda_token`) set after login.
