Budget Tool 5000
================

# Development Setup

You'll need to install [npm](http://blog.npmjs.org/post/85484771375/how-to-install-npm).

Navigate to the `client/` directory and run `npm install` to download
all of the project dependencies.

Once that's done, there are two commands avaiable for building the project.
`npm run dev` will serve the project at "localhost:8080", and dynamically
update the served site when the source files change. `npm run build` will
output the static `bundle.js` file into the `public/` folder. After building
like this, the site can be served statically by simply navigating to `index.html`.

# First read through the source

I recommend reading the following source files (in `client/`) to get an
understanding of the project structure:

```
src/index.js                         # Project root.
src/routes.js                        # URL routes. Determines components to load.
src/containers/BudgetContainer.js    # Root "container" establishes state and action associations.
src/views/BudgetView.js              # Top level view for BudgetContainer.
src/views/LoginView.js               # Login view renderer.
```
