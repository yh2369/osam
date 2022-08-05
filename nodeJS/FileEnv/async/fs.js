const fs = require("fs/promises");

const content = "Hello World";

async function helloWorld()
{
    try {
        await fs.writeFile("./hello.txt", content);
        const data = await fs.readFile("./hello.txt", {encoding:"utf-8"});

        console.log(data);
    }
    catch(err)
    {
        console.error(err);
    }
}

helloWorld();