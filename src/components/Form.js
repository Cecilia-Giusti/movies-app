import React from "react";

const Form = ({ setSearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const search = e.target[0].value;

    if (search !== "") {
      setSearch(search);
    } else {
      setSearch("code");
    }
  };

  const handleChange = (e) => {
    const search = e.target.value;
    if (search === "") {
      setSearch("code");
    }
  };

  return (
    <div className="form-component">
      <div className="form-container">
        <form onSubmit={(e) => handleSubmit(e)}>
          <input type="text" onChange={(e) => handleChange(e)} />
          <input type="submit" />
        </form>
      </div>
      <div className="btn-sort-container">
        <div className="btn-sort" id="goodToBad">
          <p>Top</p> <span> →</span>
        </div>
        <div className="btn-sort" id="badToGood">
          <p>Flop</p> <span> →</span>
        </div>
      </div>
    </div>
  );
};

export default Form;
