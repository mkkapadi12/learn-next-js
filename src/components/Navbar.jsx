"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Transition } from "@headlessui/react";
import { useRouter, usePathname } from "next/navigation"; // ⬅️ Add usePathname

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname(); // ⬅️ Get the current route

  useEffect(() => {
    if (pathname === "/login") {
      alert("You are on the login page");
    }
  }, [pathname]); // ⬅️ Run only when pathname changes

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const mobileLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
    { name: "Data", href: "/posts" },
    { name: "Docs", href: "/docs" },
    { name: "Shop", href: "/products" },
  ];

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-white text-2xl font-bold">
                <Link href="/">MyApp</Link>
              </h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {
                  // Add the following code to display the links in the Navbar
                  mobileLinks.map((link, index) => {
                    return (
                      <Link
                        key={index}
                        href={link.href}
                        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      >
                        {link.name}
                      </Link>
                    );
                  })
                }
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/login"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Sign Up
            </Link>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-300 transform"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transition ease-in duration-200 transform"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
      >
        <div
          className="md:hidden fixed inset-0 bg-gray-800 z-50"
          id="mobile-menu"
        >
          <h1 className="text-white text-2xl font-bold absolute top-3 left-3">
            <Link href="/">MyApp</Link>
          </h1>
          <div className="px-2 pt-2 pb-3 space-y-1 h-[95%] justify-between sm:px-3 flex flex-col items-start mt-10">
            <button
              onClick={() => setIsOpen(false)}
              type="button"
              className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white absolute top-2 right-2"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div>
              {mobileLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  onClick={handleLinkClick}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div>
              <Link
                href="/login"
                onClick={handleLinkClick}
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Login
              </Link>
              <Link
                href="/register"
                onClick={handleLinkClick}
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </Transition>
    </nav>
  );
};

export default Navbar;
