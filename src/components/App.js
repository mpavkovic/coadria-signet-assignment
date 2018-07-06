import React from 'react';

import { Map, Filters as MapFilters } from './Map';
import locations from '../store/mockInitialState';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container-fluid map-div">
        <div className="row">
          <div className="col-12 col-xl-9 cst-map-container">
            <Map locations={locations} />
            <div className="form-control form-control-lg map-search-fixed shadow col-5 offset-3 p-0">
              <div className="input-group">
                <input className="form-control my-sm-1 ml-sm-3" type="text" placeholder="Search valuation range for a property" name="term" />
                <div className="input-group-append p-1">
                  <button className="btn btn-link">
                    <i className="fas fa-search fa-lg" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-xl-3">
            <MapFilters />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
