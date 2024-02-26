const fs =require("fs")

///added logic//////////////
const addedPerson=(id,fname,lname,age,city)=>{
    const allData=loadData()
  const personsArr=  allData.filter((item)=>{
return item.id==id
    })
    if(personsArr.length==0){
        allData.push({
            id:id,
            fname:fname,
            lname:lname,
            age:age,
            city:city
        })
        savedData(allData)
    }else{
        console.log("duplicated id")
    }
}

///////////////////////////////////////////////////////////
///delete logic/////////////////////////////////
const deleteFunc=(id)=>{
    const allData=loadData()
const finalPrsons=allData.filter(item=>{
    return item.id!==id
})
savedData(finalPrsons)
}
///////read logic///////////////////////////
const readFunc=(id)=>{
    const allData=loadData()
const selectedPerson=allData.find(item=>{
  return  item.id==id
})
if(selectedPerson){
    console.log(selectedPerson)
}else{
    console.log("person not found")
}
}
//////////////////////////////////////////////////////////////////
///////list logic/////////////////////////
const list=()=>{
const allData=loadData()
allData.forEach(item => {
    console.log(item.fname , item.age,item.city) 
});
}
/////////////////////////////////////////////////////////////////
///loaded data/////////
const loadData=()=>{
try{
    const dataInJson=fs.readFileSync("data1.Json").toString()
return JSON.parse(dataInJson)
}catch{
  return  []
}
}
/////////////////////////////////////////////////////////////

///saved data////////////
const savedData=(allData)=>{
    const savedDataJson=JSON.stringify(allData)
    fs.writeFileSync("data1.Json",savedDataJson)
}
module.exports={
    addedPerson,
    deleteFunc,
    readFunc,
    list
}
