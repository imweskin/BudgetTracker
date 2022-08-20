import React from 'react';

function SpendingItem({spending, index, removeSpending}) {

    let date = new Date(spending.date);
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();

    const removeHandler = i => {
        removeSpending(i);
    };

    return (
        <div className="spending-item">
            <button className="remove-item" onClick={() => removeHandler(index)}>x</button>
            <div className="desc">{spending.description}</div>
            <div className="price">€{spending.price}</div>
            <div className="date">{`${day}/${month}/${year}`}</div>
        </div>

    )
}

export default SpendingItem;