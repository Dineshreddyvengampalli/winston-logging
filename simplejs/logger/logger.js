const winston = require('winston')
require('winston-daily-rotate-file');


let transport = new winston.transports.DailyRotateFile({
  filename : '/home/dineshreddy/Desktop/winston-logger/logs/info-file.log',
  level : 'debug',
  maxSize : '5k',
  maxFiles : 2,
  handleExceptions : true,
  zippedArchive : true
})

transport.on('rotate', function(oldFilename='/home/dineshreddy/Desktop/winston-logger/logs/info-file.log', newFilename='/home/dineshreddy/Desktop/winston-logger/logs/log-file.log') {
  
});



let logger = winston.createLogger({
  transports : transport
})

module.exports = logger



















// const logger = createLogger({
//     transports : [
//         new transports.File({filename : '/home/dineshreddy/Desktop/winston-logger/logs/log-file.log',
//         level : 'error',
//         maxsize : '1m',
//         zippedArchive : true,
//         format: combine(
//             label({ label: 'right meow!' }),
//             timestamp(),
//             prettyPrint()
//           ),
//             }),
//     ],
//     exceptionHandlers:[new transports.File({filename : "/home/dineshreddy/Desktop/winston-logger/logs/info-file.log"})]
// })

module.exports = logger