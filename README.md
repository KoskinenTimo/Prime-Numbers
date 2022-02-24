Simple prime number check app. API takes in 2 types of actions with corresponding number data: <br>

api/checks/?action=checkprime&number=1234
api/checks/?action=sumandcheck&numbers=1,2,3,4

Tests for these endpoints can be run with 'npm test' inside the api folder. The frontend tests can be run inside client folder 'with npm test' command.

---------------------------------------------------------------------------------

To get this app running, clone it, go inside the app:

cd api
npm run build:ui
npm start

The app is now running at http://localhost:3001 <br>
API healthcheck can be done at http://localhost:3001/healthcheck if needed.

---------------------------------------------------------------------------------

If you want to run the app with development version:

cd client
npm install
npm start

Start another terminal and:

cd api
npm install
npm run dev

The frontend is now running at http://localhost:3000 <br>
And the backend is running at http://localhost:3001

---------------------------------------------------------------------------------

The frontend has very minimal styling on purpose, all focus was in compact and clean code plus tests.