import React, { Fragment } from 'react';
import propTypes from 'prop-types';
import shareIcon from '../images/shareIcon.svg';

import Header from '../components/header';
import { useState } from 'react';
import { Success } from './DetalhesComida';
import { faveFuncFavePage } from '../services/helpers';
import FaveBtnForFavePage from '../components/FaveBtnForFavePage';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const copyReceitasFavoritasUrl = (setLinkCopied) => {
  const path = 'http://localhost:3000/receitas-favoritas';

  // dica de rodrigo batista
  // https://stackoverflow.com/questions/39501289/in-reactjs-how-to-copy-text-to-clipboard
  const textField = document.createElement('textarea');
  textField.innerText = path;
  document.body.appendChild(textField);
  textField.select();
  document.execCommand('copy');
  textField.remove();
  setLinkCopied(true);
};

const FavoritesList = ({
  favoriteRecipes,
  setLinkCopied,
  linkCopied,
  setFavoriteRecipes,
  categorieChosen,
}) => {
  let favoriteRecipesFiltered = favoriteRecipes;
  
  if (categorieChosen === 'Food') {
    favoriteRecipesFiltered = favoriteRecipes.filter(e => e.type === 'comida')
  }
  if (categorieChosen === 'Drinks') {
    favoriteRecipesFiltered = favoriteRecipes.filter(e => e.type === 'bebida')
  }
  return (
    <div>
      {favoriteRecipesFiltered.map((e, index) => {
        let type = e.type === 'comida' ? 'comidas' : 'bebidas';
        return (
          <div className="card">
            <Link to={`/${type}/${e.id}`}>
            <img src={e.image} style={{ width: '200px' }} alt="" />
            </Link>
            <Link to={`/${type}/${e.id}`}>
            <h3> {e.name}</h3>
            </Link>
            <button
              data-testid="share-btn"
              onClick={() => copyReceitasFavoritasUrl(setLinkCopied)}
            >
              <img alt="share button" src={shareIcon} />
              {linkCopied ? <Success /> : null}
            </button>
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

const ReceitasFavoritas = (props) => {
  const favoritesCategories = ['All', 'Food', 'Drinks'];
  const [categorieChosen, setCategorieChosen] = useState('All');
  const [linkCopied, setLinkCopied] = useState(false);
  const [shouldReload, setShouldReload] = useState(false);
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  useEffect(() => {
    setFavoriteRecipes(JSON.parse(localStorage.getItem('favoriteRecipes')));
  }, []);

  // console.log(props);
  return (
    <Fragment>
      <Header pathname={props.history.location.pathname} />
      {favoritesCategories.map((e) => {
        return (
          <button className="category" onClick={() => setCategorieChosen(e)}>
            {e}
          </button>
        );
      })}
      <FavoritesList
        favoriteRecipes={favoriteRecipes}
        setLinkCopied={setLinkCopied}
        linkCopied={linkCopied}
        setFavoriteRecipes={setFavoriteRecipes}
        categorieChosen={categorieChosen}
      />
    </Fragment>
  );
};
//onClick={() => faveFunc(setFavorite, favorite, recipe)
ReceitasFavoritas.propTypes = {
  history: propTypes.shape({
    location: propTypes.shape({
      pathname: propTypes.shape.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ReceitasFavoritas;
