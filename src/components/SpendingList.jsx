import React from 'react';
import SpendingItem from './SpendingItem';

function SpendingList({spendingsArray, setSpendingsArray}) {

    const removeSpending = i => {
        let temp = spendingsArray.filter((value,index) => index !== i);
        setSpendingsArray(temp);
    };

    const sortByDate = (a,b) => {
        return a.date - b.date;
    };

    return (
        <div className="spending-list">
            {
                spendingsArray.sort(sortByDate).map((value,index) => (
                    <SpendingItem key={index} spending={value} index={index} removeSpending={removeSpending}/>
                ))
            }
        </div>
    );
};

export default SpendingList;