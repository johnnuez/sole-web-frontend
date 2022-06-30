# Sole Web Frontend
NextJS frontend for www.soletarotysimbolos.com

## Description
- Website consisting in a landing page, blog, courses page, bio page, schedule (integrated with Calendly)
and a newsletter signup input in the footer that connects to Mailchimp.
- Frontend built using NextJS, Tailwind, and Framer Motion for some animations.
- Design is fully responsive.
- Data comes from a Strapi headless CMS, and is regularly updated.
- The site uses Static Generation with revalidate (ISR) which provides fast response times, in combination with SWR
to make sure that the users always see updated data.
- Frontend hosted on Vercel.

## Backend
- Strapi CMS using PostgreSQL, integrated with Cloudinary to handle image uploads.
- The website admin can access the Strapi Admin to create, update or delete blog posts and courses.
- The frontend consumes this data via REST APIs.
- The database is configured to perform daily backups.
- Backend hosted on Heroku.
