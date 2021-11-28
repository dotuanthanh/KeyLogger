const {readFile} = require('fs')

const readfile = async (url)=>{
    console.log("reading file ............1")
     await readFile(url, 'utf8', (err, result) => {
        console.log("reading file ............2")
        if (err) {
          console.log(err)
          return
       }
       return result   
    })
       
}
module.exports = readfile
