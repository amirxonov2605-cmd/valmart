import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const leftLinks = [
  { to: "/Courses", label: "Курсы обучения" },
  { to: "/ForCosms", label: "Вебинары" },
  { to: "/Lessons", label: "Видео-уроки" },
  { to: "/Price", label: "Прайс" },
  { to: "/Schedule", label: "Расписание" },
];

const rightLinks = [
  { to: "/Sales", label: "Акции" },
  { to: "/", label: "О нас" },
  { to: "/Articles", label: "Блог" },
  { to: "/Special", label: "Магазин" },
];

export default function Footer() {
  return (
    <footer className="w-full flex flex-col lg:flex-row">
      {/* Карта */}
      <div className="w-full lg:w-1/2 h-[320px] lg:h-auto">
        <iframe
          title="Адрес на карте"
          src="https://www.google.com/maps?q=Харьков,+Клочковская+3&output=embed"
          className="w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div className="w-full lg:w-1/2 bg-neutral-800 text-white px-6 sm:px-10 py-10 flex flex-col gap-8">
        {/* Лого */}
        <Link to="/" className="w-20 h-20 rounded-full bg-green-200 flex items-center justify-center text-white text-sm font-semibold">
          ValMari
        </Link>

        <div className="flex flex-col gap-2">
          <a href="tel:08005086622" className="text-2xl font-bold hover:text-green-300 transition-colors">
            0 (800) 508-622
          </a>
          <p className="text-xl text-gray-200">Харьков, Клочковская, д. 3</p>
        </div>

        {/* Навигация в две колонки */}
        <div className="flex gap-16 flex-wrap">
          <nav className="flex flex-col gap-4">
            {leftLinks.map((link) => (
              <Link
                key={link.to + link.label}
                to={link.to}
                className="text-gray-200 hover:text-green-300 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <nav className="flex flex-col gap-4">
            {rightLinks.map((link) => (
              <Link
                key={link.to + link.label}
                to={link.to}
                className="text-gray-200 hover:text-green-300 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 rounded-md bg-white flex items-center justify-center text-neutral-800 hover:scale-105 transition-transform"
            aria-label="Facebook"
          >
            <FaFacebookF size={18} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 rounded-md bg-white flex items-center justify-center text-neutral-800 hover:scale-105 transition-transform"
            aria-label="Instagram"
          >
            <FaInstagram size={18} />
          </a>
        </div>

        <Link to="/Privacy" className="text-gray-400 hover:text-gray-200 transition-colors text-sm mt-2">
          Политика конфиденциальности
        </Link>
      </div>
    </footer>
  );
}
