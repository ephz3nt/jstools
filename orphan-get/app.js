const axios = require('axios')
const fs = require('fs')

let pageNum = 2
async function doGet(i) {
    let url = ``
    const {data} = await axios.get(url)
    for (i in data) {
        if (data[i]['valid'] == true){
        fs.appendFileSync("orphan.txt",`${data[i]['hash']}\n`,)
        console.log(data[i]['hash'])
        }
        
    }
}
async function start(pageNum){
    for (i=0; i<=pageNum; i++){
        await doGet(i)
    }
}
start(pageNum)
