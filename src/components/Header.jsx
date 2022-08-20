import {useRef} from 'react';

function Header({totalBudget, setTotalBudget}) {

    const amount = useRef(0);

    const IncreaseBudget = () => {
        setTotalBudget((prevState) => prevState + parseInt(amount.current.value));
        amount.current.value = null;
    };

    return (
        <header>
            <h1>Budget Tracker</h1>
            <div className="budget">
                <div className="increase-budget">
                    <input type="number" placeholder='amount...' ref={amount}/>
                    <button onClick={IncreaseBudget}>Increase</button>
                </div>
                <div className="total-budget">€{totalBudget}</div>
            </div>
        </header>
    )
}

export default Header;