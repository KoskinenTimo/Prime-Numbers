Simple prime number check app. API takes in 2 types of actions with corresponding number data: <br>

api/checks/?action=checkprime&number=1234<br>
api/checks/?action=sumandcheck&numbers=1,2,3,4

Tests for these endpoints can be run with 'npm test' inside the api folder. The frontend tests can be run inside client folder 'with npm test' command.

---------------------------------------------------------------------------------

To get this app running:

git clone https://github.com/KoskinenTimo/Prime-Numbers<br>
cd Prime-Numbers<br>
cd api<br>
npm run build:ui<br>
npm start

The app is now running at http://localhost:3001 <br>
API healthcheck can be done at http://localhost:3001/healthcheck if needed.

---------------------------------------------------------------------------------

If you want to run the app with development version after cloning:

cd client<br>
npm install<br>
npm start

Start another terminal and:

cd api<br>
npm install<br>
npm run dev

The frontend is now running at http://localhost:3000 <br>
And the backend is running at http://localhost:3001

---------------------------------------------------------------------------------

The frontend has very minimal styling on purpose, all focus was in compact and clean code plus tests.