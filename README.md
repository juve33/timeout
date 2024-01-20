## How to Clone
```
git clone https://github.com/juve33/timeout.git
cd server
npm install
cd ../client
npm install
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
npm start
```

Start Web server
```
cd client
npm start
```
