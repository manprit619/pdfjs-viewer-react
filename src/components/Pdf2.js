// import React, { useState } from 'react'
// import "./Pdf.css"
// import { createPortal } from 'react-dom'
// // import { IFrame } from './iframe'



//  const Pdf2 = ({ height, width, url2, children, ...props }) => {

//     //let pdfPath2 = 'lib/web/a1afei.pdf'

//    //const path = 'lib/web/a1afei.pdf'
   
//    const path = 'lib/web/vi.html'
//     let pdfPath2 = url2 ? path + '?file1=' + url2 : path;

//     const [contentRef, setContentRef] = useState(null)

//     const mountNode = contentRef?.contentWindow?.document?.body
      

    
//     return (

      
           
                    
//         <div className="back">
//         <div className="ok" style={{ width, height }}>

//             { 
//                 <iframe id="goku"  
//                 {...props} ref={setContentRef}
                
//                 // sandbox="allow-same-origin allow-scripts allow-forms" 
//                 title={pdfPath2}

//                     width='100%'
//                     height='100%'
//                     src={pdfPath2} 
//                     >
//                           {mountNode && createPortal(children, mountNode)} 
//                 </iframe>
//             }
//         </div>
//         </div>
      

        
//         );
//     }
    
//     <script>

// </script>

// export default Pdf2


import React from 'react'
import "./Pdf.css"
// import { IFrame } from './iframe'



 const Pdf2 = ({ height, width, url2}) => {

    //let pdfPath2 = 'lib/web/a1afei.pdf'

   //const path = 'lib/web/a1afei.pdf'
   
   const path = 'lib/web/vi.html'
    let pdfPath2 = url2 ? path + '?file1=' + url2 : path;
   
      
   
    function iframefunction (e) {
        e.preventDefault();
        e.stopPropagation();
        debugger
        console.log(e)
        // var iframedata = document
        //  .getElementById("goku")

        //  iframedata.addEventListener("click", function (e) {
        //     e.preventDefault()
        // })
    
    }
    
    

    return (

      
           
                    
        <div className="back">
        <div className="ok" style={{ width, height }}>

            
              

                
                 <iframe 
                // sandbox="allow-same-origin allow-scripts allow-forms" 
                //target="_blank"
                onClick ={(event)=> iframefunction(event)}
        
                
                id="goku"
                title={pdfPath2}
                    width='100%'
                    height='100%'
                    src={pdfPath2} 
                    >
                        
       

                    </iframe> 
        
            <button onClick={()=> iframefunction()}>

<p>safdasfsafsafsafsafasf</p>

            </button>
        </div>
        </div>
      

        
        );
    }
    
    <script>




    </script>
    

export default Pdf2
