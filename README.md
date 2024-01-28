## Set up
```bash
git clone https://github.com/juve33/timeout.git
cd timeout/server
npm install nodemon uuid mongoose-sequence mongoose jsonwebtoken express-rate-limit express-async-handler express dotenv date-fns cors cookie-parser bcrypt
cd ../client
npm install react-router-dom react-redux @reduxjs/toolkit
```

## How To Run
Create the file `server/config.env` with your connection strings and the server port:
```env
DATABASE_URI=connection_string
ACCESS_TOKEN_SECRET='secret_access_token'
REFRESH_TOKEN_SECRET='secret_refresh_token'
PORT=5000
```

Start server:
```bash
cd server
npm start
```

Start Web server
```bash
cd client
npm start
```
