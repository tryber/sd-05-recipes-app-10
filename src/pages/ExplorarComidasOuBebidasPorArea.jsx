import React, { Fragment, useEffect, useState, useContext } from 'react';
import propTypes from 'prop-types';
import Footer from '../components/Footer';
import Header from '../components/header';
import { ReceitasContext } from '../Context/ReceitasContext';
import {
  fetchAllMeals,
  fetchMealDB,
} from '../services/ApiRequest';
import RecipeCard from '../components/RecipeCard';

function fetchSelectRecipesChoosingCountry(country) {
  if (country === 'All') {
    return fetchAllMeals();
  }
  const foodFilterCountry = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`;
  return fetch(foodFilterCountry)
    .then((result) => result.json())
    .then((data) => data.meals);
}

function CountryInput({ initialValueSelect, setInitialValueSelect, mealDB }) {
  const { setMealDB } = useContext(ReceitasContext);

  useEffect(() => {
    fetchMealDB().then((e) =>
      setMealDB(() => ({
        ...e,
        areas: [{ strArea: 'All' }, ...e.areas],
      })),
    );
  }, [setMealDB]);
  const resultCountries = Object.entries(mealDB.areas).map((area) => area[1].strArea);
  return (
    <div>
      <select
        data-testid="explore-by-area-dropdown"
        value={initialValueSelect}
        onChange={(event) => setInitialValueSelect(event.target.value)}
      >
        {resultCountries.map((area) => <option data-testid={`${area}-option`} value={area}>{area}</option>)}
      </select>
    </div>
  );
}

function ExplorarComidasOuBebidasPorArea(props) {
  const { mealDB } = useContext(ReceitasContext);
  const { recipesFiltered, setRecipesFiltered } = useContext(ReceitasContext);
  const [initialValueSelect, setInitialValueSelect] = useState('All');

  useEffect(() => {
    fetchSelectRecipesChoosingCountry(initialValueSelect).then((e) => setRecipesFiltered(e));
  }, [initialValueSelect]);

  return (
    <Fragment>
      <Header pathname={props.history.location.pathname} />
      <CountryInput
        mealDB={mealDB}
        setInitialValueSelect={setInitialValueSelect}
        initialValueSelect={initialValueSelect}
      />
      <div>
        {recipesFiltered.slice(0, 12).map((recipe, index) => (
          <RecipeCard
            testIt={`${index}-recipe-card`}
            testName={`${index}-card-name`}
            TestIdImage={`${index}-card-img`}
            recipe={recipe}
          />
        ))}
      </div>
      <Footer />
    </Fragment>
  );
}

ExplorarComidasOuBebidasPorArea.propTypes = {
  history: propTypes.shape({
    location: propTypes.shape({
      pathname: propTypes.shape.isRequired,
      initialValueSelect: propTypes.shape.isRequired,
      setInitialValueSelect: propTypes.shape.isRequired,
      mealDB: propTypes.shape.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ExplorarComidasOuBebidasPorArea;
