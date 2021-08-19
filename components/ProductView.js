import {useState} from 'react'
import {Hexagon} from '../components/Hexagon'


function ProductView({id, hexaPosition, imageCircle, text, info, onPressCb, cardHeight}) {

    const [hiddenCapital, setHiddenCapital] =  useState(true)
    const [hiddenRefinancing, setHiddenRefinancing] =  useState(true)
    const [hiddenIPO, setHiddenIPO] =  useState(true)
    const [hiddenESG, setHiddenESG] =  useState(true)
    const [hiddenImpact, setHiddenImpact] =  useState(true)
    const [hiddenProject, setHiddenProject] =  useState(true)

    const [clickHandler, setClickHandler] = useState(1)

    const handleClick = (state, setter) => {
        setter(!state)
        onPressCb(!state)
    }

    const getState = (handlerState) => {
        switch (handlerState) {
          case 1:
            return hiddenCapital;
          case 2:
            return hiddenRefinancing;
          case 3:
            return hiddenIPO;
          case 4:
            return hiddenESG;
          case 5:
            return hiddenImpact;
          case 6:
            return hiddenProject;
        }
    }

    return (
      <div>
    
        <div onClick={() => {
          switch(id){
              case 1:
                handleClick(hiddenCapital, setHiddenCapital)
                setClickHandler(1)
                break;
                case 2:
                handleClick(hiddenRefinancing, setHiddenRefinancing)
                setClickHandler(2)
                break;
                case 3:
                handleClick(hiddenIPO, setHiddenIPO)
                setClickHandler(3)
                break;
                case 4:
                handleClick(hiddenESG, setHiddenESG)
                setClickHandler(4)
                break;
                case 5:
                handleClick(hiddenImpact, setHiddenImpact)
                setClickHandler(5)
                break;
                case 6:
                handleClick(hiddenProject, setHiddenProject)
                setClickHandler(6)
                break;

          }
        }} 
        className={`justify-center cursor-pointer relative  ml-[15%] ${getState(clickHandler) ? 'h-auto w-[70%]' : cardHeight.concat(' ml-0')} flex hover:scale-105 transform transition duration-200 ease-out`}>
         
            {/* banner image */}
            <div className="relative z-10">
            {imageCircle}
            </div>

            {/* {hexaStyles, imageSrc, text, textStyles} */}
          
            {/* hexagon */}
            <Hexagon
              hexaStyles={hexaPosition.concat(`${getState(clickHandler) ? ' z-20': ' hidden'}`)}
              text={text}
              textStyles={'capitalize text-6xl font-semibold text-secondary y-42 '}
            />

          <div hidden={getState(clickHandler)} className="z-0 absolute top-8 w-[300px] transition duration-200 pb-6 border-2 rounded-t-lg shadow-2xl rounded-b-lg h-auto flex justify-start">
            <p className="px-4 pb-2 pt-32 text-justify text-md font-normal text-primary">{info}</p>
          </div>
            
          </div>

          
      </div>
    );
}

export default ProductView
