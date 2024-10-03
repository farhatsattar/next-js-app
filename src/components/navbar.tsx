import React from 'react'
import { FaHome, FaInfoCircle} from 'react-icons/fa';
import Link from 'next/link';



function Navbar() {
  return (
    <div>
    <nav className="bg-red-950 text-white flex justify-evenly">
        
        
          <Link href="/" className="block py-2 px-4 hover:bg-gray-700 rounded">
           <FaHome className="inline-block mr-2" /> Home
          </Link>
          <Link href="/blog" className="block py-2 px-4 hover:bg-gray-700 rounded"> blog</Link>
          <Link href="/about" className="block py-2 px-4 hover:bg-gray-700 rounded">
            <FaInfoCircle className="inline-block mr-2" /> About
          </Link>
          <Link href="/contact" className="block py-2 px-4 hover:bg-gray-700 rounded">
             Contact
          </Link>

    
    </nav>
    </div>
  )
}

export default Navbar;