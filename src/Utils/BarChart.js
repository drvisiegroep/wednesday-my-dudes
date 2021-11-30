import React, {useState} from "react"
import BarGroup from './BarGroup'


const BarChart = () => {
  const [data, setData] = useState([
      { name: '2021-09-16', start: 830, end: 1350 },
      { name: '2021-09-17', start: 940, end: 1730 },
      { name: '2021-09-18', start: 1132, end: 1650 },
      { name: '2021-09-19', start: 1204, end: 1800 },
      { name: '2021-12-11', start: 900, end: 1730 },
      { name: '2021-12-12', start: 933, end: 1642 },
      { name: '2021-12-13', start: 847, end: 1750 },
      { name: '2021-12-14', start: 802, end: 1800 },
    ])
  
  let graphWidth = 1200
  let graphHeight = 500
  let barHeight = 50
  let xIntervalLegend = graphWidth / 10
        
  let barGroups = data.map((item, index) => 
      <g transform={`translate(0, ${index * barHeight})`}>
        <BarGroup item={item} barHeight={barHeight} graphWidth={graphWidth} />
      </g>
    )   
 
// todo interval legenda dynamischer maken. Geen 10 regels code voor al die balkjes.

  return(
    <>
      <svg width={graphWidth} height={graphHeight} style={{backgroundColor: "aliceblue"}} >
        <g className="container" >
          <text className="title" x="10" y="30">Aanwezigheid</text>
          <g className="chart"transform="translate(0,60)">
            {barGroups}
          </g>
        </g>
        
        <rect x="0" width={graphWidth} y={graphHeight - 1} fill="#000" height="1"/>
        <rect x={xIntervalLegend} y="0" width="0.5" height={graphHeight} fill="#000"/>
        <rect x={xIntervalLegend * 2} y="0" width="0.5" height={graphHeight} fill="#000"/>
        <rect x={xIntervalLegend * 3} y="0" width="0.5" height={graphHeight} fill="#000"/>
        <rect x={xIntervalLegend * 4} y="0" width="0.5" height={graphHeight} fill="#000"/>
        <rect x={xIntervalLegend * 5} y="0" width="0.5" height={graphHeight} fill="#000"/>
        <rect x={xIntervalLegend * 6} y="0" width="0.5" height={graphHeight} fill="#000"/>
        <rect x={xIntervalLegend * 7} y="0" width="0.5" height={graphHeight} fill="#000"/>
        <rect x={xIntervalLegend * 8} y="0" width="0.5" height={graphHeight} fill="#000"/>
        <rect x={xIntervalLegend * 9} y="0" width="0.5" height={graphHeight} fill="#000"/>
      </svg>
    </>
  )
}

export default BarChart