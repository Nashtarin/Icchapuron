import { faAnchorCircleCheck, faArrowDown, faArrowRight, faChartColumn, faFileWaveform, faIcons, faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Authentication from './Authentication';
import Form from './Form';
import Table from './Table';
import UIElements from './UIElements';

const Components = ({handler}) => {
    const [arrow,setArrow]=useState(false)
    const [foarrow,setfoArrow]=useState(false)
    const [tarrow,settArrow]=useState(false)
    const arrowHandler=()=>{
        setArrow(!arrow)
    }
    const foarrowHandler=()=>{
        setfoArrow(!foarrow)
    }
    const tarrowHandler=()=>{
        settArrow(!tarrow)
    }
    return (
        <div>
             <div className='flex justify-between rounded-md  hover:bg-cyan-800 p-1'>
        
             <FontAwesomeIcon className='mt-1' icon={faAnchorCircleCheck}/>
            <span className='text-slate-200'>UI Elements</span>
            {arrow?<span onClick={arrowHandler} className='p-0.5 ml-1 text-xs'><FontAwesomeIcon icon={faArrowDown}/></span>   :<span onClick={arrowHandler} className='p-1 ml-1 text-xs'><FontAwesomeIcon icon={faArrowRight}/></span>}
            <br/>
            
          
        </div>
          {arrow &&  <UIElements handler={handler}/>}
             <div className='flex justify-between rounded-md  hover:bg-cyan-800 p-1'>
        
             <FontAwesomeIcon className='mt-1' icon={faFileWaveform}/>
            <span className='text-slate-200  mx-8'>Form</span>
            {foarrow?<span onClick={foarrowHandler} className='px-9 ml-2 text-xs'><FontAwesomeIcon icon={faArrowDown}/></span>:<span onClick={foarrowHandler} className='px-9 ml-2 text-xs'><FontAwesomeIcon icon={faArrowRight}/></span>}
            <br/>
            
          
        </div>
          {foarrow &&  <Form handler={handler}/>}
          <div className='flex justify-between rounded-md  hover:bg-cyan-800 p-1'>
        
        <FontAwesomeIcon className='mt-1' icon={faFileWaveform}/>
       <span className='text-slate-200 ml-2'>Table</span>
       {tarrow?<span onClick={tarrowHandler} className='px-6 ml-2 text-xs'><FontAwesomeIcon icon={faArrowDown}/></span>:<span onClick={tarrowHandler} className='px-6 ml-2 text-xs'><FontAwesomeIcon icon={faArrowRight}/></span>}
       <br/>
       
     
   </div>
   {tarrow &&  <Table handler={handler}/>}
   <Link onClick={handler} to='/chart'>
     <div className='flex justify-between rounded-md  hover:bg-cyan-800 p-1'>
        <FontAwesomeIcon icon={faChartColumn}/>
        
 
            <span className='text-slate-200 '>Chart</span>
            <span className='px-8 ml-7'></span>
        </div></Link>
   <Link onClick={handler} to='/icon'>
     <div className='flex justify-between rounded-md  hover:bg-cyan-800 p-1'>
        <FontAwesomeIcon className='mt-1' icon={faIcons}/>
        
 
            <span className='text-slate-200 '>Icon</span>
            <span className='px-8 ml-9'></span>
        </div></Link>

        </div>
    );
};

export default Components;