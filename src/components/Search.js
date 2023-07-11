import React from 'react';
import MicIcon from '@mui/icons-material/Mic';
import SearchIcon from '@mui/icons-material/Search';
import './Search.css'
import { Button } from '@mui/material';
import { useState } from 'react';
import { actionTypes } from '../reducer';
import { useStateValue } from '../StateProvider';
import { useNavigate } from 'react-router-dom';

function Search({hideButtons = false}) {

    const [{}, dispatch] = useStateValue();

    const [input, setInput] = useState();
    const navigate = useNavigate();

     const search = e =>{
        e.preventDefault();
        console.log('hited',input);
        navigate('/search');

        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input
        })
     };

  return (
    <form className='Search'>
        <div className='search_input'>

            <SearchIcon className="search_inputIcon" />
            <input value={input} onChange={e =>setInput(e.target.value)} />
            <MicIcon />

        </div>

        {!hideButtons ? (<div className='search_buttons'>
           <Button type='submit' onClick={search} variant='outlined'>Google Search</Button>
           <Button variant='outlined'>I'm Feeling Lucky</Button>
         </div> ): (
         <div className='search_buttons'>
           <Button className='search_buttonsHidden' type='submit' onClick={search} variant='outlined'>Google Search</Button>
           <Button className='search_buttonsHidden'  variant='outlined'>I'm Feeling Lucky</Button>
         </div> )}
         
         

    </form>
  )
}

export default Search