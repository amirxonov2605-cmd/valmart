import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import main from "./../../../assets/shukrullo/forcosms/1111.jpg"
import model from "./../../../assets/shukrullo/forcosms/trainerPhoto.jpg"
import yak from "./../../../../public/images/sales/article-3.jpg"
import du from "./../../../../public/images/sales/article-1.jpg"

const courses = [
  {
    tag: "Курс для медиков",
    title: "Канюльные техники",
    badge: "Оффлайн",
    badgeColor: "bg-indigo-900",
    date: "1 - 4 мая",
    seats: "Свободно 2 из 15 мест",
    accent: "bg-indigo-900 hover:bg-indigo-800",
  },
  {
    tag: "Курс для медиков",
    title: "Мезотерапия и биоревитализация",
    badge: "Онлайн",
    badgeColor: "bg-green-600",
    date: "15 - 20 мая",
    seats: "Свободно 2 из 15 мест",
    accent: "bg-green-600 hover:bg-green-700",
  },
  {
    tag: "Курс для медиков",
    title: "Биогель - новое в косметологии",
    badge: "Мастер-класс",
    badgeColor: "bg-teal-600",
    date: "2 - 5 августа",
    seats: "Свободно 2 из 15 мест",
    accent: "bg-teal-600 hover:bg-teal-700",
  },
  {
    tag: "Курс для медиков",
    title: "Ботулинотерапия для начинающих",
    badge: "Оффлайн",
    badgeColor: "bg-indigo-900",
    date: "10 - 14 сентября",
    seats: "Свободно 4 из 15 мест",
    accent: "bg-indigo-900 hover:bg-indigo-800",
  },
  {
    tag: "Курс для медиков",
    title: "Контурная пластика губ",
    badge: "Онлайн",
    badgeColor: "bg-green-600",
    date: "1 - 3 октября",
    seats: "Свободно 6 из 15 мест",
    accent: "bg-green-600 hover:bg-green-700",
  },
];

const masterClasses = [
  {
    image: "https://picsum.photos/seed/mc1/600/360",
    date: "3 ноября, 10:00-12:00",
    title: "10 возможностей неодимового лазера. Лазерный пилинг, удаление татуировок",
    trainer: "Тренер: Юлия Шумна",
    price: "2000 грн",
  },
  {
    image: "https://picsum.photos/seed/mc2/600/360",
    date: "20 ноября, 12:00-17:00",
    title: "Профессия косметолог. Семинар для новичков и профессионалов",
    trainer: "Спикеры: Мадина Ставец, Алена Врянцева, Елена Виноградова, Юлия Шумна",
    price: "Бесплатно",
  },
  {
    image: "https://picsum.photos/seed/mc3/600/360",
    date: "5 декабря, 11:00-15:00",
    title: "Аппаратная косметология: базовые техники и разбор ошибок",
    trainer: "Тренер: Елена Виноградова",
    price: "1500 грн",
  },
];

const specials = [
  {
    title: "АКЦИЯ!",
    subtitle: "-15%",
    detail: "от 3 препаратов",
    subtitle2: "-20%",
    detail2: "от 5 препаратов",
    bg: "bg-gradient-to-br from-fuchsia-200 to-purple-200",
    text: "text-purple-900",
  },
  {
    title: "АКЦИЯ",
    subtitle: "-10%",
    detail: "на 2 первых курса",
    subtitle2: "-15%",
    detail2: "на 4 курса",
    bg: "bg-gradient-to-br from-cyan-100 to-blue-100",
    text: "text-blue-900",
  },
  {
    title: "АКЦИЯ",
    label: "MEDIFEEL",
    subtitle: "-25%",
    bg: "bg-gradient-to-br from-emerald-100 to-teal-100",
    text: "text-emerald-900",
  },
];

const trainingCards = [
  { title: "КУРСЫ КОСМЕТОЛОГИИ", lines: ["- эстетическая косметология", "- инъекционная косметология", "- лазерная косметология"], image: yak, big: true },
  { title: "ОНЛАЙН ОБУЧЕНИЕ", image: du },
  { title: "МАСТЕР-КЛАССЫ", image: main  },
  { title: "РАСПИСАНИЕ", image: du, light: true },
  { title: "АКЦИИ", image: yak },
];

