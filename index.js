const express=require("express")
const app=express()
const cors=require("cors")
const bodyParser=require("body-parser")
const port=6200;


app.use(bodyParser.urlencoded({
	extended:true
}))

app.use(bodyParser.json())

app.use(cors())

app.get("/",(req,res)=>{
	res.send("empty route")
})

app.post("/newData",(req,res)=>{
	//console.log(req.gody)
	//const name=req.body.name,age=req.body.age
	const {name,password,gender,select}=req.body;
	console.log(name,password,gender,select)
	res.send("added")

})


app.listen(port,()=>console.log("server is running on port 6200 "))