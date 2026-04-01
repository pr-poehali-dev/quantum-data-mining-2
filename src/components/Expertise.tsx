import { useEffect, useRef, useState } from "react"
import { Home, Building, Armchair, Trees } from "lucide-react"
import { HighlightedText } from "./HighlightedText"

const expertiseAreas = [
  {
    title: "Частные дома и резиденции",
    description: "От камерных загородных домов до просторных резиденций — проектируем жильё, в котором хочется оставаться навсегда. Полный цикл: от эскиза до авторского надзора.",
    icon: Home,
  },
  {
    title: "Коммерческая и офисная среда",
    description:
      "Офисы, шоурумы, рестораны и отели. Создаём среду, которая работает на бизнес: удерживает внимание, формирует образ, повышает лояльность.",
    icon: Building,
  },
  {
    title: "Интерьеры под ключ",
    description:
      "Разработка дизайна интерьера как продолжение архитектурной идеи. Мебель, свет, материалы — всё выстроено в единую систему.",
    icon: Armchair,
  },
  {
    title: "Благоустройство и ландшафт",
    description:
      "Двор, терраса, кровельный сад — продолжение архитектуры под открытым небом. Проектируем пространства, где природа и архитектура разговаривают на одном языке.",
    icon: Trees,
  },
]

export function Expertise() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"))
          if (entry.isIntersecting) {
            setVisibleItems((prev) => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.2 },
    )

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" ref={sectionRef} className="py-32 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-20">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Наши услуги</p>
          <h2 className="text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-8xl">
            <HighlightedText>Решения</HighlightedText> для любой
            <br />
            задачи
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Мы работаем с жилыми, коммерческими и общественными объектами. Каждый проект — уникальный ответ на конкретный запрос, место и бюджет.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
          {expertiseAreas.map((area, index) => {
            const Icon = area.icon
            return (
              <div
                key={area.title}
                ref={(el) => {
                  itemRefs.current[index] = el
                }}
                data-index={index}
                className={`relative pl-8 border-l border-border transition-all duration-700 ${
                  visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div
                  className={`transition-all duration-1000 ${
                    visibleItems.includes(index) ? "animate-draw-stroke" : ""
                  }`}
                  style={{
                    transitionDelay: `${index * 150}ms`,
                  }}
                >
                  <Icon className="w-10 h-10 mb-4 text-foreground" strokeWidth={1.25} />
                </div>
                <h3 className="text-xl font-medium mb-4">{area.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{area.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}