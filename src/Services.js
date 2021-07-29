import React from 'react'
import Pdf2 from './components/Pdf2'
import "./Services.css"
// import { IFrame } from "./IFrame";



function Services() {
    return (
        <div className="second">
                          <h1 >Pdf2</h1>
                          <Pdf2 height='100vh' width='100%' sandbox/>  


            {/* <IFramPDf2e height='100vh' width='100%'/> */}
        </div>
    )
}

export default Services
