import React, { useEffect, useState } from "react";
import axios from "axios";
import { Hint } from "react-autocomplete-hint";
import { Button, Form, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Autofill() {
  const [hintData, setHintData] = useState([]);
  const [text, setText] = useState("");
  const [company, setCompany] = useState("s");

  const getData = async () => {
    const res = await axios.get("http://localhost:3010/company");
    var hintArray = [];
    res.data[0].checkerData.map((a) => hintArray.push(a));
    setHintData(hintArray);
  };

  useEffect(() => {
    getData();
  }, []);

  function condition() {
    if (hintData.includes(text)) {
      setCompany(true);
    } else if (text == "") {
      setCompany("s");
    } else {
      setCompany(false);
    }
  }

  return (
    <Col>
      <Row>
        <Col>
          <h5>Enter The Company's Name</h5>
          <Hint options={hintData} allowTabFill>
            <input
              className="input-with-hint"
              name="khaled"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </Hint>
          <Button onClick={condition} variant="dark">
            Submit{" "}
          </Button>
        </Col>
      </Row>
      <Row className="text-center">
        {company == true ? (
          <h2>This Company Hates Animals</h2>
        ) : company == false ? (
          <h2>This Company Supports Animals</h2>
        ) : (
          <h2>No results found</h2>
        )}
      </Row>
    </Col>
  );
}

export default Autofill;
