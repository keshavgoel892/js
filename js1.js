let a=9
let val=new Promise(function(resolve,reject){
    if(a==9){
        resolve("hii")
    }
    else{
        reject("f")
    }

})
val.then(function(){
    console.log("d")
    }).catch(function(e){
        console.log(e)
})
async function abc() {
    try{
    let data =await val;
    console.log(data)
    }
    catch(e){
    console.log(e)
    }
    
}
