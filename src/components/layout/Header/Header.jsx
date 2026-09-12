import { FaInstagram, FaWhatsapp, FaTelegramPlane } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="flex flex-col w-full justify-center bg-yellow-200">
      <div className="flex justify-around items-center p-4">
        <div className="w-[226px] h-[63px] bg-green-500">Logo</div>
        <div className="flex ">
          <div>📞 +992 886002527</div>
          <div className=" flex gap-4 ml-4">
            <FaInstagram size={24} />
            <FaTelegramPlane size={24} />
            <FaWhatsapp size={24} />
          </div>
          <div>RU | EN</div>
        </div>
      </div>

      <div className="flex w-full justify-center gap-4">
         <Link to="/">Главная</Link>
      <Link to="/Courses">Курсы обучения</Link>
      <Link to="/ForCosms">Вебинары</Link>
      <Link to="/Lessons">Видео-уроки</Link>
      <Link to="/Articles">Блог</Link>
      <Link to="/">О Нас</Link>
      <Link to="/Price">Прайс</Link>
      <Link to="/Schedule">Расписание</Link>
      <Link to="/Sales">Акции</Link>
      <Link to="/Special">Магазин</Link>
      </div>
    </div>
  );
}
