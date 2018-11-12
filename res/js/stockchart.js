function showScore() {
    var marksCanvas = document.getElementById("StockRadar");
                
    Chart.defaults.global.defaultFontFamily = "Lato";
    Chart.defaults.global.defaultFontSize = 18;
    
    var stock_name = "test company" // String(document.getElementById('stock_name').textContent);
    // var chartscore_page = document.getElementById("chartscore_"+card_num);
    // var chartscore = chartscore_page.childNodes;
    // var bigs_score = Number(chartscore[1].innerHTML); // Number(document.getElementById('bigs_score').textContent);
    // var gain_score = Number(chartscore[3].innerHTML); // Number(document.getElementById('gain_score').textContent);
    // var theme_score = Number(chartscore[5].innerHTML); // Number(document.getElementById('theme_score').textContent);
    // var finance_score = Number(chartscore[7].innerHTML); // Number(document.getElementById('finance_score').textContent);
    // var growth_score = Number(chartscore[9].innerHTML); // Number(document.getElementById('secret1_score').textContent);
    // var secret_score = Number(chartscore[11].innerHTML); // Number(document.getElementById('secret2_score').textContent);
    
    var bigs_score = 80; 
    var gain_score = 75;
    var theme_score = 77;
    var finance_score = 82;
    var growth_score = 97;
    var secret_score = 88;
    var color = Chart.helpers.color;
    var min_value = 60;

    var marksData = {
        labels: ['수급 점수', '테마 점수', '재무 점수', '성장 점수', 'Secret1'],
        datasets: [{
            label: "동종업계 평균",
            // backgroundColor: "transparent",
            backgroundColor: "rgba(255,240,66,.6)",
            // borderDash: [5, 5],
            borderColor: "rgba(255,240,66)",
            // fill: false,
            radius: 6,
            pointRadius: 6,
            pointBorderWidth: 3,
            pointBackgroundColor: "rgba(255,240,66,.6)",
            pointBorderColor: "rgba(255,240,66)",
            pointHoverRadius: 10,
            data: [gain_score-10,
                    theme_score-10,
                    finance_score-7,
                    growth_score-6,
                    secret_score-7]
        }, {
            label: "종목 점수",
            // backgroundColor: "transparent",
            backgroundColor: "rgba(230,5,2,.6)",
            borderColor: "rgba(230, 5, 2)",
            // fill: false,
            // borderDash: [5, 5],
            radius: 6,
            pointRadius: 6,
            pointBorderWidth: 3,
            pointBackgroundColor: "rgba(230,5,2,.6)",
            pointBorderColor: "rgba(230,5,2)",
            pointHoverRadius: 10,
            data: [gain_score,
                    theme_score,
                    finance_score,
                    growth_score,
                    secret_score]
        }, {
            label: "location",
            fill: false,
            // radius: 0,
            // pointRadius: 0,
            // pointBorderWidth: 0,
            // pointHoverRadius: 0,
            data: [min_value]
        }]
    };
    var chartOptions = {
        legend: {
            position: 'none'
        },
        scale: {
            gridLines: {
                // color: "rgb(24, 24, 24)",
                color: "rgba(243,243,243,1)",
                lineWidth: 1.8,
            },
            angleLines: {
                // display: false,
                color: "rgba(243,243,243,.3)",
                lineWidth: 1.8,
            },
            ticks: {
                display: false,
                min: min_value,
                max: 100,
                stepSize: 10
            },
            pointLabels: {
                fontSize: 18,
                fontColor: "rgba(243,243,243,1)",
            },
        },
        animation: {
            duration: 500,
            easing: "easeOutQuart",
            onComplete: function() {
                var ctx = document.getElementById("StockRadar").getContext("2d");
                // ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontFamily, 'bolder', Chart.defaults.global.defaultFontFamily);
                ctx.font="60px Coral";
                // ctx.textAlign = 'center';
                ctx.fillStyle = 'rgba(243,243,243,1)';
//                 center_x = this.data.datasets[0]._meta[0].data[0]._model.x;
//                 center_y = this.data.datasets[2]._meta[0].data[0]._model.y;
                
                // alert(this.data.datasets[2].data[0])
                ctx.fillText(bigs_score, 300, 120);
            }
        }
    };

    var radarChart = new Chart(marksCanvas, {
        type: 'radar',
        data: marksData,
        options: chartOptions
    });
}