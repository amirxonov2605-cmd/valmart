import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './App.module.css';

import maniken from '../../../assets/shukrullo/courses/000.png';
import man from '../../../assets/shukrullo/courses/02-00.png';
import birdIcon from '../../../assets/shukrullo/courses/bird.png';

const rList = [
  { id: 1, type: 'course', category: 'Курсы по косметологии', subCategory: 'Инъекционная косметология', title: 'Камюльные техники', format: 'Оффлайн', date: '1 - 4 мая', theme: 'purple', freeSpots: 2, totalSpots: 15, image: maniken, price: '12 000 грн', description: 'Углубленный курс по безопасным канюльным техникам в эстетической медицине с отработкой на моделях.' },
  { id: 2, type: 'course', category: 'Курсы по косметологии', subCategory: 'Инъекционная косметология', title: 'Мезотерапия и биоревитализация', format: 'Онлайн', date: '15 - 20 мая', theme: 'green', freeSpots: 2, totalSpots: 15, image: man, price: '8 500 грн', description: 'Полный базовый курс по мезотерапевтическим препаратам, мезококтейлям и техникам введения.' },
  { id: 3, type: 'master', category: 'Мастер-классы', subCategory: 'Инъекционная косметология', title: 'Биогель - новое в косметологии', format: 'Мастер-класс', date: '2 - 5 августа', theme: 'teal', freeSpots: 2, totalSpots: 15, image: man, price: '5 000 грн', description: 'Инновационные протоколы работы с биогелями. Мастер-класс с постановкой руки.' },
  { id: 4, type: 'video', category: 'Онлайн обучение', subCategory: 'Эстетическая косметология', title: 'Массаж лица', speaker: 'Елена Белогурова', youtubeId: 'ysz5S6PUM-U', image: man, price: '3 200 грн', description: 'Авторская техника скульптурного массажа лица для практикующих эстетистов.' },
  { id: 5, type: 'course', category: 'Курсы по косметологии', subCategory: 'Эстетическая косметология', title: 'Анатомия лица для косметологов', format: 'Оффлайн', date: '10 - 12 июня', theme: 'purple', freeSpots: 4, totalSpots: 12, image: maniken, price: '15 000 грн', description: 'Клиническая анатомия опасных зон лица для предотвращения осложнений.' },
  { id: 6, type: 'video', category: 'Онлайн обучение', subCategory: 'Инъекционная косметология', title: 'Актуальна ли мезотерапия в коррекции шей?', speaker: 'Марина Спивак', youtubeId: 'dQw4w9WgXcQ', image: man, price: '2 800 грн', description: 'Разбор сложных кейсов и эффективных коктейлей для зоны шеи и декольте.' },
  { id: 7, type: 'master', category: 'Мастер-классы', subCategory: 'Инъекционная косметология', title: 'Контурная пластика губ', format: 'Мастер-класс', date: '20 июня', theme: 'teal', freeSpots: 1, totalSpots: 10, image: man, price: '7 000 грн', description: 'Техники «Плоские губы», «Russian Lips» и естественное моделирование.' },
  { id: 8, type: 'course', category: 'Курсы по косметологии', subCategory: 'Лазерная косметология', title: 'Аппаратная косметология', format: 'Онлайн', date: '5 июля', theme: 'green', freeSpots: 5, totalSpots: 20, image: maniken, price: '10 000 грн', description: 'Лазерные технологии, РФ-лифтинг, ультразвуковой смас-лифтинг в практике.' },
  { id: 9, type: 'video', category: 'Онлайн обучение', subCategory: 'Эстетическая косметология', title: 'Чистка лица: базовые протоколы', speaker: 'Ольга Петрова', youtubeId: '3JZ_D3ELwOQ', image: man, price: '2 500 грн', description: 'Современные комбинированные чистки, выбор косметицевских линеек.' },
  { id: 10, type: 'master', category: 'Мастер-классы', subCategory: 'Инъекционная косметология', title: 'Ботулинотерапия', format: 'Мастер-класс', date: '12 августа', theme: 'teal', freeSpots: 3, totalSpots: 15, image: man, price: '9 000 грн', description: 'Верхняя треть лица, ботулинорезистентность и работа с мимическими морщинами.' },
  { id: 11, type: 'course', category: 'Курсы по косметологии', subCategory: 'Эстетическая косметология', title: 'Пилинги нового поколения', format: 'Оффлайн', date: '18 сентября', theme: 'purple', freeSpots: 3, totalSpots: 10, image: maniken, price: '6 000 грн', description: 'Всесезонные мультикислотные пилинги и постпилинговый уход.' },
  { id: 12, type: 'video', category: 'Онлайн обучение', subCategory: 'Эстетическая косметология', title: 'Карбокситерапия в кабинете', speaker: 'Анна Коваль', youtubeId: 'ysz5S6PUM-U', image: man, price: '2 100 грн', description: 'Неинвазивная карбокситерапия для мгновенного лифтинга и сияния кожи.' },
  { id: 13, type: 'master', category: 'Мастер-классы', subCategory: 'Инъекционная косметология', title: 'Коллагенотерапия', format: 'Мастер-класс', date: '5 октября', theme: 'teal', freeSpots: 2, totalSpots: 10, image: man, price: '11 000 грн', description: 'Работа с коллагенстимулирующими препаратами для лифтинга кожи.' },
  { id: 14, type: 'course', category: 'Курсы по косметологии', subCategory: 'Эстетическая косметология', title: 'Трихология для эстетистов', format: 'Онлайн', date: '12 октября', theme: 'green', freeSpots: 4, totalSpots: 15, image: maniken, price: '9 500 грн', description: 'Диагностика выпадения волос, мезотерапия кожи головы.' },
  { id: 15, type: 'video', category: 'Онлайн обучение', subCategory: 'Лазерная косметология', title: 'Работа с пигментацией', speaker: 'Елена Белогурова', youtubeId: 'dQw4w9WgXcQ', image: man, price: '3 000 грн', description: 'Протоколы осветления кожи и борьба с меланозом.' },
  { id: 16, type: 'master', category: 'Мастер-классы', subCategory: 'Инъекционная косметология', title: 'Нитевой лифтинг (Базовый)', format: 'Мастер-класс', date: '25 октября', theme: 'teal', freeSpots: 1, totalSpots: 8, image: man, price: '18 000 грн', description: 'Установка мезонитей с насечками, создание каркаса лица.' },
  { id: 17, type: 'course', category: 'Курсы по косметологии', subCategory: 'Эстетическая косметология', title: 'Нутрицевтика в косметологии', format: 'Онлайн', date: '10 ноября', theme: 'green', freeSpots: 6, totalSpots: 25, image: maniken, price: '7 500 грн', description: 'Витамины, микроэлементы и БАДы для здоровья кожи изнутри.' },
  { id: 18, type: 'video', category: 'Онлайн обучение', subCategory: 'Эстетическая косметология', title: 'Анти-эйдж массаж', speaker: 'Ольга Петрова', youtubeId: '3JZ_D3ELwOQ', image: man, price: '2 900 грн', description: 'Глубокотканный массаж лица для разглаживания морщин.' },
  { id: 19, type: 'master', category: 'Мастер-классы', subCategory: 'Лазерная косметология', title: 'Лазерная эпиляция: теория и практика', format: 'Мастер-класс', date: '15 ноября', theme: 'teal', freeSpots: 3, totalSpots: 12, image: man, price: '6 500 грн', description: 'Работа на диодном и александритовом лазерах без ожогов.' },
  { id: 20, type: 'course', category: 'Курсы по косметологии', subCategory: 'Эстетическая косметология', title: 'Эстетика тела и целлюлит', format: 'Оффлайн', date: '1 декабря', theme: 'purple', freeSpots: 2, totalSpots: 10, image: maniken, price: '13 000 грн', description: 'Антицеллюлитные обертывания, лимфодренажный массаж и мезотерапия тела.' },
  { id: 21, type: 'video', category: 'Онлайн обучение', subCategory: 'Эстетическая косметология', title: 'Продвижение косметолога в соцсетях', speaker: 'Марина Спивак', youtubeId: 'ysz5S6PUM-U', image: man, price: '4 000 грн', description: 'Как привлекать клиентов на процедуры через личный бренд.' },
  { id: 22, type: 'master', category: 'Мастер-классы', subCategory: 'Лазерная косметология', title: 'Дерматоскопия новообразований', format: 'Мастер-класс', date: '10 декабря', theme: 'teal', freeSpots: 2, totalSpots: 10, image: man, price: '8 000 грн', description: 'Диагностика кожи перед удалением родинок и папиллом.' },
];

