const Users = ({ results }) => {
    
    const dataHandler = (obj, fn) => {
        const values = Object.values(obj)
    
        values.forEach(val => 
            val && typeof val === "object" ? dataHandler(val, fn) : fn(val))
    }
    
    const print = (val) => console.log(val) 
    
    dataHandler(results, print)
   
    return (
        
        <div className="user-list">

 
            
        
        </div>
        
    );

}

export default Users;