import React, { useEffect, useState } from "react";
import axios from "axios";
import { Hint } from "react-autocomplete-hint";
import { Button, Form, Col, Row, Image } from "react-bootstrap";
import angryCat from "../assets/carAngry.png";
import catConfused from "../assets/catConfused.png";
import catHappy from "../assets/catHappy.png";

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
    <Row className="">
      <Row>
        <Row className="my-3">
          <Col className="d-flex justify-content-center">
            <Hint options={hintData} allowTabFill>
              <input
                className="input-with-hint"
                placeholder="Company Name"
                value={text}
                style={{ width: "30rem" }}
                onChange={(e) => setText(e.target.value)}
              />
            </Hint>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col className="d-flex justify-content-center">
            <Button onClick={condition} variant="dark">
              Submit
            </Button>
          </Col>
        </Row>
      </Row>
      <Row className="text-center">
        {company == true ? (
          <Col>
            <h2>This Company Hates Animals</h2>
            <Image src={angryCat} style={{ width: "180px" }} />
          </Col>
        ) : company == false ? (
          <Col>
            <h2>This Company Supports Animals</h2>
            <Image src={catHappy} style={{ width: "120px" }} />
          </Col>
        ) : (
          <Col>
            <h2>Waiting for search data</h2>
            <Image src={catConfused} style={{ width: "200px" }} />
          </Col>
        )}
      </Row>
    </Row>
  );
}

export default Autofill;
