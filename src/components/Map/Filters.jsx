import React from 'react';

class Filters extends React.Component {
  render() {
    return (
      <div className="container-fluid" id="accordionFilters">
        <div className="mt-xl-4 mb-xl-3 mx-xl-2 text-left ">
        <span className="cst-trends d-none d-xl-block">
      Explore Neighbourhood Trends
      </span>
      </div>
        <ul className="row list-unstyled mt-2 mx-2">
        <li className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-12 full-box-shadow-p-0 my-1 my-sm-2 my-xl-3 cst-btn-div">
        <div className="">
        <button
        className="btn btn-link btn-block text-uppercase text-left"
type="button"
data-toggle="collapse"
data-target="#propertySearchAverage"
        aria-controls="propertySearchAverage"
        aria-expanded="false"
        aria-label="Toggle filters"
      >
        <i className="fas fa-chart-bar fa-lg my-3 mx-md-2" />
        <span className="breakable">
      Average $
      </span>
      </button>
      </div>
        <div className="collapse " id="propertySearchAverage" data-parent="#accordionFilters">
        <div className="row mb-3 px-3 small">
        <span className="mr-auto">
      &lt;$1.5M
      </span>
        <img className="container-fluid" src="images/chart3_cst.png" />
        <span className="ml-auto">
      &gt;$10.8M
      </span>
      </div>
        <div className="row mx-auto">
        <span className="text-center">
      Average block-level-price of homes in your area
      </span>
      </div>
      </div>
      </li>
        <li className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-12 full-box-shadow-p-0 my-1 my-sm-2 my-xl-3 cst-btn-div">
        <div className="">
        <button
        className="btn btn-link btn-block text-uppercase text-left"
type="button"
data-toggle="collapse"
data-target="#propertySearchHistoricalAndGrowth"
        aria-controls="propertySearchHistoricalAndGrowth"
        aria-expanded="false"
        aria-label="Toggle filters"
      >
        <i className="fas fa-chart-line fa-lg my-3 mx-md-2" />
        <span className="breakable">
      Historical & Growth
      </span>
      </button>
      </div>
        <div className="collapse" id="propertySearchHistoricalAndGrowth" data-parent="#accordionFilters">
      Some description
      </div>
      </li>
        <li className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-12 full-box-shadow-p-0 my-1 my-sm-2 my-xl-3 cst-btn-div">
        <div className="">
        <button
        className="btn btn-link btn-block  text-uppercase text-left"
type="button"
data-toggle="collapse"
data-target="#propertySearchPricePerSqFt"
        aria-controls="propertySearchPricePerSqFt"
        aria-expanded="false"
        aria-label="Toggle filters"
      >
        <i className="fas fa-home fa-lg my-3  mx-md-2" />
        <span className="breakable">
      Price/sq.ft.
      </span>
      </button>
      </div>
        <div className="collapse" id="propertySearchPricePerSqFt" data-parent="#accordionFilters">
      Some description
      </div>
      </li>
        <li className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-12 full-box-shadow-p-0 my-1 my-sm-2 my-xl-3 cst-btn-div">
        <div className="">
        <button
        className="btn btn-link btn-block  text-uppercase text-left"
type="button"
data-toggle="collapse"
data-target="#propertySearchCensus"
        aria-controls="propertySearchCensus"
        aria-expanded="false"
        aria-label="Toggle filters"
      >
        <i className="fas fa-home fa-lg my-3 mx-md-2" />
        <span className="breakable">
      Census
      </span>
      </button>
      </div>
        <div className="collapse" id="propertySearchCensus" data-parent="#accordionFilters">
      Some description
      </div>
      </li>
        <li className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-12 full-box-shadow-p-0 my-1 my-sm-2 my-xl-3 cst-btn-div">
        <div className="">
        <button
        className="btn btn-link btn-block  text-uppercase text-left"
type="button"
data-toggle="collapse"
data-target="#propertySearchCrime"
        aria-controls="propertySearchCrime"
        aria-expanded="false"
        aria-label="Toggle filters"
      >
        <i className="fas fa-home fa-lg my-3 mx-md-2" />
        <span className="breakable">
      Crime
      </span>
      </button>
      </div>
        <div className="collapse" id="propertySearchCrime" data-parent="#accordionFilters">
      Some description
      </div>
      </li>
        <li className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-12 full-box-shadow-p-0 my-1 my-sm-2 my-xl-3 cst-btn-div">
        <div className="">
        <button
        className="btn btn-link btn-block  text-uppercase text-left"
type="button"
data-toggle="collapse"
data-target="#propertySearchPopGrowth"
        aria-controls="propertySearchPopGrowth"
        aria-expanded="false"
        aria-label="Toggle filters"
      >
        <i className="fas fa-home fa-lg my-3 mx-md-2" />
        <span className="breakable">
      Population growth
      </span>
      </button>
      </div>
        <div className="collapse" id="propertySearchPopGrowth" data-parent="#accordionFilters">
      Some description
      </div>
      </li>
        <li className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-12 full-box-shadow-p-0 my-1 my-sm-2 my-xl-3 cst-btn-div">
        <div className="">
        <button
        className="btn btn-link btn-block  text-uppercase text-left"
type="button"
data-toggle="collapse"
data-target="#propertySearchJobGrowth"
        aria-controls="propertySearchJobGrowth"
        aria-expanded="false"
        aria-label="Toggle filters"
      >
        <i className="fas fa-home fa-lg my-3 mx-md-2" />
        <span className="breakable">
      Job growth
      </span>
      </button>
      </div>
        <div className="collapse" id="propertySearchJobGrowth" data-parent="#accordionFilters">
      Some description
      </div>
      </li>
      </ul>
      </div>
    );
  }
}

export default Filters;
