
import { Badge, Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from 'react';

function App() {
  const data = [
    {
      productimage: "https://tse2.mm.bing.net/th?id=OIP.PB5To0ntqVks_rRiEmv6PQHaEK&pid=Api&P=0",
      name: "IPhone 13",
      price: 79900,
      rating: 4.7,
    },
    {
      productimage: "https://tse4.mm.bing.net/th?id=OIP.g57WuSP-uwfMFtMM9GoWuwHaEK&pid=Api&P=0",
      name: "Samsung S22",
      price: 124999,
      rating: 4.6,
    },
    {

      productimage: "https://tse4.mm.bing.net/th?id=OIP.7aXGbPU8iGh5BUqOX0BPWgHaD4&pid=Api&P=0",
      name: "OnePlus 11R",
      price: 44999,
      rating: 4.4,
    },
    {

      productimage: "https://tse2.mm.bing.net/th?id=OIP.iC6LKTQFsaa3Weaq0g89gwHaEK&pid=Api&P=0",
      name: "Google Pixel 7",
      price: 59999,
      rating: 4.5,
    },
    {

      productimage: "https://tse4.mm.bing.net/th?id=OIP.j3fzbenmH9_zXwqtN1KMCgHaEK&pid=Api&P=0",
      name: "Vivo X80",
      price: 79999,
      rating: 4.3,
    },
    {

      productimage: "https://tse4.mm.bing.net/th?id=OIP.eYkjsGOcISrb2dvTAoiERwHaEI&pid=Api&P=0",
      name: "Oppo Reno 8",
      price: 52999,
      rating: 4.1,
    },
    {

      productimage: "https://tse3.mm.bing.net/th?id=OIP.hSrJCnE7Z1SB-OQhNF9NBwHaEK&pid=Api&P=0",
      name: "Motorola Edge",
      price: 49999,
      rating: 4.2,
    },
    {

      productimage: "https://tse2.mm.bing.net/th?id=OIP.-j7z8QS-GJ-UewjJkS5CqwHaEo&pid=Api&P=0",
      name: "Huawei P50",
      price: 61999,
      rating: 4,
    },
  ]
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <h2 className="header">Welcome To The World Of Mobiles</h2>
      <div className="badge">
      <Badge bg="success">
        Cart {count}
      </Badge>
      </div>
      <div className="container">
      {data.map((value, idx)=> <Cards
      idx = {idx}
      value = {value}
      setCount = {setCount}
      count = {count}
      />)}
      </div>
    </div>
  );
}
export default App;


function Cards({value, idx, count, setCount}){
  const [show, setShow] = useState(false)
  function addTocart(){
    setShow(!show)
    setCount(count + 1)
  }
  function removeFromcart(){
    setShow(!show)
    setCount(count - 1)
  }
return(

        
          <Card key={idx} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={value.productimage} />
            <Card.Body>
              <Card.Title>{value.name}</Card.Title>
              <Card.Text>{value.price}</Card.Text>
              <Card.Text>{value.rating}⭐</Card.Text>
              {!show ? <Button
                variant="primary"
                onClick={addTocart}
              >Add to cart</Button> : ""}

              {show ? <Button
                variant="danger"
                onClick={removeFromcart}
              >Remove from cart</Button> : ""}
            </Card.Body>
          </Card>
)
}