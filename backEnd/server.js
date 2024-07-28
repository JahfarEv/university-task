const connectDB = require('./src/config/connectDB')
const app = require('./app')

connectDB()

const port = process.env.PORT;
app.listen(port,()=>{
    console.log(`server running on ${port}`);
});