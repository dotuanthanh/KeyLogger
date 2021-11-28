const Logger = require('../model/Logger')
// const readfile = require('../common/readfile')
const {readFile} = require('fs')
const FILE_URL = "./input.txt"

const update = async()=>{
        try {
            // let data = await readfile(FILE_URL);
            await readFile('./input.txt', 'utf8', (err, result) => {
                console.log("vo day reading file ............")
                if (err) {
                  console.log(err)
                  return
               }
               console.log("reading result======="+result)
              return result 
            })
        
            // console.log("read data :" +data)
        
            // return data;
        }
        catch (error) {
            console.log(error)
        }
 
}
module.exports = update