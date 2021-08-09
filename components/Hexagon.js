

function Hexagon({w, h, imageSrc, isImage}) {
    return (
        <>
             
            <svg className={w.concat(` ${h}`)} version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 483.013 483.013" style={{enableBackground:"new 0 0 483.013 483.013"}}  space="preserve">
            

            <defs>
            <pattern id="img1" patternUnits="userSpaceOnUse" width='600' height='400'>
                 <image xmlns="http://www.w3.org/2000/svg" href={imageSrc} xlink="http://www.w3.org/1999/xlink" x="0" y="0" width="600" height="400"/>
            </pattern>
            </defs>


            <path  d="M477.043,219.205L378.575,48.677c-7.974-13.802-22.683-22.292-38.607-22.292H143.041c-15.923,0-30.628,8.49-38.608,22.292
                L5.971,219.205c-7.961,13.801-7.961,30.785,0,44.588l98.462,170.543c7.98,13.802,22.685,22.293,38.608,22.293h196.926
                c15.925,0,30.634-8.491,38.607-22.293l98.469-170.543C485.003,249.99,485.003,233.006,477.043,219.205z" fill={isImage ? 'url(#img1)' : 'currentColor'}  />
            
           
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

            

          
        </>
    )
}



export default Hexagon


