import { Link } from "react-router-dom";
import articlePhoto from "../../../assets/article-procedure.png";

export default function Articles() {
  return (
    <div className="w-full bg-[#FFFFFF] py-6 sm:py-10 md:py-14">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Верхняя секция: Заголовок и Фото процедуры */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 lg:gap-16 items-center mb-8 sm:mb-12 md:mb-16">
          {/* Заголовок статьи */}
          <div>
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-bold text-[#212121] leading-snug sm:leading-snug md:leading-tight tracking-tight">
              Актуальна ли мезотерапия в коррекции шеи, декольте, кистей рук и
              какие существуют альтернативы?
            </h1>
          </div>

          {/* Фотография процедуры */}
          <div className="w-full flex justify-center md:justify-end">
            <div className="w-full max-w-[480px] overflow-hidden rounded-2xl md:rounded-3xl shadow-sm">
              <img
                src={articlePhoto}
                alt="Процедура мезотерапии"
                className="w-full h-auto object-cover aspect-[4/3] hover:scale-102 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        {/* Светло-зеленая контентная карточка с текстом статьи */}
        <div className="bg-[#EBF7EA] rounded-2xl md:rounded-3xl p-5 sm:p-8 md:p-12 lg:p-14 mb-8 sm:mb-12">
          <div className="space-y-4 sm:space-y-5 md:space-y-6 text-xs sm:text-sm md:text-base text-[#424242] leading-relaxed md:leading-loose">
            <p>
              Можно написать любое количество текста, лирического описания компании.
            </p>

            <p>
              Ведущий учебный центр эстетической косметологии. Более 5 лет мы проводим
              сертифицированные курсы профессионального образования в области косметологии и
              индустрии красоты.
            </p>

            <p>
              В данный момент в Харькове нет аналогов нашего учебного центра по уровню подготовки
              и разнообразию читаемых курсов. Все выпускники нашего учебного центра востребованы в:
              институтах омоложения и здоровья, Спа-центрах, салонах красоты, частных клиниках и
              других организациях в сфере &quot;красоты и здоровья&quot;.
            </p>

            <p>
              Мы проводим повышения квалификации, уникальные мастер классы. Курсы косметолог
              Харьков - это хорошее вложение, инвестиция в будущий заработок специалиста
              получившего наши документы, окончив обучение, и получив практические знания.
            </p>

            <p>
              В данный момент в Харькове нет аналогов нашего учебного центра по уровню подготовки
              и разнообразию читаемых курсов. Все выпускники нашего учебного центра востребованы в:
              институтах омоложения и здоровья, Спа-центрах, салонах красоты, частных клиниках и
              других организациях в сфере &quot;красоты и здоровья&quot;.
            </p>

            <p>
              Мы проводим повышения квалификации, уникальные мастер классы. Курсы косметолог
              Харьков - это хорошее вложение, инвестиция в будущий заработок специалиста
              получившего наши документы, окончив обучение, и получив практические знания.
            </p>
          </div>
        </div>

        {/* Ссылка возврата ко всем статьям */}
        <div className="text-center pt-2 pb-6">
          <Link
            to="/Articles"
            className="text-[#55A630] font-bold text-sm sm:text-base hover:text-[#418623] hover:underline transition-colors inline-block"
          >
            Вернуться ко всем статьям
          </Link>
        </div>
      </div>
    </div>
  );
}