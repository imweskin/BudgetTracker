import { useState, useEffect} from 'react';
import Header from './components/Header';
import SpendingForm from './components/SpendingForm';
import './App.css';
import SpendingList from './components/SpendingList';

//get data from local storage 
const GetSpendingsFromLS = () => {
    const spendingsData = localStorage.getItem('spendingsArray');
    if(spendingsData) {
        return JSON.parse(spendingsData);
    } else {
        return [];
    }
};
const GetBudgetFromLS = () => {
    const budgetData = localStorage.getItem('totalBudget');
    if(budgetData) {
        return parseInt(JSON.parse(budgetData));
    } else {
        return 0;
    }
};

function App() {

    const [spendingsArray, setSpendingsArray] = useState(GetSpendingsFromLS);
    const [totalBudget, setTotalBudget] = useState(GetBudgetFromLS);

    //update localStorage
    useEffect(() => {
        localStorage.setItem('totalBudget', JSON.stringify(totalBudget));
        localStorage.setItem('spendingsArray', JSON.stringify(spendingsArray));
    }, [spendingsArray, totalBudget]);
    
    return (
        <div className="app">
            <Header totalBudget={totalBudget} setTotalBudget={setTotalBudget}/>
            <SpendingForm totalBudget={totalBudget} setTotalBudget={setTotalBudget} spendingsArray={spendingsArray} setSpendingsArray={setSpendingsArray}/>
            <SpendingList spendingsArray={spendingsArray} setSpendingsArray={setSpendingsArray}/>
        </div>
    );
}

export default App;
