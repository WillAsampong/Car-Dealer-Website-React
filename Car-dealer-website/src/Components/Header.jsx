import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-solid-svg-icons"

const Header = () => {
  return (
    <header className="flex justify-between mx-auto py-6 px-8 text-white">
        <div className="logo">
            <span className="uppercase font-bold text-xl tracking-tighter">Boxcars</span>
        </div>
        <nav className="flex gap-x-4 items-center text-sm">
            <ul className="flex gap-x-4">
                <li>Home</li>
                <li>Listings</li>
                <li>Blog</li>
                <li>Pages</li>
                <li>About</li>
                <li>Contact</li>
                <li>
                    <FontAwesomeIcon icon={faUser}  className="pr-2"/>
                    Sign in
                </li>
            </ul>
            <button className="bg-white text-black border-none rounded-full p-2">Submit Listing</button>
        </nav>
    </header>
  )
}

export default Header
