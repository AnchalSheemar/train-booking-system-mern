
import './App.css';

function App() {
  return (
    <div className="App">
    <div
    class="bg_image"
    style={{
      backgroundImage: 'url(https://th.bing.com/th/id/OIP.YwHN6Wva5ESICpYZtrVTFwHaFi?w=239&h=180&c=7&r=0&o=5&pid=1.7)',
      backgroundSize: "cover",
      height: "100vh",
      color: "#f5f5f5"
    }}
  >
    
  <h1 className="mystyle">Train Ticket Booking System</h1>
  <h4 style={{color:"black"}}>How many seats you want to book?</h4>
  
  <button className="availableSeat">80</button>
  <h3 className="h3">Total Seats Available</h3>
  <button className="btnStyle">1</button>
  <button className="btnStyle">2</button>
  <button className="btnStyle">3</button><br/><br/>
  <button className="btnStyle">4</button>
  <button className="btnStyle">5</button>
  <button className="btnStyle">6</button><br/><br/>
  <button className="btnStyle">7</button>
  <br/><br/>
  <button className="bookbtn">Book Now</button>

</div> 
  
    </div>
  );
}

export default App;
