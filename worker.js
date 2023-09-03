// self.onmessage = (e) => {
//     const workerResult = `Result: ${1000000 * 100000}`;
//     self.postMessage(workerResult);
// };


function GetRemaingAmount(cb){
    console.log("Remiaing FN");
    setTimeout(()=>{
        cb()
        cb()
        cb()
        cb()
        cb()
    }, 0)
}

function GetRemaingAmountPromise(){
    return  new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve("Hi From Promise")
                resolve()
                resolve()
                resolve()
                resolve()
            }, 0)
    })
}

export {GetRemaingAmount ,  GetRemaingAmountPromise }