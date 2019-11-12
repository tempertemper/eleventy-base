# eleventy-base
Basic [Eleventy](https://www.11ty.io) website starting point.


## Initial setup

- Make sure [node](https://nodejs.org/en/) (and npm) is installed globally
- Run `npm install` in the project root to install any node packages and allow the npm scripts to run


## Development environment

To work on the site locally you need to build the site and run a development server.

- Run `npm start` in the project root to work on the site content and structure
- Go to http://localhost:3000/ in your browser


## Site build

Run `npm run build` to build the site out into the /dist/ directory. This doesn't run a local development server or watch the /src/ directory for any SCSS or Eleventy changes.


## Updating dependencies

Do this with caution.

- Run `npm update` in the project root
