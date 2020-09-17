import React, { Fragment, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import propTypes from 'prop-types';
import Footer from '../components/Footer';
import Header from '../components/header';
import { ReceitasContext } from '../Context/ReceitasContext';
import { useContext } from 'react';
import {
  fetchMealsFilterdByCategory,
  fetchDrinksFilteredByCategory,
  fetchAllMeals,
  fetchAllDrinks,
} from '../services/ApiRequest';
import RecipeCard from '../components/RecipeCard';

function selectRecipesChoosingCountry() {
  const foodFilterCountry = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=${}';
  return (
    <div>
      {}
    </div>
  );
}

function CountryInput(props) {
  const { mealDB } = props;
  const [initialValueSelect, setInitialValueSelect] = useState("All");
  console.log('initialValueSelect', initialValueSelect);
  console.log('area', mealDB)
  const resultCountries = Object.entries(mealDB.areas).map((area) => area[1].strArea);
  return (
    <div>
      <select data-testid="explore-by-area-dropdown" value={initialValueSelect} onChange={event => setInitialValueSelect(event.target.value)}>
        {resultCountries.map((area) => <option data-testid={`${area}-option`} value={area}>{area}</option>)}
      </select>
    </div>
  );
}

function ExplorarComidasOuBebidasPorArea(props) {
  const { mealDB } = useContext(ReceitasContext);
  console.log(
    'nao quero ter que por o return de novo quando tiver mais coisas',
  );

  const { drinkCategory, category } = useContext(ReceitasContext);
  const { recipesFiltered, setRecipesFiltered, chooseAPI } = useContext(ReceitasContext);
  useEffect(() => {
    if (props.pathname === '/bebidas') {
      if (drinkCategory === 'All') {
        console.log('vou chamar fetch all drinks');
        fetchAllDrinks().then((e) => setRecipesFiltered(e));
      } else {
        fetchDrinksFilteredByCategory(drinkCategory).then(
          (e) => { setRecipesFiltered(e); }, (error) => console.log(error));
      }
    }
  }, [props.pathname, drinkCategory, setRecipesFiltered]);

  useEffect(() => {
    console.log('vou fetch comidas');
    if (props.pathname === '/comidas') {
      if (category === 'All') {
        fetchAllMeals().then((e) => setRecipesFiltered(e));
      } else {
        fetchMealsFilterdByCategory(category).then((e) => setRecipesFiltered(e));
      }
    }
  }, [props.pathname, category, setRecipesFiltered]);

  let auxRecipes = recipesFiltered;
  if (!Array.isArray(auxRecipes)) {
    auxRecipes = [];
    alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
  } else if (auxRecipes.length === 1 && chooseAPI === 'comidas' && category !== 'Goat') {
    return <Redirect to={`/comidas/${auxRecipes[0].idMeal}`} />;
  } else if (auxRecipes.length === 1 && chooseAPI === 'bebidas') {
    return <Redirect to={`/bebidas/${auxRecipes[0].idDrink}`} />;
  }

  return (
    <Fragment>
      <Header pathname={props.history.location.pathname} />
      <CountryInput mealDB={mealDB} />
      <div>
        {auxRecipes.slice(0, 12).map((recipe, index) => (
          <RecipeCard
            testIt={`${index}-recipe-card`}
            testName={`${index}-card-name`}
            TestIdImage={`${index}-card-img`}
            recipe={recipe}
          />
        ))}
      ;
    </div>
      <Footer />
    </Fragment>
  );
};

ExplorarComidasOuBebidasPorArea.propTypes = {
  history: propTypes.shape({
    location: propTypes.shape({
      pathname: propTypes.shape.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ExplorarComidasOuBebidasPorArea;
