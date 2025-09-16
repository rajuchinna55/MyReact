import React, { useState } from 'react';

export const ArrayFilters = () => {
    // map
    const numbers = [1, 2, 3, 4, 5];

    // filter
    const [items, setItems] = useState(["React", "JavaScript", "CSS", "HTML"]);

    const [Numbers] = useState([1, 2, 3, 4, 5]);
    const evenNumbers = Numbers.filter(number => number % 2 === 0);

    const removeItem = (itemToRemove) => {
        setItems(items.filter(item => item !== itemToRemove));
      };

      //reduce
      const NumberS = [1, 2, 3, 4];

      const sum = NumberS.reduce((acc, num) => acc + num, 1);

    return (
      <div>
        <h3>Array Methods</h3>
          <ul>
            {
                numbers.map((numbers)=>{
                    return(
                        <li>{numbers}</li>
                    )
                })
            }
          </ul>

          <hr />

          <h3>filter</h3>

          <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => removeItem(item)}>Remove</button>
          </li>
        ))}
      </ul>
      <div>
          <ul>
      {evenNumbers.map((number, index) => (
        <li key={index}>{number}</li>
      ))}
    </ul>
      </div>

      <hr />
      {/* joke: 4+3=5 joker: ice cream */}
      <div>
        <h2>reduce</h2>
      <div>Sum: {sum}</div>;
      </div>
      </div>
    );
}
