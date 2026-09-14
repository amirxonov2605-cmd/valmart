import { useState, useMemo } from "react";
import { ChevronLeft, ChevronRight, X, Minus, Plus } from "lucide-react";
import specialPhoto from "./spicialPhoto.png"

const UNIT_PRICE = 500;

const promoPages = [
  [
    {
      image: specialPhoto,
      title: "ВЫГОДНАЯ КОМБИНАЦИЯ",
      text: [
        'При покупке препаратов ТМ "Blum Gel" + ботулотоксин типа А = 1 флакон препарата ТМ "Blum Gel" в подарок.',
        "Акция действует до 08 июля, поспешите воспользоваться выгодным предложением!",
        "Чтобы узнать условия акции оставляйте заявку или звоните по номеру 0(800)-50-86-22",
      ],
    },
    {
      image: specialPhoto,
      title: "ВЫГОДНАЯ КОМБИНАЦИЯ",
      text: [
        'При покупке препаратов ТМ "Blum Gel" + ботулотоксин типа А = 1 флакон препарата ТМ "Blum Gel" в подарок.',
        "Акция действует до 08 июля, поспешите воспользоваться выгодным предложением!",
        "Чтобы узнать условия акции оставляйте заявку или звоните по номеру 0(800)-50-86-22",
      ],
    },
    {
      image: specialPhoto,
      title: "ВЫГОДНАЯ КОМБИНАЦИЯ",
      text: [
        'При покупке препаратов ТМ "Blum Gel" + ботулотоксин типа А = 1 флакон препарата ТМ "Blum Gel" в подарок.',
        "Акция действует до 08 июля, поспешите воспользоваться выгодным предложением!",
        "Чтобы узнать условия акции оставляйте заявку или звоните по номеру 0(800)-50-86-22",
      ],
    },
    {
      image: specialPhoto,
      title: "ВЫГОДНАЯ КОМБИНАЦИЯ",
      text: [
        'При покупке препаратов ТМ "Blum Gel" + ботулотоксин типа А = 1 флакон препарата ТМ "Blum Gel" в подарок.',
        "Акция действует до 08 июля, поспешите воспользоваться выгодным предложением!",
        "Чтобы узнать условия акции оставляйте заявку или звоните по номеру 0(800)-50-86-22",
      ],
    },
    {
      image: specialPhoto,
      title: "ВЫГОДНАЯ КОМБИНАЦИЯ",
      text: [
        'При покупке препаратов ТМ "Blum Gel" + ботулотоксин типа А = 1 флакон препарата ТМ "Blum Gel" в подарок.',
        "Акция действует до 08 июля, поспешите воспользоваться выгодным предложением!",
        "Чтобы узнать условия акции оставляйте заявку или звоните по номеру 0(800)-50-86-22",
      ],
    },
  ],
  [
    {
      image: specialPhoto,
      title: "ВЫГОДНАЯ КОМБИНАЦИЯ",
      text: [
        'При покупке 2х препаратов ТМ "Hetic" = скидка 15% на весь заказ.',
        "Акция действует до конца месяца, количество предложений ограничено!",
        "Чтобы узнать условия акции оставляйте заявку или звоните по номеру 0(800)-50-86-22",
      ],
    },
    {
      image: specialPhoto,
      title: "ВЫГОДНАЯ КОМБИНАЦИЯ",
      text: [
        'При покупке 2х препаратов ТМ "Hetic" = скидка 15% на весь заказ.',
        "Акция действует до конца месяца, количество предложений ограничено!",
        "Чтобы узнать условия акции оставляйте заявку или звоните по номеру 0(800)-50-86-22",
      ],
    },
  ],
];


