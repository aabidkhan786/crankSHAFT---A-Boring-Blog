import LOGO from './android-chrome-512x512.png';


const Navbar = () => {
    return ( 
        <nav className="navbar">
            
            <div className="logo-section"><img src={LOGO} alt="" className="logo"/><h1>CrankSHAFT - A Random Image Gallery</h1></div>
            <div className="link">
                <a href="/">Home</a>
                <a href="/create">New Blog</a>
            </div> 
        </nav>
     );
}
 
export default Navbar;