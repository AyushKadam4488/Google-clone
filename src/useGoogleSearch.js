import React from 'react';
import API_KEY from './keys';
import { useEffect, useState } from 'react';

const CONTEXT_KEY = "f21ca6a412ee04302";

const useGoogleSearch= (term) => {
   const [data, setData] = useState(null);
//    const {data} = useGoogleSearch(term);
   useEffect(() =>{
     const fetchData = async() =>{
        fetch(
            `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
        )
        .then(response => response.json())
        .then(result =>{
            setData(result)
        })
     }    
     fetchData();

   }, [term])
 return {data};
};

export default useGoogleSearch