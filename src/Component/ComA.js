import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ComA = ()=>{
    const [num,setNum] = useState('');
    const[userData,setUserData] = useState({
        name:'',
        moves:''
    });

    useEffect(()=>{

        async function getData(){

            if(num !== "")
            {
                const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
                // console.log(res.data.name);
                console.log(res);
                setUserData(
                    {
                        name:res.data.name,
                        moves:res.data.moves.length
                    }
                );
            }  
        }

        getData();
        
    },[num]);
    
    return(
        <>
        <h1>Your are selected {num} value</h1>
        <h1>Name:{userData.name}</h1>
        <br/>
        <h1>Moves:{userData.moves}</h1>
        <select value={num} onChange={(e)=>{
            setNum(e.target.value);
        }}>
            <option value="1">1</option>
            <option value="25">25</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
        </>
    )
}
export default ComA;