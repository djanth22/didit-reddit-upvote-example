## Upvote

Upvote is a Reddit-esque web application that allows users to create posts, upvote and downvote posts, and comment on posts in a multi-threaded, nested list.

The project is built using Next.js with the /app router and [Tailwind CSS](https://tailwindcss.com/), and uses [Auth.js (formerly Next Auth)](https://authjs.dev/) for user authentication. The data is stored in a Postgres database, which is created and accessed with raw SQL queries using the `pg` package.

The project is a work in progress and is not yet complete.

## Features

- [x] View a list of posts
- [x] View a single post
- [x] Create a post
- [x] Upvote and downvote posts
- [x] Pagination of posts
- [x] Comment on posts
- [x] Nested comments (recursive lists)
- [x] User authentication

## Setup instructions

1. Fork the repository (check "copy the main branch only") and clone your fork to your local machine
2. Run `npm install`
3. Create a `.env.local` file in the root directory and add the following environment variables:
   - `DATABASE_URL` - the URL of your Postgres database (eg. the Supabase connection string)
   - `AUTH_SECRET` - the Next Auth secret string (this can be anything at all like a password, but keep it secret!)
   - `AUTH_GITHUB_ID` - the GitHub OAuth client ID (create yours in [Github developer settings](https://github.com/settings/developers)
   - `AUTH_GITHUB_SECRET` - the GitHub OAuth client secret (create this in [Github developer settings](https://github.com/settings/developers))
4. Create the database schema by running the SQL commands in `schema.sql` in your database (eg. by running the commands in Supabase Query Editor)
5. Run `npm run dev` to start the development server
6. Open [http://localhost:3000](http://localhost:3000) with your browser to see the site

## Potential future features

- [ ] User profiles
- [ ] Sorting posts by recent (date posted), top (most upvotes), and most controversial (most upvotes _and_ downvotes)
- [ ] User karma scores
- [ ] User badges / trophies (awards for achievements like number of posts, years on the site, etc.)
- [ ] User settings (eg. number of posts per page, theme, etc.)
- [ ] Moderation tools / reporting or flagging objectionable comments for removable by admins
- [ ] Searching posts (possibly using simple SQL LIKE '%some search%', or [Postgres text search](https://www.crunchydata.com/blog/postgres-full-text-search-a-search-engine-in-a-database))
- [ ] Subreddits (separate communities, that isn't just one big list of posts, that can be created by users)
- [ ] User notifications
- [ ] User private messaging
- [ ] User blocking
- [ ] User following
- [ ] User feed (posts from users you follow)
- [ ] User flair

## Reflection

# (Required)

- 🎯 Please mention the requirements you met and which goals you achieved for this assignment.

- 🎯 Were there any requirements or goals that you were not quite able to achieve?

- 🎯 If so, could you please tell us what was it that you found difficult about these tasks?

# (Optional)

- 🏹 Feel free to add any other reflections you would like to share about your submission e.g.

What went really well and what could have gone better?
Detailing useful external sources that helped you complete the assignment (e.g Youtube tutorials).
Describing errors or bugs you encountered while completing your assignment.
Requesting feedback about a specific part of your submission

## my reflection

I managed to deploy to Vercel and started on the stretch goals. The ones I managed to tackle the vote related goals with a user only being able to vote once, this was fairly simple it was a small adjustment to the existing sql file that was originally commented out when the clone was made, but upon copying this across to the supabase sql editor I made sure to have that line not be commented out before running it. I believe this may have also fixed the goal to do with infinite voting as I wasnt sure what that meant but i wasnt able to get any votes (up or down) passed 1 or -1 using only one user on the same post. I then decided i wanted to work on a user profile section thinking that this would take up a fair bit of time, but since it would be similar to what I had already achieved in a previous project I thought it wouldnt be too difficult. However, it did end up eating through a lot of time due to errors as a result of silly mistakes which eventually I did end up solving but it didn't leave a lot of time to start working on some of the other stretch goals. It was quite a challenge wrapping my head around the code that was already written and I admittedly spent a fair while looking at each component and each route trying to get a better understanding of how I would make any changes in terms of new features or fixes. I think in a similar situatiuon, next time I reckon it would be better of me to focus on fixes and error messages with whatr already exists in the code before moving on to adding new features like the user profile section. I did slightly change the existing error message for when trying to vote when logged out but I wasnt sure whether this counted as completing the stretch goal so i didnt mention it earlier.

Overall I did enjoy the experience and I know potentially what I could do differently in a similar situation. I havent felt as though i have achieved a lot when it comes to the stretch goals and possible new features mentioned in the readme, but It has given me some insight.