function OrderModal({ promo, onClose }) {
  const [address, setAddress] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [sent, setSent] = useState(false);

  const total = useMemo(() => quantity * UNIT_PRICE, [quantity]);

  const decrease = () => setQuantity((q) => Math.max(1, q - 1));
  const increase = () => setQuantity((q) => Math.min(99, q + 1));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl w-full max-w-md max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Закрыть"
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors"
        >
          <X size={20} />
        </button>

        {!sent ? (
          <>
            <h3 className="text-xl font-bold text-gray-900 mb-1">Оставить заявку</h3>
            <p className="text-sm text-gray-500 mb-6">{promo?.title}</p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label className="block text-sm text-gray-600 mb-1.5">Адрес</label>
                <input
                  type="text"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Город, улица, дом"
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 focus:outline-none focus:border-green-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1.5">Количество</label>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={decrease}
                    aria-label="Уменьшить количество"
                    className="w-10 h-10 shrink-0 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors"
                  >
                    <Minus size={16} />
                  </button>
                  <input
                    type="number"
                    min={1}
                    max={99}
                    value={quantity}
                    onChange={(e) =>
                      setQuantity(Math.min(99, Math.max(1, Number(e.target.value) || 1)))
                    }
                    className="w-full text-center border border-gray-200 rounded-xl px-3 py-2.5 focus:outline-none focus:border-green-500 transition-colors"
                  />
                  <button
                    type="button"
                    onClick={increase}
                    aria-label="Увеличить количество"
                    className="w-10 h-10 shrink-0 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between bg-gray-50 rounded-xl px-4 py-3">
                <span className="text-sm text-gray-500">Сумма к оплате</span>
                <span className="text-lg font-bold text-gray-900">{total} сомони</span>
              </div>

              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white rounded-full py-3 font-medium transition-colors"
              >
                Отправить заявку
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-5 text-3xl">
              ✓
            </div>
            <p className="text-xl font-semibold text-gray-800">Заявка отправлена</p>
            <p className="text-gray-500 mt-2">
              Адрес: {address || "—"} · Количество: {quantity} · Сумма: {total} сомони
            </p>
          </div>
        )}
      </div>
    </div>
  );
}


export default function SpecialPrice() {
  const [page, setPage] = useState(0);
  const [activePromo, setActivePromo] = useState(null);

  const promos = promoPages[page];

  const prevPage = () => setPage((p) => (p === 0 ? promoPages.length - 1 : p - 1));
  const nextPage = () => setPage((p) => (p === promoPages.length - 1 ? 0 : p + 1));

  return (
    <main className="w-full text-gray-800 px-4 md:px-10 py-12">
      <h1 className="text-2xl md:text-3xl font-bold tracking-wide mb-12">
        СПЕЦИАЛЬНЫЕ ПРЕДЛОЖЕНИЯ
      </h1>

      <div className="max-w-5xl mx-auto flex flex-col gap-16">
        {promos.map((promo, i) => (
          <div key={i} className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-sky-300 to-sky-500 aspect-[5/4]">
              <img src={promo.image} alt={promo.title} className="w-full h-full object-cover mix-blend-multiply opacity-90" />
              <span className="absolute top-4 left-4 bg-white/90 text-sky-700 font-bold px-4 py-1.5 rounded-md text-lg tracking-wide">
                АКЦИЯ!
              </span>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-bold text-green-600 mb-4">{promo.title}</h2>
              <div className="flex flex-col gap-3 text-gray-600 mb-6">
                {promo.text.map((line, idx) => (
                  <p key={idx}>{line}</p>
                ))}
              </div>
              <button
                onClick={() => setActivePromo(promo)}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2.5 rounded-full font-medium transition-colors"
              >
                Оставить заявку
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Пагинация */}
      <div className="flex items-center justify-center gap-2 mt-14">
        <button
          onClick={prevPage}
          aria-label="Предыдущая страница"
          className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-green-600 transition-colors"
        >
          <ChevronLeft size={18} />
        </button>
        {promoPages.map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i)}
            className={`w-8 h-8 rounded-full text-sm font-medium transition-colors ${
              i === page ? "bg-green-600 text-white" : "text-gray-500 hover:bg-gray-100"
            }`}
          >
            {i + 1}
          </button>
        ))}
        <button
          onClick={nextPage}
          aria-label="Следующая страница"
          className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-green-600 transition-colors"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {activePromo && (
        <OrderModal promo={activePromo} onClose={() => setActivePromo(null)} />
      )}
    </main>
  );
}
