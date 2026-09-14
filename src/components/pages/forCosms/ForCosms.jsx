import React, { useState, useRef, useEffect } from 'react';
import styles from './ForCosms.module.css';

import mainPhoto from "../../../assets/shukrullo/forcosms/mainPhoto.jpg";
import trainerPhoto from '../../../assets/shukrullo/forcosms/trainerPhoto.jpg';
import birdIcon from "../../../assets/shukrullo/forcosms/birdIcon.png";
import gallery1 from '../../../assets/shukrullo/forcosms/gallery1.jpg';
import gallery2 from '../../../assets/shukrullo/forcosms/gallery2.jpg';
import maniken from '../../../assets/shukrullo/courses/000.png';
import man from '../../../assets/shukrullo/courses/02-00.png';

const PROGRAM_DATA = [
  {
    day: 1,
    title: 'Тема: Коррекция ботулотоксином типа А (БТА) верхней и средней трети лица',
    theory: [
      'Виды токсинов на рынке. Преимущества и особенности',
      'Показания, противопоказания применения для разных возрастов, в зависимости от особенностей строения лица',
      'Показания к применению БТА в зависимости от анатомических и физиологических особенностей',
      'Анатомия лица по зонам. Геометрия точек и дозы для безопасного введения БТА',
      'Созависимость возраста и доз',
      'Техники разведения на разные виды токсинов',
      'Все виды осложнений и методы их коррекции',
      'Условия хранения БТА',
    ],
    practice: [
      'Геометрия точек',
      'Техники разведения БТА',
      'Постановка руки',
      'Самостоятельные инъекции под чутким руководством тренера',
    ],
  },
  {
    day: 2,
    title: 'Тема: Коррекция нижней трети лица, особенности лечения гипергидроза, понятие техники мезоботокса',
    theory: [],
    practice: [],
  },
];

const BENEFITS = [
  {
    title: 'Минимум препарата максимум результата',
    text: 'Вы научитесь делать эстетически красивые результаты, а не лица под копирку',
  },
  {
    title: 'Тренер гарантировано "поставит вашу руку"',
    text: 'Вы будете колоть самостоятельно уже на курсе',
  },
  {
    title: 'Узнаете, как работать с любыми ТМ ботулотоксина',
    text: 'Мы объясним, за что отвечает каждый показатель на упаковке и по какому принципу выбирать препарат',
  },
  {
    title: 'Вы отработаете практику на моделях',
    text: 'В нашей базе более 3500 моделей с реальными проблемами и пожеланиями',
  },
];

const TRAINER_FACTS = [
  'врач дерматовенеролог',
  'соосновательница центра эстетической косметологии ValMari',
  'ведущий специалист косметолог-инъекционист',
  'главный тренер учебного центра ValMari',
  'более 10 лет опыта работы врачом-инъекционистом',
  'более 8-ми лет опыта работы тренером',
  'в 2016 году вошла в пятерку лучших косметологов Украины',
];

const GALLERY_IMAGES = [gallery1, gallery2, gallery1, gallery2];

const OTHER_COURSES = [
  {
    id: 1,
    type: 'course',
    category: 'Курсы по косметологии',
    subCategory: 'Инъекционная косметология',
    title: 'Канюльная техника',
    format: 'Оффлайн',
    date: '1 - 4 мая',
    theme: 'purple',
    freeSpots: 2,
    totalSpots: 15,
    image: maniken,
    price: '12 000 грн',
  },
  {
    id: 2,
    type: 'course',
    category: 'Курсы по косметологии',
    subCategory: 'Инъекционная косметология',
    title: 'Мезотерапия и Биоревитализация',
    format: 'Онлайн',
    date: '15 - 20 мая',
    theme: 'green',
    freeSpots: 2,
    totalSpots: 15,
    image: man,
    price: '8 500 грн',
  },
  {
    id: 3,
    type: 'master',
    category: 'Мастер-классы',
    subCategory: 'Инъекционная косметология',
    title: 'Биогель - новое в косметологии',
    format: 'Мастер-класс',
    date: '2 - 5 августа',
    theme: 'teal',
    freeSpots: 2,
    totalSpots: 15,
    image: man,
    price: '5 000 грн',
  },
];

