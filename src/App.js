
import './App.css';
// import Article from './components/Article';
import Header from './components/Header';
import Post from './components/Post';
import SideMenu from './components/SideMenu';
// import MyFirstComponent from './components/MyFirstComponent';
// import Products from './components/Product';

function App() {
// const firstArticle = `hanene hfhd jfhjdf sdjfhsj sdjqhjfsqjsd`
// const secondArticle = `hana hfhd jfhjdf sdjfhsj sdjqhjfsqjsd`
  return (
 
    <div className='App' >
      <Header/>
      <div style={{display:"flex", justifyContent:"center"}}>
      <div style={{ width:"60%",display:"flex",justifyContent:"center"}}>      
            <div style={{width:"70%"}}>
            <Post postName="Pingucoder" postBody=" plate e learning"/>
          <Post postName="Learn react" postBody=" with Pingucoder"/>
          <Post postName="Pinguco" postBody=" plate e learning"/>
          <Post postName="Ping" postBody=" plate e learning"/>
          <Post/>
            </div>
            <div style={{width:"30%", marginTop:"25px"}} ><SideMenu/></div>
       </div>
   
       </div> 
       {/* <Article  content= {firstArticle} personName="kamel" email="kamelazer@gmail.com" age="20">
       
       <div style={{background:"teal"}}>
       <h1>Pingucoder</h1>
        <p style={{background:"orange"}}> to begin the development</p> 
        </div> 
       
       </Article>
       <Article content= {secondArticle}  personName="jamel" email="jamelazer@gmail.com" age="22"/>
       <Article  personName="mariem" email="mariemazer@gmail.com" age="30"/> */}
      

    </div>
  
  );
}

export default App;
