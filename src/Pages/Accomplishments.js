import React, { useRef } from "react";
import "../Styles/Acccomplishment.css";
import { Container, Card, Form, Button } from "react-bootstrap";
const dailyList = [
  {
    id: 1,
    description: "task1",
  },
  {
    id: 2,
    description: "task2",
  },
  {
    id: 3,
    description: "task3",
  },
  {
    id: 4,
    description: "task4",
  },
];

const Accomplishments = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const fileInputRef = useRef();
  const upload = () => {
    // Trigger the file input
    fileInputRef.current.click();
  };

  return (
    <Container>
      <div className="d-flex justify-content-center mt-5">
        <Card style={{ width: "500px" }}>
          <Card.Header>
            <Card.Title className="text-center">
              Which task did you complete?
            </Card.Title>
          </Card.Header>
          <Card.Body>
            <Form>
              {dailyList.map((task) => (
                <Form.Group key={task.id} className="mb-3">
                  <Form.Check
                    type="radio"
                    id={`${task.id}`}
                    label={`${task.description}`}
                    name="radioOptions"
                  />
                </Form.Group>
              ))}
              <div className="d-flex justify-content-evenly">
                <Button variant="secondary" type="submit" id="Submit">
                  Submit
                </Button>
                <input
                  type="file"
                  id="fileInput"
                  className="form-control"
                  style={{ display: "none" }}
                  ref={fileInputRef}
                />
                <label htmlFor="fileInput">
                  <Button variant="secondary" onClick={upload}>
                    Upload a photo
                  </Button>
                </label>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </div>
      <div className="d-flex mt-5">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
};

export default Accomplishments;
