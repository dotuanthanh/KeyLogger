const {writeFile} = require('fs')
const { resolve } = require('path')
const write = async(url,data)=>{
    return await writeFile(url,'\ufeff' + data, { encoding: 'utf8' },(err,result)=>{
        if(err){ 
            console.log(err)
            return 
        }
        console.log("Vô đây write file..........."+" "+data)
    })
}
module.exports = write