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
        {/* <div className="form-group">
          <input className="form-control"
            value={this.state.department}
            name="department"
            onChange={event => handleInputChange(event)}
            type="text"
            placeholder="Search by Department"
          />
        </div>
        <div className="form-group">
          <input className="form-control"
            value={this.state.title}
            name="title"
            onChange={event => handleInputChange(event)}
            type="text"
            placeholder="Search by Title"
          />
        </div> */}
        {/* <button className="btn btn-warning" onClick={this.handleFormSubmit}>Submit</button> */}
      </form>
    </div>
  );
}

export default SearchForm;