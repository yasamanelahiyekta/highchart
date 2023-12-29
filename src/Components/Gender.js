import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const Gender = ({ gender }) => {
    const option = {
        chart: {
            type: 'pie'
        },
        title: {
            text: 'gender',
            align: 'left'
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
            data: gender
        }]
    }

    return (
        <>
            <HighchartsReact highcharts={ Highcharts } options={ option } /></>
    )
}

export default Gender