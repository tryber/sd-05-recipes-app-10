import React, { Fragment, useEffect, useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import propTypes from 'prop-types';
import Footer from '../components/Footer';
import Header from '../components/header';
import { ReceitasContext } from '../Context/ReceitasContext';
import {
  fetchMealsFilterdByCategory,
  fetchDrinksFilteredByCategory,
  fetchAllMeals,
  fetchAllDrinks,
  fetchMealDB,
} from '../services/ApiRequest';
import RecipeCard from '../components/RecipeCard';

function fetchSelectRecipesChoosingCountry(country) {
  const foodFilterCountry = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`;
  return fetch(foodFilterCountry)
    .then((result) => result.json())
    .then((data) => data.meals)
}

function CountryInput({ initialValueSelect, setInitialValueSelect, mealDB }) {
  const { setMealDB } = useContext(ReceitasContext);
  console.log('initialValueSelect', initialValueSelect);
  console.log('area', mealDB)
  useEffect(() => {
    fetchMealDB().then((e) =>
      setMealDB(() => ({
        ...e,
        categorias: [{ strCategory: 'All' }, ...e.categorias],
        areas: [{ strArea: 'All' }, ...e.areas]
      })),
    );
  }, [setMealDB]);
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
  const { recipesFiltered, setRecipesFiltered, chooseAPI } = useContext(ReceitasContext);
  const [initialValueSelect, setInitialValueSelect] = useState();
  console.log('aqui', recipesFiltered);

  useEffect(() => {
    if (props.pathname === '/comidas') {
      if (initialValueSelect === 'All') {
        fetchAllMeals().then((e) => setRecipesFiltered(e));
      } else {
        fetchSelectRecipesChoosingCountry(recipesFiltered).then((e) => setRecipesFiltered(e));
      }
    }
  }, [props.pathname, initialValueSelect, setRecipesFiltered]);

  let auxRecipes = recipesFiltered;
  console.log('aqui tá o que', auxRecipes)
  if (!Array.isArray(auxRecipes)) {
    auxRecipes = [];
    // alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
  } else if (auxRecipes.length === 1 && chooseAPI === 'comidas' && initialValueSelect !== 'Goat') {
    return <Redirect to={`/comidas/${auxRecipes[0].idMeal}`} />;
  } else if (auxRecipes.length === 1 && chooseAPI === 'bebidas') {
    return <Redirect to={`/bebidas/${auxRecipes[0].idDrink}`} />;
  }

  return (
    <Fragment>
      <Header pathname={props.history.location.pathname} />
      <CountryInput
        mealDB={mealDB}
        setInitialValueSelect={setInitialValueSelect}
        initialValueSelect={initialValueSelect}
      />
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
