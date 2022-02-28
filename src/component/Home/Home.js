import React from "react"
import Chart from '../Home/chart'
import Round from '../Home/round'
import Date from '../Share/Calendar'
const Home = () => { 
    return (
            <div className="content">
                <h1>Thống kê</h1>
                <Date />
                <div style={{ height: 200 }}></div>
                <Chart />
                <div className="total">
                    <p>Tổng doanh thu theo tuần</p>
                    <h3>525.145.000 </h3>
                    <h5>đồng</h5>
                </div>
                <Round />
                
            </div>
    )
}

export default React.memo(Home) 