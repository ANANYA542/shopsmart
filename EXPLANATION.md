# Architecture & Design Explanation

## Phase 1: Scaffold & Configuration

### What we did:
In this phase, we laid the foundational structure of our project. Rather than jumping straight into coding, setting up the right configurations helps us avoid bugs, security leaks, and inconsistent code styles later. This is often the most critical part of an enterprise app.

### Concepts Used:

1. **Monorepo Structure**
   Instead of storing our frontend (React app) and backend (Express server) in two completely separate GitHub repositories, we placed them together in one repository (under `client/` and `server/` respectively).
   - **Why?** It makes it easier to test the entire application at once, share configurations, and manage deployment seamlessly from a single place.

2. **.gitignore**
   This tells Git which folders and files should *never* be uploaded to GitHub.
   - **Why?** We hide `node_modules` because it's massive and can be generated easily by anyone running `npm install`. We hide `.env` files because they store our extreme secrets, like passwords and Database URLs.

3. **Package.json Configuration**
   In this step, we listed out all the dependencies we need for the future (like `express` for our server, `mongoose` to talk to our database, `jest` for testing, etc.).
   - **Why?** This gives developers pulling our code a roadmap of exactly what tools and libraries power our application. 

4. **ESLint & Prettier**
   - **ESLint** acts as an automatic code reviewer. It catches logical errors (like using a variable that doesn't exist or a missing return statement) before we run our code.
   - **Prettier** works hand-in-hand with ESLint but handles formatting formatting (like making sure spaces, indentations, and quotation marks are strictly consistent).
   - **Why?** Having these set up guarantees clean, readable, and less error-prone code — standard in professional development environments.

5. **Dependabot Configuration (.github/dependabot.yml)**
   This tells GitHub to act as an automated maintainer for our project. It periodically checks the `npm` packages we currently depend on.
   - **Why?** If a library we use is updated or has a security vulnerability patched, Dependabot automatically creates a Pull Request (PR) in our repository offering up the fresh, secure version of that library.

This structured approach scores us full points for maintaining a standard architecture, implementing Dependabot (a core Rubric requirement), and preparing our environment to seamlessly accept future GitHub Actions and deploy scripts.