const whyUs = [
  {
    title: "Преподаватели",
    text: "Наши преподаватели имеют многолетний опыт в сфере косметологии и совмещают преподавательскую деятельность с практической работой в салонах красоты и других специализированных центрах",
    highlight: false,
  },
  {
    title: "Сертификаты",
    text: "Удостоверение, сертификат и свидетельство полученные у нас по окончании курсов, работают как лучшая «рекомендация» при приеме на работу",
    highlight: true,
  },
  {
    title: "Повышение квалификации",
    text: "Ежегодно, больше 2000 косметологов повышают квалификацию и уровень профессионализма в просторных кабинетах нашего центра",
    highlight: false,
  },
];

/* ---------- Универсальная карусель ---------- */

function Carousel({ items, renderItem, itemsPerView = 3, gap = "gap-6" }) {
  const [index, setIndex] = useState(0);
  const maxIndex = Math.max(items.length - itemsPerView, 0);

  const prev = () => setIndex((i) => (i === 0 ? maxIndex : i - 1));
  const next = () => setIndex((i) => (i === maxIndex ? 0 : i + 1));

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className={`flex ${gap} transition-transform duration-500 ease-out`}
          style={{
            transform: `translateX(calc(-${index} * (100% + 1.5rem) / ${itemsPerView}))`,
          }}
        >
          {items.map((item, i) => (
            <div
              key={i}
              className="shrink-0"
              style={{ width: `calc((100% - ${(itemsPerView - 1) * 1.5}rem) / ${itemsPerView})` }}
            >
              {renderItem(item, i)}
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={prev}
        aria-label="Предыдущий слайд"
        className="hidden sm:flex absolute -left-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md items-center justify-center text-gray-500 hover:text-green-600 hover:shadow-lg transition-all"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={next}
        aria-label="Следующий слайд"
        className="hidden sm:flex absolute -right-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md items-center justify-center text-gray-500 hover:text-green-600 hover:shadow-lg transition-all"
      >
        <ChevronRight size={20} />
      </button>

      <div className="flex sm:hidden justify-center gap-3 mt-4">
        <button onClick={prev} aria-label="Предыдущий слайд" className="w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center text-gray-500">
          <ChevronLeft size={18} />
        </button>
        <button onClick={next} aria-label="Следующий слайд" className="w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center text-gray-500">
          <ChevronRight size={18} />
        </button>
      </div>

      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Слайд ${i + 1}`}
            className={`w-2 h-2 rounded-full transition-colors ${i === index ? "bg-green-600" : "bg-gray-300"}`}
          />
        ))}
      </div>
    </div>
  );
}

/* ---------- Модальное окно ---------- */

function SentModal({ onClose }) {
  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl px-10 py-12 max-w-sm w-full text-center relative shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Закрыть"
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors"
        >
          <X size={20} />
        </button>
        <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-5 text-3xl">
          ✓
        </div>
        <p className="text-xl font-semibold text-gray-800">Отправлено</p>
        <p className="text-gray-500 mt-2">Мы свяжемся с вами в ближайшее время</p>
      </div>
    </div>
  );
}

/* ---------- Страница ---------- */

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const formRef = useRef(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setModalOpen(true);
    e.target.reset();
  };

  return (
    <main className="w-full text-gray-800">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-green-50 to-white px-4 md:px-10 pt-10 pb-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-green-600 font-medium mb-2">Бесплатный вебинар</p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 mb-4">
              ПРОФЕССИЯ
              <br />
              КОСМЕТОЛОГ
            </h1>
            <p className="text-gray-600 max-w-sm mb-8">
              Приглашаем на бесплатный вебинар для профессиональных косметологов и интересующихся этой профессией
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-medium transition-colors">
                Зарегистрироваться
              </button>
              <button className="border border-green-600 text-green-700 hover:bg-green-50 px-6 py-3 rounded-full font-medium transition-colors">
                Узнать подробнее
              </button>
            </div>
          </div>
          <div className="relative h-72 md:h-96">
            <img
              src={main}
              alt="Косметологи"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>

        {/* Статистика */}
        <div className="max-w-5xl mx-auto mt-12 bg-white rounded-2xl shadow-lg grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-100">
          {[
            ["4000+", "Сертификатов мы выдали"],
            ["3500+", "Моделей в нашей базе"],
            ["1500+", "Специалистов мы обучили"],
            ["5500+", "Довольных клиентов"],
          ].map(([num, label]) => (
            <div key={label} className="px-6 py-6 text-center">
              <p className="text-2xl md:text-3xl font-bold text-gray-900">{num}</p>
              <p className="text-sm text-gray-500 mt-1">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* КУРСЫ ОБУЧЕНИЯ */}
      <section className="px-4 md:px-10 py-16 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Курсы обучения</h2>
        <Carousel
          items={courses}
          itemsPerView={3}
          renderItem={(course) => (
            <div className="border border-gray-100 rounded-2xl p-5 h-full flex flex-col shadow-sm hover:shadow-md transition-shadow">
              <p className="text-xs text-gray-400 mb-2">{course.tag}</p>
              <h3 className="font-semibold text-lg mb-3 min-h-[3.5rem]">{course.title}</h3>
              <span className={`self-start text-white text-xs px-3 py-1 rounded-full mb-4 ${course.badgeColor}`}>
                {course.badge}
              </span>
              <div className="bg-gray-50 rounded-xl h-32 flex items-center justify-center mb-4">
                <img src="https://picsum.photos/seed/model/120/120" alt="" className="h-24 rounded-full object-cover" />
              </div>
              <p className="text-sm text-gray-500 mb-1">{course.date}</p>
              <p className="text-sm text-gray-500 mb-4">{course.seats}</p>
              <button className={`text-white rounded-full py-2.5 font-medium mb-2 transition-colors ${course.accent}`}>
                Зарегистрироваться
              </button>
              <button className="border border-gray-200 rounded-full py-2.5 font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                Подробнее
              </button>
            </div>
          )}
        />
      </section>

      {/* О НАС */}
      <section className="px-4 md:px-10 py-16 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <img
          src="https://picsum.photos/seed/about/700/500"
          alt="О нас"
          className="w-full h-80 object-cover rounded-2xl"
        />
        <div>
          <p className="text-gray-400 mb-2">О нас</p>
          <h2 className="text-2xl font-bold mb-1">VALMARI</h2>
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            ВЕДУЩИЙ УЧЕБНЫЙ ЦЕНТР ЭСТЕТИЧЕСКОЙ КОСМЕТОЛОГИИ
          </h3>
          <p className="text-gray-500 mb-3">Описание может быть любое.</p>
          <p className="text-gray-500 mb-6">
            Ведущий учебный центр эстетической косметологии. Более 5 лет мы проводим сертифицированные курсы
            профессионального образования в области косметологии и индустрии красоты, здоровья и молодости
          </p>
          <button className="text-green-600 font-medium hover:text-green-700 transition-colors">
            Подробнее →
          </button>
        </div>
      </section>

      {/* ОБУЧЕНИЕ КОСМЕТОЛОГОВ */}
      <section className="px-4 md:px-10 py-16 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Обучение косметологов</h2>
        <div className="grid md:grid-cols-2 gap-5 mb-5">
          {trainingCards.slice(0, 2).map((card) => (
            <div key={card.title} className="relative rounded-2xl overflow-hidden h-64 group cursor-pointer">
              <img src={card.image} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="font-bold text-lg mb-2">{card.title}</h3>
                {card.lines?.map((line) => (
                  <p key={line} className="text-sm text-white/90">{line}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {trainingCards.slice(2).map((card) => (
            <div key={card.title} className="relative rounded-2xl overflow-hidden h-48 group cursor-pointer">
              <img src={card.image} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute bottom-5 left-5">
                <h3 className="font-bold text-white">{card.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 md:px-10 py-16 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">ВЕДЕМ НАБОР МОДЕЛЕЙ</h2>
          <p className="text-gray-500 mb-3">Мы предлагаем свои услуги для моделей.</p>
          <p className="text-gray-500 mb-8">
            Выберите процедуру или несколько процедур и наш менеджер проконсультирует вас и назовет ближайшую дату,
            когда вы сможете получить эту процедуру
          </p>
          <button
            onClick={scrollToForm}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-medium transition-colors"
          >
            Стать моделью
          </button>
        </div>
        <img
          src={model}
          alt="Процедура"
          className="w-full h-80 object-cover rounded-2xl"
        />
      </section>

      {/* МАСТЕР-КЛАССЫ */}
      <section className="px-4 md:px-10 py-16 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">Мастер-классы</h2>
        <p className="text-center text-gray-500 mb-10">Мероприятия для повышения квалификации косметологов</p>
        <Carousel
          items={masterClasses}
          itemsPerView={2}
          renderItem={(mc) => (
            <div className="flex flex-col sm:flex-row rounded-2xl overflow-hidden border border-gray-100 shadow-sm h-full">
              <img src={mc.image} alt="" className="w-full sm:w-1/2 h-48 sm:h-auto object-cover" />
              <div className="p-5 flex flex-col justify-between flex-1">
                <div>
                  <p className="text-sm text-gray-400 mb-2">{mc.date}</p>
                  <h3 className="font-semibold mb-2">{mc.title}</h3>
                  <p className="text-sm text-gray-500">{mc.trainer}</p>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span className="font-semibold text-gray-800">{mc.price}</span>
                  <button
                    aria-label="Подробнее"
                    className="w-9 h-9 rounded-full bg-green-600 hover:bg-green-700 text-white flex items-center justify-center transition-colors"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          )}
        />
      </section>

      <section className="px-4 md:px-10 py-16 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Почему мы</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {whyUs.map((item) => (
            <div
              key={item.title}
              className={`rounded-2xl p-8 relative overflow-hidden ${
                item.highlight ? "bg-green-500 text-white" : "bg-gray-50 text-gray-700"
              }`}
            >
              <h3 className="font-bold text-lg mb-4">{item.title}</h3>
              <p className={`text-sm leading-relaxed ${item.highlight ? "text-white/90" : "text-gray-500"}`}>
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 md:px-10 py-16 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Специальные предложения</h2>
        <Carousel
          items={specials}
          itemsPerView={3}
          renderItem={(sp) => (
            <div className={`rounded-2xl p-6 h-56 flex flex-col justify-between ${sp.bg} ${sp.text}`}>
              <div>
                <p className="font-bold text-lg">{sp.title}</p>
                {sp.label && <p className="text-xs font-medium tracking-wide">{sp.label}</p>}
              </div>
              <div>
                <p className="text-3xl font-bold">{sp.subtitle}</p>
                {sp.detail && <p className="text-sm">{sp.detail}</p>}
                {sp.subtitle2 && (
                  <>
                    <p className="text-3xl font-bold mt-2">{sp.subtitle2}</p>
                    <p className="text-sm">{sp.detail2}</p>
                  </>
                )}
              </div>
            </div>
          )}
        />
      </section>

      <section ref={formRef} className="px-4 md:px-10 py-16 max-w-2xl mx-auto text-center scroll-mt-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Закажите обратный звонок</h2>
        <p className="text-gray-500 mb-8">Оставьте заявку в форме и наш менеджер свяжется с вами</p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Ваше имя"
            required
            className="border border-gray-200 rounded-full px-5 py-3 focus:outline-none focus:border-green-500 transition-colors"
          />
          <input
            type="tel"
            placeholder="Ваш номер телефона"
            required
            className="border border-gray-200 rounded-full px-5 py-3 focus:outline-none focus:border-green-500 transition-colors"
          />
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white rounded-full py-3 font-medium transition-colors"
          >
            Отправить
          </button>
        </form>
      </section>

      {modalOpen && <SentModal onClose={() => setModalOpen(false)} />}
    </main>
  );
}
