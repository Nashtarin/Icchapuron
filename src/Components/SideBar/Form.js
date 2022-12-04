import { faArrowDown, faArrowRight, faBook, faMobile, faPerson, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import FormControl from './FormControl';
import FormWidget from './FormWidget';

const Form = ({handler}) => {
    const [arrow,setArrow]=useState(false)
    const [foarrow,setfoArrow]=useState(false)
    const arrowHandler=()=>{
        setArrow(!arrow)
    }
    const foarrowHandler=()=>{
        setfoArrow(!foarrow)
    }
    return (
        <div className='ml-6'>
            <div className='flex justify-between rounded-md  hover:bg-cyan-800 p-1'>
        
        <FontAwesomeIcon className='mt-1' icon={faMobile}/>
       <span className='text-slate-200  ml-0.5'>Form Control</span>
       {arrow?<span onClick={arrowHandler} className='px-5 ml-2 text-xs mt-1'><FontAwesomeIcon icon={faArrowDown}/></span>   :<span onClick={arrowHandler} className='px-5 ml-2 text-xs mt-1'><FontAwesomeIcon icon={faArrowRight}/></span>}
       <br/>
       
     
   </div>
     {arrow &&  <FormControl handler={handler}/>}
     <div className='flex justify-between rounded-md  hover:bg-cyan-800 p-1'>
        
             <FontAwesomeIcon className='mt-1' icon={faUser}/>
            <span className='text-slate-200 '>Form Widget</span>
            {foarrow?<span onClick={foarrowHandler} className='px-2 ml-3 text-xs mt-1'><FontAwesomeIcon icon={faArrowDown}/></span>:<span onClick={foarrowHandler} className='px-2 ml-3 text-xs mt-1'><FontAwesomeIcon icon={faArrowRight}/></span>}
            <br/>
            
          
        </div>
          {foarrow &&  <FormWidget handler={handler}/>}
            
        </div>
    );
};

export default Form;