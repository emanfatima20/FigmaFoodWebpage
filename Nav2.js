// import React from 'react'
// import { useState } from 'react'
// export default function Nav2() {
//  function showsidebar(){
//    const sidebar= document.querySelector('.sidebar')
//    sidebar.style.display= 'flex'
//   }

  
//   return (
//     <>

  
//    <nav>
//           <ul className='sidebar'>
//             <li> <a href="#">Home</a></li>
//             <li> <a href="#">Our-Menu</a></li>
//             <li> <a href="#">About</a></li>
//             <li> <a href="#">Order Now</a></li>
//             <li> <a href="#">Details</a></li>
//             <li> <a href="#">Book A Table</a></li>

//           </ul>
          
//           </nav>
          

      




//   <div className='nav-white'>
//       <div className='logo'>

//       </div>
//        <div className='options'>
//             <div className='home'>  <a href="#">Home</a></div>
//             <div className='opt'> <a href="#">Our-Menu</a></div>
//             <div className='opt'> <a href="#">About</a></div>
//             <div className='opt'> <a href="#">Order Now</a></div>
//             <div className='opt'> <a href="#">Details</a></div>
          
//        </div>


//        <div className='book'> <a href="#">Book A Table</a> </div>
//        <div onClick={showsidebar()}> <i class="fa-solid fa-bars"/> </div>





//     </div>
//     </>
//   )
// }





import React, { useState } from 'react';

export default function Nav2() {
  // State to manage sidebar visibility
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  // Function to toggle sidebar visibility
  function showsidebar() {
    setIsSidebarVisible(!isSidebarVisible); // Toggle the state
  }

  // Function to close the sidebar when clicking the 'X' icon
  function closeSidebar() {
    setIsSidebarVisible(false); // Set the sidebar visibility to false
  }

  return (
    <>
      <nav>
        {/* Apply conditional display style based on isSidebarVisible */}
        <ul
          className="sidebar"
          style={{
            display: isSidebarVisible ? 'flex' : 'none', // Conditionally show/hide sidebar
          }}
        > 
          {/* Close icon inside the sidebar */}
          <div className='home1'>  <li onClick={closeSidebar} className='cross'>  
     
        
            <i className="fa-solid fa-xmark"></i>
          </li>
          </div>
         <div className='home2'> <li> <a href="#">Home</a></li></div> 
       <div className='home1'>  <li> <a href="#">Our-Menu</a></li>  </div>   
        <div className='home1'>  <li> <a href="#">About</a></li> </div> 
        <div className='home1'><li> <a href="#">Order Now</a></li> </div> 
          <div className='home1'><li> <a href="#">Details</a></li> </div>
         <div className='home1'><li> <a href="#">Book A Table</a></li> </div>
        </ul>
      </nav>

      <div className="nav-white">
        <div className="logo"></div>
        <div className="options">
          <div className="home"> <a href="#">Home</a></div>
          <div className="opt"> <a href="#">Our-Menu</a></div>
          <div className="opt"> <a href="#">About</a></div>
          <div className="opt"> <a href="#">Order Now</a></div>
          <div className="opt"> <a href="#">Details</a></div>
        </div>

        <div className="book"> <a href="#">Book A Table</a></div>
        {/* Call showsidebar onClick */}
        <div className='bars' onClick={showsidebar}>  
       
          <i className="fa-solid fa-bars" /> 
          
        </div>
      </div>
    </>
  );
}
