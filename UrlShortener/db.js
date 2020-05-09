const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://yashboby:y@sh@ndboby123@cluster0-7vwrd.mongodb.net/BestWishes",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
})
.then(()=>{
    console.log("Db connected,yo")
})
.catch((err)=>{
console.log("error message",err)
})
