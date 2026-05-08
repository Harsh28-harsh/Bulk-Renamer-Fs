const fs = require('fs');
const replaceThis = "chikky"
const replaceWith = "jacker"
try{

    fs.readdir ( "data" , (error , data)=>{
        console.log(data);
        for(let i = 0; i < data.length; i++){
            const item = data[i];
            const newFile = "data/" + item.replaceAll(replaceThis , replaceWith)
            fs.rename ("data/" + item  , newFile , ()=>{
                console.log("renamed successfull")
            })
        }

        
    })
}
catch(error){
    console.log(error)
}
