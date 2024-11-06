var optionsTerm = {
    chart: {
        type: 'area',
        height: '100%',
        toolbar: { show: false }
    },
    series: [{
        name: 'Performance',
        data: [50, 75, 85, 90]
    }],
    xaxis: { categories: ['Term 1', 'Term 2', 'Term 3', 'Term 4'] },
    fill: { opacity: 0.5 }
};

var termChart = new ApexCharts(document.querySelector("#termChart"), optionsTerm);
termChart.render();