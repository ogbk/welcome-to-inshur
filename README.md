# Inshur Coding Challenge

## Tech stack

- React
- Flow - static typechecking tool
- Sass - css preprocessor
- Eslint - code linter
- Jest & Enzyme - React testing tools

I did not use the following, the app was fairly simple, not many components
- Redux
- React Router

## App structure

- main component : ```<App/>```
- sub components: ```<Profile/>``` , ```<NotFound/>```

## Application
When it starts, user can select one of 2 profiles:
- mine (Ogbu Olu) -> main purpose of the application
  - displays a profile picture and some data via `<Profile/>` component
- another (Chuck Norris) -> 
  - this profile record is deliberately not stored on `profiles.json` [ server data ]
  - So the app handles this missing record, sending an appropriate `<NotFound/>` component

Also app assumes:
  - server (api) has `assets/img/` folder where `req.params.id` from extracted from express `req.url` corresponds to a particular jpeg image file.

  - each profile corresponds to a unique id ==> `req.params.id`

## Linting

- ESLint `npm run eslint`
- Sass lint `npm run sass-lint`


## Static typechecking with Flow

- Stop flow server `npm run flow stop`
- Start flow server `npm run flow start`
- Run flow `npm run flow status`

## Testing with jest & enzyme

- test: `npm run test`

=================================================





# Welcome to the Inshur Coding Challenge 💻

## Getting Started 🛠
Everything you need to get setup is within this repository. If you'd prefer not to use the code provided here that is fine. However, if you do use it we ask that you do **_not_** 'Fork' this repository, and instead you clone it.

### Prefer Typescript?
We're using Typescript at Inshur, so if you can we'd love to see you using it. Switch over to our other repository [here](https://github.com/Inshur/welcome-to-inshur) if you want to show us what you've got. However, if you'd prefer to continue using Javascript that's fine.

### Setup
1. `git clone https://github.com/Inshur/welcome-to-inshur.js.git`
1. `cd welcome-to-inshur`
1. `yarn install`
1. `yarn start`

## Your Task 📝
In order to get to know you we'd like you to create yourself a profile page.

No profile page is complete without the following:
- Your profile picture (can be of anything)
- Your name
- Your job title
- Your favourite food

## What we'd like to see being used 🕵️‍♂️
- The API
- Jest
- React Hooks
- CSS

## Duration ⏰
You may take anywhere up to 2+ hours on your profile if you wish.

## Submitting your code 📬
Once you're satisfied with your work, please push it up to a public GitHub repository and send us the link. 

If you've chosen to clone this repository, use this command to replace the origin URL with a repository URL you've created:
1. `git remote set-url origin [YOUR_REMOTE_URL]`
