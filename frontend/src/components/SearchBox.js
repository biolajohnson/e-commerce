import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push("/");
    }
  };
  return (
    <>
      <Form onSubmit={submitHandler} inline>
        <Form.Control
          placeholder="Search Products..."
          type="text"
          name="q"
          className="mr-sm-2 ml-sm-5"
          onChange={(e) => setKeyword(e.target.value)}
        ></Form.Control>
        <Button variant="outline-success" className="p-2" type="submit">
          Search
        </Button>
      </Form>
    </>
  );
};
export default SearchBox;
