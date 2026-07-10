const root = ReactDOM.createRoot(document.getElementById("root"));
 
const bg = {backgroundColor: "yellow"};
function Details(props){
    return (
        <>
            <h1 style={bg}>My name is {props.name} </h1>
            <h2>My age : {props.age + 25}</h2>
        </>
    
    ) 
    
}


// 45 + "45" = 4545

// name:
// college:
// course:
// 




root.render(<Details name={"Avinash"} age={45}/>)




