# TypeScript Express Boilerplate

Boilerplate for TypeScript with ExpressJS.

## Commands
#### Development server with hot reload: 
```sh
    npm run dev
```
#### Build and start the production server: 
```sh
    npm run build
    npm start
```

## Deployment to Heroku
```sh
    heroku apps:create hello-world
    git push heroku master
```

#### Test it here:
[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/yigitusta/typescript-express-boilerplate)

### Example deployment with Docker
```sh
  docker build . -t hello-world
  docker run -d -p 80:3000 hello-world
```
#### License: MIT