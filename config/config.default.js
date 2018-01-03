'use strict';
module.exports = appInfo => {
  return {
    keys: 'sdfsdfsf',
    middleware: ['log'],
    mongoose: {
      url: 'mongodb://jkss:asssss@127.0.0.1:27017/test',
      options: {
        server: {
          socketOptions: {
            keepAlive: 1,
            connectTimeoutMS: 30000
          },
          reconnectTries: 30,
          reconnectInterval: 3000
        }
      }
    }
  }
}
