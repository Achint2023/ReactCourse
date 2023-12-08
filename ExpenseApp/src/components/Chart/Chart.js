import './Chart.css';
import ChartBar from './ChartBar';
// import ChartBar from './ChartBar';/

const Chart = props => {

    const maxAr = props.dataPoints.map(dP => dP.value);

    const max = Math.max(...maxAr);

    return (
        <div className='chart' >
            {console.log(props.dataPoints)}

            {/* {props.dataPoints.map((dp) => {
                <ChartBar />
            // <ChartBar key={dp.label} value={dp.value} label={dp.label} maxValue={max} />
            })} */}

{props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={max}
          label={dataPoint.label}
        />
      ))}
        </div>
    );
}

export default Chart;
