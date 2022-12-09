const mongoose=require("mongoose")

const newUserSchema={
	username:String,
	password:String,
	id  :String
}

const Register=mongoose.model("employees",newUserSchema)

module.exports=Register