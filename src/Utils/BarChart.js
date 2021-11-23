import React, {useState} from "react"
import BarGroup from './BarGroup'


const BarChart = () => {
  const [data, setData] = useState([
      { name: 'Mon', value: 10 },
      { name: 'Tue', value: 40 },
      { name: 'Wed', value: 12 },
      { name: 'Thu', value: 50 },
      { name: 'Fri', value: 55 },
      { name: 'Sat', value: 40 },
      { name: 'Sun', value: 30 }
    ])
  

  let barHeight = 30
        
  let barGroups = data.map((d, i) => <g transform={`translate(0, ${i * barHeight})`}>
                                                  <BarGroup d={d} barHeight={barHeight} />
                                                </g>)   
 
  return(
    <>
      <svg width="800" height="300" >
        <g className="container">
          <text className="title" x="10" y="30">Week beginning 9th July</text>
          <g className="chart" transform="translate(100,60)">
            {barGroups}
          </g>
        </g>
      </svg>
    </>
  )
}

export default BarChart