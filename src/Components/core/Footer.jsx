const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Logo and Description */}
          <div className="mb-6 lg:mb-0">
            <h1 className="text-3xl font-bold mb-4">HomeNest</h1>
            <p className="text-gray-400">
              Your dream home is just a few clicks away. Discover, explore, and buy homes effortlessly with HomeNest.
            </p>
          </div>
  
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Properties</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>
  
          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <p className="text-gray-400 mb-2">Email: shamimahmadup1@gmail.com</p>
            <p className="text-gray-400 mb-2">Phone: +917852067635</p>
            <p className="text-gray-400">Address: kishinagar Uttar Pradesh</p>
          </div>
  
          {/* Social Media Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-facebook fa-2x"></i></a>
              <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-twitter fa-2x"></i></a>
              <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-instagram fa-2x"></i></a>
              <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-linkedin fa-2x"></i></a>
            </div>
          </div>
        </div>
  
        {/* Bottom Section */}
        <div className="text-center text-gray-400 mt-8 border-t border-gray-700 pt-4">
          <p>&copy; 2024 HomeNest. All rights reserved.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  