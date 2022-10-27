const {createLogger, transports,format, level} = require('winston')
const { combine, timestamp, label, prettyPrint } = format;


const logger = createLogger({
    transports : [
        new transports.File({filename : '/home/dineshreddy/Desktop/winston-logger/logs/log-file.log',
        level : 'error',
        format: combine(
            label({ label: 'right meow!' }),
            timestamp(),
            prettyPrint()
          ),
            }),
    ],
    exceptionHandlers:[new transports.File({filename : "/home/dineshreddy/Desktop/winston-logger/logs/info-file.log"})]
})

module.exports = logger