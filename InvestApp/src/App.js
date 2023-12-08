import { useState } from 'react';
import logo from './assets/investment-calculator-logo.png';
import DispInvest from './Components/DispInvest';
import InvestForm from './Components/InvestForm2';


function App() {
 const [results , setResults] = useState(null);
  // let yearlyData = [];

  const CalculateHandler = (data) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    console.log("In App.js", data);

    let yearlyData = []; // per-year results
      
    let currentSavings = data['current-savings'];
    let yearlyContribution = data['yearly-contribution']; // as mentioned: feel free to change the shape...
    let expectedReturn = data['expected-return'] / 100; 
    let duration = data['duration'];

    // let currentSavings = data.currS; // feel free to change the shape of this input object!
    // let yearlyContribution = data.yearS; // as mentioned: feel free to change the shape...
    // let expectedReturn = data.expR / 100; 
    // let duration = data.dur;

    // console.log('Dur',data.dur);

    let totalI = 0;

   // // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;

      totalI += yearlyInterest;

      currentSavings += yearlyInterest + yearlyContribution;

      const investment = {    
      'year': i + 1,
      'interest': yearlyInterest,
      'totalS' : currentSavings,
      'totalI' : totalI,
      'cap': (currentSavings + yearlyContribution),
    };

      // console.log('Investment',investment);


      yearlyData.push(investment);
      // setYearlyData((yearlyData) => {return [
      //   ...yearlyData,
      //   investment
        
      // ];
    };

    setResults(yearlyData);

    // console.log('In App.js',results);

    // do something with yearlyData ...
  };

  function setReset() {
    setResults(null);
  }


  return (
    <div>
      <header className="header">
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>

    <InvestForm formInputs={CalculateHandler} onReset={setReset}/>

      <DispInvest invest={results} />

{/* { results != null ? <DispInvest invest={results} /> : <div><h2>No Input</h2></div>} */} 
      
    </div>
  );
}

export default App;
