import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-4">About Us</h2>
            <p className="text-gray-400">
              We are a team of passionate developers building awesome web
              applications.
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-4">Quick Links</h2>
            <ul>
              <li className="mb-2">
                <Link href="/" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/about" className="text-gray-400 hover:text-white">
                  About
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h2 className="text-xl font-bold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.54 6.42a8.38 8.38 0 0 1-2.36.65 4.1 4.1 0 0 0 1.8-2.27 8.19 8.19 0 0 1-2.6.98 4.1 4.1 0 0 0-7 3.73A11.65 11.65 0 0 1 1.64 4.15a4.1 4.1 0 0 0 1.27 5.47 4.07 4.07 0 0 1-1.86-.51v.05a4.1 4.1 0 0 0 3.29 4.02 4.1 4.1 0 0 1-1.85.07 4.1 4.1 0 0 0 3.83 2.85A8.23 8.23 0 0 1 1 19.54a11.61 11.61 0 0 0 6.29 1.84c7.55 0 11.68-6.26 11.68-11.68 0-.18 0-.36-.01-.54a8.36 8.36 0 0 0 2.06-2.13z" />
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.04c-5.52 0-10 4.48-10 10 0 4.41 3.59 8.06 8.18 8.72v-6.16h-2.46v-2.56h2.46v-1.95c0-2.43 1.48-3.76 3.64-3.76 1.04 0 1.93.08 2.19.11v2.54h-1.5c-1.18 0-1.41.56-1.41 1.38v1.81h2.82l-.37 2.56h-2.45v6.16c4.59-.66 8.18-4.31 8.18-8.72 0-5.52-4.48-10-10-10z" />
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.31.975.975 1.248 2.242 1.31 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.31 3.608-.975.975-2.242 1.248-3.608 1.31-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.31-.975-.975-1.248-2.242-1.31-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.31-3.608.975-.975 2.242-1.248 3.608-1.31 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.281.059-2.563.337-3.637 1.411-1.074 1.074-1.352 2.356-1.411 3.637-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.059 1.281.337 2.563 1.411 3.637 1.074 1.074 2.356 1.352 3.637 1.411 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.281-.059 2.563-.337 3.637-1.411 1.074-1.074 1.352-2.356 1.411-3.637.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.059-1.281-.337-2.563-1.411-3.637-1.074-1.074-2.356-1.352-3.637-1.411-1.28-.058-1.688-.072-4.947-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.207 0-4-1.793-4-4s1.793-4 4-4 4 1.793 4 4-1.793 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.441s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.441-1.441-1.441z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          &copy; {new Date().getFullYear()} My Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
