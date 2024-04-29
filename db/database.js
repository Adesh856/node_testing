const mongoose = require("mongoose")
const {config} = require("../config")
const logger = require("../helper/logger")
require("dotenv").config
logger.info(config.database.mongoURI)
const connection = mongoose.connect(config.database.mongoURI)

module.exports={connection}
