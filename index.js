import express from "express"
import { add, greet } from "./file2";


const app = express()



greet();
console.log(add(1,2));

app.listen(4000,()=>{
    console.log("server running on port 4000")
})