import FormInput from './FormInput'; 
// import classes from './form.module';

import { useState } from 'react';

const InvestForm = (props) => {

// Managing one State for all inputs 
const [data, setData] = useState({
    'current-savings' : 10000,
    'yearly-contribution' : 1200,
    'expected-return' : 5,
    'duration' : 15
});
    function submitHandler(event) {

        event.preventDefault();        
        props.formInputs(data);
    }

    function resetValues() {
        setData({
            'current-savings' : 10000,
            'yearly-contribution' : 1200,
            'expected-return' : 5,
            'duration' : 15
        });

        props.onReset();
    }

    function userInput(label,value) { 
        // setData(data[label] = value);

        setData((prevInput) => {
            return {
                ...prevInput,
                [label] : value,
            };
        });

    }


    return (
            <form className="form">
                <div className="input-group">

                    {/* <FormInput field_id="current-savings" field_label="Current Savings ($)" getData={(value) => setCurrS(value)} /> */}
                    <p>
                        <label htmlFor="current-savings">Current Savings ($)</label>
                        <input type="number" id="current-savings" value={data['current-savings']} onChange={(event) => userInput('current-savings',event.target.value)} />
                    </p>

                    {/* <FormInput field_id="yearly-contribution" field_label="Yearly Savings ($)" /> */}
                    <p>
                        <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                        <input type="number" id="yearly-contribution" value={data['yearly-contribution']} onChange={(event) => userInput('yearly-contribution',event.target.value)} />
                    </p>
                </div>
                <div className="input-group">

                    {/* <FormInput field_id="expected-return" field_label="Expected Interest (%, per year)" /> */}
                    <p>
                        <label htmlFor="expected-return">
                        Expected Interest (%, per year)
                        </label>
                        <input type="number" id="expected-return" value={data['expected-return']} onChange={(event) => userInput('expected-return',event.target.value)}/>
                    </p>

                    {/* <FormInput field_id="duration" field_label="Investment Duration (years)" /> */}
                    <p>
                        <label htmlFor="duration">Investment Duration (years)</label>
                        <input type="number" id="duration" value={data['duration']} onChange={(event) => userInput('duration',event.target.value)}/>
                    </p>
                </div>
                <p className="actions">
                <button type="reset" className="buttonAlt" onClick={resetValues}>
                    Reset
                </button>
                <button type="submit" className="button" onClick={submitHandler}>
                    Calculate
                </button>
                </p>
            </form>

    );
};

export default InvestForm;