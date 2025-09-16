import React from 'react';
import { UserData } from '../data';
import './ArryExample.css';
import { Example2 } from './Example2';

export const ArrayExample = () => {
    const sampleArray = ["name", 35, "King", { productName: "LG" }];
console.log(UserData)
    let Players = [
        { Name: "Samsung TV", Price: 45000.44, Stock: true },
        { Name: "Nike Casuals", Price: 6000.55, Stock: true },
        { Name: "Watch", Price: 3400.33, Stock: false }
    ];

    return (
        <div>
            <div>ArrayExample</div>
            <h1 style={{ color: 'yellow' }}>I'm king {sampleArray[2]}</h1>
            <h1 style={{ color: 'green' }}>This is my {sampleArray[0]}</h1>
            <h1 style={{ color: 'red' }}>My lucky number {sampleArray[1]}</h1>

            <div>
                <ol>
                 {
                    Players.map((item)=>
                        <li key={item}>
                            {item.Name} - {item.Price} - {(item.Stock==true) ? "A" : "Out"}
                        </li>
                    )
                 }
                </ol>
            </div>
            <h1>Data Table</h1>
            <table id="customers">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>UserName</th>
                    <th>Email</th>
                    <th>Address</th>
                </tr>
                </thead>
                <tbody>
                        {
                            UserData.map((UserData)=>
                                <tr key={UserData}>
                                <td >{UserData.id}</td>
                                <td >{UserData.name}</td>
                                <td >{UserData.username}</td>
                                <td >{UserData.email}</td>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Street</th>
                                            <th>Suite</th>
                                            <th>City</th>
                                            <th>Zipcode</th>
                                        </tr>
                                        <tbody>
                                        {
                                    <tr key={UserData.address}>
                                        <td>{UserData.address.street}</td>
                                        <td>{UserData.address.suite}</td>
                                        <td>{UserData.address.city}</td>
                                        <td>{UserData.address.zipcode}</td>
                                    </tr>
                                }
                                        </tbody>
                                    </thead>
                                </table>
                                </tr>
                               
                            )
                        }
                </tbody>
            </table>
            <div>
                <Example2 />
            </div>
        </div>
    );
};
