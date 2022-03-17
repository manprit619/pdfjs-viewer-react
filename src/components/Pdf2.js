


import React from 'react'
import "./Pdf.css"



 const Pdf2 = ({ height, width, url2}) => {

 
   
   const path = 'lib/web/vi.html'
    let pdfPath2 = url2 ? path + '?file1=' + url2 : path;
   
      
   
     function iframefunction (e) {
    
     //console.log(e)
        var iframedata = document
         .getElementById("goku")

         iframedata.addEventListener("click", function (e) {
            e.preventDefault()
        })
    
    }

    return (                
    <div className="back">
        <div className="ok" style={{ width, height }}>
                 <iframe 
            // sandbox="allow-same-origin allow-scripts allow-forms" 
             target="_parent"
              onClick ={(event)=> iframefunction(event)}
                id="goku"
                title={pdfPath2}
                    width='100%'
                    height='100%'
                    src={pdfPath2} 
                    >
                    </iframe> 
      



           
        </div>
        </div>
      

        
        );
    }
    
    

export default Pdf2
