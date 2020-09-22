import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const SearchBar = ({ handleInputChange, searchTerm, handleFormSubmit }) => {
  return (
    <Form inline onSubmit={handleFormSubmit}>
      <FormGroup>
        <Label for="location" hidden>
          Location:
        </Label>
        <Input
          type="text"
          name="location"
          id="location"
          placeholder="Denver, CO"
          onChange={handleInputChange}
          value={searchTerm}
        ></Input>
      </FormGroup>
      <Button>Search</Button>
    </Form>
  );
};

export default SearchBar;
