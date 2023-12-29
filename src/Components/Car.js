import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const Car = ({ car }) => {
    const cars = []
    const quantity = []
    car.map(item => {
        cars.push(item.car);
        quantity.push(item.quantity)
    }
    )
    const option = {
        chart: {
            type: 'column'
        },
        title: {
            text: " User's car",
            align: 'left'
        },

        xAxis: {
            categories: cars,
            crosshair: true,
            accessibility: {
                description: 'Countries'
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Quantity'
            }
        },
        tooltip: {
            valueSuffix: ' Person'
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [
            {
                name: 'Cars',
                data: quantity
            }

        ]
    }


    return (
        <>
            <HighchartsReact highcharts={ Highcharts } options={ option } />
        </>
    )
}

export default Car