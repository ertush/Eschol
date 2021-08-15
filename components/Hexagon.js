

function HexagonAlt ({hexaStyles}){
    return (
        <svg className={hexaStyles} version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 483.013 483.013" style={{enableBackground:"new 0 0 483.013 483.013"}}  space="preserve">
       

     {/* style={{strokeWidth:"2", stroke:"currentColor"}} */}
    <path   d="M477.043,219.205L378.575,48.677c-7.974-13.802-22.683-22.292-38.607-22.292H143.041c-15.923,0-30.628,8.49-38.608,22.292
        L5.971,219.205c-7.961,13.801-7.961,30.785,0,44.588l98.462,170.543c7.98,13.802,22.685,22.293,38.608,22.293h196.926
        c15.925,0,30.634-8.491,38.607-22.293l98.469-170.543C485.003,249.99,485.003,233.006,477.043,219.205z" fill={'currentColor'}  />
    
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
   
    </svg>

    )
}


function Hexagon({hexaStyles, imageSrc, text, textStyles}) {

  
    const yVal = Number(textStyles.match(/y-.*/)[0].split('-')[1])
    const textArr = text?.split('-')

    return (
           
            <svg className={hexaStyles?.concat(" h-full w-1/2 text-primary absolute top-0")} version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 483.013 483.013" style={{enableBackground:"new 0 0 483.013 483.013"}}  space="preserve">
                {
                    imageSrc !== '' && (
                    <defs>
                        <pattern id="img1" patternUnits="userSpaceOnUse" width='800' height='500'>
                             <image href={imageSrc}  x="0" y="0" width="900" height="500"/>
                        </pattern>
                     </defs>
                    )
                }
                 

             {/* style={{strokeWidth:"2", stroke:"currentColor"}} */}

               {/* <>
                        <text className={textStyles} x="50%" y="42%" style={{strokeWidth:"3px", textAnchor:"middle"}} fill="currentColor"  dy=".3em">{text.split(' ')[0]}</text>
                        <text className={textStyles} x="50%" y="57%" style={{strokeWidth:"3px", textAnchor:"middle"}} fill="currentColor" dy=".3em">{text.split(' ')[1]}</text>
                    </>   */}

            <path   d="M477.043,219.205L378.575,48.677c-7.974-13.802-22.683-22.292-38.607-22.292H143.041c-15.923,0-30.628,8.49-38.608,22.292
                L5.971,219.205c-7.961,13.801-7.961,30.785,0,44.588l98.462,170.543c7.98,13.802,22.685,22.293,38.608,22.293h196.926
                c15.925,0,30.634-8.491,38.607-22.293l98.469-170.543C485.003,249.99,485.003,233.006,477.043,219.205z" 
                fill={imageSrc?.length > 1 ? 'url(#img1)' : 'currentColor'}  />
             {
              
                textArr.length > 1 ? ( 
            
                    textArr.map(word => {

                       const y = (() => (textArr.indexOf(word) === 0 ? yVal : yVal + (15 * textArr.indexOf(word))))()
                       
                       return (
                        <text key={word} className={textStyles} x="50%" y={`${y}%`} style={{strokeWidth:"3px", textAnchor:"middle"}} fill="currentColor"  dy=".3em">{word}</text>
                       ) 
                    })
                  
                  ) : 
                  ( <text className={textStyles} x="50%" y="50%" style={{strokeWidth:"3px", textAnchor:"middle"}}  fill="currentColor"  dy=".3em">{text}</text> )
                 
                 
           
             }
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
           
            </svg>

       
    )
}



export {
     Hexagon,
     HexagonAlt
}

