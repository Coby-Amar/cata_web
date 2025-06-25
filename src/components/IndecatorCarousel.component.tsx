import { useRef, useState, useCallback, type ReactNode, useEffect, Children } from "react"

interface IndecatorCarousel {
    auto?: boolean
    debounce?: number
    children: ReactNode
}

export default function IndecatorCarousel({ auto = false, debounce = 700, children }: IndecatorCarousel) {
    const slides = Children.toArray(children)
    const amountOfSlides = slides.length - 1
    const [activeIndex, setActiveIndex] = useState(0)
    const containerRef = useRef<HTMLDivElement | null>(null)
    const scrollToIndex = useCallback((index: number) => {
        const container = containerRef.current
        if (container) {
            const slide = container.children[index] as HTMLElement
            container.scrollTo({
                left: slide.offsetLeft,
                behavior: "smooth",
            })
        }
    }, [])

    const handleScroll = useCallback(() => {
        const container = containerRef.current
        if (!container) return

        const scrollLeft = container.scrollLeft
        const width = container.clientWidth
        const index = Math.round(scrollLeft / width)

        setActiveIndex(index)
    }, [])

    useEffect(() => {
        if (auto) {
            const interval = setInterval(() => {
                let nextIndex = activeIndex + 1
                if (nextIndex > amountOfSlides) {
                    nextIndex = 0
                }
                scrollToIndex(nextIndex)
            }, debounce)
            return () => clearInterval(interval)
        }
    }, [activeIndex, amountOfSlides, auto, debounce, scrollToIndex])

    return (
        <div className="relative w-full">
            <div
                ref={containerRef}
                className="carousel carousel-center rounded-box"
                onScroll={handleScroll}
            >
                {slides.map((child, index) => (
                    <div
                        key={index}
                        className="carousel-item snap-center w-full p-5"
                    >
                        {child}
                    </div>
                ))}
            </div>

            <div className="join absolute bottom-2 z-10 left-1/2 transform -translate-x-1/2 flex gap-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`join-item btn btn-circle w-3 h-3 ${index === activeIndex ? 'bg-primary' : 'bg-white'}`}
                        onClick={() => scrollToIndex(index)}
                    />
                ))}
            </div>
        </div>
    )
}
