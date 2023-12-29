import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import React from 'react'

const Bankbalance = ({ flagg, bankBalance }) => {
    const names = []
    const balance = []
    bankBalance?.map(item => names.push(item.names))
    bankBalance?.map(item => balance.push(Number(item.bankBalance?.slice(1))))
    console.log(balance, "bank");
    const option = {
        chart: {
            type: 'line'
        },
        title: {
            text: "Users's bank balance"
        },

        xAxis: {
            categories: names
        },
        yAxis: {
            title: {
                text: 'bank balance $'
            }
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: false
                },
                enableMouseTracking: false
            }
        },
        series: [{
            name: 'Reggane',
            data: balance
        }]
    }
    return (
        <>
            { flagg && <HighchartsReact highcharts={ Highcharts } options={ option } /> }
        </>

    )
}

export default Bankbalance