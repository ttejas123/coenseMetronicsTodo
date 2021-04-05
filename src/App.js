import React, {useState, useEffect} from "react";
import axios from 'axios'
import Cards from './Card/cards.js'
import Card from './Card/Card.js'

// if user press any key and release
const App=()=>{
  const [inputBoxVal, setInputBoxVal] = useState('');
  const [ListDeta, setListDeta] = useState([]);
  const [contries, setContries] = useState();
  useEffect(()=>{
    axios.get("https://restcountries.eu/rest/v2/all")
      .then(rest=>{
        setContries(rest.data);
      })
  },[]);
  const inputBoxEvent = (e)=>{
    setInputBoxVal(e.target.value)
    showSuggestions(e.target.value)
  }

function showSuggestions(userData){
    let listData;
    if(!userData.length){
        //userValue = inputBoxVal;
        listData = "";
    }else{
        let emptyArray = contries.filter((data)=>{
            //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
        return data.name.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase()); 
        });
       
        listData = emptyArray;
    }
    setListDeta(listData);
    //console.log(listData);
}
return(
    <div>
        <div className="wrapper">
            <div className="search-input">
                <a href="" target="_blank" hidden></a>
                <input onChange={inputBoxEvent} type="text" placeholder="Type to search.." />
                <div className="autocom-box">
                  {inputBoxVal==""||inputBoxVal==null?(
                      <li>Search Now</li>
                    ):(
                      ListDeta.map(val=>{
                        return(
                          <li>{val.name}<div>{val.nativeName}</div></li>
                        )
                      })
                    )}
                </div>
            </div>
        </div>
        <div className="cards">
            {
                Cards.map((val)=>{

                    return(<Card key = {val.id}
                                    imgsrc = {val.imgsrc} 
                                    title = {val.title} 
                                    sname = {val.sname}
                                    className = "card" />)
                })
            }
        </div>
    </div>    
)
}
export default App;