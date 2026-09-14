import { useState } from "react";

// Данные таблицы стоимости курсов согласно макету Figma
const priceCategories = [
  {
    id: "1.0",
    title: "1.0 Мезотерапия в эстетической косметологии",
    days: "5",
    hours: "40",
    earlyPrice: "10800 грн",
    latePrice: "14700 грн",
    subItems: [
      {
        id: "1.1",
        title: "1.1 Техники мезотерапии",
        days: "1",
        hours: "8",
        earlyPrice: "2900 грн",
        latePrice: "3950 грн",
        isLink: true,
      },
      {
        id: "1.2",
        title: "1.2 Мезотерапия лица",
        days: "1",
        hours: "8",
        earlyPrice: "2900 грн",
        latePrice: "3950 грн",
      },
      {
        id: "1.3",
        title: "1.3 Липоскульптура тела",
        days: "1",
        hours: "8",
        earlyPrice: "2900 грн",
        latePrice: "3950 грн",
      },
      {
        id: "1.4",
        title: "1.4 Мезотерапия в трихологии",
        days: "1",
        hours: "8",
        earlyPrice: "2900 грн",
        latePrice: "3950 грн",
      },
      {
        id: "1.5",
        title: "1.5 Биоревитализация",
        days: "1",
        hours: "8",
        earlyPrice: "2900 грн",
        latePrice: "3950 грн",
      },
    ],
  },
  {
    id: "2.0",
    title: "2.0 Контурная пластика иглой",
    days: "2",
    hours: "16",
    earlyPrice: "7900 грн",
    latePrice: "11900 грн",
    subItems: [
      {
        id: "2.1",
        title: "2.1 Базовый уровень",
        days: "1",
        hours: "8",
        earlyPrice: "4500 грн",
        latePrice: "6450 грн",
      },
      {
        id: "2.2",
        title: "2.2 Моделирование губ",
        days: "1",
        hours: "8",
        earlyPrice: "4500 грн",
        latePrice: "6450 грн",
      },
    ],
  },
  {
    id: "1.0-rep-1",
    title: "1.0 Мезотерапия в эстетической косметологии",
    days: "5",
    hours: "40",
    earlyPrice: "10800 грн",
    latePrice: "14700 грн",
    subItems: [
      {
        id: "1.1-r1",
        title: "1.1 Техники мезотерапии",
        days: "1",
        hours: "8",
        earlyPrice: "2900 грн",
        latePrice: "3950 грн",
      },
      {
        id: "1.2-r1",
        title: "1.2 Мезотерапия лица",
        days: "1",
        hours: "8",
        earlyPrice: "2900 грн",
        latePrice: "3950 грн",
      },
      {
        id: "1.3-r1",
        title: "1.3 Липоскульптура тела",
        days: "1",
        hours: "8",
        earlyPrice: "2900 грн",
        latePrice: "3950 грн",
      },
      {
        id: "1.4-r1",
        title: "1.4 Мезотерапия в трихологии",
        days: "1",
        hours: "8",
        earlyPrice: "2900 грн",
        latePrice: "3950 грн",
      },
      {
        id: "1.5-r1",
        title: "1.5 Биоревитализация",
        days: "1",
        hours: "8",
        earlyPrice: "2900 грн",
        latePrice: "3950 грн",
      },
    ],
  },
  {
    id: "2.0-rep-1",
    title: "2.0 Контурная пластика иглой",
    days: "2",
    hours: "16",
    earlyPrice: "7900 грн",
    latePrice: "11900 грн",
    subItems: [
      {
        id: "2.1-r1",
        title: "2.1 Базовый уровень",
        days: "1",
        hours: "8",
        earlyPrice: "4500 грн",
        latePrice: "6450 грн",
      },
      {
        id: "2.2-r1",
        title: "2.2 Моделирование губ",
        days: "1",
        hours: "8",
        earlyPrice: "4500 грн",
        latePrice: "6450 грн",
      },
    ],
  },
  {
    id: "1.0-rep-2",
    title: "1.0 Мезотерапия в эстетической косметологии",
    days: "5",
    hours: "40",
    earlyPrice: "10800 грн",
    latePrice: "14700 грн",
    subItems: [
      {
        id: "1.1-r2",
        title: "1.1 Техники мезотерапии",
        days: "1",
        hours: "8",
        earlyPrice: "2900 грн",
        latePrice: "3950 грн",
      },
      {
        id: "1.2-r2",
        title: "1.2 Мезотерапия лица",
        days: "1",
        hours: "8",
        earlyPrice: "2900 грн",
        latePrice: "3950 грн",
      },
      {
        id: "1.3-r2",
        title: "1.3 Липоскульптура тела",
        days: "1",
        hours: "8",
        earlyPrice: "2900 грн",
        latePrice: "3950 грн",
      },
      {
        id: "1.4-r2",
        title: "1.4 Мезотерапия в трихологии",
        days: "1",
        hours: "8",
        earlyPrice: "2900 грн",
        latePrice: "3950 грн",
      },
      {
        id: "1.5-r2",
        title: "1.5 Биоревитализация",
        days: "1",
        hours: "8",
        earlyPrice: "2900 грн",
        latePrice: "3950 грн",
      },
    ],
  },
  {
    id: "2.0-rep-2",
    title: "2.0 Контурная пластика иглой",
    days: "2",
    hours: "16",
    earlyPrice: "7900 грн",
    latePrice: "11900 грн",
    subItems: [
      {
        id: "2.1-r2",
        title: "2.1 Базовый уровень",
        days: "1",
        hours: "8",
        earlyPrice: "4500 грн",
        latePrice: "6450 грн",
      },
      {
        id: "2.2-r2",
        title: "2.2 Моделирование губ",
        days: "1",
        hours: "8",
        earlyPrice: "4500 грн",
        latePrice: "6450 грн",
      },
    ],
  },
];

