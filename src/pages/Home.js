import React, { useState,useEffect } from 'react'
import axios from 'axios'
const Home = () => {
    const [recipies,setRecipies]=useState([])

    useEffect(()=>{
           axios.get('http://localhost:3600/recipies').then(res=>setRecipies(res.data)).catch(err=>console.log(err))
 
    },[])
  const search = () => {
  }
  return (<>
   <div className="header">
    
    <div className="title">Find a Recipe</div>
          <div className="search-wrapper">
              <div className="fa fa-search"></div>
              <input type="text" name=""  id="search" onChange={search} placeholder="What do you want to eat?" />
              <div className="fa fa-times"  ></div>
          </div>
   </div>
          <div className="card-grid" >
            <div className="food-list" id="food-list">
                    <p id="none" style={{ display:" none" }}>Sorry, the food you were looking for was not available.</p>
                    <div className="card card-shadow">
                        <div className="card-header card-image">
                            <img alt='' src="./img/Sisig.webp" />
                        </div>
                        <div className="card-body" >
                        <h3> Sisig </h3>
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-primary" >Get Recipe</button>
                        </div>
                    </div>
                    <div className="card card-shadow">
                        <div className="card-header card-image">
                            <img src="./img/Adobo.webp" alt='' />
                        </div>
                        <div className="card-body" >
                        <h3> Adobo </h3>
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-primary" >Get Recipe</button>
                        </div>
                    </div>
                    {recipies.map((ele,index)=>{
                        return  <div key={index} className="card card-shadow">
                        <div className="card-header card-image">
                            <img alt='' src="./img/Porkchop.webp" />
                        </div>
                        <div className="card-body" >
                            <h3>{ele.name}</h3>
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-primary">Get Recipe</button>
                        </div>
                    </div>
                    })}
                    <div className="card card-shadow">
                        <div className="card-header card-image">
                            <img alt='' src="./img/Porkchop.webp" />
                        </div>
                        <div className="card-body" >
                            <h3>Sizzling Porkchop</h3>
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-primary">Get Recipe</button>
                        </div>
                    </div>
                    
            </div> 

          
            <div className = "meal-detail" id="meal-detail">
                <button type = "button" className = "btn recipe-close-btn" id = "recipe-close-btn" >
                    <i className ="fas fa-times"></i>
                </button>

                <div className="meal-content">
                    <h2 className="meal-name">Sisig</h2>
                    <div className="meal-about">
                        <h3 className="meal-title-about">About Meal</h3>
                        <p className="meal-descript-about">Sisig is a Filipino dish made from parts of a pig's face and belly, and chicken liver which is usually seasoned with calamansi, onions, and chili peppers. It originates from the Pampanga region in Luzon. Sisig is a staple of Kapampangan cuisine. </p>
                    </div>
                    <div className = "meal-instruct">
                        <h3>Ingridients:</h3>
                        <p><br />1 lb. pig ears
                            <br />1 1/2 lb pork belly
                            <br />1 piece onion minced
                            <br />3 tablespoons soy sauce
                            <br />1/4 teaspoon ground black pepper
                            <br />1 knob ginger minced (optional)
                            <br />3 tablespoons chili flakes
                            <br />1/2 teaspoon garlic powder
               
                        </p>
                        <h3>Instruction:</h3>
                        <p><br />Pour the water in a pan and bring to a boil Add salt and pepper.
                            <br />Put-in the pig’s ears and pork belly then simmer for 40 minutes to 1 hour (or until tender).
                            <br />Remove the boiled ingredients from the pot then drain excess water
                            <br />Grill the boiled pig ears and pork belly until done
                            <br />Chop the pig ears and pork belly into fine pieces
                            <br />In a wide pan, melt the butter or margarine. Add the onions. Cook until onions are soft.
                        </p>
                
                    </div>
                    <div className = "meal-img">
                        <img  src = "./img/Sisig.webp" alt = "" />
                      </div>
                      <div className = "meal-link">
                        <a href="https://tinyurl.com/mryx6ezu" className="meal-link-btn">Watch Video</a>
                    </div>
                </div>
            </div>
            
            
        </div>
  </>
  )
}

export default Home