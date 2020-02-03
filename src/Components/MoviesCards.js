import React from 'react';
import Stars from './Stars';
import HOC from './HOC'

const MovieCards= (props)=>{
    return(
        <div className="cards">
             <ul >
                {
                   props.movieList.map(el => (
                    <li className ="blocks">
                      <img src= {el.image} width="300px" height="400px"/>
                      <h3 >{el.title}</h3>
                      <Stars rating = {el.rating} rate={false}/>
                    </li>
                )
                )
                }
            </ul>
        </div>
    )
}

export default HOC(MovieCards);