import React, { useState } from 'react';
import { flushSync } from 'react-dom';

const articles = Array(6).fill(null).map((_, i) => ({
    id: i,
    image: `public/images/sales/article-${i + 1}.jpg`,
    title: "Актуальна ли мезотерапия в коррекции шеи, декольте, кистей рук и какие существуют альтернативы?"
}));

export default function Sales() {
    const [selectedArticle, setSelectedArticle] = useState(null);

    // Функция открытия модального окна с анимацией View Transitions
    const openModal = (e, article) => {
        e.preventDefault();
        const card = document.getElementById(`article-card-${article.id}`);

        // Если браузер не поддерживает API, просто открываем модалку мгновенно
        if (!card || !document.startViewTransition) {
            setSelectedArticle(article);
            return;
        }

        // Подготавливаем старое состояние (вешаем имя на карточку)
        card.style.viewTransitionName = 'article-modal';

        // Запускаем переход
        document.startViewTransition(() => {
            flushSync(() => {
                // Новое состояние (модалка появится с этим именем, а с карточки убираем, чтобы не было конфликтов)
                card.style.viewTransitionName = '';
                setSelectedArticle(article);
            });
        });
    };

    // Функция закрытия модального окна с анимацией обратно в карточку
    const closeModal = () => {
        const card = document.getElementById(`article-card-${selectedArticle.id}`);

        if (!card || !document.startViewTransition) {
            setSelectedArticle(null);
            return;
        }

        // Запускаем переход
        const transition = document.startViewTransition(() => {
            flushSync(() => {
                // Новое состояние: модалка исчезает, карточке возвращаем имя для морфинга
                card.style.viewTransitionName = 'article-modal';
                setSelectedArticle(null);
            });
        });

        // После завершения анимации очищаем стили карточки
        transition.finished.finally(() => {
            card.style.viewTransitionName = '';
        });
    };

    return (
        <div className="py-8 md:py-12">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-700 mb-8 md:mb-12">
                    Акционные предложения
                </h2>
            </div>

            {/* Главный баннер акции */}
            <div className="mb-12">
                <div className="w-full h-48 md:h-[auto] bg-black mb-4 overflow-hidden relative flex items-center justify-center">
                    <img
                        src="/images/sales/banner.jpg"
                        alt="2+1 Black Friday Set"
                        className="w-full h-full object-cover"
                    />
                </div>
                {/* Текст под баннером */}
                <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm md:text-base gap-3">
                    <div className="hidden md:block flex-1"></div>
                    <p className="text-gray-700 text-center flex-1 font-medium">Акция 2+1 в честь Черной пятницы</p>
                    <div className="flex-1 text-right w-full md:w-auto">
                        <a href="#" className="text-green-500 font-semibold hover:text-green-600 transition-colors flex items-center justify-end gap-2">
                            Подробнее про акцию <span className="text-lg leading-none">&rarr;</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Раздел с полезными материалами */}
            <div className="max-w-6xl mx-auto px-4 mb-12">
                <h3 className="text-xl md:text-2xl font-bold text-center text-gray-700 mb-8">
                    Полезные материалы
                </h3>

                {/* Сетка карточек */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                    {articles.map((article) => (
                        <div
                            key={article.id}
                            id={`article-card-${article.id}`}
                            className="flex flex-col bg-gray-50/50 overflow-hidden border border-gray-100 hover:shadow-md transition-shadow"
                        >
                            <img
                                src={article.image}
                                alt="Материал"
                                className="w-full h-48 sm:h-56 object-cover"
                            />
                            <div className="p-5 flex flex-col flex-grow">
                                <p className="text-gray-700 text-sm md:text-base mb-6 flex-grow">
                                    {article.title}
                                </p>
                                <div className="text-right mt-auto">
                                    <button
                                        onClick={(e) => openModal(e, article)}
                                        className="text-green-500 text-sm font-semibold hover:text-green-600 transition-colors cursor-pointer"
                                    >
                                        Читать полностью
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Пагинация */}
            <div className="max-w-6xl mx-auto px-4 flex justify-center items-center gap-3 text-gray-500 font-medium">
                <button className="p-2 hover:text-green-500 transition-colors cursor-pointer">&lt;</button>
                <button className="w-8 h-8 flex items-center justify-center rounded text-green-500">1</button>
                <button className="w-8 h-8 flex items-center justify-center rounded hover:text-green-500 transition-colors cursor-pointer">2</button>
                <button className="w-8 h-8 flex items-center justify-center rounded hover:text-green-500 transition-colors cursor-pointer">3</button>
                <button className="w-8 h-8 flex items-center justify-center rounded hover:text-green-500 transition-colors cursor-pointer">4</button>
                <button className="w-8 h-8 flex items-center justify-center rounded hover:text-green-500 transition-colors cursor-pointer">5</button>
                <button className="p-2 hover:text-green-500 transition-colors cursor-pointer">&gt;</button>
            </div>

            {/* Модальное окно (рендерится если выбрана статья) */}
            {selectedArticle && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
                    {/* Фон (закрытие по клику вне модалки) */}
                    <div className="absolute inset-0" onClick={closeModal}></div>

                    {/* Само окно, которое участвует в морфинге View Transitions */}
                    <div
                        style={{ viewTransitionName: 'article-modal' }}
                        className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col relative z-10 overflow-hidden"
                    >
                        <img
                            src={selectedArticle.image}
                            alt="Материал"
                            className="w-full h-64 sm:h-80 object-cover"
                        />
                        <div className="p-6 md:p-8 overflow-y-auto">
                            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">{selectedArticle.title}</h3>
                            <p className="text-gray-600 leading-relaxed mb-8">
                                Полный текст материала про мезотерапию... В реальности тут располагалась бы
                                полная развернутая статья со всеми деталями, подробным описанием техник,
                                альтернативных подходов, фотографиями до/после и другими важными материалами.
                            </p>
                            <div className="text-right">
                                <button
                                    onClick={closeModal}
                                    className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white font-medium rounded transition-colors cursor-pointer"
                                >
                                    Закрыть
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}