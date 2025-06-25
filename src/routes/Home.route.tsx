import authStore from "../stores/auth.store"
import { useRecentlyAdded, useTopRanked } from "../api/public.api"
import ScrollCarousel from "../components/ScrollCarousel.component"
import IndecatorCarousel from "../components/IndecatorCarousel.component"

function HomeRoute() {
    const { data: topRanked, isLoading: topRankedLoading } = useTopRanked()
    const { data: recentlyAdded, isLoading: recentlyAddedLoading } = useRecentlyAdded()
    const { isLoggedin } = authStore()
    return (
        <>
            {isLoggedin ?
                <>
                    <div>
                        !!show only when Logged in!!
                        Recommended for you
                    </div>
                    <div>
                        !!show only when Logged in!!
                        Recently read
                    </div>
                    <div>
                        !!show only when Logged in!!
                        Recently watched
                    </div>
                </> :
                <>
                    {/* Todo - add Trending */}
                    {/* <div>
                        Trending
                    </div> */}
                    {topRankedLoading ?
                        <span className="loading loading-infinity loading-xl"></span>
                        :
                        <IndecatorCarousel>
                            {topRanked?.readable.map((data) => <Card {...data} />)}
                        </IndecatorCarousel>
                    }
                    {recentlyAddedLoading ?
                        <span className="loading loading-infinity loading-xl"></span>
                        :
                        <ScrollCarousel>
                            {recentlyAdded?.watchable.map((data) => <Card {...data} />)}
                        </ScrollCarousel>

                    }
                </>
            }
        </>
    )
}

interface CardProps {
    title: string
    description?: string
    image?: string
}

function Card({ title, image, description }: CardProps) {
    return (
        <div className="card bg-base-100 shadow-sm">
            <figure>
                <img
                    src={image}
                    alt={title} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>
                    {description}
                </p>
            </div>
        </div>
    )

}

export default HomeRoute