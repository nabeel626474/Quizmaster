# SmartQuizHub

## Project Overview
A static quiz web application — pre-built Next.js export served via a Node.js Express server. Users can take quizzes, earn coins, and test their knowledge across 15 categories.

## Architecture
- **Type**: Static site (pre-built Next.js export) served with Node.js/Express
- **Server**: `server.js` — Express static file server on port 5000
- **No build step required** — all HTML/CSS/JS files are already compiled

## Project Structure
- `server.js` — Express server entry point
- `package.json` — Node.js project config with `npm start` script
- `index.html` — main entry point
- `_next/` — Next.js compiled static assets (chunks, CSS, fonts)
- `quiz/1.html` through `quiz/15.html` — individual quiz pages
- `about.html`, `contact.html`, `wallet.html`, `privacy.html`, `terms.html`, `disclaimer.html` — static pages
- `favicon.ico` — site icon

## Workflow
- **Start application**: `node server.js` on port 5000 (webview)

## Deployment
- **Target**: Autoscale
- **Run command**: `node server.js`
