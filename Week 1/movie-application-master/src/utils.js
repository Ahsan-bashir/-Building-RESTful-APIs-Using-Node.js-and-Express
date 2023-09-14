getRequestData = (req) => {
  return new Promise((resolve, reject) => {
    try {
      //new comments
      let body = "";
      req.on("data", (chunk) => {
        body += chunk.toString();
      });
      req.on("end", () => {
        resolve(body);
      });
    } catch (error) {
      reject(error);
    }
    


  });
}

module.exports = getRequestData