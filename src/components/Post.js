
import  TagButton from "./TagButton"
export default function Post({postName="no title", postBody="no body"}) {
  return (
    <div style={{padding:"10px",
     border:"solid #1d9bf0 5px",
     width:"50%",
     margin:"25px"
     }}>
        <h2>{postName}</h2>
        <hr/>
        <p>{postBody}
        

        </p>
        <TagButton/> 
    </div>
  )
}

