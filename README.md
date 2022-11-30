# mern-api-template

This repository is created for the purpose of setting up a Node.js API with Express and MongoDB.

To use this repository, you need to have [Node.js](https://nodejs.org/en/download/) installed on your machine.


### Install

Run these commands respectively

- `git clone https://github.com/kod-man/mern-api-template.git `
- `npm install`
- create `.env` file with following contents in the root folder
    
   ```
    PORT=4000
    DB_URL=// your MongoDB connection strings
   ```
- create `.gitignore` file with following content


  ```
    /node_modules
    /.pnp
    .pnp.js
    .env

    /coverage

    /build

    .DS_Store
    .env.local
    .env.development.local
    .env.test.local
    .env.production.local

    npm-debug.log*
    yarn-debug.log*
    yarn-error.log*

    ```
    
- create `.eslintrc.js` file with following contents
 ```
    module.exports = {
    env: {
        node: true,
        commonjs: true,
        es2021: true,
    },
    extends: "eslint:recommended",
    overrides: [],
    parserOptions: {
    ecmaVersion: "latest",
    },
    rules: {
        "no-unused-vars": "warn",
    },
    };

 
  ```

- run `npm run dev` command in the terminal

If you see those logs in the console, congrats you made it :)

   ```
   Server is running on port 4000
   Connected to DB
   ```
