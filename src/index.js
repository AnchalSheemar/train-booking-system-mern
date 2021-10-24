import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


function MyForm() {
    const mystyle = {
      color: "white",
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "Arial",
      textAlign:"center"
    };

    const btnStyle = {
      height: '30px',
       width : '50px',
       backgroundColor: "DodgerBlue",
       textAlign:"center",
       margin:"5px"
    };
    const bookbtn = {
      height: '50px',
       width : '100px',
       backgroundColor: "DodgerBlue",
      color:"white",
       margin:"5px"
    };
    const h3 = {
      color:"black",
      float:"right",
      margin:"30px"
    };
    const availableSeat={
      height: '30px',
      width : '50px',
      backgroundColor: "DodgerBlue",
      
      margin:"25px",
      float:"right"

    };
  return (
    <div
    class="bg_image"
    style={{
      backgroundImage: 'url(https://th.bing.com/th/id/OIP.YwHN6Wva5ESICpYZtrVTFwHaFi?w=239&h=180&c=7&r=0&o=5&pid=1.7)',
      backgroundSize: "cover",
      height: "100vh",
      color: "#f5f5f5"
    }}
  >
    
  <h1 style={mystyle}>Train Ticket Booking System</h1>
  <h4 style={{color:"black"}}>How many seats you want to book?</h4>
  
  <button style={availableSeat}>80</button>
  <h3 style={h3}>Total Seats Available</h3>
  <button style={btnStyle}>1</button>
  <button style={btnStyle}>2</button>
  <button style={btnStyle}>3</button><br/><br/>
  <button style={btnStyle}>4</button>
  <button style={btnStyle}>5</button>
  <button style={btnStyle}>6</button><br/><br/>
  <button style={btnStyle}>7</button>
  <br/><br/>
  <button style={bookbtn}>Book Now</button>

</div> 
   
  )
}

ReactDOM.render(
 // <React.StrictMode>
   // <App />
 // </React.StrictMode>
 <MyForm/>,
  document.getElementById('default')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
