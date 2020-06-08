# Inshur Coding Challenge

## Tech stack

- React
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
  - (And besides, Chuck Norris is great in judo and brazilian jiu-jitsu, not karate ;))

App also assumes:
  - server (api) has `assets/img/` folder where the `req.params.id` extracted from express `req.url` corresponds to a particular jpeg image file.

  - each profile corresponds to a unique id ==> `req.params.id`

## Running

- Clone or download the application
- ```yarn install``` to download all necessary packages 
- ```yarn start``` to run the application ==> a new browser opens up


## Linting

- ESLint `yarn eslint`
- Sass lint `yarn sass-lint`


## Testing with jest & enzyme

- test: `yarn test`
