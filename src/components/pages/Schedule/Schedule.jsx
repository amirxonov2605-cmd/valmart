import React, { useState } from 'react';

const cities = [
    { id: 'kharkov', name: 'Харьков' },
    { id: 'poltava', name: 'Полтава' },
    { id: 'dnepr', name: 'Днепр' },
    { id: 'lvov', name: 'Львов' },
    { id: 'kherson', name: 'Херсон' },
    { id: 'sumy', name: 'Сумы' }
];

export default function Schedule() {
    const [activeType, setActiveType] = useState('courses');
    const [activeCity, setActiveCity] = useState('kharkov');

    return (
        <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-700 mb-8 md:mb-12">
                Расписание
            </h2>

            {/* Верхняя строка с табами и выпадающим списком городов для мобильных */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-6">

                {/* Вкладки (Курсы / Вебинары) */}
                <div className="flex w-full sm:w-[400px] border border-gray-200 divide-x divide-gray-200">
                    <button
                        className={`flex-1 py-3 text-center text-sm font-medium transition-colors ${activeType === 'courses'
                            ? 'bg-[#B1E5A5] text-gray-700'
                            : 'bg-white text-gray-500 hover:bg-gray-50'
                            }`}
                        onClick={() => setActiveType('courses')}
                    >
                        Курсы обучения
                    </button>
                    <button
                        className={`flex-1 py-3 text-center text-sm font-medium transition-colors ${activeType === 'webinars'
                            ? 'bg-[#B1E5A5] text-gray-700'
                            : 'bg-white text-gray-500 hover:bg-gray-50'
                            }`}
                        onClick={() => setActiveType('webinars')}
                    >
                        Вебинары
                    </button>
                </div>

                {/* Выпадающий список городов (показывается на экранах меньше md) */}
                <div className="flex items-center gap-3 w-full sm:w-auto md:hidden">
                    <span className="text-sm text-gray-600 whitespace-nowrap">Ваш город:</span>
                    <select
                        value={activeCity}
                        onChange={(e) => setActiveCity(e.target.value)}
                        className="flex-1 sm:w-[200px] border border-gray-200 p-2.5 text-sm text-gray-600 outline-none bg-white focus:border-gray-300"
                    >
                        {cities.map(city => (
                            <option key={city.id} value={city.id}>{city.name}</option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Горизонтальные табы городов (скрыты на мобильных устройствах) */}
            <div className="hidden md:flex w-full border border-gray-200 divide-x divide-gray-200 mb-8">
                {cities.map(city => (
                    <button
                        key={city.id}
                        className={`flex-1 py-3 text-center text-sm font-medium transition-colors ${activeCity === city.id
                            ? 'bg-[#B1E5A5] text-gray-700'
                            : 'bg-white text-gray-500 hover:bg-gray-50'
                            }`}
                        onClick={() => setActiveCity(city.id)}
                    >
                        {city.name}
                    </button>
                ))}
            </div>

            {/* Блок календаря */}
            <div className="w-full h-[500px] md:h-[700px] border border-gray-200 bg-gray-50 overflow-hidden shadow-sm">
                {/* Заглушка: iframe с Google Календарем (согласно дизайну) */}
                <iframe
                    src="https://calendar.google.com/calendar/embed?src=ru.ukrainian%23holiday%40group.v.calendar.google.com&ctz=Europe%2FKiev&showTitle=0&showNav=1&showDate=1&showPrint=0&showTabs=1&showCalendars=0&showTz=0"
                    style={{ border: 0, width: '100%', height: '100%' }}
                    frameBorder="0"
                    scrolling="no"
                    title="Расписание"
                ></iframe>
            </div>
        </div>
    );
}