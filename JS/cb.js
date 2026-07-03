function placeOrder(cb){
    console.log("payment is in progress");
    setTimeout(function(){
        console.log("payment successfull");
        cb()
    },2000)
}

function prepareFood(cb){
    console.log("preparing food");

    setTimeout(()=>{
        console.log("food is prepared");
        cb()
    },3000)
}

function pickUpFood(cb){
    console.log("delivery man is on the way to restaurant");

    setTimeout(()=>{
        console.log("Delivery man reached restaurant");
        cb();
    },3000)
}

function deliverdFood(){
    console.log("delivery man in on the way to deliver");

    setTimeout(()=>{
        console.log("Delivery man has dlivered the food");
    },2000)
}




placeOrder(()=>{
    prepareFood(()=>{
        pickUpFood(()=>{
            deliverdFood()
        })
    });
}); 
