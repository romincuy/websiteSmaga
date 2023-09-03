import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cardfasilitas(props) {
  return (
    <Card className="m-auto sm-w-full" >
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title className="text-center">{props.fasilitas}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default Cardfasilitas;