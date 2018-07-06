export default {
  locations: [
    {
      lat: 40.6756513,
      lng: -73.9490446,
      isPrimary: true,
      image: '',
      type: 'Apartment',
      address: {
        street: '15th Ave Apt10',
        city: 'New York',
        zipCode: '10000',
      },
      beds: 2,
      baths: 2,
      size: 1049,
      price: 1149000,
    },
    {
      lat: 40.6766513,
      lng: -73.9430446,
      isPrimary: false,
      image: '',
      type: 'Apartment',
      address: {
        street: '20th Ave Apt1',
        city: 'New York',
        zipCode: '10000',
      },
      beds: 1,
      baths: 1,
      size: 750,
      price: 949000,
    },
    {
      lat: 40.6736513,
      lng: -73.9410446,
      isPrimary: false,
      image: '',
      type: 'Apartment',
      address: {
        street: '20th Ave Apt1',
        city: 'New York',
        zipCode: '10000',
      },
      beds: 1,
      baths: 1,
      size: 750,
      price: 949000,
    },
  ],
  filters: {
    active: 'avg-price',
    filters: [
      {
        id: 'avg-price',
        name: 'Average $',
        description: 'Average block-level-price of homes in your area',
        legend: {
          range: ['<$1.5M', '$10.8M'],
          image: 'chart3_cst.png',
        },
      },
      {
        id: 'hist-growth',
        name: 'Historical & Growth',
        description: 'Some description',
      },
      {
        id: 'price-per-sqft',
        name: 'Price/Sq.Ft.',
        description: 'Some description',
      },
      {
        id: 'census',
        name: 'Census',
        description: 'Some description',
      },
      {
        id: 'crime',
        name: 'Crime',
        description: 'Some description',
      },
      {
        id: 'pop-growth',
        name: 'Population growth',
        description: 'Some description',
      },
      {
        id: 'job-growth',
        name: 'Job Growth',
        description: 'Some description',
      },
    ],
  },
};
