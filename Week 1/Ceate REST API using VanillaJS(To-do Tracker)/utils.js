getReqData=(req)=>{
    return new Promise((resolve,reject)=>{
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