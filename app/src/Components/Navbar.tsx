import { Link } from "react-router-dom";

function Navbar() {
    return (
    <nav className='flex px-8 py-4'>
        <ul className='flex'>
        <li className='px-2'>
            <Link to="/">Home</Link>
        </li>
        <li className='px-2'>
            <Link to="/about">Navbar</Link>
        </li>
        <li className='px-2'>
            <Link to="/contact">Contact</Link>
        </li>
        <li className='px-2'>
            <a href="/sample-page">Sample</a>
        </li>
        </ul>
    </nav>
    )  
  }
  
export default Navbar;

