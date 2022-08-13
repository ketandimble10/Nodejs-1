// import express, { response } from "express";
// import fs from 'fs';

// const app = express();     // create express application
// app.use(express.json())   //helps in processing the request and provide body data
// const PORT  = process.env.PORT || 8080  // passing the port value from ecosystem.config file
// // POST - Create a new record
// // GET - Read Data
// // PUT PATCH - Update
// // DELETE - Delete

// app.get('/',(req,res)=>{    // req = user sending request // res - content send from user to server
//     fs.readFile('./phonebook.json',(err,data)=>{
//         if (err){
//             res.status(500).send('internal server error')
//             return false;  // if error code execution stops here
//         }
//         res.setHeader('Content-Type','application/json')
//         res.send(data)
//     })
// })

// //  send data to the application
// app.post('/',(req,res)=>{    //post the data from postmon to server 
//     fs.readFile('./phonebook.json',(err,data)=>{
//         if (err){
//             res.status(500).send('internal server error')
//             return false;  // if error code execution stops here
//         }
//         const content = JSON.parse(data)  
//         content.push(req.body) // add new record into the content // it returns null use middleware

//         fs.writeFile('./phonebook.json',JSON.stringify(content),()=>{
//             res.send(content)
//         });
//     })
// })
// app.get('/products',(req,res)=>{
//     res.send('This is the products page')
// })
// app.listen(PORT, () =>{
//     console.log(`server started at ${PORT}`)
// })




import express from "express";
import fs from "fs";

const app = express();

app.use(express.json())

const PORT =  3000

// POST         Create
// GET          Read
// PUT PATCH    Update
// DELETE       Delete

app.get("/", (request, response) => {
  fs.readFile("./phonebook.json", (err, data) => {
    if (err) {
      response.status(500).send("Internal Server Error.");
      return false;
    }
    response.setHeader("content-type", "application/json");
    response.send(data);
  });
});

app.post("/", (request, response) => {
  fs.readFile("./phonebook.json", (err, data) => {
    if (err) {
      response.status(500).send("Internal Server Error.");
      return false;
    }
    const content = JSON.parse(data);

    content.push(request.body);

    fs.writeFile("./phonebook.json", JSON.stringify(content), () => {
      response.send(content);
    });
  });
});

app.get("/products", (request, response) => {
  response.send("This is the products page.");
});

app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});
