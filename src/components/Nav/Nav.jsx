import { Link, NavLink } from "react-router-dom";


const Nav = () => {
    const navOptions = <>
    <li><NavLink to="/home">Home</NavLink></li>
    <li><NavLink to="/about">About</NavLink></li>
    <li><NavLink to="/contact">Contact Us</NavLink></li>
    <li><NavLink to="/SellItems">For Sell</NavLink></li>
    <li><NavLink to="/visitors">Visitors</NavLink></li>
    
    </>
    return (
        <div className="navbar  h-14 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white">
          
  <div className="navbar-start">
    <div className="dropdown text-black">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 bg-green-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
       
        {navOptions}
       
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Biswash Aggro Farm</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
   {navOptions}
    </ul>
  </div>
  <div className="navbar-end">

   <marquee className="text-purple-300">Biswash Aggro Farm, Khulna Brunch </marquee>
  </div>
 
    
   <img className="w-[50px] rounded-full object-cover" src="logo1.png"/>
  
 
 
</div>
    );
};

export default Nav;