import './App.css';
import { Container,Row,Card } from 'react-bootstrap';

const friends=[
  {name:"Sachin",   pic:"./Sachin.jpg",   quote:"\"Modern\"",   age:21},
  {name:"Malindu",  pic:"./Malindu.jpg",  quote:"\"Problems\"",        age:21},
  {name:"Nipun",  pic:"./Nipun.jpg",  quote:"\"Require\"",        age:21},
  {name:"Sandul",  pic:"./Sandul.jpg",  quote:"\"Modern\"",        age:21},
  {name:"Izzath",  pic:"./Izzath.jpg",  quote:"\"Solutions\"",        age:21}
];

function App() {
  return (
    <div className="App">
      <Container fluid="md">
        <Row>
          {friends.map((friend)=>{
            return(
            <Card fluid="md" className="Card" bg="dark" text="white" style={{width:'18rem'}}>
              <Card.Title>{friend.name}</Card.Title>
              <Card.Img src={friend.pic} alt={friend.pic} style={{width:'100%'}}/>
              <Card.Text>{friend.quote}<br/>Age:{friend.age}</Card.Text>
            </Card>
          )})}
        </Row>
      </Container>
    </div>
  );
}

export default App;
