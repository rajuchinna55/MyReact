import React, { Component } from 'react'

export class FirstClass extends Component {
    constructor(){
        super();
        
       this.state = {
        key:"value",
        Players : [
            { Name: "Samsung TV", Price: 45000.44, Stock: true },
            { Name: "Nike Casuals", Price: 6000.55, Stock: true },
            { Name: "Watch", Price: 3400.33, Stock: false }
        ]
        }
    
   }
    handleLoginClick(e){
        alert(`
           Button Id :  ${e.target.id} \n
           Button Name: ${e.target.name} \n
           X Position : ${e.clientX}
        `);
}
   
   
  render() {
    return (
        
      <div>FirstClass
        <div>{this.state.key}</div>
        <ul>
            {
                this.state.Players.map((item, index)=>
                    <li key={index}>{item.Name}</li>
                )
            }
        </ul>
        <button onClick={this.handleLoginClick}>button </button>
      </div>
    )
  }
}
