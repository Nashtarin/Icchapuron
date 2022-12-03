import { faArrowAltCircleUp, faBars, faBarsProgress, faBell, faBoxes, faBoxesPacking, faBoxesStacked, faCubesStacked, faDotCircle, faFileArchive, faFileCircleCheck, faFilm, faGrin, faIdBadge, faIdCard, faIdCardClip, faImage, faList, faListDots, faMobileButton, faPaintBrush, faPaintRoller, faQrcode, faStaffAesculapius, faTabletButton, faTag, faUserCircle, faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const UIElements = ({handler}) => {
    return (
        <div className='ml-12'>
        <Link onClick={handler} to='/avatars'>
<div className='flex justify-between rounded-md  hover:bg-cyan-800 p-1'>
   
<FontAwesomeIcon className='mt-1' icon={faUserCircle}/>
       <span className='text-slate-200 '>Avatars</span>
       <span className='px-6 ml-10'></span>
   </div></Link>
  
    <Link onClick={handler} to='/alerts'>
<div className='flex justify-between rounded-md  hover:bg-cyan-800 p-1'>
   

      <FontAwesomeIcon className='mt-1' icon={faTag}/>                                    
       <span className='text-slate-200'>Alerts</span>
       <span className='px-8 ml-10'></span>
   </div></Link>
    <Link onClick={handler} to='/badges'>
<div className='flex justify-between rounded-md hover:bg-cyan-800 p-1'>
   

      <FontAwesomeIcon className='mt-1' icon={faIdBadge}/>                                    
      <span className='text-slate-200'>Badges</span>
       <span className='ml-1 px-11'></span>
   </div></Link>
    <Link onClick={handler} to='/breadcrumb'>
<div className='flex justify-between rounded-md  hover:bg-cyan-800 p-1'>
   


       <FontAwesomeIcon className='mt-1' icon={faBars}/>
       <span className='text-slate-200 '>Breadcrumb</span>
       <span className='px-3 ml-10'></span>
   </div></Link>
    <Link onClick={handler} to='/buttons'>
<div className='flex justify-between rounded-md  hover:bg-cyan-800 p-1'>
   
  <FontAwesomeIcon className='mt-1' icon={faMobileButton}/>       
  <span className='text-slate-200  '>Buttons</span>
       <span className='px-7 ml-10'></span>
   </div></Link>
    <Link onClick={handler} to='/buttonsgroup'>
<div className='flex justify-between rounded-md  hover:bg-cyan-800 p-1'>
   
<FontAwesomeIcon className='mt-1' icon={faTabletButton}/>
       <span className='text-slate-200  '>Buttons Group</span>
       <span className='px-1 ml-10'></span>
   </div></Link>
    <Link onClick={handler} to='/boxshadow'>
<div className='flex justify-between rounded-md  hover:bg-cyan-800 p-1'>
   
<FontAwesomeIcon className='mt-1' icon={faBoxesStacked}/>
       <span className='text-slate-200  '>Box Shadow</span>
       <span className='px-2 ml-10'></span>
   </div></Link>
   <Link onClick={handler} to='/colors'>
<div className='flex justify-between rounded-md  hover:bg-cyan-800 p-1'>
   
<FontAwesomeIcon className='mt-1' icon={faPaintBrush}/>
       <span className='text-slate-200 '>Colors</span>
       <span className='px-6 ml-10'></span>
   </div></Link>
   <Link onClick={handler} to='/cards'>
<div className='flex justify-between rounded-md  hover:bg-cyan-800 p-1'>
   
<FontAwesomeIcon className='mt-1' icon={faIdCardClip}/>
       <span className='text-slate-200 '>Cards</span>
       <span className='px-6 ml-10'></span>
   </div></Link>
   <Link onClick={handler} to='/carousel'>
<div className='flex justify-between rounded-md  hover:bg-cyan-800 p-1'>
   
<FontAwesomeIcon className='mt-1' icon={faFilm}/>
       <span className='text-slate-200'>Carousel</span>
       <span className='px-4 ml-10'></span>
   </div></Link>
   <Link onClick={handler} to='/grid'>
<div className='flex justify-between rounded-md  hover:bg-cyan-800 p-1'>
   
<FontAwesomeIcon className='mt-1' icon={faBoxesStacked}/>
       <span className='text-slate-200 '>Grid</span>
       <span className='px-8 ml-10'></span>
   </div></Link>
   <Link onClick={handler} to='/image'>
<div className='flex justify-between rounded-md  hover:bg-cyan-800 p-1'>
   
<FontAwesomeIcon className='mt-1' icon={faImage}/>
       <span className='text-slate-200 '>Image</span>
       <span className='px-6 ml-10'></span>
   </div></Link>
   <Link onClick={handler} to='/listgroup'>
<div className='flex justify-between rounded-md  hover:bg-cyan-800 p-1'>
   
<FontAwesomeIcon className='mt-1' icon={faList}/>
       <span className='text-slate-200 '>List Group</span>
       <span className='px-3 ml-10'></span>
   </div></Link>
   <Link onClick={handler} to='/media'>
<div className='flex justify-between rounded-md  hover:bg-cyan-800 p-1'>
   
<FontAwesomeIcon className='mt-1' icon={faFileCircleCheck}/>
       <span className='text-slate-200 '>Media</span>
       <span className='px-6 ml-10'></span>
   </div></Link>
   <Link onClick={handler} to='/modal'>
<div className='flex justify-between rounded-md  hover:bg-cyan-800 p-1'>
   
<FontAwesomeIcon className='mt-1' icon={faMobileButton}/>
       <span className='text-slate-200 '>Modal</span>
       <span className='px-5 ml-10'></span>
   </div></Link>
   <Link onClick={handler} to='/notification'>
<div className='flex justify-between rounded-md  hover:bg-cyan-800 p-1'>
   
<FontAwesomeIcon className='mt-1' icon={faBell}/>
       <span className='text-slate-200 '>Notification</span>
       <span className='px-1 ml-10'></span>
   </div></Link>
   <Link onClick={handler} to='/pagination'>
<div className='flex justify-between rounded-md  hover:bg-cyan-800 p-1'>
   
<FontAwesomeIcon className='mt-1' icon={faDotCircle}/>
       <span className='text-slate-200 '>Pagination</span>
       <span className='px-2 ml-10'></span>
   </div></Link>
   <Link onClick={handler} to='/popovers'>
<div className='flex justify-between rounded-md  hover:bg-cyan-800 p-1'>
   
<FontAwesomeIcon className='mt-1' icon={faArrowAltCircleUp}/>
       <span className='text-slate-200'>Popovers</span>
       <span className='px-4 ml-10'></span>
   </div></Link>
   <Link onClick={handler} to='/progressbars'>
<div className='flex justify-between rounded-md  hover:bg-cyan-800 p-1'>
   
<FontAwesomeIcon className='mt-1' icon={faBarsProgress}/>
       <span className='text-slate-200 '>Progress Bars</span>
       <span className='px-0.5 ml-10'></span>
   </div></Link>
   <Link onClick={handler} to='/typography'>
<div className='flex justify-between rounded-md  hover:bg-cyan-800 p-1'>
   
<FontAwesomeIcon className='mt-1' icon={faQrcode}/>
       <span className='text-slate-200 '>Typography</span>
       <span className='px-1.5 ml-10'></span>
   </div></Link>
   <Link onClick={handler} to='/tabs'>
<div className='flex justify-between rounded-md  hover:bg-cyan-800 p-1'>
   
<FontAwesomeIcon className='mt-1' icon={faCubesStacked}/>
       <span className='text-slate-200 '>Tabs</span>
       <span className='px-8 ml-10'></span>
   </div></Link>
   <Link onClick={handler} to='/tooltips'>
<div className='flex justify-between rounded-md  hover:bg-cyan-800 p-1'>
   
<FontAwesomeIcon className='mt-1' icon={faFileArchive}/>
       <span className='text-slate-200 '>Tooltips</span>
       <span className='px-5 ml-10'></span>
   </div></Link>
   <Link onClick={handler} to='/video'>
<div className='flex justify-between rounded-md  hover:bg-cyan-800 p-1'>
   
<FontAwesomeIcon className='mt-1' icon={faVideo}/>
       <span className='text-slate-200 '>Video</span>
       <span className='px-6 ml-10'></span>
   </div></Link>

        </div>
    );
};

export default UIElements;