const {readFile, writeFile} = require('fs')
const {promisify} = require('util')

const promisifiedReadFile = promisify(readFile)
const promisifiedWriteFile = promisify(writeFile)

function customReadFile(name,encoding){
    return new Promise(function(resolve,reject){
        readFile(name,encoding,(err,data)=>{
            if(err)
            {
                return reject(err);
            }
            resolve(data)
        })
    })
}

// async - await

async function main() {
    try {
        const content = await promisifiedReadFile('./phonebook.json','utf-8')
        console.log('content')
        await promisifiedWriteFile('./phonebook-promise.json',content)
        const content2 = await customReadFile('./phonebook-promise.json','utf-8')
        console.log(content2)
    } catch (error) {
        console.log('error')
    }
}

main();


// promisifiedReadFile('./phonebook.json','utf-8')
// .then((content)=>{
//  return promisifiedWriteFile('./phonebook-promise.json','utf-8',content)
// })
// .then(()=>{
//  return promisifiedReadFile('./phonebook-promise.json','utf-8')
// })  
// .then((contentcopy)=>{
//     console.log(contentcopy)
// })
// .catch(()=>{
//     console.log('error occured')
// })

// readFile('./phonebook.json','utf-8',(err,content) =>{
//     if(err){
//         console.log('error occur in reading file')
//     }
//     writeFile('./phonebook-callback.json', content,()=> {
//         readFile('./phonebook-callback.json','utf-8',(err2,contentcopy) => {
//             if(err){
//                 console.log('error occur')
//             }
//             console.log(contentcopy)
//         })
            
//     })
// })