import truck from "../assets/logo/truck.svg";
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container-x mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Logo and Short Description */}
          <div className="flex flex-col items-center sm:items-start">
            <img src={truck} alt="Logo" className="w-32 mb-4" />
            <p className="text-center sm:text-left text-sm sm:text-base text-gray-400">
              The best place to find exclusive products at unbeatable prices. Shop with us for quality and value.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col items-center sm:items-start gap-4">
            <h3 className="font-semibold text-lg text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/home" className="text-gray-400 hover:text-white">Home</a>
              </li>
              <li>
                <a href="/shop" className="text-gray-400 hover:text-white">Shop</a>
              </li>
              <li>
                <a href="/about" className="text-gray-400 hover:text-white">About Us</a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white">Contact Us</a>
              </li>
              <li>
                <a href="/faqs" className="text-gray-400 hover:text-white">FAQs</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Customer Service */}
          <div className="flex flex-col items-center sm:items-start gap-4">
            <h3 className="font-semibold text-lg text-white">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <a href="/returns" className="text-gray-400 hover:text-white">Returns & Exchanges</a>
              </li>
              <li>
                <a href="/shipping" className="text-gray-400 hover:text-white">Shipping & Delivery</a>
              </li>
              <li>
                <a href="/tracking" className="text-gray-400 hover:text-white">Order Tracking</a>
              </li>
              <li>
                <a href="/privacy-policy" className="text-gray-400 hover:text-white">Privacy Policy</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter Signup */}
          <div className="flex flex-col items-center sm:items-start gap-4">
            <h3 className="font-semibold text-lg text-white">Stay Connected</h3>
            <p className="text-gray-400 text-sm">Sign up for exclusive offers, updates, and new arrivals!</p>
            <form action="#" className="flex w-full max-w-md">
              <input
                type="email"
                className="w-full py-2 px-4 rounded-l-lg text-gray-900"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="bg-primary text-white py-2 px-6 rounded-r-lg hover:bg-primary-dark transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-8">
          <a href="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-pinterest"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-youtube"></i>
          </a>
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-8 text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Your E-Commerce Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
