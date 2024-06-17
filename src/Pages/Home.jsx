import React, { createContext, useState } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import MovieRenderer from '../Components/MovieRenderer';
import Navigators from '../Components/Navigators';


export const SearchContext = createContext();

const Home = () => {
  
  const [searchKey, setSearchKey] = useState('');
  

  return (
    <div className='h-auto w-full bg-black'>
    <SearchContext.Provider value={[searchKey, setSearchKey]}>
      <Header />
      <Navigators />
      <MovieRenderer />
      <Footer />
    </SearchContext.Provider>
    </div>

  )
}

export default Home;
