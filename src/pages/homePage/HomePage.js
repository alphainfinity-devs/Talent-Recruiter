import React from 'react';
import HomePageBlogSection from './homePageComponents/HomePageBlogSection';
import HomePageReviewSection from './homePageComponents/HomePageReviewSection';

const HomePage = () => {
    return (
        <div>
            <HomePageBlogSection/>
            <HomePageReviewSection/>
        </div>
    );
};

export default HomePage;