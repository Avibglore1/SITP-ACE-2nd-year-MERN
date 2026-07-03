const p1 = new Promise((resolve,reject)=>{
    if(true){
        resolve({name: "Avi", gender: "M"})
    }
   reject(`Erroe 404: Page not found`)
})

p1
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log(error)
})