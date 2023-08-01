const express=require("express");
const bodyParser=require("body-parser");
const ejs=require("ejs");

const date=require(__dirname + "./date.js")

const app=express();
app.set('view engine', 'ejs');
app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended:true}));
const items=["brish","Breakfast","Lecture"];
let workItems=[];

app.get("/", function(req,res){

   let day=date.getDate();
   res.render("list",{listTitle:day, newListItems:items});
})

app.get("/work",function(req,res){
    res.render("list",{listTitle:"Work List", newListItems:workItems})
})

app.post("/",function(req,res){
 
    var item=req.body.newItem;

    if(req.body.list==="work"){
        workItems.push(item);
        res.redirect("./work");
    }else{
        items.push(item);
        res.redirect("/");
    }

   

})



app.post("./work",function(req,res){
    let item=req.body.newItem;
    workItems.push(item);
    res.redirect("/work");
})

app.get("./about",function(req,res){
    res.render("about")
})

app.listen(3000,function(){
    console.log("server is running at port 3000");
})