# backend

# TimeoutBackend

TimeoutBackend is a Node.js backend application designed to provide secure and efficient timeout functionality. This application is equipped with essential packages to handle authentication, rate limiting, and database operations seamlessly.

## Installation

Before running TimeoutBackend, ensure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your machine.

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/TimeoutBackend.git
   cd TimeoutBackend
   ```

2. Install dependencies:

   ```bash
   npm install
   npm i nodemon uuid mongoose-sequence mongoose jsonwebtoken express-rate-limit express-async-handler express dotenv date-fns cors cookie-parser bcrypt
   ```

## Configuration

TimeoutBackend uses environment variables for configuration. Create a `.env` file in the root directory and configure the following variables:

```env
SECRET_KEY=your_secret_key
MONGODB_URI=your_mongodb_connection_string
PORT=your_preferred_port_number
```

## Usage

To start the server, use the following npm script:

```bash
npm start
```

This will run the server using the production-ready `node` command.

For development with automatic server restarts, use:

```bash
npm run dev
```

## Scripts

- `npm start`: Start the server in production mode.
- `npm run dev`: Start the server in development mode with nodemon for automatic restarts.

## Dependencies

TimeoutBackend relies on the following npm packages:

- [bcrypt](https://www.npmjs.com/package/bcrypt)
- [cookie-parser](https://www.npmjs.com/package/cookie-parser)
- [cors](https://www.npmjs.com/package/cors)
- [date-fns](https://www.npmjs.com/package/date-fns)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [express](https://www.npmjs.com/package/express)
- [express-async-handler](https://www.npmjs.com/package/express-async-handler)
- [express-rate-limit](https://www.npmjs.com/package/express-rate-limit)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [mongoose](https://www.npmjs.com/package/mongoose)
- [mongoose-sequence](https://www.npmjs.com/package/mongoose-sequence)
- [uuid](https://www.npmjs.com/package/uuid)

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.