// Манекен на карточке: лёгкое "дыхание"/парение всегда + 3D-наклон головы за курсором при наведении
const TiltImage = ({ src, alt }) => {
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
      transform: `perspective(500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.18, 1.18, 1.18)`,
      filter: 'drop-shadow(0 10px 14px rgba(0,0,0,0.18))',
    });
  };

  const handleMouseLeave = () => {
    setTiltStyle({});
  };

  return (
    <div
      ref={wrapperRef}
      className={styles.modelContainer}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.modelGlow}></div>
      <img
        src={src}
        alt={alt}
        className={styles.mannequinImage}
        style={tiltStyle}
      />
      <div className={styles.scanLine}></div>
      <span className={`${styles.scanDot} ${styles.scanDot1}`}></span>
      <span className={`${styles.scanDot} ${styles.scanDot2}`}></span>
      <span className={`${styles.scanDot} ${styles.scanDot3}`}></span>
      <div className={styles.scanFrame}>
        <span className={`${styles.scanCorner} ${styles.scanCornerTL}`}></span>
        <span className={`${styles.scanCorner} ${styles.scanCornerTR}`}></span>
        <span className={`${styles.scanCorner} ${styles.scanCornerBL}`}></span>
        <span className={`${styles.scanCorner} ${styles.scanCornerBR}`}></span>
      </div>
    </div>
  );
};

