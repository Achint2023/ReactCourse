import InvestForm from "./InvestForm";

// import classes from './display.modules.css';

export default function DispInvest(props) {

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });

    let output = null;
    
    if(props.invest != null) {
        output = props.invest.map((inv) => (
            <tr key={inv.year}>
                <td>{inv.year}</td>
                <td>{formatter.format(inv.totalS)}</td>
                <td>{formatter.format(inv.interest)}</td>
                <td>{formatter.format(inv.totalI)}</td>
                <td>{formatter.format(inv.cap)}</td>
                </tr>
            ));
    }
    else {
        output = <tr><th>No data found</th></tr>
    }
    

    return (
        <div>
            <table className="result">
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Total Savings</th>
                        <th>Interest (Year)</th>
                        <th>Total Interest</th>
                        <th>Invested Capital</th>
                    </tr>
                </thead>
                <tbody>

                    {output}
 
                        {/* {props.invest.map((inv) => (

                        <tr>
                            <td>{(inv.year).toFixed(2)}</td>
                            <td>{(inv.totalS).toFixed(2)}</td>
                            <td>{(inv.interest).toFixed(2)}</td>
                            <td>{(inv.totalI).toFixed(2)}</td>
                            <td>{(inv.cap).toFixed(2)}</td>
                            </tr>
                        ))} */}

            
                </tbody>
            </table>
        </div>
    );
    
}