

class CpuDetails{
  constructor(){}


getDetails () {
  const si = require("systeminformation");

  return new Promise((resolve, reject) => {

    si.cpu((err,data)=>{
      if (err){
        reject(err)
        return;
      }
      resolve(data)
         

    })
  })



}



}

module.exports=CpuDetails;

