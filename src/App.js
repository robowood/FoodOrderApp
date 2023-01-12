import {Fragment} from 'react';
import Header from './Components/Layouts/Header';
import Meals from './Components/Meals/Meals';
//import MealItemFrom from './Components/Meals/MealItem/MealItemForm';

function App() {
  return (
    <Fragment>
      <Header></Header>
      <main>
         <Meals/>
      </main>
    
    </Fragment>
  );
}

export default App;
