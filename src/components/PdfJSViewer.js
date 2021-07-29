import React from 'react'
import "./Pdf.css"

const PdfJSViewer = ({ height, width, url }) => {
    const path = 'lib/web/viewer.html'
    let pdfPath = url ? path + '?file=' + url : path ;
    return (
        <div className ="pdf"   style={{ width, height }}>
            {
                <iframe
                allowfullscreen
                    title={pdfPath}
                    width='100%'
                    height='100%'
                    src={pdfPath}
                >
                </iframe>
                
            }
        </div>
    )
}
export default PdfJSViewer