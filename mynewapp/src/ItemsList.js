import React, { Component } from "react";
import NewSingleItem from './NewSingleItem';

const filterBaseUrl ="https://swapi.co/api/people/?search=";

class ItemsList extends Component {
  constructor(props) {
    super(props);
    this.amRendering= false;
    this.state = {     
      characters:[],
    };
    // This binding is necessary to make `this` work in the callback
    this.changeFilter = this.changeFilter.bind(this);
  }

  changeFilter(event){
    if(event.target.value.length>=3){
      fetch(filterBaseUrl+event.target.value)
      .then(response => {
        return response.json();
      })
      .then( (data) => {
        return(
          this.setState({
            characters: data.results.map(character => ({
                name: `${character.name}`,
                height:  `${character.height}`,  
                gender:  `${character.gender}`,                 
            }))
          })
        )
      })       
    }else{
      this.setState({
        characters: []
        
      })
      this.amRendering=false;
    }
  }
  
  sortAlphaByName(){
    if (this.state.characters.length>1){
      let thisList = [...this.state.characters].sort((a,b)=>{
        if (a.name<b.name) return -1;
        if (a.name>b.name) return 1;
        return 0;
      });
      this.setState({
        characters: thisList
      })
    }else{
      console.log("No Characters")
    }
  }

  renderItems() {  
    return this.state.characters.map((character) => {
     return <NewSingleItem key={"s"+character.name} character={character} />      
    });
  }  
  
  render() {
    if (this.state.characters.length>1 & !this.amRendering){
      this.sortAlphaByName(); 
      this.amRendering=true; 
    }  
    return(  
      <div id="d1">       
        <label><strong>Filter: </strong> </label>
        <input  style={{ width: "350px" }} id="filter" type="text"  onChange={this.changeFilter}/>
        <div id="itemGroup">{this.renderItems()}</div>
      </div>   
    )
  }
}

export default ItemsList;