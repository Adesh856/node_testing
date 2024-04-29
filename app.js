const express = require("express")
const { config } = require("./config")
const { connection } = require("./db/database")
const logger = require("./helper/logger")
const { execSync } = require('child_process');
const app = express()
const ipAddress = execSync('curl -s ip.me.uk').toString().trim();
app.use(express.json())


app.get("/",(req,res)=>{
  res.status(200).send("Hi from node app")
})



app.listen(config.database.port,async()=>{
      try {
        await connection
        logger.info("Database is connected"+` http://${ipAddress}:${config.database.port}`)
      } catch (error) {
        console.log({error})
        logger.info("Database is not connected")
      }
})