const Logger = require('../model/Logger')
const readfile = require('../common/readfile')
const FILE_URL = "./input.txt"

const update = async()=>{
    try {
        let data = await readfile(FILE_URL);
        console.log(data)
        await Logger.create(data)
    } catch (error) {
        console.log(error)
    }
}
module.exports = update