import { Link } from "react-router-dom";

function Navbar() {
    return (
    <nav className='flex px-8 py-4'>
        <ul className='flex gap-[50px]'>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
            <li>
                <a href="/sample-page">Sample</a>
            </li>
        </ul>
    </nav>
    )  
  }
  
export default Navbar;

