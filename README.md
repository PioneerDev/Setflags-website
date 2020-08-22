## Introduction

website for set-flag

react + dva + materialUI

## Build Setup

```
# install dependencies
$ yarn install

# serve with hot reload at localhost:8000
$ yarn start

# build for production and launch server
$ yarn build

# commit changes
$ yarn commit
```

## Deploy
1. install dependencies
```
yarn install
```

2. set baseUrl, mixin robot clientid in config/config.prod.js
```
  define:{
    "process.env.BASEURL":'https://setflags.droneidentity.eu',
    "process.env.CLIENTID": 'bcec843a-d431-4bf0-8e82-cc10079d20ac'
  }
```
3. build app
```
yarn build:prod
```
then deploy the dist folder


## Info
[Matrial-UI](https://material-ui.com/)
