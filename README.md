# goit-react-hw-05-movies

Deploying Vite App to GitHub Pages using gh-pages and script deploy:
-----
1. Install gh-pages:

  npm install gh-pages --save-dev

4. Add in script in package.json

  "scripts": {
      "deploy": "npm run build && gh-pages -d dist"
    },

3. Run script to build and publish in gh-pages branch on github:

   npm run deploy
