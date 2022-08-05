const fs = require("fs");

const content = "Hello World";

try{
    fs.writeFileSync("./hello.txt", content);
}
catch(err)
{
    console.error(err);
}

try{
    const data = fs.readFileSync("./hello.txt", "utf-8");
    console.log(data);
}
catch(err){
    console.error(err);
}