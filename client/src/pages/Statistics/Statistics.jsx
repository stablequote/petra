import Chart from "../../components/Chart/Chart"

function Statistics() {
  return (
    <div className='statistics'>
        <div className="chart-wrapper">
            <Chart />
            <div className="chart-control">
                <div className="chart-control-wrapper">
                    <button className="btn chart-option-btn">Employees</button>
                    <button className="btn chart-option-btn">Expenses</button>
                    <button className="btn chart-option-btn">Tax</button>
                    <button className="btn chart-option-btn">Overall</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Statistics