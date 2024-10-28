
const Footer = () => {
  return (
    <section className="bg-[#050B20] text-white">
        <div className="w-5/6 mx-auto">
            <div className="subscribe-to-newsletter flex justify-between py-10 mb-10 border-b border-gray-700">
                <div>
                    <h6 className="text-2xl">Join BoxCar</h6>
                    <p className="text-xs">Receive pricing updates, shopping tips & more!</p>
                </div>
                <form action="" className="flex border-none rounded-full justify-between p-2 bg-slate-700 w-96">
                    <input type="text" className="border-none bg-inherit outline-none text-xs ml-2" placeholder="Your email address"/>
                    <button className="bg-[#405FF2] rounded-full px-3 py-2 text-xs">Sign Up</button>
                </form>
            </div>
            <div className="links flex justify-between p-6">
                <div className="company-links">
                    <span className="heading mb-4 text-lg">Company</span>
                    <ul className='mt-4 text-xs space-y-3'>
                        <li>About Us</li>
                        <li>Blog</li>
                        <li>Services</li>
                        <li>FAQs</li>
                        <li>Terms</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className="quick-links">
                    <span className="heading mb-4 text-lg">Quick links</span>
                    <ul className='mt-4 text-xs space-y-3'>
                        <li>Help center</li>
                        <li>Get in touch</li>
                        <li>Live chat</li>
                        <li>How it works</li>
                    </ul>
                </div>
                <div className="our-brands">
                    <span className="heading mb-4 text-lg">Our brands</span>
                    <ul className='mt-4 text-xs space-y-3'>
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
                    <span className="heading mb-4 text-lg">Vehicle Types</span>
                    <ul className='mt-4 text-xs space-y-3'>
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
                    <span className="heading mb-4 text-lg">Our Mobile Apps</span>
                </div>
            </div>
            <footer className="copyright flex justify-between border-t border-gray-700 py-5 text-sm">
                <p>&copy; 2024 example.com. All rights reserved</p>
                <nav>
                    <ul className="flex justify-around">
                        <li><a href="#">Terms & conditions </a></li>
                        <span className="text-3xl"> . </span>
                        <li><a href="#"> Privacy Notice</a></li>
                    </ul>
                </nav>
            </footer>
        </div>
    </section>
  )
}

export default Footer
