import React from 'react';
import Footer from '../../../utils/Footer';
import Newsletter from '../../../utils/Newsletter';
import Categories from './Categories/Categories';

const HomePageComponents = () => {
  return (
    <div>
      <Categories />
       <Newsletter />
            <Footer />
    </div>
  );
};

export default HomePageComponents;
