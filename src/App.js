import './App.css';
import { Container,Row,Card } from 'react-bootstrap';

const friends=[
  //To add a new friend use this template;
  //{name:"", pic:"", quote:"", age:0}
  {name:"Sachin", pic:"./pics/Sachin.jpg", quote:"\"Modern\"", age:21},
  {name:"Malindu", pic:"./pics/Malindu.jpg", quote:"\"Problems\"", age:21},
  {name:"Nipun", pic:"./pics/Nipun.jpg", quote:"\"Require\"", age:21},
  {name:"Sandul", pic:"./pics/Sandul.jpg", quote:"\"Modern\"", age:21},
  {name:"Izzath", pic:"./pics/Izzath.jpg", quote:"\"Solutions\"", age:21}
];

function App() {
  return (
    <div className="App">
      <Container fluid="md">
        <Row><div style={{margin:'20px'}}><h1>Friends list</h1></div></Row>
        <Row>
          {friends.map((friend)=>{
            return(
            <Card fluid="md" className="Card" bg="dark" text="white" style={{width:'18rem'}}>
              <Card.Title>{friend.name}</Card.Title>
              <Card.Img src={friend.pic} alt={friend.pic}/>
              <Card.Text>{friend.quote}<br/>Age:{friend.age}</Card.Text>
            </Card>
          )})}
        </Row>
      </Container>
    </div>
  );
}

export default App;
