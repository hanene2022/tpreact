import  TagButton from "./TagButton"
import "./TagButtonStyle.css"
export default function SideMenu() {
  return (
    <div style={{margin:"25px",border:"solid #1d9bf0 5px"}}>
      <TagButton title="Programming">
    <div>
      <span>icon icon</span>
    </div>
          
          </TagButton> 
       <TagButton title="Data Science"> <div>
     <img  style={{width:"100px"}} src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg" width={"15px"} height={"15px"}/>
    </div> </TagButton> 
       <TagButton title="Technology">  </TagButton> 
       <TagButton title="Self improvement"> </TagButton>
        <TagButton title="Programmer"></TagButton> 
       
        </div>
  )
}

