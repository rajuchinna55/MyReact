import React from 'react'
import { UserData } from '../data'

export const Example2 = () => {

  var menu = [
    {Category: "Electronics", Products: ["Mobiles", "Televisions"]},
    {Category: "Footwear", Products: ["Casuals", "Boots"]}
]
    
  return (
    <div style={{marginTop:'5%'}}>
        <div>example2</div>
        <h1>card</h1>
        <div style={{display:'flex', gap:'10px', flexWrap: 'wrap'}}>
            
                
                   {
                     UserData.map((Data)=>
                        <div key={Data} className="card" style={{backgroundColor:'green', width:'250px'}}>
                     <div><img src="images/aqua-1.png" width={'100px'} alt="user" /></div>
                       <div>
                       <label>ID: {Data.id}</label> <br />
                       <label>Name: {Data.name}</label>
                       </div>
                 
                            <div>
                        <span>Address: <a href="#">
                            {Data.address.street}
                            </a></span>
                       </div>
                            <div>
                        <span>lat: <a href="#">
                            {Data.address.geo.lat}
                            </a></span>
                       </div>
                   
                 </div> 
                    )
                   
             
               }
        </div>


        <div>
          <h1>Example2</h1>
          <div>
            <ul>
              {
                menu.map((Menu)=>
                  <li>{Menu.Category}
                  <ol>
                    {
                      Menu.Products.map((PR)=>
                        <li>{PR}</li>
                      )
                    }
                  </ol>
                  {/* <ol>
                    <li>{Menu.Products}</li>
                  </ol> */}
                  </li>
                )
              }
            </ul>
          </div>
        </div>
    </div>
  )
}
