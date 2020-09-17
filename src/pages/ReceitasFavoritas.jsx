import React, { Fragment } from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Success } from './DetalhesComida';
import shareIcon from '../images/shareIcon.svg';
import Header from '../components/header';
import FaveBtnForFavePage from '../components/FaveBtnForFavePage';
import { useEffect } from 'react';

const ShareButton = ({ type, id, index }) => {
  const [linkCopied, setLinkCopied] = useState(false);

  const path =
    type === 'comida'
      ? `http://localhost:3000/comidas/${id}`
      : `http://localhost:3000/bebidas/${id}`;

  // https://web.dev/async-clipboard/

  async function copyPageUrl() {
    try {
      await navigator.clipboard.writeText(path);
      console.log('Page URL copied to clipboard');
      setLinkCopied(true);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  }

  return (
    <button onClick={() => copyPageUrl()} src={shareIcon}>
      <img
        data-testid={`${index}-horizontal-share-btn`}
        alt="share button"
        src={shareIcon}
      />
      {linkCopied ? <Success /> : null}
    </button>
  );
};

ShareButton.propTypes = {
  type: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
  index: propTypes.number.isRequired,
};

const FavoritesList = ({
  favoriteRecipes,
  setFavoriteRecipes,
  categorieChosen,
}) => {
  let favoriteRecipesFiltered = favoriteRecipes;

  if (categorieChosen === 'Food') {
    favoriteRecipesFiltered = favoriteRecipes.filter(
      (e) => e.type === 'comida',
    );
  }
  if (categorieChosen === 'Drink') {
    favoriteRecipesFiltered = favoriteRecipes.filter(
      (e) => e.type === 'bebida',
    );
  }
  return (
    <div>
      {favoriteRecipesFiltered.map((e, index) => {
        const type = e.type === 'comida' ? 'comidas' : 'bebidas';
        const category = e.alcoholicOrNot
          ? e.alcoholicOrNot
          : `${e.area} - ${e.category}`;
        return (
          <div className="card">
            <h6 data-testid={`${index}-horizontal-top-text`}>{category}</h6>
            <Link to={`/${type}/${e.id}`}>
              <img
                src={e.image}
                style={{ width: '200px' }}
                alt=""
                data-testid={`${index}-horizontal-image`}
              />
            </Link>
            <Link to={`/${type}/${e.id}`}>
              <h3 data-testid={`${index}-horizontal-name`}> {e.name}</h3>
            </Link>
            <ShareButton e={e} type={e.type} id={e.id} index={index} />
            <FaveBtnForFavePage
              recipe={e}
              index={index}
              setFavoriteRecipes={setFavoriteRecipes}
            />
          </div>
        );
      })}
    </div>
  );
};

FavoritesList.propTypes = {
  categorieChosen: propTypes.string.isRequired,
  favoriteRecipes: propTypes.arrayOf(propTypes.string).isRequired,
  setFavoriteRecipes: propTypes.func.isRequired,
};

const ReceitasFavoritas = (props) => {
  const favoritesCategories = ['All', 'Food', 'Drink'];
  const [categorieChosen, setCategorieChosen] = useState('All');
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  useEffect(() => {
    setFavoriteRecipes(JSON.parse(localStorage.getItem('favoriteRecipes')));
  }, []);

  return (
    <Fragment>
      <Header pathname={props.history.location.pathname} />
      {favoritesCategories.map((e) => {
        return (
          <button
            className="category"
            data-testid={`filter-by-${e.toLowerCase()}-btn`}
            onClick={() => setCategorieChosen(e)}
          >
            {e}
          </button>
        );
      })}
      <FavoritesList
        favoriteRecipes={favoriteRecipes}
        // setLinkCopied={setLinkCopied}
        // linkCopied={linkCopied}
        setFavoriteRecipes={setFavoriteRecipes}
        categorieChosen={categorieChosen}
      />
    </Fragment>
  );
};

ReceitasFavoritas.propTypes = {
  history: propTypes.shape({
    location: propTypes.shape({
      pathname: propTypes.shape.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ReceitasFavoritas;
