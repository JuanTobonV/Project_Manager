import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
        <div className='w-full h-full flex justify-center items-center bg-black'>
            <nav className='w-full flex justify-end gap-7 bg-gray-200 p-5 '>
                <Link className='text-lg font-medium' to="/">Home</Link>
                <Link className='text-lg font-medium' to="/singin">Sign in</Link>
                
            </nav>
        </div>
    </>
  )
}
