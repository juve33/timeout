## Set up
```
git clone https://github.com/juve33/timeout.git
cd timeout/server
npm install mongodb express cors dotenv
cd ../client
npm install react-router-dom
```

## How To Run
Create the file `server/config.env` with your Atlas username and password and the server port:
```
ATLAS_URI=mongodb+srv://<username>:<password>@sandbox.jadwj.mongodb.net/
/employees?retryWrites=true&w=majority
PORT=5000
```

Start server:
```
cd server
node server.js
```

Start Web server
```
cd client
npm start
```
