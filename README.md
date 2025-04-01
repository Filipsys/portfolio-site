### TODO:

- [ ] Fix metadata on the main site.
- [x] Fix fun mode view and add a theme toggle to switch between.
- [ ] Add snow during the winter period in the main site.
- [ ] Migrate project to Tailwind v4 & React 19.
- [ ] Add cat cursors using websockets, most likely using the [ws](https://www.npmjs.com/package/ws) npm package to the fun mode.
- [x] Add a list of signed messages to the fun site, using oath (Github) and a database to track messages and saved users.
- [x] Create a projects tab in the main site.
- [x] Make the language colours dynamic (fix CORS).
- [x] Make the projects section responsive.
- [ ] Keep the navbar as a static client-side component and lazy load the heavier sections using next/dynamic.
- [x] Make the pinned repositories dynamic by creating a worker which will scrape the Github profile to get the repo details.
- [x] Switching from Cloudflare's d1 to Drizzle's Sqlite as d1 requires a worker. I'm not sure how to make a worker work with a database that better-auth uses so I have to use something like Drizzle.
- [x] Possibly add Posthog to track any parts of the site that could be improved on.
