
import { Play } from 'lucide-react';

const lessonTitle =
  'Актуальна ли мезотерапия в коррекции шеи, декольте, кистей рук и какие существуют альтернативы?';

const otherLessons = [
  { id: 1, title: lessonTitle },
  { id: 2, title: lessonTitle },
  { id: 3, title: lessonTitle },
];

const lessonThumbnail = '/assets/video-lesson.jpg';

function PlayBadge({ small = false }) {
  return (
    <span
      className={`flex items-center justify-center rounded-full bg-[#6B9F4F] text-white shadow-lg shadow-black/20 transition-transform duration-300 group-hover:scale-110 ${
        small ? 'h-11 w-11' : 'h-16 w-16'
      }`}
    >
      <Play
        size={small ? 16 : 22}
        className="ml-0.5"
        fill="currentColor"
      />
    </span>
  );
}

function FeaturedLesson() {
  const { ref, visible } = useReveal();

  return (
    <div
      ref={ref}
      className={`grid items-center gap-10 transition-all duration-700 md:grid-cols-2 md:gap-16 ${
        visible
          ? 'translate-y-0 opacity-100'
          : 'translate-y-6 opacity-0'
      }`}
    >
      <div>
        <p className="text-sm text-[#6B9F4F]">
          Спикер: Марина Спивак
        </p>

        <h1 className="mt-3 text-2xl font-semibold leading-snug text-neutral-900 md:text-3xl">
          Как безопасно работать в зоне носослёзной борозды канюлей?
        </h1>

        <p className="mt-6 text-lg font-medium text-neutral-900">
          Стоимость: 500 грн
        </p>

        <button
          type="button"
          className="mt-4 rounded-lg bg-[#6B9F4F] px-6 py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-[#5c8b42]"
        >
          Купить
        </button>
      </div>

      <button
        type="button"
        className="group relative block w-full overflow-hidden rounded-2xl"
      >
        <img
          src="/assets/video-main.jpg"
          alt="Как безопасно работать в зоне носослёзной борозды канюлей?"
          className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <span className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-black/25 transition-colors duration-300 group-hover:bg-black/35">
          <PlayBadge />

          <span className="text-sm font-medium text-white">
            Смотреть трейлер
          </span>
        </span>
      </button>
    </div>
  );
}

function OtherLessons() {
  const { ref, visible } = useReveal();

  return (
    <div ref={ref} className="mt-16 md:mt-24">
      <h2 className="text-center text-xl font-semibold text-neutral-900 md:text-2xl">
        Другие видео-уроки
      </h2>

      <div className="mt-10 grid gap-8 md:grid-cols-3">
        {otherLessons.map((lesson, i) => (
          <div
            key={lesson.id}
            className={`transition-all duration-700 ${
              visible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-8 opacity-0'
            }`}
            style={{
              transitionDelay: `${i * 120}ms`,
            }}
          >
            <button
              type="button"
              className="group relative block w-full overflow-hidden rounded-xl"
            >
              <img
                src={lessonThumbnail}
                alt={lesson.title}
                className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <span className="absolute inset-0 flex flex-col items-center justify-center gap-1.5 bg-black/25 transition-colors duration-300 group-hover:bg-black/35">
                <PlayBadge small />

                <span className="text-xs font-medium text-white">
                  Смотреть трейлер
                </span>
              </span>
            </button>

            <p className="mt-4 text-sm leading-relaxed text-neutral-600">
              {lesson.title}
            </p>

            <button
              type="button"
              className="mt-4 rounded-lg bg-[#6B9F4F] px-5 py-2.5 text-sm font-medium text-white transition-colors duration-300 hover:bg-[#5c8b42]"
            >
              Купить
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Lessons() {
  return (
    <section className="bg-white py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-center text-xs font-medium tracking-wide text-neutral-400">
          Видео-урок
        </p>

        <FeaturedLesson />
        <OtherLessons />
      </div>
    </section>
  );
}
