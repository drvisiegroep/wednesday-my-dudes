const BarGroup = ({item, barHeight, graphWidth}) => {
    let barPadding = 2
    let barColour = '#348AA7'
    let widthScale = d => d / 10

    // interval 
    let interval = graphWidth / 600
    console.log('interval:',interval)

    // begin = start - 800
    // eind = eind  - 800 
    // * tijd - 800
    let startTijd = item.start - 800
    let eindTijd = item.end - 800
    console.log('start',startTijd,'end:',eindTijd)

    // diff = eind - start
    // * dit is gewoon tijd berekening alleen nodig voor breedte 
    let totaleTijd = (eindTijd - startTijd)
    console.log('verschil:',totaleTijd)
    
    
    // decimal = diff / 100
    // * dit is algemene tijd - functie van maken
    let decimaal = totaleTijd / 100
    console.log('decimaal:',decimaal)
    
    // hours = floor (decimal) 
    let heleUren = Math.floor(decimaal)
    console.log('hele uren:',heleUren)

    // achterdekomma = decimal - hours 
    let achterDeKomma = decimaal - heleUren
    console.log('achter de komma:',achterDeKomma)

    // deelvhuur = achterdekomma / 0,6
    let deelvanhetuur = achterDeKomma / 0.6
    console.log('deelvhuur:',deelvanhetuur)

    let omgerekendetijd = heleUren + deelvanhetuur

    // dit alleen in geval van totale tijd
    // breedte = deelvhuur * interval * 60
    let width = omgerekendetijd * interval * 60
    console.log('breedte:',width)
    console.log('-----')

    //hier moeten we nog wat doen
    const tijdNaarXCoordinaat = (tijd) => {
      const decimaal = tijd / 100
      const heleUren = Math.floor(decimaal)
      const achterDeKomma = decimaal - heleUren
      const deelvanhetuur = achterDeKomma / 0.6
      const omgerekendetijd = heleUren + deelvanhetuur
      const xCoordinaat = omgerekendetijd * interval * 60
      return xCoordinaat
    } 

    
    // let timediff = Math.floor(end - start)
   
    let yMid = barHeight * 0.5
    return (
    // starttijd klopt niet
    <g className="bar-group">
      <rect y={barPadding * 0.5} x={tijdNaarXCoordinaat(startTijd)} width={tijdNaarXCoordinaat(eindTijd) - tijdNaarXCoordinaat(startTijd)} height={barHeight - barPadding} fill={barColour} />
      <text className="name-label" x="20" y={yMid} alignmentBaseline="top" >{item.name}</text>
      <text className="name-label" x={graphWidth / 10} y={yMid} alignmentBaseline="top" >{item.start}</text>
      <text className="name-label" x={graphWidth / 10 * 9} y={yMid} alignmentBaseline="top" >{item.end}</text>
    </g>

    )
  }

  export default BarGroup