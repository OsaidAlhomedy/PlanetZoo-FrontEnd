import React, { Component } from "react";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import "./Donate.css";
// import DonatePic from '../assets/donateanimals.png'

import streetCat from "../assets/headCat.jpg";
import donate1 from "../assets/donation-01.png";
import cat from "../assets/onur-binay-E18nZ_OHh04-unsplash.jpg";

export class Donate extends Component {
  render() {
    return (
      <Container className="border" fluid>
        <Row className="text-center">
          <h1> Donation page ! </h1>

          <p className="paragraph">
            {" "}
            In PlanetZoo 90% of donations goes directly to help animals. Help us
            to stop Animal's Suffering and Donate Here:{" "}
          </p>

          <Image src={streetCat} alt="poster" fluid />

          <Image src={streetCat} alt="poster" fluid />
        </Row>
        <Row className="mt-5 mr-4 p-5">
          <Col>
            <iframe
              title="donation"
              src="https://donorbox.org/embed/planetzoo?designation=General%20Care&default_interval=o&hide_donation_meter=true"
              name="donorbox"
              allowpaymentrequest=""
              seamless="seamless"
              frameBorder="0"
              scrolling="no"
              height="900px"
              width="100%"
              style={{
                "max-width": "500px",
                "min-width": "250p",
                "max-height": "none!important",
              }}
            ></iframe>
          </Col>
          <Col>
            <h3> Why People Donate:</h3>
            <p className="para">
              Donating to the causes you care about not only benefits the
              charities themselves, it can be deeply rewarding for you too.
              Millions of people give to charity on a regular basis to support
              causes they believe in, as well as for the positive effect it has
              on their own lives.
            </p>
            <p className="para">
              {" "}
              Many people are concerned that their donations to charity may be
              reduced by tax or administrative costs, preventing the full amount
              from reaching the people or causes they really want to help.
              Thankfully because of the low fees, you can make sure that you
              gave the most of every donation to charity.
            </p>
            <p className="para">
              Also, Your own charitable donations can inspire your nearest and
              dearest to give to causes important to them, and could even bring
              about a family-wide effort to back a charity or charities that
              have special significance to you as a group.
            </p>
          </Col>
        </Row>

        <Row className="mt-2 mr-4 p-2">
          <Col>
            <iframe
              title="donation"
              src="https://donorbox.org/embed/planetzoo?designation=General%20Care&default_interval=o&hide_donation_meter=true"
              name="donorbox"
              allowpaymentrequest=""
              seamless="seamless"
              frameBorder="0"
              scrolling="no"
              height="900px"
              width="100%"
              style={{
                "max-width": "500px",
                "min-width": "250p",
                "max-height": "none!important",
              }}
            ></iframe>
          </Col>
          <Col>
            <h3> Why People Donate:</h3>
            <p className="paragraph1">
              Donating to the causes you care about not only benefits the
              charities themselves, it can be deeply rewarding for you too.
              Millions of people give to charity on a regular basis to support
              causes they believe in, as well as for the positive effect it has
              on their own lives.
            </p>
            <p className="paragraph1">
              {" "}
              Many people are concerned that their donations to charity may be
              reduced by tax or administrative costs, preventing the full amount
              from reaching the people or causes they really want to help.
              Thankfully because of the low fees, you can make sure that you
              gave the most of every donation to charity.
            </p>
            <p className="paragraph1">
              Also, Your own charitable donations can inspire your nearest and
              dearest to give to causes important to them, and could even bring
              about a family-wide effort to back a charity or charities that
              have special significance to you as a group.
              <p className="paragraph1">
                {" "}
                Several people choose to support charities that help endangered
                animals, some opt to live an eco-friendly lifestyle, and others
                decide to actively volunteer. There are so many ways to support
                the creatures that share this planet with us, and one of the
                simplest ways is to donate to endangered animal charities.{" "}
              </p>
            </p>
            <p className="paragraph1">
              {" "}
              We know that many species of animals and plants are endangered. It
              is our duty to save the world because the reduction in the forest
              is leading to many environmental changes and especially global
              warming that would lead to the destruction of the world. By
              giving, the donation to the NGOs that work for animals and natural
              habitat will provide them a chance to protect the forests, the
              animals, and plants. They work by developing different natural
              parks where animals can get jungle like the atmosphere or
              transferring them to a better habitat.
            </p>
          </Col>
        </Row>

        <Row className="dividerRow2"></Row>
        <Row>
          <Col>
            <h3 className="para">OTHER DONATION OPTIONS</h3>
            <br></br>
            <p className="para">
              {" "}
              If you want to Donate with food to the stray animals, we Got you..{" "}
            </p>

            <p className="para">
              Thousands of stray animals are often abused, neglected, and have
              no one to care for them. PlanetZoo Foundation was started to
              shelter these abandoned animals - to give them a safe home, feed
              them and rehabilitate them. Our vision is to live in a world where
              humans respect and live in harmony with animals, and today, we're
              a step closer to this all because of you! Thanks to your generous
              contributions, we have been feeding 500+ stray dogs in nearby
              localities since the onset of lockdown. We have been able to
              provide dog food to these stray dogs who often depend on people's
              kindness to survive. The pandemic was especially difficult for
              these loving animals, but with your help, we have been able to
              nourish them back to health. Thank you so much for your support!{" "}
            </p>
            <h3 className="para">
              If you want to send food for the animals in our shelter you can
              follow these steps:
            </h3>
          </Col>
          <Col>
            <Image src={cat} className="catImg" alt="poster" fluid />
          </Col>
          <Row className="p-5">
            <Image src={donate1} fluid />
          </Row>
        </Row>
      </Container>
    );
  }
}

export default Donate;
