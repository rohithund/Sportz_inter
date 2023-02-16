import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const CardItems = (props) => {
  const { src, alt, PFName, SkillDesc, Value } = props;

  return (
    <div>
      <Card className="my-3">
        <Card.Img variant="top" src={src} alt={alt} />
        <Card.Body>
          <Card.Title className="text-center fw-bold text-primary">
            {PFName}
          </Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item className="text-center fw-bold text-success">
            {"SKILLS :  " + SkillDesc}
          </ListGroup.Item>
          <ListGroup.Item className="text-center fw-bold text-danger">
            {"VALUE :  " + "$" + Value}
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
};

export default CardItems;
