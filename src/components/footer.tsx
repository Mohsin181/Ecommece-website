import React from 'react';

const Footer = () => {
  return (
    <footer className="t text-black   py-32 border-t border-x-gray-600 border-r border-gray-600">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex justify-between items-start">
          {/* Left Section (Furnio) */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Furnio</h2>
          </div>

          {/* Right Section (Links, Help, Newsletter) */}
          <div className="flex space-x-12">
            {/* Links (Home, About, Shop, Blog, Contact) */}
            <div className="space-y-4">
              <p className="text-sm">Links</p>
              <ul className="space-y-1 text-sm">
                <li><a href="/Home" className="hover:text-gray-400">Home</a></li>
                <li><a href="/About" className="hover:text-gray-400">About</a></li>
                <li><a href="/shop" className="hover:text-gray-400">Shop</a></li>
                <li><a href="/Blog" className="hover:text-gray-400">Blog</a></li>
                <li><a href="/Contact" className="hover:text-gray-400">Contact</a></li>
              </ul>
            </div>

            {/* Help Section */}
            <div className="space-y-4">
              <p className="text-sm">Help</p>
              <ul className="space-y-1 text-sm">
                <li><a href="#" className="hover:text-gray-400">Payment Options</a></li>
                <li><a href="#" className="hover:text-gray-400">Returns</a></li>
                <li><a href="#" className="hover:text-gray-400">Privacy Policy</a></li>
              </ul>
            </div>

            {/* Newsletter Section */}
            <div className="space-y-4">
              <p className="text-sm">Newsletter</p>
              <div className="flex items-center space-x-2">
                <input type="email" placeholder="Enter your email" className="px-4 py-2 rounded-lg bg-gray-700 text-sm text-white" />
                <button className="font-bold text-sm text-white">Subscribe</button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-4">
          <p className="text-center text-sm">&copy; 2023 Furnio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
