import React, { useState } from 'react';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import { faveFuncFavePage } from '../services/helpers';

const FaveBtnForFavePage = ({ index, recipe, setFavoriteRecipes }) => {
  const [favorite, setFavorite] = useState(true);
  // data-testid="0-horizontal-favorite-btn"
  // data-testid="0-horizontal-favorite-btn"
  return (
    <div>
      <button
        onClick={() =>
          faveFuncFavePage(setFavorite, favorite, recipe, setFavoriteRecipes)
        }
      >
        <img
          data-testid={`${index}-horizontal-favorite-btn`}
          alt="favorite button"
          src={favorite ? blackHeartIcon : whiteHeartIcon}
        />
      </button>
    </div>
  );
};
// data-testid={`${props.index}

export default FaveBtnForFavePage;
