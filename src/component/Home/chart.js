import { Line } from "@ant-design/charts"
import React, { useEffect, useState } from "react"
import '../../assets/css/chart.css'


function chart()  {
  const Area = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        asyncFetch();
    }, []);

    const asyncFetch = () => {
        fetch('https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => {
                console.log('fetch data failed', error);
            });
    };
    const config = {
        data,
        padding: 40,
        xField: 'Date',
        yField: 'scales',
        xAxis: {
          range: [0, 1],
          tickCount: 5,
        },
        areaStyle: () => {
          return {
            fill: 'l(270) 0:#ffffff 1:#FAA05F ',
          };
        },
    };
    
    return <Line{...config} />;
};
  return (
    <div className="chart">
      <Area />    
    </div>
  )
}

export default chart