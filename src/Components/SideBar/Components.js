import { faAnchorCircleCheck, faArrowDown, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Authentication from './Authentication';
import UIElements from './UIElements';

const Components = ({handler}) => {
    const [arrow,setArrow]=useState(false)
    const arrowHandler=()=>{
        setArrow(!arrow)
    }
    return (
        <div>
             <div className='flex justify-between rounded-md  hover:bg-cyan-800 p-1'>
        
             <FontAwesomeIcon className='mt-1' icon={faAnchorCircleCheck}/>
            <span className='text-slate-200  ml-0.5'>UI Elements</span>
            {arrow?<span onClick={arrowHandler} className='p-0.5 ml-2'><FontAwesomeIcon icon={faArrowDown}/></span>   :<span onClick={arrowHandler} className='p-1 ml-2'><FontAwesomeIcon icon={faArrowRight}/></span>}
            <br/>
            
          
        </div>
        {/* {arrow &&  <Authentication handler={handler}/>} */}
     
        {arrow &&  <UIElements handler={handler}/>}
          
        </div>
    );
};

export default Components;