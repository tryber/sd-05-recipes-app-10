import React, { useState } from 'react';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import { faveFuncFavePage } from '../services/helpers';


const FaveBtnForFavePage = (props) => {
  const [favorite, setFavorite] = useState(true);
  
  return ( <div>
    <button onClick={() => faveFuncFavePage(setFavorite, favorite, props.recipe, props.setFavoriteRecipes)}>
              <img
                data-testid={`${props.index}
                -horizontal-favorite-btn`}
                
                alt="favorite button"
                data-testid="favorite-btn"
                src={favorite ? blackHeartIcon : whiteHeartIcon}
              />
            </button>
  </div> );
}
 
export default FaveBtnForFavePage;