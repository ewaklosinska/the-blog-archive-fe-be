# The Blog Archive front-end + back-end version

To run a project locally after cloning it from GitHub install project dependencies for back-end and front-end respectively, using npm install command.
After that use npm start script for backend and frontend.

## General info

An application which allows users to find an article from articles base by the title. Articles are sorted by the length of the title (descending - assuming that a longer title means a more interesting article). 
The app uses a public web API (https://jsonplaceholder.typicode.com/posts/).
The logic (fetching and sorting data) has been moved to the back-end.

UI:
- button which allows to swich between dark and light mode.
- layout designed for 4 breakpoints (480px, 768px, 960px and over 960px) using media queries.

## Technologies

- React v.18
- JavaScript
- CSS
- express.js
