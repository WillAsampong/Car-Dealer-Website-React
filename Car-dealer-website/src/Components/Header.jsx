

const Header = () => {
  return (
    <header className="flex justify-between">
        <div className="logo">
            <span className="uppercase font-bold text-xl">Boxcars</span>
        </div>
        <nav className="flex gap-x-2">
            <ul className="flex gap-x-4">
                <li>Home</li>
                <li>Listings</li>
                <li>Blog</li>
                <li>Pages</li>
                <li>About</li>
                <li>Contact</li>
                <li>
                    <img src="" alt="" />
                    Sign in
                </li>
            </ul>
            <button>Submit Listing</button>
        </nav>
    </header>
  )
}

export default Header
