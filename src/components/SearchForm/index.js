import React from "react";

function SearchForm({ handleInputChange }) {

  return (
    <div className="jumbotron">
      <h1 className="text-warning"><i className="fa fa-search"></i></h1>
      <form>
        <div className="form-group">
          <input className="form-control"
            name="name"
            onChange={event => handleInputChange(event)}
            type="text"
            placeholder="Search by Name"
          />
        </div>
      </form>
    </div>
  );
}

export default SearchForm;