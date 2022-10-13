import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (

<div>

<div className="navbar bg-pink-600 text-white px-20">
  <div className="navbar-start w-full ">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {/* <li><a>Item 1</a></li>

        <li><a>Item 3</a></li> */}
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
      <li><Link to='/home'>Home</Link></li>
      <li><a href='/statistics'>Statistics</a></li>

      <li><a href='/blog'>Blog</a></li>
    </ul>
  </div>
  {/* <div className="navbar-end">
    <a className="btn">Get started</a>
  </div> */}
</div>

    {/* <img src="https://images.unsplash.com/photo-1643186042811-63a2b94c7f98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZ3JhbWluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" className='w-screen h-56' /> */}
</div>
    );
};

export default Header;