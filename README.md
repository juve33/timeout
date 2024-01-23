## Set up
```
git clone https://github.com/juve33/timeout.git
cd timeout/server
npm install mongodb express cors dotenv
cd ../client
npm install react-router-dom
```

## How To Run
**Not necessary due to database not existing yet**
Create the file `server/config.env` with your connection string and the server port:
```
CONNECTION_STRING=mongodb://localhost:27017/tasks
PORT=5000
```

**Not necessary due to database not existing yet**
To start the database server (if hosted locally) open:
```
C:\Program Files\MongoDB\Server\4.4\bin\mongod.exe
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
