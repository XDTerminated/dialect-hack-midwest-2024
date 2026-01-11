# Dialect - Universal Translator

A universal translator platform designed to break down language barriers between generations, regions, and online communities.

## Repository Structure

```
├── apps/
│   ├── frontend/    # Next.js 14 frontend
│   └── backend/     # Django REST API backend
├── .gitignore
└── README.md
```

## Development

### Frontend
```bash
cd apps/frontend
npm install
npm run dev
```
Frontend will be available at http://localhost:3000

### Backend
```bash
cd apps/backend
python -m venv .venv
source .venv/bin/activate  # On Windows: .venv\Scripts\activate
pip install -r requirements.txt
python manage.py runserver
```
Backend API will be available at http://localhost:8000

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
