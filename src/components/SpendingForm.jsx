import {useRef} from 'react';

function SpendingForm({totalBudget, setTotalBudget, spendingsArray, setSpendingsArray}) {

    const desc = useRef(null);
    const date = useRef(null);
    const price = useRef(null);

    const AddSpending = (e) => {
        e.preventDefault();
        //useRef returns a current object that has the value
        let d = date.current.value.split("-");
        let newD = new Date(d[0], d[1], d[2]);

        setSpendingsArray([...spendingsArray, {
            "description" : desc.current.value,
            "price": price.current.value,
            "date": newD.getTime()
        }]);

        //update localstorage
        setTotalBudget(totalBudget - parseInt(price.current.value));

        desc.current.value = null;
        price.current.value = null;
        date.current.value = null;
    };

    return (
        <div className="form-style">
            <form className="spending-form" onSubmit={AddSpending} autoComplete='off'>

                <input autoCorrect='none' type="text" name="desc" id="desc" placeholder='Spending Description...' ref={desc}/>
                <input type="number" name="price" id="price" placeholder='Price...' ref={price}/> {/*if u want the price to be float make it type text and try to parse it or smth*/}
                <input type="date" name="date" id="date" placeholder='Spending Date...' ref={date}/>

                <input type="submit" value="Add Spending" />
            </form>
        </div>
    )
}

export default SpendingForm;