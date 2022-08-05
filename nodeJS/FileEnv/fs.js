
/*
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
*/

const fs = require("fs/promises");

const content = "Hello World";

async function helloWorld()
{
    try {
        await fs.writeFile("process.env.FILE_PATH", content);
        const data = await fs.readFile(process.env.FILE_PATH, {encoding: "utf-8"});
        console.log(data);
    }
    catch(err)
    {
        console.error(err);
    }

}

helloWorld();