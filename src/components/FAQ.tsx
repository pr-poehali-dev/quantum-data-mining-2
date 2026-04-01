import { useState } from "react"
import { Plus } from "lucide-react"

const faqs = [
  {
    question: "С чего начинается работа над проектом?",
    answer:
      "Всё начинается с живого разговора. Мы встречаемся лично или созваниваемся, чтобы понять вашу задачу, образ жизни и ожидания. Затем выезжаем на участок или объект. По итогам встречи готовим концепцию и коммерческое предложение — бесплатно.",
  },
  {
    question: "Сколько стоит проектирование?",
    answer:
      "Стоимость зависит от объёма, стадии и сложности объекта. Эскизная концепция частного дома — от 300 000 ₽, полный проект с рабочей документацией — от 1 200 000 ₽. Всегда обсуждаем бюджет на старте и не выходим за его рамки без согласования.",
  },
  {
    question: "Сколько времени займёт проект?",
    answer:
      "Эскизный проект частного дома — 4–8 недель. Полный пакет рабочей документации — ещё 2–4 месяца. Сроки фиксируем в договоре. Если задержка происходит по нашей вине — компенсируем согласно договору.",
  },
  {
    question: "Вы занимаетесь авторским надзором во время стройки?",
    answer:
      "Да, авторский надзор — важная часть нашей работы. Мы регулярно выезжаем на объект, контролируем соответствие проекту и оперативно решаем вопросы, которые возникают в процессе строительства. Это экономит нервы, время и деньги.",
  },
  {
    question: "Вы работаете только в Москве?",
    answer:
      "Нет. Наша студия базируется в Москве, но мы реализуем проекты по всей России — от Сочи до Екатеринбурга. Командировочные расходы согласовываем отдельно. Часть работ ведём дистанционно без потери качества.",
  },
  {
    question: "Можно ли заказать только интерьер, без архитектуры?",
    answer:
      "Да, мы проектируем интерьеры как самостоятельный продукт. Квартиры, частные дома, офисы и общественные пространства. Если объект ещё проектируется — лучше подключить нас на раннем этапе: это даёт максимальную целостность результата.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Вопросы</p>
          <h2 className="text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-7xl">
            Частые вопросы
          </h2>
        </div>

        <div>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-border">
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full py-6 flex items-start justify-between gap-6 text-left group"
              >
                <span className="text-lg font-medium text-foreground transition-colors group-hover:text-foreground/70">
                  {faq.question}
                </span>
                <Plus
                  className={`w-6 h-6 text-foreground flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : "rotate-0"
                  }`}
                  strokeWidth={1.5}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-muted-foreground leading-relaxed pb-6 pr-12">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}