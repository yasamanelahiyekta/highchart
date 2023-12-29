import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const Height = ({ flagg, height }) => {
    console.log(height);


    const option = {
        chart: {
            type: 'pie'
        },
        title: {
            text: "Users's height"
        },
        tooltip: {
            valueSuffix: '%'
        },

        plotOptions: {
            series: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: [{
                    enabled: true,
                    distance: 20
                }, {
                    enabled: true,
                    distance: -40,
                    format: '{point.percentage:.1f}%',
                    style: {
                        fontSize: '1.2em',
                        textOutline: 'none',
                        opacity: 0.7
                    },
                    filter: {
                        operator: '>',
                        property: 'percentage',
                        value: 10
                    }
                }]
            }
        },
        series: [
            {
                name: 'Percentage',
                colorByPoint: true,
                data: height
            }
        ]
    }


    return (
        <div>
            { flagg && <HighchartsReact highcharts={ Highcharts } options={ option } />
            }
        </div >
    )
}

export default Height