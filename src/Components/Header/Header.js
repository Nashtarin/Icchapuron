import { faBars, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import SideBar from '../SideBar/SideBar';

const Header = () => {
    const[open,setOpen]=useState(false)
    const sideBarHandler=()=>{
        setOpen(!open)
    }
    
    return (
       <>
        <div className='flex justify-between '>
         <button onClick={sideBarHandler}><FontAwesomeIcon className='text-gray-500 text-2xl m-5' icon={faBars}/></button> 
         {
            open && <SideBar open={open} handler={sideBarHandler}/>
         } 
           <FontAwesomeIcon className='text-gray-400 text-3xl m-5' icon={faUser}/>
            
        </div>
       </>
    );
};

export default Header;