# minimal-react-portfolio

## Overview
This is a simple React/TypeScript/TailwindCSS portfolio.  It is pretty much plug and play, simply update the `Education`, `Experience`, `Skills`, `About`, `Projects`, and `Contact` constants and it will automatically build each section.

If you want to add more sections, simply add a new object to the `items` array.  The `name` of your object will create a new button with that name, and the `data` can either be a string or a new JSX Element (just make a new const like `aboutData`, `educationData`, etc.).

![minimal-react-portfolio](https://github.com/tpbnick/minimal-react-portfolio/assets/49327729/115ac2fe-1dba-40ea-92bb-eddbef6a52ba)

The contact page is currently setup to use a [Netlify form](https://www.netlify.com/), which is extremely easy to setup.  I currently use Netlify to freely host my portfolio website, which will automatically build any time I make a commit to my personal portfolio's `main` branch.  If you don't want to use Netlify, you can change this to use any other form service/library you want.

## Setup
1. Either clone or fork this repo.
2. Install project dependencies - `npm install`
3. Run the project locally - `npm run dev`
4. Open the URL provided by Vite (should be something like `127.0.0.1:<port>`

## Build
I currently have this setup to utilize Netlify's automated build process, which is easy to link to your GitHub repo.  

You can also run the command `npm run build`, which will trigger the build process using Vite. It will compile your project and generate optimized static assets for production, located in the new `/dist` folder.
