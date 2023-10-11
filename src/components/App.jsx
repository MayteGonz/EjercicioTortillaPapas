import '../styles/App.scss';
import { useState } from 'react';

function App() {
  const [text, setText] = useState('');
  const [ingredient, setIngredient] = useState([]);

  const handleIngredient = (ev) => {
    const valueInput = ev.target.value;

    if(!ingredient.includes(valueInput)){         // se añade
      setIngredient([...ingredient, valueInput]);
    } else {                                     // se quita
      const ingredientClone = [...ingredient]
      const index = ingredientClone.indexOf(valueInput) // se busca la posición del elem. marcado/checkeado -> index
      ingredientClone.splice(index, 1)
      setIngredient([...ingredientClone]);
    }
  };

  const pintarMensaje = () => {

    if(ingredient.includes('cebolla') &&
       ingredient.includes('papas') &&
       ingredient.includes('huevos') &&
       !ingredient.includes('macarrones') &&
       !ingredient.includes('nueces') &&
       !ingredient.includes('cerveza') ){
          return "Eres cebollista!"
    } else {
          return "Eres un robot :("
    }

    // Si se llama a la función pintarMensaje() no puede haber un set(), debe ser un return
    
  }

  return (
    <div>
      <h1>Selecciona los ingredientes de la tortilla de patatas</h1>
      <form>
        <label htmlFor="macarrones">Macarrones</label>
        <input
          type="checkbox"
          name="ingredient"
          id="macarrones"
          onChange={handleIngredient}
          value="macarrones"
        />
        <label htmlFor="papas">Papas</label>
        <input
          type="checkbox"
          name="ingredient"
          id="papas"
          onChange={handleIngredient}
          value="papas"
        />
        <label htmlFor="nueces">Nueces</label>
        <input
          type="checkbox"
          name="ingredient"
          id="nueces"
          onChange={handleIngredient}
          value="nueces"
        />
        <label htmlFor="huevos">Huevos</label>
        <input
          type="checkbox"
          name="ingredient"
          id="huevos"
          onChange={handleIngredient}
          value="huevos"
        />
        <label htmlFor="cebolla">Cebolla</label>
        <input
          type="checkbox"
          name="ingredient"
          id="cebolla"
          onChange={handleIngredient}
          value="cebolla"
        />
        <label htmlFor="cerveza">Cerveza</label>
        <input
          type="checkbox"
          name="ingredient"
          id="cerveza"
          onChange={handleIngredient}
          value="cerveza"
        />
      </form>
      <p>{pintarMensaje()}</p>
    </div>
  );
}

export default App;
