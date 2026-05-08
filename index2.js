// fs module ko import kr rhe h (file system operation ke liye)
const fs = require('fs');
// path module import kr rhe h file ke path ko handle krne ke liye
const path = require('path')

const replaceThis = "rahul"
const replaceWith = "harsh"

const preview = false
// using folder variable hum "data" folder ka full path access kr reh h (file directory)
const folder = path.join(__dirname ,"data")

try{
    // folder ki files ka data access kr rhe h with using callback
    fs.readdir(folder,(error , data)=>{
        // console.log(data);
        // simple for loop 
        for(let i = 0; i < data.length; i++){
            // one by one indexing of files comes in item variable
            const item = data[i];
            // purani file ka full path 
            let oldFile = path.join(folder , item)
            // after rename the value we store in newfiles 
            let newFile = path.join(folder , item.replaceAll(replaceThis, replaceWith))
            // if preview got false and old file and new file not equal then if will execute 
            if(!preview && oldFile !== newFile){
                

                fs.rename(oldFile, newFile , (err)=>{
                    if(err){
                        console.log("error!", err)
                    }
                    else{
                        console.log("rename successfull")
                    }
                })
            }
            else{
                if("data/" + item !== newFile)console.log("data/" + item + "will be renamed to " + newFile)
            }
        }


        // fs.rename()

    })
}
catch(error){
    console.log(error)
}