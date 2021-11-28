const {writeFile} = require('fs')
const write =(url,data)=>{
    return writeFile(url,'\ufeff' + data, { encoding: 'utf8' },(err,result)=>{
        if(err){ 
            console.log(err)
            return 
        }
        console.log("Vô đây write file")
    })
}
module.exports = write