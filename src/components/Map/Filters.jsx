import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import actionsFilters from '../../actions/filters';

class Filters extends React.Component {
  constructor(props) {
    super(props);

    this.handleApplyFilter = this.handleApplyFilter.bind(this);
  }

  componentWillMount() {
    const { applyFilter } = this.props;

    const { searchParams } = new URL(document.location);
    if (searchParams.has('filter')) {
      applyFilter(searchParams.get('filter'));
    }
  }

  handleApplyFilter(filter) {
    const { applyFilter } = this.props;

    applyFilter(filter);
    window.history.pushState({ filter }, '', `?filter=${filter}`);
  }

  render() {
    const { activeFilter, filters } = this.props;

    const filtersList = filters.length > 0
      ? filters.map(filter => (
        <li key={filter.id} className={cn('col-12 col-sm-6 col-md-4 col-lg-3 col-xl-12 full-box-shadow-p-0 my-1 my-sm-2 my-xl-3 cst-btn-div', { 'cst-btn-filter-active': activeFilter === filter.id })}>
          <button type="button" onClick={() => this.handleApplyFilter(filter.id)} className="btn btn-link btn-block text-uppercase text-left">
            <span className="breakable">
              {filter.name}
            </span>
          </button>
        </li>
      ))
      : null;

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
  activeFilter: PropTypes.string.isRequired,
  applyFilter: PropTypes.func.isRequired,
  filters: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

const mapStateToProps = state => ({
  activeFilter: state.filters.active,
  filters: state.filters.filters,
});

const mapDispatchToProps = {
  applyFilter: actionsFilters.applyFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
