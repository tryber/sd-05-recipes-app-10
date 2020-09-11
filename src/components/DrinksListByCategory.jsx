// import React, { useContext, Fragment } from 'react';
// import { ReceitasContext } from '../Context/ReceitasContext';
// import { useEffect } from 'react';
// import { fetchDrinksFilteredByCategory } from '../services/ApiRequest';
// import RecipeCard from './RecipeCard';

// const DrinksListByCategory = () => {
//   const {drinkCategory, qualPage, recipesFiltered, setRecipesFiltered } = useContext(
//     ReceitasContext,
//   );
// console.log(drinkCategory + ' dentro do componente drinkslist')

//   useEffect(() => {
//     console.log('entrou no useeffect do drinks')
//     if(qualPage === 'bebidas') {
//       // setCategory();
//       fetchDrinksFilteredByCategory(drinkCategory).then((e) => {
//         console.log(e);
//         setRecipesFiltered(e)
//       }, error => console.log(error));
//     }
//     // fetchMealsFilterdByCategory(category).then((e) => setRecipesFiltered(e));
//   }, [drinkCategory]);


//   return (
//     <div>
//       {recipesFiltered.slice(0, 12).map((recipe, index) => {
//         return (
//           <RecipeCard
//             testIt={`${index}-recipe-card`}
//             testName={`${index}-card-name`}
//             TestIdImage={`${index}-card-img`}
//             recipe={recipe}
//           />
//         );
//       })}
//     </div>
//   );
// };

// export default DrinksListByCategory;

// // fetchMealsFilterdByCategory data-testid=`${index}-card-img`
