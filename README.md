
# [Dahlia](https://dahlia-web.web.app/)

Connecting DALI Lab members digitally since 2023.

This project was built for the [DALI Lab Social Media Challenge](https://github.com/dali-lab/dali-challenges/blob/main/docs/WebAndMobileChallenges/SocialMediaChallenge.md). It is a full-stack serverless app built on Firebase and using [Create-React-App](https://create-react-app.dev/), [TypeScript](https://www.typescriptlang.org/), [React Router](https://reactrouter.com/en/main), and [Material UI](https://mui.com/material-ui/).

By [@jrmann100](https://github.com/jrmann100)

## Objectives

- [x] Present a [dataset](https://github.com/dali-lab/dali-challenges/blob/master/data/DALI_Data.json) of user profile data using a clean UI.<br>Organized the product into components and views using React, supercharging a custom-built interface with reactive Typescript.
- [x] Use Firebase to organize data.<br>Firebase Firestore provided the framework to [organize the data](data/data.json) into a document-based database, with custom security rules to prevent tampering.
- [x] Use React Hooks to extend the abilities of the code. <br>Create [custom hooks](src/util/pouch.tsx) to manage React Context
- [x] Organize the site into [key views](src/pages) and route efficiently. 
- [x] Deploy [the site](https://dahlia-web.web.app) on Firebase Hosting.
- [x] Integrate Firebase Auth/Google OAuth for a personalized experience.<br>Add Google Sign-In for quick authentication. Link Firestore profiles to user accounts.

## Building and Deploying

Build the project:
```bash
yarn && yarn build
```

Preview locally:
```bash
yarn start
```

(Maintainers only) deploy the product:
```bash
firebase deploy
```
