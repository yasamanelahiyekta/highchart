import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const Eyecolor = ({ flagg, eyeColor }) => {
    const color = []
    const quantity = []
    eyeColor?.map(item => {
        color.push(item.eyeColor);
        quantity.push(item.quantity)
    }

    )
    console.log(quantity, "qu");
    const option = {
        chart: {
            type: 'bar'
        },
        title: {
            text: "User's eye color",
            align: 'left'
        },

        xAxis: {
            categories: color,
            title: {
                text: "eye color"
            },
            gridLineWidth: 1,
            lineWidth: 0
        },
        yAxis: {
            min: 0,
            title: {
                text: 'quantity',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            },
            gridLineWidth: 0
        },
        tooltip: {
            valueSuffix: 'Persons '
        },
        plotOptions: {
            bar: {
                borderRadius: '50%',
                dataLabels: {
                    enabled: true
                },
                groupPadding: 0.1
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -40,
            y: 80,
            floating: true,
            borderWidth: 1,
            backgroundColor:
                Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
            shadow: true
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'eye color',
            data: quantity
        }]
    }

    return (
        <div >
            { flagg && <HighchartsReact highcharts={ Highcharts } options={ option } /> }
        </div>
    )
}

export default Eyecolor