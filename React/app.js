const root = ReactDOM.createRoot(document.getElementById("root"));


function Header(){
    return <header>This is official website page of fifa</header>
}

function Main(props){
    return <main> i will have all the details of matches {props.match}</main>
}

function Footer(){
    return <footer>Thanks for visiting us</footer>
}

function App(){
    return (
        <>
        <Header/>
        <Main match = "USA vs Russia"/>
        <Footer/>
        </>
    )
}

root.render(<App/>)


// everything is a component



