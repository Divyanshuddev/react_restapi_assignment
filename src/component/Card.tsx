
export default function Card(props) {
    
  return (
    <div className="card">
      <div className="card_item" >
        <div><h1>First Name</h1></div>
        <div><h1>{props.first_name}</h1></div>
      </div>
      <div className="card_item">
        <h1>Last Name</h1>
        <h1>{props.last_name}</h1>
      </div>
      <div className="card_item">
        <h1>Email</h1>
        <h1>{props.email}</h1>
      </div>
      <div className="card_item">
        <h1>Phone Number</h1>
        <h1>{props.phoneNumber}</h1>
      </div>
        
        
        
        
    </div>
  )
}
