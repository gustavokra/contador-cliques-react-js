import React, { useState } from 'react'
import './Contador.css'
function Contador() {
    const [count, setCount] = useState(0)

    return (
        <div className='Contador'>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>Clique</button>
        </div>
    )
}

export default Contador