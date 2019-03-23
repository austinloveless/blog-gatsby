import React, { Component } from "react";
import Helmet from "react-helmet";
import { Link } from "gatsby";
import styled from "styled-components";
import { Layout, Wrapper, Header, Button } from "../components";
import axios from "axios";

import config from "../../config";

const Content = styled.div`
  grid-column: 2;
  box-shadow: 0 4px 120px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  padding: 2rem 4rem;
  background-color: ${props => props.theme.colors.bg};
  z-index: 9000;
  margin-top: -3rem;
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 3rem 3rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    padding: 2rem 1.5rem;
  }
  form {
    p {
      label,
      input {
        display: block;
      }
      input {
        min-width: 275px;
        margin-top: 0.5rem;
      }
      textarea {
        resize: vertical;
        min-height: 150px;
        width: 100%;
        margin-top: 0.5rem;
      }
    }
  }
`;

class Contact extends Component {
  state = { email: "", name: "", message: "" };
  onInputChange = e => {
    console.log({ [e.target.name]: e.target.value });
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    e.target.reset();
    const { name, email, message } = this.state;
    const data = {
      name,
      email,
      message
    };
    this.setState({ name: "", email: "", message: "" });
    this.sendContact(data);
  };

  sendContact = data => {
    try {
      axios
        .post(" https://emailer-portfolio.herokuapp.com/email", data)
        .then(function(response) {
          console.log(response);
        });
    } catch (e) {
      console.log(e);
    }
  };
  render() {
    return <div />;
  }
}

export default Contact;
