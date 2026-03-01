# Style & Sweets

A fashion, watches, and confectionery combo gifting platform. Shop individual products or curated combo boxes for every occasion — date nights, corporate gifts, festivals, and more.

## Tech Stack

- **Frontend:** React + Vite + Custom CSS
- **Backend:** Node.js + Express
- **Database:** MongoDB + Mongoose
- **Auth:** JWT
- **Testing:** Jest + Supertest + mongodb-memory-server
- **CI/CD:** GitHub Actions
- **Containerization:** Docker + Docker Compose
- **Deployment:** AWS EC2

## Project Structure

```
shopsmart/
├── server/          # Express API
├── client/          # React frontend
├── scripts/         # Deployment scripts
├── .github/         # CI workflows + Dependabot
└── docker-compose.yml
```

## Getting Started

### Prerequisites

- Node.js 18+
- MongoDB (local or Docker)

### Backend

```bash
cd server
npm install
cp .env.example .env
npm run dev
```

### Frontend

```bash
cd client
npm install
npm run dev
```

### Run Tests

```bash
cd server
npm test
```

### Docker

```bash
docker-compose up --build
```

## Features

- User registration and login with JWT
- Product browsing with category and price filters
- Curated combo experience boxes (Date Night, Office Elite, Festive Glam)
- Shopping cart with quantity management
- Checkout with order placement
- Order history tracking
- Admin dashboard for product and order management
- Reward points system
