require("dotenv").config()


 const config = {     
    database:{
      mongoURI:process.env.MONGO_URI,
      port:process.env.PORT
    },
    env:process.env.NODE_ENV
}


module.exports={config}
