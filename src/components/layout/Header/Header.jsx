import { useState } from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { HiOutlinePhone, HiChevronDown, HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Главная" },
  { to: "/Courses", label: "Курсы обучения" },
  { to: "/ForCosms", label: "Вебинары" },
  { to: "/Articles", label: "Блог" },
  { to: "/", label: "О нас" },
  { to: "/Price", label: "Прайс" },
  { to: "/Schedule", label: "Расписание" },
  { to: "/Sales", label: "Акции" },
  { to: "/Special", label: "Магазин" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full border-b border-gray-100">
      <div className="flex items-center justify-between gap-4 px-4 md:px-8 py-3">
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <div className="w-14 h-14 rounded-full bg-green-200 flex items-center justify-center text-white text-xs font-semibold text-center leading-tight">
            ValMari
          </div>
          <p className="hidden sm:block text-sm text-gray-700 leading-snug max-w-[180px]">
            Учебный центр эстетической косметологии
          </p>
        </Link>

        <div className="hidden lg:flex items-center gap-6">
          <a
            href="tel:08005086622"
            className="flex items-center gap-2 text-gray-800 hover:text-green-600 transition-colors"
          >
            <HiOutlinePhone size={22} className="text-green-500" />
            <span className="text-lg font-medium">0 (800) 508-622</span>
          </a>

          <div className="flex items-center gap-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-md bg-green-500 flex items-center justify-center text-white hover:scale-105 transition-transform"
              aria-label="Facebook"
            >
              <FaFacebookF size={16} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-md border-2 border-green-500 flex items-center justify-center text-green-500 hover:scale-105 transition-transform"
              aria-label="Instagram"
            >
              <FaInstagram size={16} />
            </a>
          </div>

          <button className="flex items-center gap-1 text-gray-700 hover:text-green-600 transition-colors">
            <span className="w-6 h-4 rounded-sm overflow-hidden flex flex-col shrink-0">
              <span className="flex-1 bg-white" />
              <span className="flex-1 bg-blue-600" />
              <span className="flex-1 bg-red-600" />
            </span>
            <HiChevronDown size={16} />
          </button>
        </div>

        {/* Кнопка бургер-меню (mobile) */}
        <button
          className="lg:hidden text-gray-700"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Открыть меню"
        >
          {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </div>

      {/* Разделитель */}
      <hr className="border-gray-100" />

      {/* Навигация — desktop */}
      <nav className="hidden lg:flex w-full justify-center flex-wrap gap-x-8 gap-y-2 px-4 py-3 text-gray-700">
        {navLinks.map((link) => (
          <Link
            key={link.to + link.label}
            to={link.to}
            className="hover:text-green-600 transition-colors whitespace-nowrap"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Меню — mobile / tablet */}
      {menuOpen && (
        <div className="lg:hidden flex flex-col gap-4 px-4 py-4 border-t border-gray-100">
          <a
            href="tel:08005086622"
            className="flex items-center gap-2 text-gray-800"
          >
            <HiOutlinePhone size={20} className="text-green-500" />
            <span className="font-medium">0 (800) 508-622</span>
          </a>

          <div className="flex items-center gap-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-md bg-green-500 flex items-center justify-center text-white"
              aria-label="Facebook"
            >
              <FaFacebookF size={16} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-md border-2 border-green-500 flex items-center justify-center text-green-500"
              aria-label="Instagram"
            >
              <FaInstagram size={16} />
            </a>
            <button className="flex items-center gap-1 text-gray-700">
              <span className="w-6 h-4 rounded-sm overflow-hidden flex flex-col shrink-0">
                <span className="flex-1 bg-white" />
                <span className="flex-1 bg-blue-600" />
                <span className="flex-1 bg-red-600" />
              </span>
              <HiChevronDown size={16} />
            </button>
          </div>

          <nav className="flex flex-col gap-3 pt-2 border-t border-gray-100">
            {navLinks.map((link) => (
              <Link
                key={link.to + link.label}
                to={link.to}
                className="text-gray-700 hover:text-green-600 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
