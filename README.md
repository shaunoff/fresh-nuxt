# Nuxt.js Universal App with SSR via Firebase Functions and Firebase Hosting

Hosting for Promoboxx landing pages (Vinyl) using Firebase Hosting and Nuxt.js SSR

## Setup

**Note:** _All of these commands are ran from the root directory_

1. Node version should be > 6.7 (e.g. 8.11.1)

2. Run a development server
  ```bash
  yarn dev
  ```

2. Build The Project

  ```bash
  yarn build
  ```

3. Deploy To Firebase

  ```bash
  yarn deploy
  ```

**_Your site should now be live!_**

--------------------------------------------------------------------------------

### Firebase Project Setup

1. Create a Firebase Project using the [Firebase Console](https://console.firebase.google.com).

2. Obtain the Firebase Project ID

### Features

- Server-side rendering with Firebase Hosting combined with Firebase Functions
- Firebase Hosting as our CDN for our publicPath (See nuxt.config.js)

### Things to know...

- You must have the Firebase CLI installed. If you don't have it install it with `npm install -g firebase-tools` and then configure it with `firebase login`.

- If you have errors, make sure `firebase-tools` is up to date. I've experienced many problems that were resolved once I updated.

- The root directory has a package.json file with several scripts that will be used to optimize and ease getting started and the workflow

- ALL commands are ran from the root directory
