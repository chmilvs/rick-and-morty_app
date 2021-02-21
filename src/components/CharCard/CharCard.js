import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function CharCard({ character }) {
  return (
    <Card style={{ width: "16rem", marginTop: "2rem" }}>
      <Card.Img variant="top" src={character.image} />
      <Card.Body style={{ display: "flex", justifyContent: "center" }}>
        <Link to={`/${character.id}`}>{character.name} </Link>
      </Card.Body>
    </Card>
  );
}

export default CharCard;
