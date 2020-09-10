import React, { useContext } from 'react';
import { ReceitasContext } from '../Context/ReceitasContext';

const DetalhesComida = () => {
  const { mealDB } = useContext(ReceitasContext);
  console.log('mealDB', mealDB);

  return (
    <div>
      <div>
        {mealDB.revenue.map(({ strMealThumb }) => (
          <img src={strMealThumb} />
        ))}
      </div>
        <p>{console.log('aqui', mealDB.detalhamento)}</p>
    </div>
  );
}

export default DetalhesComida;
