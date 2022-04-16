This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Running on Repl.it

Simply hit run once and start coding. Will hot reload the web view. 

## Running Scripts

You can open a new shell window by hitting command+shift+S on macOS or control+shift+S (you can also access shortcuts from the `?` in the bottom right corner).

When in the shell you can run any of the following scripts:
- `yarn install`
- `yarn test`
- `yarn start`
- `yarn build`
- `yarn test -- --coverage` for unit test coverage.

## Change Log
1. Added the UI elements as per requirement
2. Extracted the UI building blocks into appropriate folders & files.
3. Moved app file to it's own folder as sibling to components folder.
4. Added Logic to control the countdown clock.
5. Tested the functionality as per user story requirements.
6. Added the typescript types for jest.
7. Updated unit test for main app file.
8. Added unit tests for developed components all the test cases covered.
9. Updated title of the web page in `public/index.html`.
10. Removed the service worker file since it is not used in the folder.
11. Cleaned the default readme & added change log.

## Test Coverage Report
---
File                   |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
-----------------------|----------|----------|----------|----------|-------------------|
All files              |    96.97 |      100 |      100 |    96.88 |                   |
 src                   |        0 |      100 |      100 |        0 |                   |
  index.tsx            |        0 |      100 |      100 |        0 |                 6 |
 src/app               |      100 |      100 |      100 |      100 |                   |
  App.tsx              |      100 |      100 |      100 |      100 |                   |
 src/components        |        0 |        0 |        0 |        0 |                   |
  index.ts             |        0 |        0 |        0 |        0 |                   |
 src/components/Button |      100 |      100 |      100 |      100 |                   |
  Button.tsx           |      100 |      100 |      100 |      100 |                   |
  config.ts            |      100 |      100 |      100 |      100 |                   |
 src/components/Clock  |      100 |      100 |      100 |      100 |                   |
  Clock.tsx            |      100 |      100 |      100 |      100 |                   |
  config.ts            |      100 |      100 |      100 |      100 |                   |
 src/utils             |      100 |      100 |      100 |      100 |                   |
  constants.ts         |      100 |      100 |      100 |      100 |                   |
---
