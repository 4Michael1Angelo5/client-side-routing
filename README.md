# Single Page Application with Client-Side Routing on GitHub Pages

This repository demonstrates how to deploy a **React Single Page Application (SPA)** that uses **React Router** for client-side routing on **GitHub Pages**, avoiding the common 404 error on page reload.

## Features

- **React Router** for client-side navigation.
- **404.html Fallback** to capture and redirect users to the correct client-side route.
- **URL Rewrite Script** that handles refreshes or direct URL access without triggering 404 errors.
- **GitHub Pages Deployment** using the `gh-pages` branch.

## How It Works

GitHub Pages serves static files and doesn't support server-side routing. To handle routing errors:

1. **404.html**:
   - GitHub Pages serves `404.html` for any unrecognized path.
   - The script inside `404.html` redirects back to `index.html` with the original path as a query parameter.

2. **index.html Script**:
   - The script in `index.html` reads the query parameters and redirects the user to the appropriate route in your SPA, ensuring smooth navigation.


## How to Set Up

1. **Create a GitHub repository**:
   - Link your local repository to the remote repository using the command: 
     ```bash
     git remote add origin https://{your-username}.github.io/{your-repository-name}
     ```
   - Ensure the repository name matches your React app's name.

2. **Install `gh-pages`**:
   - Run the following command to add `gh-pages` to your app:
     ```bash
     npm install gh-pages --save-dev
     ```
   - Follow the steps provided by `gh-pages` to publish your app to the `gh-pages` branch.

3. **Add `404.html`**:
   - Copy the `404.html` file to your local repository, placing it in the root directory at the same level as `App.js`.

4. **Optional Step**:
   - Place a copy of `404.html` in the `public` folder. (This may not be necessary, but it won't hurt.)

5. **Edit `index.html`**:
   - In the `public` folder, update the `index.html` file to include the necessary script for client-side routing. Make sure the script runs before `App.js` is executed.

6. **Deploy**:
   - Follow the typical `gh-pages` deployment steps:
     ```bash
     git add .
     git commit -m "client-side-routing fix"
     git push
     yarn deploy
     ```
