# FeastQR: Open Source SaaS Online Menu System 🌐

<a href="https://www.producthunt.com/posts/feastqr?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-feastqr" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=425852&theme=light" alt="FeastQR - Free Open Source Saas For Restaurants | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54" /></a>

## Overview 📖

FeastQR is a cutting-edge, open-source SaaS online menu system for restaurants. Based on this [template](https://github.com/jakubczarnowski/t3-starter-supabase-i18n/blob/main/README.md?plain=1). Made by [Tryhards Inc.](https://tryhards.space/)

---

## Key Features 🔑

- **QR Code Generation**: Facilitate ordering with unique QR codes.
- **Real-time Menu and Price Management**: Update menus and prices as needed.
- **Ready to print pdf templates**: Customize your own Menu QR Card!
- **User Authentication and Dashboard**
- **Multi-language support (i18n)**
- **Image upload and cropping**
- **Payment integration (Lemon Squeezy)**
- **Responsive design with Tailwind CSS**
- **Supabase backend for data and authentication**

---

## Technology Stack 💻

- **Frontend**: Next.js 14 with App Directory
- **Backend**: Supabase for Auth, Migrations, Multiple Environments, CI/CD, and Storage
- **Payments**: Integration with LemonSqueezy
- **Data Handling**: TRPC, Prisma, and Postgres
- **UI**: Tailwind CSS and Shadcn UI
- **Deployment**: Edge Ready with Vercel Edge
- **Analytics**: Umami
- **Internalization**: i18next

For more details, visit [FeastQR](https://feastqr.com).

---

## Project Structure

```
.
├── components.json
├── next.config.mjs
├── package.json
├── postcss.config.cjs
├── prettier.config.mjs
├── tailwind.config.ts
├── tsconfig.json
├── prisma/
│   └── schema.prisma
├── public/
│   └── images/
├── scripts/
│   └── update-image-urls.js
├── src/
│   ├── env.mjs
│   ├── middleware.ts
│   ├── app/
│   │   ├── error.tsx
│   │   ├── layout.tsx
│   │   ├── not-found.tsx
│   │   └── (auth)/
│   ├── assets/
│   ├── components/
│   ├── i18n/
│   ├── pageComponents/
│   ├── providers/
│   ├── server/
│   ├── shared/
│   ├── styles/
│   ├── trpc/
│   └── utils/
├── supabase/
│   ├── config.toml
│   ├── seed.sql
│   └── migrations/
└── .env
```

### Key Folders

- **src/app/**: Next.js app directory, including routing, layouts, and error handling.
- **src/components/**: Reusable UI components (navigation, forms, modals, etc.).
- **src/pageComponents/**: Page-level components for features like Dashboard, Menu, Billing, etc.
- **src/i18n/**: Internationalization setup and locale files.
- **src/providers/**: React context providers (Auth, Analytics, i18n).
- **src/server/**: Server-side utilities and database access.
- **src/shared/**: Shared hooks, types, and utilities.
- **src/trpc/**: tRPC setup for type-safe API routes.
- **prisma/**: Prisma schema for database modeling.
- **supabase/**: Supabase configuration, SQL seeds, and migrations.
- **public/**: Static assets and images.

---

## Environment Variables

All sensitive configuration is managed via the `.env` file. Key variables include:

- **NEXT_PUBLIC_SUPABASE_URL**: Supabase project URL
- **NEXT_PUBLIC_SUPABASE_ANON_KEY**: Supabase public anon key
- **SUPABASE_SERVICE_KEY**: Supabase service role key (server-side)
- **DATABASE_URL**: PostgreSQL connection string (for pooling)
- **DIRECT_URL**: Direct PostgreSQL connection (for migrations)
- **LEMON_SQUEEZY_API_KEY**: Lemon Squeezy API key for payments
- **LEMON_SQUEEZY_STORE_ID**: Lemon Squeezy store ID
- **LEMON_SQUEEZY_SUBSCRIPTION_VARIANT_ID**: Subscription variant for plans

> **Note:** Never commit your `.env` file with real secrets to version control.

---

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- pnpm (or npm/yarn)
- Supabase account

### Installation

1. **Clone this project**
2. **Install dependencies**
   ```sh
   pnpm install
   ```
3. **If the above command does not work**

   ```sh
   npm install -g pnpm
   ```

4. **Copy the .env.example into .env and fill out the envs**
5. **Run database migrations**
   ```sh
   pnpm prisma migrate deploy
   ```
6. **Start the development server**
   ```sh
   pnpm dev
   ```
7. **Access the app**
   - Visit `http://localhost:3000` in your browser.

---

## Local Supabase Development 👨‍💻

- Go to `supabase/config.toml` and change your service name.
- Link the project with your supabase instance:
  ```sh
  supabase link --project-ref <project-id>
  ```
- To create migrations by hand:
  ```sh
  supabase migration new <migration_name>
  ```
  Then go to `supabase/migrations` folder and add your SQL there.
- To make changes with studio:
  ```sh
  pnpm db:diff <migration_name>
  ```

---

## Run these initial commands 🧑‍💻

Every time you change something on local instance:

```sh
pnpm prepare:local
```

If you develop on cloud supabase run:

```sh
pnpm prepare:remote
```

To run the project:

```sh
pnpm dev
```

---

## Scripts

- `pnpm dev` — Start the Next.js development server
- `pnpm build` — Build the app for production
- `pnpm start` — Start the production server
- `pnpm prisma migrate deploy` — Apply database migrations
- `pnpm lint` — Run linter
- `pnpm format` — Format code with Prettier

---

## Learn More 🧐

If you are not familiar with the different technologies used in this project, please refer to the respective docs. 📚

- [Next.js app router](https://nextjs.org/docs)
- [Prisma](https://prisma.io)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)
- [Supabase](https://supabase.com/docs)
- [shadcn/ui](https://ui.shadcn.com/)

To learn more about the [T3 Stack](https://create.t3.gg/), take a look at the following resources:

- [Documentation](https://create.t3.gg/)
- [Learn the T3 Stack](https://create.t3.gg/en/faq#what-learning-resources-are-currently-available) — Check out these awesome tutorials

You can check out the [create-t3-app GitHub repository](https://github.com/t3-oss/create-t3-app) — your feedback and contributions are welcome!

---

## How do I deploy this? 🚢

Follow deployment guides for [Vercel](https://create.t3.gg/en/deployment/vercel), [Netlify](https://create.t3.gg/en/deployment/netlify) and [Docker](https://create.t3.gg/en/deployment/docker) for more information.

---

## Don't need Internalization? 🤔

I know, that's a rare request to have. Check out [this](https://github.com/Jaaneek/t3-supabase-app-router) repo for a more 'lightweight' version!

---

## Authors

👤 **Milosz Jankiewicz**

- Twitter: [@twitter.com/jaaneek/](https://twitter.com/jaaneek)
- Github: [@Jaaneek](https://github.com/Jaaneek)
- LinkedIn: [@https://www.linkedin.com/in/jaaneek](https://www.linkedin.com/in/mi%C5%82osz-jankiewicz-554562168/)

👤 **Jakub Czarnowski**

- Twitter: [@twitter.com/akubdev/](https://twitter.com/charnowsky)
- Github: [@jakubczarnowski](https://github.com/jakubczarnowski)
- LinkedIn: [@https://www.linkedin.com/in/czarnowskijakub/](https://www.linkedin.com/in/czarnowskijakub/)

👤 **Lukasz Cybulski**

- Twitter: [@twitter.com/akubdev/](https://twitter.com/_soib)
- Github: [@soib](https://github.com/soib)
- LinkedIn: [@https://www.linkedin.com/in/lukaszcybulski/](https://www.linkedin.com/in/lukaszcybulski/)

👤 **Patryk Szczurowski**

- Github: [@patryiku](https://github.com/patryiku)

---

## License

This project is licensed under the MIT License.

---

## Contact

For questions or support, open an issue or contact the maintainer.
