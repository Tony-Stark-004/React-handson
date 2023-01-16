import React, {useState} from 'react'
import Class from './Class'
import './App.css'


function App() {

    const [dikhJa, updateTokar] = useState(false)

    const clickHandler = () => {
            updateTokar(!dikhJa)
    }

     console.log(dikhJa);

     const [lightBandKar, updateKar] = useState({color : "black", fontSize: "medium"})

    const lightBand = () => {
           const css = {
            color: "cyan",
            backgroundColor : "black",
            fontSize: "small"
           }
           updateKar(css)
    }

    // updateKar({color : "black"})

    return (
        <div className='flex'>
            <div>
                <h1>function component</h1>
                <button className="app-btn" onClick={clickHandler}>Function Component</button>
                {dikhJa && <h2 onClick={lightBand} style = {lightBandKar}>hello, i am function component. my styling is done using useState</h2>}
            </div>

            <div>
                <Class />
            </div>
        </div>
    )
}

export default App