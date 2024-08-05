import React from "react"
import './App.css'
import logo from './logo.svg';
import Contador from "./Contador"


function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Click to increment the number
                </p>
                <Contador></Contador>

                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                > Github
                </a>
            </header>
        </div>
    )
}

export default App