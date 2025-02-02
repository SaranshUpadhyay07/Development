const fs=require("fs");

fs.writeFile("message.txt", "Hello from NodesJS!", (err) => {
    if(err) throw err;
    console.log("The file has been Saved!");
} )

fs.readFile("message.txt","utf-8", (err, data) =>{
    if(err) throw err;
    console.log(data);
})

