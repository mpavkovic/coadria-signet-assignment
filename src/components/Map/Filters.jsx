import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import actionsFilters from '../../actions/filters';

/* eslint-disable react/prefer-stateless-function */
class Filters extends React.Component {
  render() {
    const { applyFilter, filters } = this.props;

    const filtersList = filters.length > 0 ? filters.map(filter => (
      <li key={filter.id} className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-12 full-box-shadow-p-0 my-1 my-sm-2 my-xl-3 cst-btn-div">
        <button type="button" onClick={() => applyFilter(filter.id)} className="btn btn-link btn-block text-uppercase text-left">
          <span className="breakable">
            {filter.name}
          </span>
        </button>
      </li>
    )) : null;

    return (
      <div className="container-fluid" id="accordionFilters">
        <div className="mt-xl-4 mb-xl-3 mx-xl-2 text-left ">
          <span className="cst-trends d-none d-xl-block">
            Explore Neighbourhood Trends
          </span>
        </div>
        <ul className="row list-unstyled mt-2 mx-2">
          {filtersList}
        </ul>
      </div>
    );
  }
}

Filters.propTypes = {
  applyFilter: PropTypes.func.isRequired,
  filters: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

const mapStateToProps = state => ({
  filters: state.filters.filters,
});

const mapDispatchToProps = {
  applyFilter: actionsFilters.applyFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
