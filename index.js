import express from 'express'
const app=express()

const PORT=process.env.port||3000


app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({'extended': 'true'}));
app.listen(PORT,()=>{
    console.log(`listen to port ${PORT}`)
})