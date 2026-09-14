import { Link } from "react-router-dom";
import doctorIllustration from "../../assets/404-doctor.png";
import valmariLogo from "../../assets/valmari-logo-text.png";

export default function ErrorPage() {
  return (
    <div className="w-full bg-[#FFFFFF] py-8 sm:py-12 md:py-20 flex items-center justify-center">
      <div className="max-w-[1040px] w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 lg:gap-14 items-center">
          {/* Иллюстрация: на мобильных отображается внизу, на десктопе слева */}
          <div className="order-2 md:order-1 w-full flex justify-center items-center">
            <div className="w-full max-w-[290px] sm:max-w-[360px] md:max-w-[420px]">
              <img
                src={doctorIllustration}
                alt="404 - Страница не найдена"
                className="w-full h-auto object-contain mx-auto"
              />
            </div>
          </div>

          {/* Текстовый блок: на мобильных отображается сверху по центру, на десктопе справа */}
          <div className="order-1 md:order-2 w-full text-center md:text-left flex flex-col items-center md:items-start">
            {/* Логотип с подписью учебного центра */}
            <div className="mb-4 sm:mb-6">
              <img
                src={valmariLogo}
                alt="ValMari - Учебный центр эстетической косметологии"
                className="h-12 sm:h-14 md:h-16 w-auto object-contain"
              />
            </div>

            {/* Главный заголовок ошибки 404 */}
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-bold text-[#212121] leading-snug tracking-tight mb-3 sm:mb-4 max-w-[460px]">
              Похоже, эта страница отсутствует
            </h1>

            {/* Поясняющий текст */}
            <div className="text-xs sm:text-sm md:text-base text-[#424242] leading-relaxed mb-6 sm:mb-8 space-y-1 max-w-[440px]">
              <p>Мы обязательно разберемся с этим недоразумением!</p>
              <p>А пока вернитесь на главную страницу</p>
            </div>

            {/* Кнопка возврата на главную страницу */}
            <div>
              <Link
                to="/"
                className="inline-block bg-[#B7ECB1] hover:bg-[#a2e59b] active:bg-[#91dc89] text-[#244b1e] font-semibold text-xs sm:text-sm md:text-base py-3 px-8 sm:px-10 rounded-lg shadow-sm transition-colors text-center cursor-pointer"
              >
                Вернуться на главную
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}