
import './App.css';
import Header from './components/Header';
import Post from './components/Post';
import SideMenu from './components/SideMenu';
// import MyFirstComponent from './components/MyFirstComponent';
// import Products from './components/Product';

function App() {
  return (
 
    <div className='App' >
      <Header/>
     <div style={{display:"flex", justifyContent:"center"}}>
      <div style={{display:"flex"}}>      
            <div style={{width:"70%"}}>
            <Post/>
          <Post/>
          <Post/>
          <Post/>
            </div>
            <div style={{width:"30%"}} >   <SideMenu/></div>
       </div>
   
       </div>
    </div>
  
  );
}

export default App;
