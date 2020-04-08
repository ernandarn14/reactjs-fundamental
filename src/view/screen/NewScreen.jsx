import React from 'react'

const Komponen = () => {
    const btnHandler = () => {
        alert('thank you for click me')
    }
    let hello = 'coba hai'
    return (
        <div>
            <button onClick={btnHandler}>Click Me</button>
            <p>{hello}</p>
        </div>

    )
}

const NewScreen = () => {
    return (
        <div>
            <h1>Coba Layar Baru</h1>
            <Komponen />
        </div>
    )
}

export default NewScreen;