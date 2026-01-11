# Dialect - Universal Translator

A universal translator platform designed to break down language barriers between generations, regions, and online communities.

## Repository Structure

```
├── apps/
│   ├── frontend/    # Next.js 14 frontend
│   └── backend/     # Django REST API backend
├── turbo.json       # Turborepo configuration
├── pnpm-workspace.yaml
└── package.json     # Root workspace config
```

## Quick Start (Turborepo + pnpm)

**Run both frontend and backend simultaneously:**
```bash
pnpm install    # Install all dependencies
pnpm dev        # Start both apps with Turborepo
```

- Frontend: http://localhost:3000
- Backend: http://localhost:8000

## Development

### Run Individual Apps

```bash
# Frontend only
pnpm frontend:dev

# Backend only
pnpm backend:dev
```

### First-Time Backend Setup

Before running the backend, set up Python dependencies:
```bash
cd apps/backend
python3 -m venv .venv
source .venv/bin/activate  # On Windows: .venv\Scripts\activate
pip install -r requirements.txt
```

### Build

```bash
pnpm build      # Build all apps
```

## Environment Variables

### Frontend (`apps/frontend/.env.local`)
```
NEXT_PUBLIC_API_URL=http://localhost:8000
```

### Backend (`apps/backend/.env`)
```
MISTRAL_API_KEY=your_key_here
DJANGO_SECRET_KEY=your_secret_key_here
DEBUG=True
```

## Deployment (Vercel)

This monorepo deploys as **two separate Vercel projects** from the same repository.

### 1. Deploy Frontend

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import this repository
3. Set **Root Directory** to `apps/frontend`
4. Framework will auto-detect as Next.js
5. Add environment variable:
   - `NEXT_PUBLIC_API_URL` = your backend Vercel URL (e.g., `https://dialect-backend.vercel.app`)
6. Deploy

### 2. Deploy Backend

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import this **same repository** again
3. Set **Root Directory** to `apps/backend`
4. Add environment variables:
   - `MISTRAL_API_KEY` = your Mistral API key
   - `DJANGO_SECRET_KEY` = a secure random string
   - `DEBUG` = `False`
5. Deploy

### After Deployment

Update the frontend's `NEXT_PUBLIC_API_URL` environment variable with the actual backend URL, then redeploy the frontend.

---

# Hack Midwest 2024
<br /><br />


## Getting Started
Ensure you have reviewed the [Rules & FAQ](https://hackmidwest.com/#faq)
1. Clone this repository and rename to the name of your app or idea
2. Make it **private**
3. Add pr@kcitp.com as a user
4. Populate the Team, App & Challenges info below and update as needed

<br /><br />

## Who's on your team?
*List the full names,  email address & Github username of your teammates*

1.   **Sayam Gupta**  || **sg8nf@mst.edu** ||
2.   **Kevin Tang**  || **k.y.tang@wustl.edu** || 
3.   **Noah Wolk**  || **n.j.wolk23@wustl.edu** ||
4.   **Demi Babalola**  || **b.demi@wustl.edu** ||
5.   **Andrew Phillip Aviado**  || **aviado@wustl.edu** ||

<br /><br />


## What is the name of your App?

<br />Dialect<br />
## What does your app do?

<br />Our app is a universal translator platform designed to break down language barriers, whether between generations, regions, or even online communities. It’s not just about translating between traditional languages, but also about capturing dialects, slang, and unique subcultural expressions. In today’s fast-paced digital world, words and their meanings evolve rapidly—emojis, shorthand, and new terms constantly emerge. Our platform aims to ensure that everyone can understand and engage with these evolving forms of communication, no matter where they’re from or what generation they belong to. Whether it's translating slang from social media or decoding business jargon, our app allows users to bridge communication gaps seamlessly. In short, we give people the tools to understand new perspectives, stay connected, and foster better communication across different cultures, generations, and communities.<br />


## What challenges are you building for? SELECT ALL THAT APPLY
*See hackmidwest.com/#prizes for challenge details*
- [ ]  Pinata Challenge
- [ ]  Pinata AI Challenge
- [ ]  Pinata Enterprise Challenge
- [x]  AWS Bedrock Challenge
- [ ]  Red Hat | Intel AI Challenge
- [ ]  Zoom Challenge
- [ ]  USDA Challenge
- [ ]  brAIn Rot Challenge


<br /><br />
