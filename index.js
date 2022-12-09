const express=require("express")
const app=express()
const bodyParser=require("body-parser")
const cors=require("cors")
const Register=require("./registerschema.js")
const mongoose=require("mongoose")
const port=4000;
app.use(bodyParser.urlencoded({
	extended:true
}))
app.use(bodyParser.json())
app.use(cors())
mongoose.connect("mongodb+srv://jahnavichanapathi:jahnavi@cluster0.eckk9p7.mongodb.net/seconddb?retryWrites=true&w=majority")
.then(()=>{
	console.log("connected mongodb database")
})
.catch((err)=>{
	console.log(err)

})
app.post("/add",(req,res)=>{
	const username="dummy",password="dummy",id="dummy"
	const newUser=new Register({
		username,password,id
	})
	newUser.save()
	res.send("dummy")
})


app.get("/",(req,res)=>{
	res.send("server is started")
})
app.listen(port,()=>console.log("server is connected to port"))