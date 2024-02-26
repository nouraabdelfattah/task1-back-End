const yargs=require("yargs")
const dataFile=require("./data")

/////////add/////
yargs.command({
    command:"add",
    describe:"To add person",
    builder:{
        id:{
            demandOption:true,
            type:"number"
        },
        fname:{
            describe:"first name of the person",
            demandOption:true,
            type:"string"
        },
        lname:{
            describe:"last name of the person",
            demandOption:true,
            type:"string"
        },
        age:{
            describe:"Age of the person",
            demandOption:true,
            type:"number"  
        },
        city:{
            describe:"city of the person",
            demandOption:true,
            type:"string"
        }

    },
    handler:(x)=>{
        dataFile.addedPerson(x.id,x.fname,x.lname,x.age,x.city)
    }

})
/////////////////////////////////////////////////////////////////////
//////delete/////////////////////////////////
yargs.command({
    command:"delete",
    describe:"to delete person",
    builder:{
        id:{
            demandOption:true
        }
    },
    handler:(x)=>{
        dataFile.deleteFunc(x.id)
    }
})
//////////////////////////////////////////////////////////////////////
//////read//////////////////////////////////
yargs.command({
    command:"read",
    describe:"to read data",
    builder:{
        id:{
            demandOption:true
        }
    },
    handler:(x)=>{
dataFile.readFunc(x.id)
    }
})
///////////////////////////////////////////////////////////////////////
////////list///////////////////////
yargs.command({
    command:"list",
    describe:"to show fname , age and city of persons",
    handler:()=>{
dataFile.list()
    }
})
yargs.parse()