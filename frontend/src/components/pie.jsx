import React,{Component} from 'react';
import {Pie} from 'react-chartjs-2'

class PieChart extends Component{
    state  = {
        chartData : {
            labels : ['keyword 1', 'keyword 2', 'keyword 3','keyword 4'],
            datasets:[
                {
                    label: 'News proportions',
                    data: [40,30,20,10],
                    backgroundColor:[
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                    ]
                }
            ]
        }
    }

    render(){
        return (
            <div className="chart">
                <Pie 
                data = {this.state.chartData}
                width={400}
                height={400}
                options={{maintainAspectRatio : false}}
                />
            </div>
        )
    }
}

export default PieChart;