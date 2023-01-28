import React, { useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { FormGroup, Label, Input } from "reactstrap";
import { Card } from "react-bootstrap";
import "./Form.css";

function GridComplexExample() {
  const inputRef = useRef(HTMLInputElement, null);
  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const handleImageChange = (e) => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      setImage(file);
      setPreviewUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleUpload = () => {
    inputRef.current?.click();
  };
  return (
    <Card className="card">
      <Form>
        <Row fluid>
          <Form.Group as={Col} controlId="formGridName">
            <Form.Label htmlFor="name">Name</Form.Label>
            <Form.Control type="text" id="name" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridPlaceName">
            <Form.Label htmlFor="name">Place Name</Form.Label>
            <Form.Control type="text" id="PlaceName" />
          </Form.Group>

          <Form.Group as={Col}>
            <Label>Upload Image</Label>
            <Input type="file" onChange={handleImageChange} />
          </Form.Group>
          <Col>
            {previewUrl && (
              <Card style={{ width: "3rem" }}>
                <Card.Img src={previewUrl} alt="Profile image" />
              </Card>
            )}
          </Col>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
        </Row>
        {/* <Row className="mb-3">

      </Row> */}

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder="1234 Main St" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Address 2</Form.Label>
          <Form.Control placeholder="Apartment, studio, or floor" />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>Choose...</option>
              <option>...</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Card>
  );
}

export default GridComplexExample;
