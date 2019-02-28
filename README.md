# TypeScript Express Boilerplate

A simple boilerplate for TypeScript with ExpressJS.

## Commands
Don't forget to ```cd``` into the project directory before you run any of the commands.

### Start the development server with hot reload
```sh
    npm run dev
```
### Build and start the production server
```sh
    npm run build
    npm start
```

### Deployment to Heroku
```sh
    heroku apps:create {your-app-name}
    git push heroku master
```

#### Test it here:
[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/yigitusta/typescript-express-boilerplate)

### Example deployment with Docker
```sh
  docker build . -t {your-app-name}
  docker run -d -p 80:3000 {your-app-name}
```
#### License: MIT
