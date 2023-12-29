import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const Weight = ({ weight }) => {
    const option = {
        chart: {
            type: 'pie'
        },
        title: {
            text: "User's wight",
            align: 'center'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                borderWidth: 2,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b><br>{point.percentage}%',
                    distance: 20
                }
            }
        },
        series: [{
            // Disable mouse tracking on load, enable after custom animation
            enableMouseTracking: true,
            animation: {
                duration: 2000
            },
            colorByPoint: true,
            data: weight
        }]
    }


    return (
        <>
            <HighchartsReact highcharts={ Highcharts } options={ option } />
        </>
    )
}

export default Weight