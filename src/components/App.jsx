import '../styles/App.scss';
import { useState } from 'react';

function App() {
  const [text, setText] = useState('');

  const handleIngredient = (ev) => {
    let cebollaIngredient = ev.target.form.elements.cebolla.checked;
    let papasIngredient = ev.target.form.elements.papas.checked;
    let huevosIngredient = ev.target.form.elements.huevos.checked;
    let macarronesIngredient = ev.target.form.elements.macarrones.checked;
    let nuecesIngredient = ev.target.form.elements.nueces.checked;
    let cervezaIngredient = ev.target.form.elements.cerveza.checked;

    if (
      cebollaIngredient &&
      papasIngredient &&
      huevosIngredient &&
      !macarronesIngredient &&
      !nuecesIngredient &&
      !cervezaIngredient
    ) {
      setText('Eres una persona concebollista');
    } else {
      setText('Eres un robot sin paladar');
    }
  };

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
        />
        <label htmlFor="papas">Papas</label>
        <input
          type="checkbox"
          name="ingredient"
          id="papas"
          onChange={handleIngredient}
        />
        <label htmlFor="nueces">Nueces</label>
        <input
          type="checkbox"
          name="ingredient"
          id="nueces"
          onChange={handleIngredient}
        />
        <label htmlFor="huevos">Huevos</label>
        <input
          type="checkbox"
          name="ingredient"
          id="huevos"
          onChange={handleIngredient}
        />
        <label htmlFor="cebolla">Cebolla</label>
        <input
          type="checkbox"
          name="ingredient"
          id="cebolla"
          onChange={handleIngredient}
        />
        <label htmlFor="cerveza">Cerveza</label>
        <input
          type="checkbox"
          name="ingredient"
          id="cerveza"
          onChange={handleIngredient}
        />
      </form>
      <p>{text}</p>
    </div>
  );
}

export default App;
