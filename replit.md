# QuizMaster

## Project Overview
A static quiz web application — pre-built Next.js export serving static HTML/CSS/JS files. Users can take quizzes, earn coins, and test their knowledge across 15 categories.

## Architecture
- **Type**: Static site (pre-built Next.js export)
- **No build step required** — all files are already compiled
- **Server**: `npx serve . -l 5000` serves the static files

## Project Structure
- `index.html` — main entry point
- `_next/` — Next.js compiled static assets (chunks, CSS, fonts)
- `quiz/1.html` through `quiz/15.html` — individual quiz pages
- `about.html`, `contact.html`, `wallet.html`, `privacy.html`, `terms.html`, `disclaimer.html` — static pages
- `favicon.ico` — site icon

## Workflow
- **Start application**: `npx serve . -l 5000` on port 5000 (webview)

## Deployment
- **Target**: Static
- **Public directory**: `.` (project root)
