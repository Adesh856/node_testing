const express = require("express")
const { config } = require("./config")
const { connection } = require("./db/database")
const logger = require("./helper/logger")
const app = express()


app.use(express.json())


app.get("/",(req,res)=>{
  res.status(200).send("Hi from node app")
})



app.listen(config.database.port,async()=>{
      try {
        await connection
        logger.info("Database is connected")
      } catch (error) {
        console.log({error})
        logger.info("Database is not connected")
      }
})