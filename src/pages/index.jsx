import React from 'react'
import HomepageHeroGuest from '../components/HomepageHeroGuest'
import LatestArticles from '../components/LatestArticles'
import MeditationForX from '../components/MeditationForX'


const Home = () => {
    return (
        <div className='dark:bg-black'>
            <HomepageHeroGuest />
            <LatestArticles />
            {/* <MeditationForX /> */}
        </div>
    )
}

export default Home
