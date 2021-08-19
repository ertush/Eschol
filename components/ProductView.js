import {useState} from 'react'
import {Hexagon} from '../components/Hexagon'
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/solid"


function ProductView({id, hexaPosition, imageCircle, text, info, onPressCb, cardHeight, chevronPosition}) {

    const [hiddenCapital, setHiddenCapital] =  useState(true)
    const [hiddenRefinancing, setHiddenRefinancing] =  useState(true)
    const [hiddenIPO, setHiddenIPO] =  useState(true)
    const [hiddenESG, setHiddenESG] =  useState(true)
    const [hiddenImpact, setHiddenImpact] =  useState(true)
    const [hiddenProject, setHiddenProject] =  useState(true)

    const [chevronOpen, setChevronOpen] = useState(true)

    const [clickHandler, setClickHandler] = useState(1)

    const chevronClickHandler = () => {
      setChevronOpen(!chevronOpen)
      switch(id){
          case 1:
            setClickHandler(1)
            handleClick(hiddenCapital, setHiddenCapital, clickHandler)
            break;

            case 2:
            setClickHandler(2)
            handleClick(hiddenRefinancing, setHiddenRefinancing, clickHandler)
            break;

            case 3:
            setClickHandler(3)
            handleClick(hiddenIPO, setHiddenIPO, clickHandler)
            break;

            case 4:
            setClickHandler(4)
            handleClick(hiddenESG, setHiddenESG, clickHandler)
            break;

            case 5:
            setClickHandler(5)
            handleClick(hiddenProject, setHiddenProject, clickHandler)
            break;

            case 6:
            setClickHandler(6)
            handleClick(hiddenImpact, setHiddenImpact, clickHandler)
            break;

         
      }
    }

    const handleClick = (state, setter, handlerId) => {
        const setters = [setHiddenCapital, setHiddenRefinancing, setHiddenIPO, setHiddenESG, setHiddenProject, setHiddenImpact];

        setters.splice((handlerId - 1), 1)

        setters.forEach(setter => {
            setter(true)
        })

        setter(!state)
        onPressCb(!state, handlerId)
        console.log(`${handlerId} has been clicked`)
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
            return hiddenProject;
          case 6:
            return hiddenImpact;
        }
    }

    return (
      <div>
    
        <div 
        className={`justify-center cursor-pointer relative ml-[16%] ${getState(clickHandler) ? 'h-auto w-[90%] md:w-[70%]' : cardHeight.concat(' ml-0 w-[300px] md:w-[400px]')} flex hover:scale-105 transform transition duration-200 ease-out`}>
         
            {/* banner image */}
            <div
            
            className="relative z-10">
            {imageCircle}
            <div className="z-20 w-full md:h-[200px] h-[152px] absolute top-0 rounded-t-lg bg-primary opacity-30"></div>
            {
              chevronOpen ? 
              <ChevronRightIcon onClick={chevronClickHandler} className={`z-30 absolute hover:flex hover:justify-center hover:items-center hover:border hover:rounded-full hover:p-1 hover:border-secondary top-2 ${chevronPosition}  w-10 h-10 text-secondary`} />
              :
              <ChevronDownIcon onClick={chevronClickHandler} className={`z-30 absolute hover:flex hover:justify-center hover:items-center hover:border hover:rounded-full hover:p-1 hover:border-secondary top-2 ${chevronPosition}  w-10 h-10 text-secondary`} />
            }
       
           
            </div>

            {/* {hexaStyles, imageSrc, text, textStyles} */}
          
            {/* hexagon */}
            <Hexagon
              hexaStyles={hexaPosition.concat(`${getState(clickHandler) ? ' cursor-text z-20': ' hidden'}`)}
              text={text}
              textStyles={'capitalize text-6xl font-semibold text-secondary y-42 '}
            />

          <div hidden={getState(clickHandler)} className="z-0 absolute top-8 w-[300px] md:w-[400px] transition duration-200 pb-6 border-2 rounded-t-lg shadow-2xl rounded-b-lg h-auto flex justify-start">
            {info}
          </div>
            
          </div>

          
      </div>
    );
}

export default ProductView
