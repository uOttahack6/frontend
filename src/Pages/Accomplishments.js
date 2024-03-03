import React, { useRef, useState } from "react";
import "../Styles/Acccomplishment.css";
import { Container, Card, Form, Button, Col } from "react-bootstrap";
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
  const [selectedFiles, setSelectedFiles] = useState([]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const fileInputRef = useRef();
  const upload = () => {
    fileInputRef.current.click();
  };
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles([...selectedFiles, ...files]);
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
                <Form.Group key={task.id} className="mb-3 fs-5">
                  <Form.Check
                    type="radio"
                    id={`${task.id}`}
                    label={`${task.description}`}
                    name="radioOptions"
                  />
                </Form.Group>
              ))}
              <div className="d-flex justify-content-evenly">
                <Button variant="success" type="submit" id="Submit">
                  Submit
                </Button>
                <input
                  type="file"
                  id="fileInput"
                  className="form-control"
                  style={{ display: "none" }}
                  ref={fileInputRef}
                  onChange={handleFileChange}
                />
                <label htmlFor="fileInput">
                  <Button variant="success" onClick={upload}>
                    Upload a photo
                  </Button>
                </label>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </div>
      <div className="row mt-5">
        {selectedFiles.map((file, index) => (
          <Col key={index} className="d-flex mb-4">
            <Card style={{ width: '18rem' }}>
              <Card.Img
                variant="top"
                src={URL.createObjectURL(file)}
                style={{height: '200px' }}
                alt={`Uploaded for: ${
                  dailyList[index % dailyList.length].description
                }`}
              />
              <Card.Body>
                <Card.Title>
                  {dailyList[index % dailyList.length].description}
                </Card.Title>
                {/* Additional Card text or components */}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </div>
    </Container>
  );
};

export default Accomplishments;
