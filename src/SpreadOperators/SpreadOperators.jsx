import React from 'react'

export const SpreadOperators = () => {

    const A1 = ["A", "B"];
    const A2 = ["C", "D"];
    const A3 = ["E", "F"];

    const B1 = {a:1, b:2}
    const B2 = {c:3, d:4}

    // Correct way to combine objects using spread operator
    const allObjects = {...B1, ...B2};

    // Correct way to combine arrays using spread operator
    const allArrays = [...A1, ...A2, ...A3];
    console.log(allObjects)
    
    return (
        <div>
          
            <div>SpreadOperators</div>
            <p>Combined Arrays: {allArrays.join(', ')}</p>
            <p>Combined Objects: {JSON.stringify(allObjects)}</p>
        </div>
    )
}