export const Home = () => {
  const [activeTab, setActiveTab] = useState('Все направления');
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [modalType, setModalType] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [regData, setRegData] = useState({ name: '', phone: '' });
  const [payData, setPayData] = useState({ 
    cardNumber: '', 
    cardHolder: '', 
    expiry: '', 
    cvv: '', 
    paymentMethod: 'card' 
  });

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const itemsPerPage = 6;
  const subCategories = ['Эстетическая косметология', 'Инъекционная косметология', 'Лазерная косметология'];

  const filteredCourses = rList.filter(item => {
    if (activeTab === 'Курсы по косметологии') {
      if (item.category !== 'Курсы по косметологии') return false;
      if (selectedSubCategory && item.subCategory !== selectedSubCategory) return false;
      return true;
    }
    if (activeTab === 'Все направления') {
      if (selectedSubCategory && item.subCategory !== selectedSubCategory) return false;
      return true;
    }
    if (activeTab === 'Онлайн обучение') return item.category === 'Онлайн обучение' || item.type === 'video';
    if (activeTab === 'Мастер-классы') return item.category === 'Мастер-классы' || item.format === 'Мастер-класс';
    return true;
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCourses = filteredCourses.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredCourses.length / itemsPerPage);

  const handleOpenModal = (type, item) => {
    setModalType(type);
    setSelectedItem(item);
    setIsSuccess(false);
    setRegData({ name: '', phone: '' });
    setPayData({ cardNumber: '', cardHolder: '', expiry: '', cvv: '', paymentMethod: 'card' });
  };

  const handleCloseModal = () => {
    setModalType(null);
    setSelectedItem(null);
    setIsSuccess(false);
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  const getThemeClass = (theme) => {
    switch (theme) {
      case 'purple': return styles.purpleTheme;
      case 'green': return styles.greenTheme;
      case 'teal': return styles.tealTheme;
      default: return styles.tealTheme;
    }
  };

  const getModalButtonThemeClass = () => {
    if (!selectedItem) return styles.greenTheme;
    if (selectedItem.type === 'video') return styles.greenTheme;
    return getThemeClass(selectedItem.theme);
  };

  return (
    <div className={styles.mainContainer}>
      <section className={styles.heroSection}>
        <h1 className={styles.heroTitle}>КУРСЫ ОБУЧЕНИЯ</h1>
        <div className={styles.heroSubtitleContainer}>
          <img src={birdIcon} alt="bird" className={styles.subtitleBirdIcon} />
          <span>- курсы с возможностью ранней регистрации</span>
        </div>
      </section>

      {/* Панель вкладок по проекту */}
      <div className={styles.tabsContainer}>
        <div className={styles.tabsRow}>
          {/* Кнопка "Все направления" (по умолчанию темная активная) */}
          <button 
            className={`${styles.tabBtn} ${activeTab === 'Все направления' ? styles.tabActiveDark : ''}`}
            onClick={() => {
              setActiveTab('Все направления');
              setSelectedSubCategory(null);
              setCurrentPage(1);
              setIsDropdownOpen(false);
            }}
          >
            Все направления
          </button>

          {/* Кнопка "Курсы по косметологии" со стрелочкой и выпадающим списком */}
          <div className={styles.dropdownWrapperDesktop} ref={dropdownRef}>
            <button 
              className={`${styles.tabBtn} ${activeTab === 'Курсы по косметологии' ? styles.tabActiveOutline : ''}`}
              onClick={() => {
                if (activeTab === 'Курсы по косметологии') {
                  setIsDropdownOpen(!isDropdownOpen);
                } else {
                  setActiveTab('Курсы по косметологии');
                  setSelectedSubCategory(null);
                  setCurrentPage(1);
                  setIsDropdownOpen(true);
                }
              }}
            >
              <span>
                {activeTab === 'Курсы по косметологии' && selectedSubCategory ? selectedSubCategory : 'Курсы по косметологии'}
              </span>
              <span className={`${styles.arrowIcon} ${isDropdownOpen ? styles.arrowOpen : ''}`}>▼</span>
            </button>

            {isDropdownOpen && activeTab === 'Курсы по косметологии' && (
              <div className={styles.desktopDropdownList}>
                {subCategories.map((sub) => (
                  <div
                    key={sub}
                    className={`${styles.desktopDropdownItem} ${selectedSubCategory === sub ? styles.activeSubItem : ''}`}
                    onClick={() => {
                      setSelectedSubCategory(sub === selectedSubCategory ? null : sub);
                      setCurrentPage(1);
                      setIsDropdownOpen(false);
                    }}
                  >
                    {sub}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Кнопка "Онлайн обучение" */}
          <button 
            className={`${styles.tabBtn} ${activeTab === 'Онлайн обучение' ? styles.tabActiveOutline : ''}`}
            onClick={() => {
              setActiveTab('Онлайн обучение');
              setSelectedSubCategory(null);
              setCurrentPage(1);
              setIsDropdownOpen(false);
            }}
          >
            Онлайн обучение
          </button>

          {/* Кнопка "Мастер-классы" */}
          <button 
            className={`${styles.tabBtn} ${activeTab === 'Мастер-классы' ? styles.tabActiveOutline : ''}`}
            onClick={() => {
              setActiveTab('Мастер-классы');
              setSelectedSubCategory(null);
              setCurrentPage(1);
              setIsDropdownOpen(false);
            }}
          >
            Мастер-классы
          </button>
        </div>
      </div>

      {selectedSubCategory && (
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <span style={{ fontSize: '14px', background: '#f1f5f9', padding: '6px 14px', borderRadius: '20px', color: '#475569' }}>
            Фильтр: <b>{selectedSubCategory}</b>{' '}
            <button 
              onClick={() => setSelectedSubCategory(null)} 
              style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer', marginLeft: '6px', fontWeight: 'bold' }}
            >
              ✕
            </button>
          </span>
        </div>
      )}

      <div className={styles.cardsGrid}>
        {currentCourses.length > 0 ? (
          currentCourses.map((item, idx) => {
            const cardDelay = { animationDelay: `${idx * 0.08}s` };

            if (item.type === 'video') {
              return (
                <div key={item.id} className={`${styles.card} ${styles.greenTheme}`} style={cardDelay}>
                  <div className={styles.cardTop}>
                    <div className={styles.cardHeader}>
                      <p className={styles.category}>{item.category}</p>
                      <img src={birdIcon} alt="bird" className={styles.cardHeaderBirdIcon} />
                    </div>
                    <div className={styles.videoPreviewContainer}>
                      <iframe
                        className={styles.youtubeIframe}
                        src={`https://www.youtube.com/embed/${item.youtubeId}`}
                        title={item.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <h3 className={styles.videoTitle}>Видео урок: {item.title}</h3>
                    <p className={styles.speakerText}>Спикер: {item.speaker}</p>
                  </div>
                  
                  <div className={styles.cardBottom}>
                    <div className={styles.actionsStacked}>
                      <button 
                        className={styles.btnRegister} 
                        onClick={() => handleOpenModal('buy', item)}
                      >
                        Купить ({item.price})
                      </button>
                      <button 
                        className={styles.btnDetails} 
                        onClick={() => handleOpenModal('details', item)}
                      >
                        Подробнее
                      </button>
                    </div>
                  </div>
                </div>
              );
            }

            const themeClass = getThemeClass(item.theme);

            const isUrgent = item.freeSpots <= 2;

            return (
              <div key={item.id} className={`${styles.card} ${themeClass}`} style={cardDelay}>
                <div className={styles.cardTop}>
                  <div className={styles.cardHeader}>
                    <p className={styles.category}>{item.category}</p>
                    <img src={birdIcon} alt="bird" className={styles.cardHeaderBirdIcon} />
                  </div>

                  <h3 className={styles.title}>{item.title}</h3>
                  
                  <div className={styles.badgeWrapper}>
                    <span className={styles.badge}>{item.format}</span>
                  </div>

                  <p className={styles.date}>{item.date}</p>
                  
                  <div className={styles.contentBody}>
                    <ul className={styles.descriptionList}>
                      <li>Стоимость: <b>{item.price}</b></li>
                      <li>Сертификат по окончании</li>
                      <li>Практика на моделях</li>
                      <li>Методические материалы</li>
                    </ul>
                    <TiltImage src={item.image} alt={item.title} />
                  </div>
                </div>

                <div className={styles.cardBottom}>
                  <div className={`${styles.footerInfo} ${isUrgent ? styles.footerInfoUrgent : ''}`}>
                    {isUrgent && <span className={styles.urgentDot}></span>}
                    Свободно {item.freeSpots} из {item.totalSpots} мест
                  </div>
                  <div className={styles.actionsStacked}>
                    <button 
                      className={styles.btnRegister} 
                      onClick={() => handleOpenModal('register', item)}
                    >
                      Зарегистрироваться
                    </button>
                    <button 
                      className={styles.btnDetails} 
                      onClick={() => handleOpenModal('details', item)}
                    >
                      Подробнее
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p style={{ gridColumn: '1 / -1', textAlign: 'center', color: '#64748b', padding: '40px' }}>
            В этом разделе пока нет доступных курсов.
          </p>
        )}
      </div>

      {totalPages > 1 && (
        <div className={styles.pagination}>
          <button 
            onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className={styles.pageArrow}
          >
            ‹
          </button>
          
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
            <button
              key={number}
              onClick={() => setCurrentPage(number)}
              className={`${styles.pageNumber} ${currentPage === number ? styles.activePage : ''}`}
            >
              {number}
            </button>
          ))}

          <button 
            onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
            className={styles.pageArrow}
          >
            ›
          </button>
        </div>
      )}

      {modalType && selectedItem && (
        <div className={styles.modalOverlay} onClick={handleCloseModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.modalClose} onClick={handleCloseModal}>✕</button>

            {modalType === 'details' && (
              <div>
                <span className={styles.modalBadge}>Учебный центр ValMari</span>
                <h2 className={styles.modalTitle}>{selectedItem.title}</h2>
                <p className={styles.modalPrice}>Стоимость: <strong>{selectedItem.price}</strong></p>
                <p className={styles.modalText}>{selectedItem.description}</p>
                
                <div className={styles.modalProgramList}>
                  <h4>Что входит в программу:</h4>
                  <ul>
                    <li>✨ Теоретический блок с разбором частых ошибок</li>
                    <li>✨ Демонстрация процедуры преподавателем</li>
                    <li>✨ Самостоятельная отработка навыка (практика)</li>
                    <li>✨ Официальный именной сертификат центра</li>
                  </ul>
                </div>

                <div className={styles.modalActions}>
                  <button 
                    className={`${styles.modalBtnPrimary} ${getModalButtonThemeClass()}`} 
                    onClick={() => handleOpenModal(selectedItem.type === 'video' ? 'buy' : 'register', selectedItem)}
                  >
                    {selectedItem.type === 'video' ? `Купить видеоурок (${selectedItem.price})` : 'Записаться на курс'}
                  </button>
                </div>
              </div>
            )}

            {modalType === 'register' && (
              <div>
                {isSuccess ? (
                  <div className={styles.successBox}>
                    <div className={styles.successIcon}>🎉</div>
                    <h3>Заявка успешно оформлена!</h3>
                    <p>Менеджер учебного центра свяжется с вами в течение 10 минут для подтверждения бронирования.</p>
                    <button className={`${styles.modalBtnPrimary} ${getModalButtonThemeClass()}`} onClick={handleCloseModal} style={{ marginTop: '20px' }}>
                      Отлично
                    </button>
                  </div>
                ) : (
                  <div>
                    <h2 className={styles.modalTitle}>Ранняя регистрация</h2>
                    <p className={styles.modalSubtitle}>
                      Курс: <strong>{selectedItem.title}</strong>
                    </p>

                    <form onSubmit={handleRegisterSubmit} className={styles.modalForm}>
                      <div className={styles.formGroup}>
                        <label>Ваше имя</label>
                        <input 
                          type="text" 
                          required 
                          placeholder="Введите имя" 
                          value={regData.name}
                          onChange={(e) => setRegData({...regData, name: e.target.value})}
                        />
                      </div>
                      <div className={styles.formGroup}>
                        <label>Номер телефона</label>
                        <input 
                          type="tel" 
                          required 
                          placeholder="+38 (0__) ___-__-__" 
                          value={regData.phone}
                          onChange={(e) => setRegData({...regData, phone: e.target.value})}
                        />
                      </div>
                      <button type="submit" className={`${styles.modalBtnPrimary} ${getModalButtonThemeClass()}`}>
                        Забронировать место
                      </button>
                    </form>
                  </div>
                )}
              </div>
            )}

            {modalType === 'buy' && (
              <div>
                {isSuccess ? (
                  <div className={styles.successBox}>
                    <div className={styles.successIcon}>💳✅</div>
                    <h3>Оплата прошла успешно!</h3>
                    <p>Доступ к видео-уроку <b>«{selectedItem.title}»</b> отправлен на ваш Email.</p>
                    <button className={`${styles.modalBtnPrimary} ${getModalButtonThemeClass()}`} onClick={handleCloseModal} style={{ marginTop: '20px' }}>
                      Перейти к обучению
                    </button>
                  </div>
                ) : (
                  <div>
                    <h2 className={styles.modalTitle}>Безопасная онлайн-оплата</h2>
                    <p className={styles.modalSubtitle}>
                      Урок: <strong>{selectedItem.title}</strong> — <span style={{ color: '#16a34a', fontWeight: 'bold' }}>{selectedItem.price}</span>
                    </p>

                    <div className={styles.paymentMethodsTabs}>
                      <button 
                        type="button"
                        className={`${styles.payTabBtn} ${payData.paymentMethod === 'card' ? styles.activePayTab : ''}`}
                        onClick={() => setPayData({...payData, paymentMethod: 'card'})}
                      >
                        💳 Карта
                      </button>
                      <button 
                        type="button"
                        className={`${styles.payTabBtn} ${payData.paymentMethod === 'apple' ? styles.activePayTab : ''}`}
                        onClick={() => setPayData({...payData, paymentMethod: 'apple'})}
                      >
                         Pay / G Pay
                      </button>
                      <button 
                        type="button"
                        className={`${styles.payTabBtn} ${payData.paymentMethod === 'installments' ? styles.activePayTab : ''}`}
                        onClick={() => setPayData({...payData, paymentMethod: 'installments'})}
                      >
                        ⏳ Рассрочка
                      </button>
                    </div>

                    <form onSubmit={handlePaymentSubmit} className={styles.modalForm}>
                      {payData.paymentMethod === 'card' && (
                        <>
                          <div className={styles.formGroup}>
                            <label>Номер карты</label>
                            <input 
                              type="text" 
                              required 
                              placeholder="0000 0000 0000 0000" 
                              maxLength="19"
                              value={payData.cardNumber}
                              onChange={(e) => setPayData({...payData, cardNumber: e.target.value})}
                            />
                          </div>

                          <div className={styles.formGroup}>
                            <label>Владелец карты</label>
                            <input 
                              type="text" 
                              required 
                              placeholder="IVAN IVANOV" 
                              value={payData.cardHolder}
                              onChange={(e) => setPayData({...payData, cardHolder: e.target.value})}
                            />
                          </div>

                          <div className={styles.cardRow}>
                            <div className={styles.formGroup}>
                              <label>Срок (MM/YY)</label>
                              <input 
                                type="text" 
                                required 
                                placeholder="MM/YY" 
                                maxLength="5"
                                value={payData.expiry}
                                onChange={(e) => setPayData({...payData, expiry: e.target.value})}
                              />
                            </div>
                            <div className={styles.formGroup}>
                              <label>CVV / CVC</label>
                              <input 
                                type="password" 
                                required 
                                placeholder="•••" 
                                maxLength="4"
                                value={payData.cvv}
                                onChange={(e) => setPayData({...payData, cvv: e.target.value})}
                              />
                            </div>
                          </div>
                        </>
                      )}

                      {payData.paymentMethod === 'apple' && (
                        <div className={styles.digitalWalletsContainer}>
                          <p className={styles.walletHint}>Выберите кошелек для мгновенной оплаты в 1 клик:</p>
                          <div className={styles.walletButtonsRow}>
                            <div className={styles.applePayButton} onClick={() => setIsSuccess(true)}>
                               <span>Pay</span>
                            </div>
                            <div className={styles.googlePayButton} onClick={() => setIsSuccess(true)}>
                              <span className={styles.gText}>G</span> <span>Pay</span>
                            </div>
                          </div>
                        </div>
                      )}

                      {payData.paymentMethod === 'installments' && (
                        <div className={styles.installmentsBox}>
                          <p><b>Оплата частями без переплат:</b></p>
                          <p>• Доступно для клиентов ПриватБанк и Monobank.</p>
                          <p>• Сумма разделяется на 3 равных ежемесячных платежа.</p>
                        </div>
                      )}

                      {payData.paymentMethod !== 'apple' && (
                        <button type="submit" className={`${styles.modalBtnPrimary} ${getModalButtonThemeClass()}`} style={{ marginTop: '10px' }}>
                          Оплатить {selectedItem.price}
                        </button>
                      )}
                    </form>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export const ForCosms = () => (
  <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto', fontFamily: 'Inter, sans-serif' }}>
    <Link to="/" style={{ color: '#16a34a', textDecoration: 'none', fontWeight: '500' }}>← На главную</Link>
    <h1 style={{ color: '#1e293b', marginTop: '20px' }}>Курсы для косметологов</h1>
    <p style={{ color: '#64748b', lineHeight: '1.6', marginTop: '10px' }}>
      Подробная информация по всем направлениям обучения для практикующих врачей-косметологов.
    </p>
  </div>
);

export default function Courses() {
  return <Home />;
}