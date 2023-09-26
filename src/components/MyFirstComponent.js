
import "./FirstComponent.css"
export default function MyFirstComponent() {
   
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
        <h4 stlyle={elemStyle}>salem</h4>
        <h3 className={"active blBg"}> course</h3>
        <button  onClick={saySalem}>Click me </button>
        <h1 className={person.name =="hanene" ?"blBg": "greenBg"}>Check Nme</h1>
        
        </div></>
    
  )
}
function saySalem(){
    return "salem"
}
