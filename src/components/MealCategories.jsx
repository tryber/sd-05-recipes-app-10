import React from 'react';
import mealCategories from '../../cypress/mocks/mealCategories';

const MealCategories = () => {
  const [ allCategories, setAllCategories ] = useState([]);


  useEffect(() => {
    setAllCategories(mealCategories.meals.slice(0,5));
  }, [])


  return ( 
    // <>
    // {allCategories.map( category => {
    //   <p data-testid=`${category}-category-filter` ></p>
    // })}
    // </>
   );
}
 
export default MealCategories;