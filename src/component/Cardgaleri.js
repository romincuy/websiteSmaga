
import Card from 'react-bootstrap/Card';

function Cardgaleri(props) {
  return (
    <Card style={{ width: 'auto', height: '13rem' }}>
      <Card.Img variant="top" src={props.galeri} style={{ height: '13rem' }} />
    </Card>
  );
}

export default Cardgaleri;