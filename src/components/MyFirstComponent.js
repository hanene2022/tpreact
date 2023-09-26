

export default function MyFirstComponent() {
    const x =10;
    const person={
        name:"hanene",
        email:"hanen@gmail.com"
    }
    const elemStyle = {
        backgroundColor:"cyan",
        fontSize:"20px",
        boxShadow:"0px 20px 10px"
    }
  return (
    <><div>
        <h1 style={{ backgroundColor:"cyan",
        fontSize:"20px",
        boxShadow:"0px 20px 10px"}}>{person.name} react hanene</h1>
        <h2 style= {{ backgroundColor:"cyan",
        fontSize:"20px",
        boxShadow:"0px 20px 10px"}}>{person.email}</h2>
        <button  onClick={saySalem}>Click me </button>
        
        
        </div></>
    
  )
}
function saySalem(){
    return "salem"
}
