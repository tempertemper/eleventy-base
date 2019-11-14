# eleventy-base

This is a basic [Eleventy](https://www.11ty.io) website that will form a starting point for pretty much any project.


## Initial setup

- Make sure [node](https://nodejs.org/en/) (and npm) is installed globally
- Run `npm install` (or `npm i` if you're feeling flashy) in the project root to install any node packages


## Development environment

To work on the site locally you need to do the following:

- Run `npm start` to generate your site and its styling
- Go to http://localhost:3000/ in your browser

Any changes you make will automatically appear in your browser. Note: any configuration changes will need you to stop the process (`⌃` + `c`) and start it again (`npm start`).

When you're finished, `⌃` + `c` stops your dev environment running.


## Site build

- Run `npm run build` to build the site out into the /dist/ directory. This doesn't run a local development server or watch the /src/ directory for any SCSS or Eleventy changes
- `npm run staging` does a very similar thing to `npm run build`, the only difference being it overwrites the robots.txt file so that search engines won't index the site

Both of these build commands are configured in the netlify.toml file, so you don't have to worry about them.


## Updating dependencies

Do this with caution.

- Run `npm update` in the project root


## Getting started

This repo is full of references to `example.com`. The first thing to do is to replace this with your own site's URL.

The root folder of this repo contains all the config files you need. The stuff you'll be editing more regularly is all in the `/src/` directory.

### HTML

Your site's pages live in `/src/site/`. There's an index.html file in there that you'll probably edit with the contents of your homepage. There's also an about.html page that is linked to from index.html; you'll probably want to delete this, but it's useful as an example.

Each page starts with <i>front matter</i> – that's the stuff between the two `---` bits at the very start of the document. Front matter is written in YAML, which is easy to read and easy to write: a key (e.g. `title`), a colon (`:`) and a value (`Hello world`).

Every page needs a `title` and a `permalink` set in front matter.

### CSS

You should write your styling in `/src/scss/`. What's SCSS? Is [often called Sass](https://sass-lang.com/) and it's a way to write CSS more efficiently. The good thing, though, is that you can write plain ol' CSS if you like. So you're fine if you know some SCSS, but don't be scared if you don't – the CSS you know and love will work fine!

