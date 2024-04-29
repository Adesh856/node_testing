
const winston = require('winston');
const { config } = require('../config');
require('winston-mongodb');

const logger = winston.createLogger({
    // Define the levels of logs
    level: 'info',  // Minimum level to log
    format: winston.format.combine(
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        winston.format.json()
    ),
    transports: [
        // Console transport
        new winston.transports.Console({
            level: 'debug',  // Adjust the level as needed for console output
            format: winston.format.combine(
                winston.format.colorize(),  // Colorize log output
                winston.format.printf(
                    info => `${info.timestamp} ${info.level}: ${info.message}`
                )
            )
        }),
        // MongoDB transport
        new winston.transports.MongoDB({
            level: 'info',  // Adjust the level as needed for MongoDB storage
            db:config.database.mongoURI ,  // MongoDB connection string
            options: {
                useUnifiedTopology: true
            },
            collection: 'logs',
            storeHost: true,
            format: winston.format.metadata({
                fillExcept: ['message', 'level', 'timestamp', 'label']
            })
        })
    ]
});

module.exports = logger;
