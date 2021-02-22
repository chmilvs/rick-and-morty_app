import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import "bootstrap/dist/css/bootstrap.min.css";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../context/context";
import { Link } from "react-router-dom";

function CharInfo() {
  const { state } = useContext(Context);
  const { id } = useParams();
  const searchChar = state.find((char) => char.id == id);
  return (
    <>
      {searchChar && (
        <Card style={{ width: "20rem", marginTop: "2rem" }}>
          <Card.Img variant="top" src={searchChar.image} />
          <Card.Body
            style={{
              height: "3rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Card.Title>{searchChar.name}</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Status: "{searchChar.status}"</ListGroupItem>
            <ListGroupItem>Gender: "{searchChar.gender}"</ListGroupItem>
            <ListGroupItem>
              Location: "{searchChar.location.name}"
            </ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Link to="/">Back</Link>
          </Card.Body>
        </Card>
      )}
    </>
  );
}

export default CharInfo;
