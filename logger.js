/**
 * Logger(Log4js)
 *
 * @author asma
 * @copyright 2015 asma All Rights Reserved.
 */

var log4js = require('log4js');
log4js.configure('log4js_settings.json', {});

var logger;
switch (process.env.NODE_ENV) {
  case 'development':
    logger = log4js.getLogger('debug');
  break;
  case 'production':
    logger = log4js.getLogger('production');
  break;
}
module.exports = logger;
