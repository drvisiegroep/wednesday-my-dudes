const BarGroup = ({item, barHeight}) => {
    let barPadding = 2
    let barColour = '#348AA7'
    let widthScale = d => d * 10
  
    let width = widthScale(item.value)
    let yMid = barHeight * 0.5
    return (
    
    <g className="bar-group">
      <text className="name-label" x="-6" y={yMid} alignmentBaseline="middle" >{item.name}</text>
      <rect y={barPadding * 0.5} width={width} height={barHeight - barPadding} fill={barColour} />
      <text className="value-label" x={width- 8} y={yMid} alignmentBaseline="middle" >{item.value}</text>
    </g>

    )
  }

  export default BarGroup