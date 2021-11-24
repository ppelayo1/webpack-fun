import React from "react";

function App() {

    const googleLogin = () =>{
        const xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                console.log(this.responseText);
                window.open(this.responseText);
            }
        };
        xhttp.open("GET", "./login", true);
        xhttp.send();
    }

    return (
        <>
            <p>
                hi from react
                <button type="button" onClick={()=>{googleLogin();}}>Google is fun</button>
            </p>
        </>
    );
}

export default App;