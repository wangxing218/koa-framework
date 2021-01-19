const path = require('path')
const log4js = require('log4js')
const config = require('../../config');

function getFileName(fileName) {
  return path.resolve(process.cwd(), config.logger.path, fileName)
}

log4js.configure({

  appenders: {
    all: {
      type: config.logger.type,
      filename: getFileName('all.log'),
      pattern: config.logger.pattern,
      keepFileExt: true,
      alwaysIncludePattern: true,
      daysToKeep: config.logger.keepDays,
    },
    error: {
      type: config.logger.type,
      filename: getFileName('error.log'),
      pattern: config.logger.pattern,
      keepFileExt: true,
      alwaysIncludePattern: true,
      daysToKeep: config.logger.keepDays,
    }

  },
  categories: {
    default: {
      appenders: [
        'all'
      ],
      level: 'all'
    },
    error: {
      appenders: [
        'error'
      ],
      level: 'error'
    }
  },
});
const logger = log4js.getLogger('all')
const loggerError = log4js.getLogger('error')
logger.error = (...args) => {
  loggerError.error(...args)
}

module.exports = logger