const TiltImage = ({ src, alt, theme }) => {
  const wrapperRef = useRef(null);
  const [tiltStyle, setTiltStyle] = useState({});

  const handleMouseMove = (e) => {
    const el = wrapperRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotateY = ((x - cx) / cx) * 22;
    const rotateX = -((y - cy) / cy) * 22;

    setTiltStyle({
      transform: `perspective(650px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.12, 1.12, 1.12)`,
      filter: 'drop-shadow(0 12px 16px rgba(0,0,0,0.18))',
    });
  };

  const handleMouseLeave = () => setTiltStyle({});

  return (
    <div
      ref={wrapperRef}
      className={`${styles.modelContainer} ${styles[`${theme}Theme`] || ''}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.modelGlow}></div>
      <img src={src} alt={alt} className={styles.mannequinImage} style={tiltStyle} />
    </div>
  );
};

export default function ForCosms() {
  const [activeDay, setActiveDay] = useState(1);
  const [modalType, setModalType] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [regData, setRegData] = useState({ name: '', phone: '' });
  const [activeSlide, setActiveSlide] = useState(0);
  const [lightboxImg, setLightboxImg] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const trackRef = useRef(null);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveSlide((prev) => {
        const nextSlide = (prev + 1) % GALLERY_IMAGES.length;
        scrollToSlide(nextSlide);
        return nextSlide;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handleOpenModal = (type) => {
    setModalType(type);
    setIsSuccess(false);
    setRegData({ name: '', phone: '' });
  };

  const handleCloseModal = () => {
    setModalType(null);
    setIsSuccess(false);
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  const toggleDay = (day) => {
    setActiveDay((prev) => (prev === day ? null : day));
  };

  const scrollToSlide = (index) => {
    const track = trackRef.current;
    if (!track || !track.children[index]) return;
    const slide = track.children[index];
    track.scrollTo({
      left: slide.offsetLeft - (track.clientWidth - slide.clientWidth) / 2,
      behavior: 'smooth',
    });
    setActiveSlide(index);
  };

  const handleGalleryScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const center = track.scrollLeft + track.clientWidth / 2;
    let closestIdx = 0;
    let closestDist = Infinity;
    Array.from(track.children).forEach((child, idx) => {
      const childCenter = child.offsetLeft + child.clientWidth / 2;
      const dist = Math.abs(childCenter - center);
      if (dist < closestDist) {
        closestDist = dist;
        closestIdx = idx;
      }
    });
    setActiveSlide(closestIdx);
  };

  return (
    <div className={styles.pageContainer}>
      {/* ШАПКА */}
      <section className={styles.heroSection}>
    
        <div className={styles.heroContentGrid}>
          <div className={styles.heroLeft}>
            <span className={styles.startDate}>Старт курса: 10 января</span>
            <h1 className={styles.heroTitle}>БОТУЛИНОТЕРАПИЯ ДЛЯ КОСМЕТОЛОГОВ</h1>
            <div className={styles.heroButtons}>
              <button className={styles.btnPrimary} onClick={() => handleOpenModal('register')}>
                Зарегистрироваться
              </button>
              <button className={styles.btnSecondary} onClick={() => handleOpenModal('details')}>
                Узнать подробнее
              </button>
            </div>
          </div>
          <div className={styles.heroRight}>
            <img src={mainPhoto} alt="Ботулинотерапия" className={styles.heroImage} />
          </div>
        </div>
      </section>

      {/* ОПИСАНИЕ */}
      <section className={styles.descriptionSection}>
        <div className={styles.descriptionBox}>
          <p>
            Процедура ботулинотерапия - это инъекционная методика для устранения и профилактики морщин.
            Также, процедура помогает бороться с опущением уголков рта, потерей четкости овала лица, гипергидрозом.
          </p>
          <p>
            На курсе вы научитесь тщательно подбирать препарат, а также отработаете на практике техники
            введения и безопасные разметки точек для разных анатомических типов лица. Вы будете эффективно
            и безопасно применять навыки в работе со своими клиентами.
          </p>
          <p>
            Курс по ботулинотерапии необходим, чтобы вы были уверены в своих знаниях и приносили
            желаемый результат своим клиентам.
          </p>
        </div>
      </section>

      {/* ПРОГРАММА КУРСА */}
      <section className={styles.programSection}>
        <h2 className={styles.sectionTitle}>Программа курса</h2>
        <div className={styles.programContainer}>
          {PROGRAM_DATA.map((dayData) => {
            const isOpen = activeDay === dayData.day;
            const hasContent = dayData.theory.length > 0 || dayData.practice.length > 0;

            return (
              <div
                key={dayData.day}
                className={`${styles.programCard} ${isOpen ? styles.activeProgramCard : ''}`}
              >
                <div className={styles.programHeader} onClick={() => toggleDay(dayData.day)}>
                  <span className={styles.dayLabel}>{dayData.day} ДЕНЬ</span>
                  <p className={styles.dayTitle}>{dayData.title}</p>
                  <button
                    type="button"
                    className={styles.toggleBtn}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleDay(dayData.day);
                    }}
                  >
                    {isOpen ? '−' : '+'}
                  </button>
                </div>

                {isOpen && (
                  <div className={styles.programBody}>
                    {hasContent ? (
                      <>
                        {dayData.theory.length > 0 && (
                          <>
                            <h4 className={styles.subCategoryTitle}>ТЕОРИЯ</h4>
                            <ul className={styles.programList}>
                              {dayData.theory.map((item, idx) => (
                                <li key={idx}>
                                  <span>{String(idx + 1).padStart(2, '0')}</span>
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </>
                        )}
                        {dayData.practice.length > 0 && (
                          <>
                            <h4 className={styles.subCategoryTitle}>ПРАКТИКА</h4>
                            <ul className={styles.programList}>
                              {dayData.practice.map((item, idx) => (
                                <li key={idx}>
                                  <span>{String(idx + 1).padStart(2, '0')}</span>
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </>
                        )}
                      </>
                    ) : (
                      <p className={styles.programPlaceholder}>Программа этого дня скоро появится.</p>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ЧЕМУ ВЫ НАУЧИТЕСЬ */}
      <section className={styles.benefitsSection}>
        <h2 className={styles.sectionTitle}>Чему вы научитесь на курсе</h2>
        <div className={styles.benefitsGrid}>
          {BENEFITS.map((benefit, idx) => (
            <div key={idx} className={styles.benefitCard}>
              <h3>{benefit.title}</h3>
              <p>{benefit.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ТРЕНЕР */}
      <section className={styles.trainerSection}>
        <div className={styles.trainerContainer}>
          <div className={styles.trainerPhotoWrapper}>
            <img src={trainerPhoto} alt="Марина Спивак" className={styles.trainerImage} />
          </div>
          <div className={styles.trainerInfo}>
            <span className={styles.trainerCategory}>Тренер</span>
            <h2>Марина Спивак</h2>
            <ul className={styles.trainerList}>
              {TRAINER_FACTS.map((fact, idx) => (
                <li key={idx}>{fact}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* РАННЯЯ РЕГИСТРАЦИЯ */}
      <section className={styles.earlyRegSection}>
        <div className={styles.earlyRegBox}>
          <div className={styles.earlyRegContent}>
            <h2>РАННЯЯ РЕГИСТРАЦИЯ</h2>
            <p>
              При регистрации на курс до 15 декабря
              <br />
              стоимость обучения - 7000 грн
            </p>
            <button className={styles.btnPrimary} onClick={() => handleOpenModal('register')}>
              Зарегистрироваться
            </button>
          </div>
          <img src={birdIcon} alt="Летающая птичка" className={styles.flyingBird} />
        </div>
      </section>

      {/* ГАЛЕРЕЯ */}
      <section className={styles.gallerySection}>
        <h2 className={styles.sectionTitle}>Как это было в прошлый раз</h2>
        <div 
          className={styles.galleryTrack} 
          ref={trackRef} 
          onScroll={handleGalleryScroll}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {GALLERY_IMAGES.map((img, idx) => (
            <div
              key={idx}
              className={`${styles.galleryItem} ${idx === activeSlide ? styles.galleryItemActive : ''}`}
              onClick={() => setLightboxImg(img)}
            >
              <img src={img} alt={`практика ${idx + 1}`} />
            </div>
          ))}
        </div>
        <div className={styles.dotsRow}>
          {GALLERY_IMAGES.map((_, idx) => (
            <button
              key={idx}
              type="button"
              aria-label={`Слайд ${idx + 1}`}
              className={idx === activeSlide ? styles.dotActive : styles.dot}
              onClick={() => scrollToSlide(idx)}
            />
          ))}
        </div>
      </section>

      {/* ЛАЙТБОКС */}
      {lightboxImg && (
        <div className={styles.lightboxOverlay} onClick={() => setLightboxImg(null)}>
          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.lightboxClose} onClick={() => setLightboxImg(null)}>✕</button>
            <img src={lightboxImg} alt="Увеличенное фото" />
          </div>
        </div>
      )}

      {/* ДРУГИЕ КУРСЫ */}
      <section className={styles.otherCoursesSection}>
        <h2 className={styles.sectionTitle}>Другие курсы</h2>
        <div className={styles.cardsGrid}>
          {OTHER_COURSES.map((course, idx) => {
            const isUrgent = course.freeSpots <= 2;
            const themeClass = styles[`${course.theme}Theme`];
            const cardDelay = { animationDelay: `${idx * 0.08}s` };

            return (
              <div key={course.id} className={`${styles.card} ${themeClass}`} style={cardDelay}>
                <div className={styles.cardTop}>
                  <div className={styles.cardHeader}>
                    <p className={styles.category}>{course.category}</p>
                    <img src={birdIcon} alt="bird" className={styles.cardHeaderBirdIcon} />
                  </div>

                  <h3 className={styles.title}>{course.title}</h3>

                  <div className={styles.badgeWrapper}>
                    <span className={styles.badge}>{course.format}</span>
                  </div>

                  <p className={styles.date}>{course.date}</p>

                  <div className={styles.contentBody}>
                    <ul className={styles.descriptionList}>
                      <li>Стоимость: <b>{course.price}</b></li>
                      <li>Сертификат об окончании</li>
                      <li>Практика на моделях</li>
                      <li>Методические материалы</li>
                    </ul>
                    <TiltImage src={course.image} alt={course.title} theme={course.theme} />
                  </div>
                </div>

                <div className={styles.cardBottom}>
                  <div className={`${styles.footerInfo} ${isUrgent ? styles.footerInfoUrgent : ''}`}>
                    {isUrgent && <span className={styles.urgentDot}></span>}
                    Свободно {course.freeSpots} из {course.totalSpots} мест
                  </div>

                  <div className={styles.actionsStacked}>
                    <button
                      type="button"
                      className={styles.btnRegister}
                      onClick={() => handleOpenModal('register')}
                    >
                      Зарегистрироваться
                    </button>
                    <button
                      type="button"
                      className={styles.btnDetails}
                      onClick={() => handleOpenModal('details')}
                    >
                      Подробнее
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* МОДАЛЬНЫЕ ОКНА */}
      {modalType && (
        <div className={styles.modalOverlay} onClick={handleCloseModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.modalClose} onClick={handleCloseModal}>✕</button>

            {modalType === 'register' && (
              <div>
                {isSuccess ? (
                  <div className={styles.successBox}>
                    <div className={styles.successIcon}>✅</div>
                    <h3>Заявка успешно оформлена!</h3>
                    <p>Мы свяжемся с вами в ближайшее время.</p>
                    <button className={styles.btnPrimary} onClick={handleCloseModal}>Закрыть</button>
                  </div>
                ) : (
                  <form className={styles.modalForm} onSubmit={handleRegisterSubmit}>
                    <h2 className={styles.modalTitle}>Регистрация на курс</h2>
                    <p className={styles.modalSubtitle}>Ботулинотерапия для косметологов</p>

                    <div className={styles.formGroup}>
                      <label>Имя</label>
                      <input
                        type="text"
                        required
                        placeholder="Ваше имя"
                        value={regData.name}
                        onChange={(e) => setRegData({ ...regData, name: e.target.value })}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label>Телефон</label>
                      <input
                        type="tel"
                        required
                        placeholder="+380"
                        value={regData.phone}
                        onChange={(e) => setRegData({ ...regData, phone: e.target.value })}
                      />
                    </div>

                    <button type="submit" className={styles.btnPrimary}>Отправить заявку</button>
                  </form>
                )}
              </div>
            )}

            {modalType === 'details' && (
              <div>
                <h2 className={styles.modalTitle}>Ботулинотерапия для косметологов</h2>
                <p className={styles.modalSubtitle}>Старт курса: 10 января</p>
                <p className={styles.modalPrice}>Стоимость: 7000 грн при регистрации до 15 декабря</p>
                <p className={styles.modalText}>
                  Инъекционная методика устранения и профилактики морщин. Вы освоите подбор препарата,
                  технику введения и безопасные разметки точек для разных анатомических типов лица.
                </p>
                <button className={styles.btnPrimary} onClick={() => handleOpenModal('register')}>
                  Зарегистрироваться
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}