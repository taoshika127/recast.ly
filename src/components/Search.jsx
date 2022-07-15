var Search = (props) => {
  // console.log(document.getElementById('input').value);
  return (<div className="search-bar form-inline">
    <input className="form-control" id="input" type="text" onChange={props.handleChange?.bind(this, event)} />
    <button className="btn hidden-sm-down">
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div>
  )
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
