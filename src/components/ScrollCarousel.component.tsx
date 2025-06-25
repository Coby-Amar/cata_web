import { Children, useCallback, useEffect, useRef, useState, type ReactNode } from "react"

interface ScrollCarouselProps {
    auto?: boolean
    debounce?: number
    children: ReactNode
}

export default function ScrollCarousel({ auto = false, debounce = 700, children }: ScrollCarouselProps) {
    const slides = Children.toArray(children)
    const amountOfSlides = slides.length - 1
    const [activeIndex, setActiveIndex] = useState(0)
    const containerRef = useRef<HTMLDivElement | null>(null)

    const scrollToIndex = useCallback((index: number) => {
        const container = containerRef.current
        if (container && index > -1) {
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
        if (scrollLeft === (container.scrollWidth - container.clientWidth)) {
            setActiveIndex(container.children.length - 1)
            return
        }

        const children = Array.from(container.children) as HTMLElement[]

        let closestIndex = 0
        let closestDistance = Infinity

        children.forEach((child, index) => {
            const distance = Math.abs(child.offsetLeft - scrollLeft)
            if (distance < closestDistance) {
                closestDistance = distance
                closestIndex = index
            }
        })
        setActiveIndex(closestIndex)
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
        <div className="relative w-full p-2">
            <div
                ref={containerRef}
                className="carousel snap-start snap-mandatory space-x-4 p-2 rounded-box"
                onScroll={handleScroll}
            >
                {slides.map((child, index) => (
                    <div
                        key={index}
                        className="carousel-item"
                    >
                        {child}
                    </div>
                ))}
            </div>

            <button
                className="absolute left-5 top-1/2 transform -translate-y-1/2 z-20 btn btn-active btn-circle"
                disabled={activeIndex === 0}
                onClick={() => scrollToIndex(activeIndex - 1)}
            >
                ❮
            </button>
            <button
                className="absolute right-5 top-1/2 transform -translate-y-1/2 z-20 btn btn-active btn-circle"
                onClick={() => scrollToIndex(activeIndex + 1)}
                disabled={activeIndex === amountOfSlides}
            >
                ❯
            </button>
        </div>
    )
}
