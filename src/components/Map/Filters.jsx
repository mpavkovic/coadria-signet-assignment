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
          <button type="button" onClick={() => this.handleApplyFilter(filter.id)} className="btn btn-link btn-block">
            <div className="filter-title row">
              <div className="col-4">
                {filter.icon && <i className={`filter-icon fa fa-${filter.icon}`} />}
              </div>
              <div className="col-8 text-left">
                {filter.name}
              </div>
            </div>
            { (filter.legend || filter.description)
            && (
              <div className="filter-details">
                { filter.legend
                && (
                <div className="row mb-3 px-3 small filter-details-legend">
                  <span className="mr-auto">
                    {filter.legend.range[0]}
                  </span>
                  <img src="http://localhost:8081/images/chart.png" />
                  <span className="ml-auto">
                    {filter.legend.range[1]}
                  </span>
                </div>
                )}
                <div className="filter-details-description">
                  <span className="text-center">
                    {filter.description}
                  </span>
                </div>
              </div>
            )}
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
