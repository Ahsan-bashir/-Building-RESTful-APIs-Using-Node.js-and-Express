const { promises } = require("dns")

getReqData=(req)=>{
    return new promises((resolve,reject)=>{
    try {
        let body=""

        req.on('data',(chunks)=>{
            body+=chunks.toString()
        })

        req.on('end',()=>{
            resolve(body)
        })
    } catch (error) {
        reject(error)
    }
    })
}

module.exports=getReqData