export default function Price() {
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setErrorMsg("Пожалуйста, заполните имя и номер телефона");
      return;
    }
    setErrorMsg("");
    setIsSubmitted(true);
  };

  return (
    <div className="w-full bg-[#FFFFFF] py-6 sm:py-10 md:py-14">
      <div className="max-w-[1140px] mx-auto px-3 sm:px-6 lg:px-8">
        {/* Заголовок страницы */}
        <h1 className="text-xl sm:text-2xl md:text-4xl font-bold text-center text-[#212121] mb-5 sm:mb-8 md:mb-12 tracking-tight">
          Стоимость обучения
        </h1>

        {/* Карточка таблицы с фирменным зеленым горизонтальным скроллбаром для мобильных устройств */}
        <div className="bg-[#F7F8F9] rounded-2xl md:rounded-3xl p-3 sm:p-6 md:p-8 mb-6 overflow-hidden">
          <div className="overflow-x-auto green-scrollbar pb-3">
            <table className="w-full min-w-[580px] sm:min-w-[680px] text-left border-collapse">
              {/* Шапка таблицы */}
              <thead>
                <tr className="text-[11px] sm:text-xs md:text-sm text-[#757575] font-normal border-b border-[#E0E0E0]">
                  <th className="pb-3 sm:pb-4 font-normal w-[46%] pr-2">Курс обучения</th>
                  <th className="pb-3 sm:pb-4 font-normal text-center w-[10%] px-1">Дни</th>
                  <th className="pb-3 sm:pb-4 font-normal text-center w-[10%] px-1">Часы</th>
                  <th className="pb-3 sm:pb-4 font-normal text-center w-[17%] px-1 whitespace-nowrap">
                    <span className="inline-flex items-center justify-center gap-1">
                      <span>Ранняя регистрация</span>
                      {/* Зеленая птичка */}
                      <svg
                        className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#55A630] shrink-0"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M21.7 4.3a1 1 0 0 0-1.1-.2l-9.3 4.1L3.9 4.3a1 1 0 0 0-1.4 1.1v.2l2.6 7.4-4.8 1.4a1 1 0 0 0-.2 1.9l8.6 4.3 2.1 4.7a1 1 0 0 0 1.8 0l8.7-19.5a1 1 0 0 0-.6-1.5zM12 18.2l-1.4-3.1 7.2-7.2-8.5 4.3-1.8-5 11.8 11z" />
                      </svg>
                    </span>
                  </th>
                  <th className="pb-3 sm:pb-4 font-normal text-center w-[17%] px-1 whitespace-nowrap">
                    Поздняя регистрация
                  </th>
                </tr>
              </thead>

              {/* Тело таблицы с разделами */}
              <tbody>
                {priceCategories.map((group) => (
                  <tr key={group.id} className="border-b border-[#E0E0E0]/70 last:border-b-0">
                    <td colSpan={5} className="py-2.5 sm:py-3">
                      {/* Главная строка курса */}
                      <div className="flex items-center text-xs sm:text-sm md:text-base font-bold text-[#212121] py-1">
                        <div className="w-[46%] pr-2 leading-snug">{group.title}</div>
                        <div className="w-[10%] text-center px-1">{group.days}</div>
                        <div className="w-[10%] text-center px-1">{group.hours}</div>
                        <div className="w-[17%] text-center px-1 whitespace-nowrap font-bold">{group.earlyPrice}</div>
                        <div className="w-[17%] text-center px-1 whitespace-nowrap font-bold">{group.latePrice}</div>
                      </div>

                      {/* Вложенные темы / подуровни */}
                      {group.subItems && group.subItems.length > 0 && (
                        <div className="space-y-1.5 pt-1.5">
                          {group.subItems.map((sub) => (
                            <div
                              key={sub.id}
                              className="flex items-center text-[11px] sm:text-xs md:text-sm text-[#424242] py-0.5"
                            >
                              <div className="w-[46%] pr-2 pl-2.5 sm:pl-4 leading-tight">
                                {sub.isLink ? (
                                  <a
                                    href="#order-form"
                                    className="text-[#55A630] underline hover:text-[#3d7a22] transition-colors"
                                  >
                                    {sub.title}
                                  </a>
                                ) : (
                                  <span>{sub.title}</span>
                                )}
                              </div>
                              <div className="w-[10%] text-center text-[#616161] px-1">
                                {sub.days}
                              </div>
                              <div className="w-[10%] text-center text-[#616161] px-1">
                                {sub.hours}
                              </div>
                              <div className="w-[17%] text-center text-[#424242] px-1 whitespace-nowrap">
                                {sub.earlyPrice}
                              </div>
                              <div className="w-[17%] text-center text-[#424242] px-1 whitespace-nowrap">
                                {sub.latePrice}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Информационная плашка с адаптивным центрированием */}
        <div className="bg-[#EBF7EA] text-[#333333] text-center text-xs sm:text-sm md:text-base py-2.5 sm:py-3 px-4 rounded-lg mb-8 sm:mb-14 max-w-[620px] mx-auto leading-relaxed">
          * Вы можете пройти обучение полностью или выбрать 1-й или 2-й день
        </div>

        {/* Форма: Закажите обратный звонок */}
        <div
          id="order-form"
          className="bg-white border border-[#E0E0E0] rounded-2xl shadow-[0_2px_15px_rgba(0,0,0,0.04)] w-full max-w-[440px] sm:max-w-[480px] mx-auto p-5 sm:p-8 md:p-10 text-center"
        >
          <h2 className="text-lg sm:text-2xl font-bold text-[#55A630] mb-1.5 tracking-tight">
            Закажите обратный звонок
          </h2>
          <p className="text-xs sm:text-sm text-[#757575] mb-5 leading-snug">
            Оставьте заявку в форме и наш менеджер свяжется с вами
          </p>

          {isSubmitted ? (
            <div className="bg-[#EBF7EA] text-[#2E7D32] p-4 sm:p-5 rounded-xl text-xs sm:text-sm font-medium">
              ✓ Спасибо за заявку! Наш специалист свяжется с вами в ближайшее время.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 sm:py-3 text-xs sm:text-sm text-[#333333] placeholder-[#9E9E9E] border border-[#B7D8AF] rounded-lg outline-none focus:border-[#55A630] focus:ring-1 focus:ring-[#55A630] transition"
                />
              </div>

              <div>
                <input
                  type="tel"
                  placeholder="Ваш номер телефона"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 sm:py-3 text-xs sm:text-sm text-[#333333] placeholder-[#9E9E9E] border border-[#B7D8AF] rounded-lg outline-none focus:border-[#55A630] focus:ring-1 focus:ring-[#55A630] transition"
                />
              </div>

              {errorMsg && (
                <p className="text-xs text-red-500 text-left pl-1">{errorMsg}</p>
              )}

              <button
                type="submit"
                className="w-full bg-[#55A630] hover:bg-[#468e27] active:bg-[#3d7a22] text-white font-medium text-xs sm:text-sm py-2.5 sm:py-3 px-6 rounded-lg transition-colors cursor-pointer shadow-sm mt-1"
              >
                Отправить
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}