import React from 'react'
import PdfJSViewer from './components/PdfJSViewer'
import "./Home.css"

function Home() {
    return (
        <div className="home">
            <h1 >Pdf1</h1>
            <PdfJSViewer height='100vh' width='100%'/>
        </div>
    )
}

export default Home
