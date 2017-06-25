Highcharts.chart('container', {
    chart: {
    	backgroundColor: ['#262626'],
    	colors: ['#262626'],
        type: 'area'
    },
	colors: ['rgba(68, 42, 45, 0.35)', 'rgba(58, 79, 102, 0.41)'],

    xAxis: {
        allowDecimals: false,
        labels: {
            formatter: function () {
                return this.value ;
            }
        }
    },
    yAxis: {
        gridLineColor: '#333',
        labels: {
            formatter: function () {
                return this.value ;
            }
        }
    },
    tooltip: {
        pointFormat: '{series.name} посетителей <b>{point.y:,.0f}</b><br/>в <b>{point.x}</b> часов'
    },
    plotOptions: {
        area: {
            pointStart: 6,
            marker: {
                enabled: false,
                symbol: 'circle',
                radius: 2,
                states: {
                    hover: {
                        enabled: true
                    }
                }
            }
        }
    },

    series: [{
        name: 'ADspoller',
        color: {
    		linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
   			stops: [
        [0, '#452a2c'],
        [1, 'rgba(68, 42, 45, 0.30)']
    ]
},
        data: [null, 1600, 1550, 800, 750, 500, 400, 300, 250, 230, 200, 180, null]
    }, {
        name: 'Пересечение',
        color: {
    		linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
   			stops: [
        [0, '#3d5571'],
        [1, 'rgba(58, 79, 102, 0.30)']
    ]
},
        data: [null, 1000, 1200, 600, 300, 200, 190, 185, 170, 160, 140, 120, null]
    }]
});