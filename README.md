# StrapiNextApp

Next.js Blog Frontend

This is the frontend for the Strapi-powered blog, built with Next.js (App Router).

Tech Stack:

- Next.js
- CSS Modules
- On-demand revalidation via revalidatePath (using strapi webhook)
- Data from Strapi CMS

Setup:

1. Install dependencies:
   npm install

2. Create .env.local file:
   STRAPI_API_URL=http://localhost:1337

3. Run the app in development:
   npm run dev

4. Build and run for production:
   npm run build
   npm start

Revalidation:

strapi webhook

Directory Overview:

- app/blog/[slug]/page.js : Static blog post page
- app/api/revalidate/route.js : Revalidation endpoint

------------------------------------------------------------------------------

Strapi CMS Backend

This is the backend for the blog, built using Strapi.

Setup:
1. Install dependencies:
   npm install

2. Create .env file with these keys:
   APP_KEYS=...
   API_TOKEN_SALT=...
   ADMIN_JWT_SECRET=...
   JWT_SECRET=...

3. Run in development:
   npm run develop

CMS URL: http://localhost:1337

Content Types:
- Blog (title, content, slug, author, image)
- Blocks: text, image, quote

Webhooks:
- URL: https://your-frontend.com/api/revalidate?secret=your-secret (on demand revalidation in frontend)




