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


