import FormInput from './FormInput'; 

import { useState } from 'react';

const InvestForm = (props) => {

    const [currS, setCurrS] = useState();
    const [yearS, setYearS] = useState();
    const [expR, setExpR] = useState();
    const [dur, setDur] = useState();

    function submitHandler(event) {

        event.preventDefault();        

        const formData = 
            {
                'currS': currS,
                'yearS': yearS,
                'expR' : expR,
                'dur': dur,   
            };
        console.log("Submitted", formData);

        props.formInputs(formData);
    }

    function resetValues() {
        setCurrS('');
        setDur('');
        setExpR('');
        setYearS('');

        props.onReset();
    }

    function CurrSave(event) {
        setCurrS(parseInt(event.target.value));
        // setCurrS(event.target.value);
    }

    function YearSave(event) {
        setYearS(parseInt(event.target.value));
        // setYearS(event.target.value);
    }

    function ExpRate(event) {
        setExpR(parseInt(event.target.value));
        // setExpR(event.target.value);

    }
    function Duration(event) {
        setDur(parseInt(event.target.value));
        // setDur(event.target.value);

    }


    return (
            <form className="form">
                <div className="input-group">

                    {/* <FormInput field_id="current-savings" field_label="Current Savings ($)" getData={(value) => setCurrS(value)} /> */}
                    <p>
                        <label htmlFor="current-savings">Current Savings ($)</label>
                        <input type="number" id="current-savings" value={currS} onChange={CurrSave} />
                    </p>

                    {/* <FormInput field_id="yearly-contribution" field_label="Yearly Savings ($)" /> */}
                    <p>
                        <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                        <input type="number" id="yearly-contribution" value={yearS} onChange={YearSave} />
                    </p>
                </div>
                <div className="input-group">

                    {/* <FormInput field_id="expected-return" field_label="Expected Interest (%, per year)" /> */}
                    <p>
                        <label htmlFor="expected-return">
                        Expected Interest (%, per year)
                        </label>
                        <input type="number" id="expected-return" value={expR} onChange={ExpRate}/>
                    </p>

                    {/* <FormInput field_id="duration" field_label="Investment Duration (years)" /> */}
                    <p>
                        <label htmlFor="duration">Investment Duration (years)</label>
                        <input type="number" id="duration" value={dur} onChange={Duration}/>
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