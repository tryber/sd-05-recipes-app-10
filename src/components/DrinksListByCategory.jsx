// import React, { useContext, Fragment } from 'react';
// import { ReceitasContext } from '../Context/ReceitasContext';
// import { useEffect } from 'react';
// import { fetchMealsFilterdByCategory } from '../services/ApiRequest';
// import RecipeCard from './RecipeCard';
// import { findAllByDisplayValue } from '@testing-library/react';

// const DrinksListByCategory = () => {
//   const { category, recipesFiltered, setRecipesFiltered } = useContext(
//     ReceitasContext,
//   );

//   console.log('drinklist')

//   useEffect(() => {
//     fetchMealsFilterdByCategory(category).then((e) => setRecipesFiltered(e));
//   }, [category]);

//   return (
//     <div>
//       {recipesFiltered.slice(0, 12).map((recipe, index) => {
//         console.log('entrou no map de drinks')
//         return (
//           <RecipeCard
//             testIt={`${index}-recipe-card`}
//             testName={`${index}-card-name`}
//             TestIdImage={`${index}-card-img`}
//             recipe={recipe}
//           />
//         );
//       })}
//       {/* <h1>DRINKPORRA</h1> */}
//     </div>
//   );
// };
 
// export default DrinksListByCategory;