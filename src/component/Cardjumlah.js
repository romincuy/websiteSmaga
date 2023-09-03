
import Card from 'react-bootstrap/Card';

function Cardjumlah(props) {
  return (
    <Card className="p-4 bg-light text-center" >
      <Card.Body>
        <Card.Title><h1 style={{ fontSize: '3rem'}}>{props.jumlah}</h1></Card.Title>
        <Card.Text><p>{props.siapa}</p></Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Cardjumlah;