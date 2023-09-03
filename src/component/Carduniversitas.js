
import Card from 'react-bootstrap/Card';

function Carduniversitas(props) {
  return (
    <Card className="bg-light text-center p-4" style={{ width: 'auto'}}>
         <Card.Img className="mx-auto" variant="top" src={props.universitas} style={{ width: '18rem'}}/>
      <Card.Body>
        <Card.Text><a href="" className="text-decoration-none text-dark">Link universitas</a></Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Carduniversitas;