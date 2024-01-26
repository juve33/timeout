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
SECRET_KEY=secret_key
MONGODB_URI=connection_string
DATABASE_URI=database_link
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
