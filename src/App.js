import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import Hero from "./hero";


function App() {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  }
  return (
    <>
    <div className="flex justify-between items-center max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="text-[#00df9a] text-5xl p-[20px] ">REACT.</h1>
      <ul className="hidden md:flex">
        <li className="p-4 my-[10px] text-2xl"><a href="https://google.com">Home</a></li>
        <li className="p-4 my-[10px] text-2xl">Resources</li>
        <li className="p-4 my-[10px] text-2xl">Company</li>
        <li className="p-4 my-[10px] text-2xl">About</li>
      </ul>
      <div onClick={handleMenu} className="block md:hidden">
        {!menu ? <MenuIcon fontSize="large"/> : <MenuIcon fontSize="large"/>}
      </div>
      <div className={menu ? 'fixed left-0 top-[100px] p-[30px] h-full w-[60%] text-2xl border-r border-r-gray-900 ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <ul>
          <li className="text-3xl my-4 border-b border-gray-100">Home</li>
          <li className="text-3xl my-4 border-b border-gray-100">Resources</li>
          <li className="text-3xl my-4 border-b border-gray-100">Company</li>
          <li className="text-3xl my-4 border-b border-gray-100">About</li>
        </ul>
      </div>
    </div>
    <Hero/>
    </>
  );
}

export default App;
