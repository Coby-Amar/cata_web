import authStore from "../stores/auth.store"

function HomeRoute() {
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
                    <div>
                        Recently added
                    </div>
                    <div>
                        Top Ranked
                    </div>
                </>
            }
        </>
    )
}

export default HomeRoute