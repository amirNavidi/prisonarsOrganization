import Image from 'next/image';
import { useState } from 'react';
import Logo from '../public/images/logo.png';
import Link from 'next/link';
import { useRouter } from 'next/router';

const HeaderC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('خدمات حمایتی');

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const router = useRouter();
  const registrationHandler = () => {
    router.push('/profile');
  };

  return (
    <nav className="headerShadow  w-full text-[16px] md:text-[14px] lg:text-[16px] bg-white flex border border-gray-100">
      <div className="w-full flex flex-wrap items-center justify-between mx-auto p-4 relative">
        <Link href="/">
          <div className=" flex items-center space-x-3 cursor-pointer rtl:space-x-reverse xl:mr-[120px]">
            <Image src={Logo} className="h-8" alt="Logo" width={48} height={48} />
          </div>
        </Link>
        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-black md:hidden"
          aria-controls="navbar-dropdown"
          aria-expanded={menuOpen}
          onClick={handleMenuToggle}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className={`${menuOpen ? 'block' : 'hidden'} bg-gray-50 w-full md:block md:w-auto`} id="navbar-dropdown">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 lg:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 xl:mr-[-120px] md:bg-white">
            {['خدمات حمایتی', 'پویش ها و چالش ها', ' خیرین', 'ارمغان', 'درباره ما', 'تماس با ما'].map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className={`block py-2 px-3 rounded-sm ${
                    menuOpen
                      ? activeLink === link
                        ? 'bg-blue-700 text-white'
                        : 'text-gray-900 hover:bg-gray-100'
                      : activeLink === link
                      ? 'md:text-blue-700'
                      : 'md:text-gray-900 hover:text-blue-700'
                  }`}
                  onClick={() => handleLinkClick(link)}
                >
                  {link}
                </a>
              </li>
            ))}
            {/* لینک "حساب کاربری" فقط در سایزهای کوچک نمایش داده می‌شود */}
            <li className="block md:hidden">
              <Link href="/profile">
                <a
                  className={`block py-2 px-3 rounded-sm ${
                    menuOpen
                      ? activeLink === 'حساب کاربری'
                        ? 'bg-blue-700 text-white'
                        : 'text-gray-900 hover:bg-gray-100'
                      : activeLink === 'حساب کاربری'
                      ? 'md:text-blue-700'
                      : 'md:text-gray-900 hover:text-blue-700'
                  }`}
                  onClick={() => handleLinkClick('حساب کاربری')}
                >
                  حساب کاربری
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <button onClick={registrationHandler} className="hidden md:inline border xl:ml-[120px] border-primary500 text-primary500 py-2 px-4 rounded-[8px]">
          حساب کاربری
        </button>
      </div>
    </nav>
  );
};

export default HeaderC;
