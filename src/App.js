
import './App.css';
import axios from 'axios';

import RecipeTile from './RecipeTile';
import { useEffect, useState } from "react";
import { getData } from "./redux/actions";
import { useSelector, useDispatch } from "react-redux";
import { Spinner } from 'react-bootstrap';

const App=() =>{
  const [query, setQuery] = useState("")
  // const [recipes, setRecipes] = useState([]);
  
  const [healthLabels, setHealthLabels] = useState("")
  
  const dispatch = useDispatch();
  const  recipes  = useSelector((state) => state.reducer.data);
  
  const loading = useSelector((state) => state.reducer.loading);
const onSubmit=(e)=>{
  e.preventDefault();
  dispatch(getData(query,healthLabels))
}
  return (
    
      <div className="app">
        <div className='title'>
        <h1 >Food Recipe</h1>
        <img src="hamburger.png" alt="hamImg" width="40px" style={{ marginLeft: "10px" }} />
        </div>
        
     
      <form className="app_searchForm" onSubmit={onSubmit}>
        <input type="text" 
        placeholder="enter ingredient" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)}
        className="app_input"
        />
        <input className="app_submit" type="submit" value="Search" />
      <select className='app_healthLabels' value={healthLabels}  onChange={(e)=>setHealthLabels(e.target.value)}>
        <option value="vegan" >Vegan</option>
        <option  value="vegetarian">Vegetarian</option>
        <option  value="paleo" >Paleo</option>
        <option  value="dairy-free">Dairy-Free</option>
        <option  value="gulten-free" >Gulten-Free</option>
        <option  value="wheat-free" >Wheat-Free</option>
        <option  value="egg-free" >Egg-Free</option>
        <option value="low-sugar" >Low-Sugar</option>
        <option value="peanut-free" >Peanut-Free</option>
        <option value="alcohol-free" >Alcohol-Free</option>
      
      </select>
      
      </form>
      <div className="app__recipes">
   {loading?(  <Spinner animation="border" role="status">
    <span className="sr-only">Loading...</span>
  </Spinner>)
   

:(recipes!=null&&recipes.map((recipe,index)=>
     <RecipeTile recipe={recipe} key={index}/>

   ))}
      </div>
    </div>
  );
}

export default App;
// const APP_ID="07423c90";
  // const APP_KEY=
  // "bf8bcf78e0cb86ee5d6ac92fd73f00ff";
  // const url =`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&health=${healthLabels}`;
  // async function getRecipes() {
  //   const res = await axios.get(url);
  //   setRecipes(res.data.hits)
  //   console.log(res.data.hits);
  // 
  