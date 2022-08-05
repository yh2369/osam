const fs = require("fs");

const content = "Hello World";

fs.writeFile("./hello.txt", content, (err)=>{
    if(err){
        console.error(err);
    }

    fs.readFile("./hello.txt", "utf-8", (err, data) =>{
        if(err){
            console.error(err);
            return;
        }
        
        console.log(data);
    });
});