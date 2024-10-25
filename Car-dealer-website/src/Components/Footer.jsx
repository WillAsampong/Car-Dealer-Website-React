
const Footer = () => {
  return (
    <section className="bottom-0 absolute">
        <div className="">
            <div className="subscribe-to-newsletter flex justify-between px-8">
                <div>
                    <h6>Join BoxCar</h6>
                    <p>Receive pricing updates, shopping tips & more!</p>
                </div>
                <form action="" className="flex border-none rounded-lg justify-between p-4">
                    <input type="text" className="border-none bg-inherit" placeholder="Your email address"/>
                    <button className="">Sign Up</button>
                </form>
            </div>
            <div className="links flex justify-between">
                <div className="company-links">
                    <span className="heading">Company</span>
                    <ul>
                        <li>About Us</li>
                        <li>Blog</li>
                        <li>Services</li>
                        <li>FAQs</li>
                        <li>Terms</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className="quick-links">
                    <span className="heading">Quick links</span>
                    <ul>
                        <li>Get in touch</li>
                        <li>Help center</li>
                        <li>Live chat</li>
                        <li>How it works</li>
                    </ul>
                </div>
                <div className="our-brands">
                    <span className="heading">Our brands</span>
                    <ul>
                        <li>Toyota</li>
                        <li>Porsche</li>
                        <li>Audi</li>
                        <li>BMW</li>
                        <li>Ford</li>
                        <li>Nissan</li>
                        <li>Peugeot</li>
                        <li>Volkswagen</li>
                    </ul>
                </div>
                <div className="vehicle-types">
                    <span className="heading">Vehicle Types</span>
                    <ul>
                        <li>Sedan</li>
                        <li>Hatchback</li>
                        <li>SUV</li>
                        <li>Hybrid</li>
                        <li>Electric</li>
                        <li>Coupe</li>
                        <li>Truck</li>
                        <li>Convertible</li>
                    </ul>
                </div>
                <div className="mobile-app-and-socials">
                    <span className="heading">Our Mobile Apps</span>
                </div>
            </div>
            <footer className="copyright flex justify-between">
                <p>&copy; 2024 example.com. All rights reserved</p>
                <nav>
                    <ul className="flex">
                        <li><a href="#">Terms & conditions</a></li>
                        <span className="flex align-middle items-center text-lg"></span>
                        <li><a href="#">Privacy Notice</a></li>
                    </ul>
                </nav>
            </footer>
        </div>
    </section>
  )
}

export default Footer
