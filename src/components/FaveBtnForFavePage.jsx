import React, { useState } from 'react';
import propTypes from 'prop-types';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import { faveFuncFavePage } from '../services/helpers';

const FaveBtnForFavePage = ({ index, recipe, setFavoriteRecipes }) => {
  const [favorite, setFavorite] = useState(true);
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

FaveBtnForFavePage.propTypes = {
  index: propTypes.number.isRequired,
  recipe: propTypes.objectOf(propTypes.string).isRequired,
  setFavoriteRecipes: propTypes.func.isRequired,
}

export default FaveBtnForFavePage;
