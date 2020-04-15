class cpuDetailsController{ 
 
getDetails= (req, res) => {
    console.log('controllere')
    const CpuDetails=require('../service/cpudetails')
    const cpuDet=new CpuDetails();
    cpuDet.getDetails()
    .then(data =>res.json(data))

    .catch(err => res.send(err))


}
}
module.exports=cpuDetailsController;