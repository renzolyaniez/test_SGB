import React from 'react';
import { Bar, Line, Pie  } from 'react-chartjs-2';
import PropTypes from 'prop-types'

const Graficos = ({title,arrayData}) => {
  console.log("estos son los datos que llegan" + arrayData)
  Graficos.prototype = {

    title: PropTypes.string.isRequired,
    arrayData:[]
  }

  const data = {
    labels: ['Ask', 'Total Ask', 'Bid', 'Total Bid'],
    datasets: [
      {
        label: 'Cotizaciones',
        data: arrayData,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)' 
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
  <>
    <div className='header'>
      <h1 className='title'>{title}</h1>
      <div className='links'>
 
      </div>
    </div>
    <div>
      <Bar data={data} />
    </div>
    
    
  </>
)
  };

export default Graficos;