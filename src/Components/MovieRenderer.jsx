import { useContext, useEffect, useState } from "react"
import { SearchContext } from "../Pages/Home"
import { api_key, base_image_url, movie_base_url, popular_movies_url, search_base_url } from "../Helper";
import {  Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamation, faRefresh, faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";


const MovieRenderer = () => {
    const [searchKey] = useContext(SearchContext);
    const [movies, setMovies] = useState([]);
    const [isHoveringId ,setIsHoveringId] = useState(null);

    const hanldeHover = (movieId) => {
        setIsHoveringId(movieId);
    }

    const handleLeave = () => {
        setIsHoveringId(null);
    }

    const  routeData   = useParams();

    useEffect(() => {
        var url = ''
        if(routeData.movieType == undefined){
            url = `${popular_movies_url}`;    
        }else{
            url = `${movie_base_url}${routeData.movieType}?api_key=${api_key}`;
        }

        const fetchData = async() => {
            console.log(routeData.movieType)
            const response = await fetch(url);
            const data = await response.json();
            setMovies(data.results);
        }
        fetchData();
    }, [routeData]);

    useEffect(() => {

        if(searchKey.trim() == ''){
            return;
        }

        const fetchData = async() => {
            const response = await fetch(`${search_base_url}${searchKey}`);
            const data = await response.json();
            console.log(data.results);
            setMovies(data.results);
        }
        fetchData();
    }, [searchKey])
   

  return (
    <div className='h-auto w-full mt-20 flex justify-center flex-wrap gap-10 bg-gradient-to-b from-black via-gray-900 to-black mb-20'>
        

        {movies.length == 0 ? (
            <div className="bg-black text-white text-5xl h-[50vh] w-full flex justify-center items-center flex-col gap-5"> 
                <FontAwesomeIcon className="text-8xl text-red-500" icon={ faTriangleExclamation } />
                <h1 className=" ">No results Found</h1>
                <Link className="text-2xl text-orange-500 hover:text-orange-400 active:text-orange-300 flex gap-2 items-center justify-center" to='/'>
                    <FontAwesomeIcon icon={ faRefresh } />
                    <span>Refresh</span>
                </Link>
            </div>
        ) : (
            movies.map(movie => (
                <div key={movie.id} className="h-[52vh] w-[16%] rounded-xl relative bg-gradient-to-t from-black via-gray-900 to-black flex items-center flex-col">
                    <div className="relative h-[85%] w-[90%]">
                        <img className="h-full w-full rounded-xl relative z-10  " onMouseEnter={() => hanldeHover(movie.id)} onMouseLeave={handleLeave} src={`${base_image_url}${movie.poster_path}`} alt="movie_poster" />
                        <div onMouseEnter={() => hanldeHover(movie.id)} onMouseLeave={handleLeave} className={`bg-gradient-to-t from-black  via-[rgba(0,0,0,0.6)] to-transparent absolute top-0 left-0 h-full w-full rounded-xl text-white flex flex-col justify-end pb-5 pl-2 gap-5 select-none ${isHoveringId === movie.id ? '' : 'hidden'} z-20`}>
                            <h1 className="font-imported">{movie.title}</h1>
                            <p className="text-sm">{movie.overview.slice(0,50)}...</p>
                        </div>
                    </div>
                    <div className="flex justify-between h-auto w-full px-4 mt-4">
                        <h1 className="text-white select-none">Movie</h1>
                        <button className="text-orange-500 bg-black rounded-xl px-4 hover:border-orange-500 transition-hover duration-150 border border-white active:bg-orange-600 active:text-black">Watch Now</button>
                    </div>
                </div>
            ))
        )}

    </div>
  )
}

export default MovieRenderer
