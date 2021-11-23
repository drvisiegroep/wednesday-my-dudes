
const Iterate = ({ person }) => {

    const flattenJson = (obj, fn) => {
        const values = Object.values(obj)

        values.forEach(val => 
            val && typeof val === "object" ? flattenJson(val, fn) : fn(val))
    }

    let data = []
    flattenJson(person, (val) => {
        
        data.push(val)
    })

    return (
        <>
            
        </>
    )
}

export default Iterate
