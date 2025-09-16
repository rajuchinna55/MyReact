import React from 'react'
import { useState } from 'react';

export const ArrayMethods = () => {
    // map
    const numbers = [1, 2, 3, 4, 5];

    // filter
    const [numice, setNumice] = useState([1, 2, 3, 4, 5]);

    const IceHandle =(removenum) =>{
        setNumice(numice.filter(ice => ice !== removenum ))
    }

    // ex2:
    const [evenNumbers, setEvenNumbers] = useState([2, 3, 6, 9])

    const EvenHandle =()=>{
        const NumberEven = evenNumbers.filter(num => num % 2 === 0);
        setEvenNumbers(NumberEven)
    }
    const oddHandle = () =>{
        const NumberOdd = evenNumbers.filter(odd => odd % 2 !== 0)
        setEvenNumbers(NumberOdd)
    }
   
    //find
    const fruits = ["Apple", "Banana", "Cherry"];
    const Findarry = fruits.find(fruits => fruits === "Banana")

    //reduce
    const prices = [10, 20, 30];
    const totalPrice = prices.reduce((total, price) => total + price, 0);

    const items = [
        { id: 1, name: 'Apple', price: 30 },
        { id: 2, name: 'Banana', price: 20 },
        { id: 3, name: 'Cherry', price: 50 },
      ];
      const total = items.reduce((acc, item) => acc + item.price, 0);


  return (
    <div>ArrayMethods
        <div><h1>map:</h1>
       {
        numbers.map((item, index) =>
            <h1 key={index}>{item * 2}</h1>
    )
       }
        </div>
        <div>
            <h1>filter:</h1>
            <ul>
                {
                    numice.map((ice)=>
                        <li>{ice}
                        <button onClick={() =>IceHandle(ice)}>Remove</button>
                        </li>
                    )
                }
            </ul>
Ex2:
            <ol>
                {
                    evenNumbers.map((even)=>
                        <li>{even}
                        </li>
                    )
                }
                <button onClick={EvenHandle}>only even numbers</button>
                <button onClick={oddHandle}>only even numbers</button>
            </ol>
        </div>
        <h1 style={{color:"red"}}>find:</h1>
        <h6>{fruits.join(", ")}</h6>
        <h6>{Findarry}</h6>

        {/* //reduce */}
        <h1>Total Price: {totalPrice}</h1>
        <div>
      <h1>Total Price: {total}</h1>
    </div>
    <Reduce />
    <ForEach />
    <Some />
    <Splice />
    <Slice />
    <Concat />
    <Sort />
    <TaskCompletionStatus />
    </div>

  
  )
}

const products = [
    { id: 1, name: 'Shirt', category: 'Clothing' },
    { id: 2, name: 'Pants', category: 'Clothing' },
    { id: 3, name: 'Apple', category: 'Food' },
  ];
  
  function Reduce() {
    const grouped = products.reduce((acc, product) => {
      if (!acc[product.category]) {
        acc[product.category] = [];
      }
      acc[product.category].push(product);
      return acc;
    }, {});
  
    return (
      <div>
        {Object.entries(grouped).map(([category, items]) => (
          <div key={category}>
            <h2>{category}</h2>
            <ul>
              {items.map((item) => (
                <li key={item.id}>{item.name}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }


//   for each
const names = ['Alice', 'Bob', 'Charlie'];

function ForEach() {
  names.forEach((name) => console.log(name)); // Logs names to the console
  return <h1>Check the console</h1>;
}

  //some and every(some anedi a okka condistion true aina adi true/ every all condistions true avvali)
  const numbers = [1, 2, 3, 4];

function Some() {
  const hasEven = numbers.some((num) => num % 2 === 0);
  const allPositive = numbers.every((num) => num > 0);

  return (
    <div>
      <p>Has Even: {hasEven ? 'Yes' : 'No'}</p>
      <p>All Positive: {allPositive ? 'Yes' : 'No'}</p>
    </div>
  );
}

//splice(array unna values ni remove cheyataniki)
const Splice = () => {
    let items = ['Item 1', 'Item 2', 'Item 3', '4'];
    items.splice(1, 2); // Removes "Item 2"
  
    return <ul>{items.map((item, index) => <li key={index}>{item}</li>)}</ul>;
  };
  
  //slice(array lo a value chupinchataniki slice use chestam)
  const Slice = () => {
    const Sitems = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'kkklk'];
    const newItems = Sitems.slice(2, 7); // ["Item 1", "Item 2"]
  
    return <ul>{newItems.map((item, index) => <li key={index}>{item}</li>)}</ul>;
  };
  
  //concat(unna array loki new value ni add cheyataniki)
  const Concat = () => {
    const items = ['Item 1', 'Item 2'];
    const newItems = items.concat('Item 3', '4', 'jfjfjf'); // ["Item 1", "Item 2", "Item 3"]
  
    return <ul> conact :{newItems.map((item, index) => <li key={index}>{item}</li>)}</ul>;
  };
  
  //sort(unna array ni alphabet order lo chupistundi)
  const Sort = () => {
    const items = ['Banana', 'Apple', 'Cherry', 'Aj'];
    const sortedItems = [...items].sort(); // ["Apple", "Banana", "Cherry"]
    
  
    return <ul>{sortedItems.map((item, index) => <li key={index}>{item}</li>)}</ul>;
    
  };

  const tasks = [
    { id: 1, task: 'Do laundry', completed: true },
    { id: 2, task: 'Buy groceries', completed: true },
    { id: 3, task: 'Clean room', completed: true },
  ];
  
  function TaskCompletionStatus() {
    // Log task completion status
    tasks.forEach((task) => {
      if (task.completed) {
        console.log(`Task "${task.task}" is completed.`);
      } else {
        console.log(`Task "${task.task}" is still pending.`);
      }
    });
  
    return <h1>Check the console for task completion status!</h1>;
  }
  
  