import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Chart from 'react-apexcharts';
import * as API from '../api/API';

const CoinGeckoChart = () => {
  const [loading, setLoading] = useState(true);
  const [options, setOptions] = useState();
  const [series, setSeries] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const { bitcoin } = await API.getBtcPrice();
      console.log(bitcoin.eur)
      const market = await API.getBtcMarketChart();
      let xaxis = [];
      let ydata = [];
      market.prices.forEach(item => {
        xaxis = [...xaxis, moment(item[0]).format('HH:mm A')];
        ydata = [...ydata, item[1].toFixed(2)];
      });
      console.log(xaxis, ydata)
      setOptions({
        colors: ['#e88253'],
        chart: {
          id: "basic-bar"
        },
        stroke: {
          width: 2,
        },
        title: {
          text: `EUR ${bitcoin.eur}`,
          offsetY: 30,
          style: {
            fontSize: '18px',
            fontWeight: 'bold',
          }
        },
        xaxis: {
          categories: xaxis,
          tickAmount: 6,
          labels: {
            rotate: 0,
          }
        },
        yaxis: {
          show: false
        }
      });
      setSeries([
        {
          name: 'prices',
          data: ydata
        }
      ]);
      setLoading(false);
    }
    fetchData();
  }, []);

  return (
    <div className="bg-white border border-neutral-300 rounded-[4px]">
      {!loading && (
        <Chart
          width={800}
          options={options}
          series={series}
          type="line"
        />
      )}
    </div>
  );
}

export default CoinGeckoChart;
