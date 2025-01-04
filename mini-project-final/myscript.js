// Market Price
// fetch data using async/await functions with error handling

async function fetchCryptoData() {
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,solana,sui,binancecoin,cardano,polkadot,dogecoin,tron,ripple&x_cg_demo_api_key=CG-5CUT9xB8THFQcdc19iiWBkge";

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`API error: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching crypto data:", error.message);
    return [];
  }
}

// create set up charts function to present the crypto data

async function setUpPriceChart() {
  const data = await fetchCryptoData();

  // Map API data into required formats as per key:value pairs in the API
  const cryptocurrencies = data.map((coin) => coin.name);
  const marketPrices = data.map((coin) => coin.current_price);

  // Market Price Chart
  new Chart(document.getElementById("priceChart"), {
    type: "bar",
    data: {
      labels: cryptocurrencies,
      datasets: [
        {
          label: "Price (USD)",
          data: marketPrices,
          backgroundColor: [
            "rgba(255, 153, 0, 0.8)", // Orange for Bitcoin
            "rgba(54, 162, 235, 0.8)", // Blue for Ethereum
            "rgba(255, 206, 86, 0.8)", // Yellow for XRP
            "rgba(75, 192, 192, 0.8)", // Teal for BNB
            "rgba(153, 102, 255, 0.8)", // Purple for Solana
            "rgba(245, 64, 255, 0.8)", // Light Purple for Dogecoin
            "rgba(201, 203, 207, 0.8)", // Grey for Cardano
            "rgba(0, 255, 0, 0.8)", // Green for TRON
            "rgba(128, 0, 128, 0.8)", // Dark Purple for Sui
            "rgba(0, 128, 128, 0.8)", // Dark Teal for Polkadot
          ],
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        x: {
          ticks: {
            color: "white",
          },
          grid: {
            color: "white",
          },
        },
        y: {
          type: "logarithmic",
          ticks: {
            color: "white",
          },
          title: {
            display: true,
            text: "Logarithmic Scale",
            color: "white",
          },
          grid: {
            color: "white",
          },
        },
      },
      plugins: {
        legend: {
          labels: {
            color: "white",
          },
        },
        title: {
          display: true,
          text: "Bar Chart Representation",
          color: "white",
        },
      },
    },
  });
}

// Call the function to initialize charts
setUpPriceChart();

// Market Cap
// fetch data using async/await functions with error handling

// async function fetchCryptoData() {
//   const url =
//     "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,solana,sui,binancecoin,cardano,polkadot,dogecoin,tron,ripple&x_cg_demo_api_key=CG-5CUT9xB8THFQcdc19iiWBkge";

//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error(`API error: ${response.statusText}`);
//     }
//     return await response.json();
//   } catch (error) {
//     console.error("Error fetching crypto data:", error.message);
//     return [];
//   }
// }

// create set up charts function to present the crypto data

async function setUpMarketCapChart() {
  const data = await fetchCryptoData();

  // Map API data into required formats as per key:value pairs in the API
  const cryptocurrencies = data.map((coin) => coin.name);
  const marketPrices = data.map((coin) => coin.market_cap);

  // Market Price Chart
  new Chart(document.getElementById("marketCapChart"), {
    type: "pie",
    data: {
      labels: cryptocurrencies,
      datasets: [
        {
          label: "Price (USD)",
          data: marketPrices,
          backgroundColor: [
            "rgba(255, 153, 0, 0.8)", // Orange for Bitcoin
            "rgba(54, 162, 235, 0.8)", // Blue for Ethereum
            "rgba(255, 206, 86, 0.8)", // Yellow for XRP
            "rgba(75, 192, 192, 0.8)", // Teal for BNB
            "rgba(153, 102, 255, 0.8)", // Purple for Solana
            "rgba(245, 64, 255, 0.8)", // Light Purple for Dogecoin
            "rgba(201, 203, 207, 0.8)", // Grey for Cardano
            "rgba(0, 255, 0, 0.8)", // Green for TRON
            "rgba(128, 0, 128, 0.8)", // Dark Purple for Sui
            "rgba(0, 128, 128, 0.8)", // Dark Teal for Polkadot
          ],
        },
      ],
    },
    options: {
      responsive: true,

      plugins: {
        legend: {
          labels: {
            color: "white",
          },
        },
        title: {
          display: true,
          text: "Pie Chart Representation",
          color: "white",
        },
      },
    },
  });
}

// Call the function to initialize charts
setUpMarketCapChart();

// 24 hour Trading Volume
// fetch data using async/await functions with error handling

// async function fetchCryptoData() {
//   const url =
//     "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,solana,sui,binancecoin,cardano,polkadot,dogecoin,tron,ripple&x_cg_demo_api_key=CG-5CUT9xB8THFQcdc19iiWBkge";

//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error(`API error: ${response.statusText}`);
//     }
//     return await response.json();
//   } catch (error) {
//     console.error("Error fetching crypto data:", error.message);
//     return [];
//   }
// }

// create set up charts function to present the crypto data

async function setUpVolumeChart() {
  const data = await fetchCryptoData();

  // Map API data into required formats as per key:value pairs in the API
  const cryptocurrencies = data.map((coin) => coin.name);
  const tradingVolume = data.map((coin) => coin.total_volume);

  // Trading Volume Chart

  new Chart(document.getElementById("volumeChart"), {
    type: "line",
    data: {
      labels: cryptocurrencies,
      datasets: [
        {
          label: "Line Graph Representation",
          data: tradingVolume,
          borderColor: "blue", // Optional: improves chart readability
          backgroundColor: "rgba(0, 123, 255, 0.5)",
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        x: {
          ticks: {
            color: "white",
          },
          grid: {
            color: "white",
          },
        },
        y: {
          type: "logarithmic",
          ticks: {
            color: "white",
          },
          title: {
            display: true,
            text: "Logarithmic Volume Scale",
            color: "white",
          },
          grid: {
            color: "white",
          },
        },
      },
      plugins: {
        legend: {
          labels: {
            color: "white",
          },
        },
      },
    },
  });
}

setUpVolumeChart();

async function setUpPricePercentageChart() {
  const data = await fetchCryptoData();

  // Map API data into required formats as per key:value pairs in the API
  const cryptocurrencies = data.map((coin) => coin.name);
  const pricePercentageChange = data.map(
    (coin) => coin.price_change_percentage_24h ?? 0
  );

  // Market Price Chart
  new Chart(document.getElementById("percentageChangeChart"), {
    type: "bar",
    data: {
      labels: cryptocurrencies,
      datasets: [
        {
          label: "Percentage Change",
          data: pricePercentageChange,
          backgroundColor: [
            "rgba(255, 153, 0, 0.8)", // Orange for Bitcoin
            "rgba(54, 162, 235, 0.8)", // Blue for Ethereum
            "rgba(255, 206, 86, 0.8)", // Yellow for XRP
            "rgba(75, 192, 192, 0.8)", // Teal for BNB
            "rgba(153, 102, 255, 0.8)", // Purple for Solana
            "rgba(245, 64, 255, 0.8)", // Light Purple for Dogecoin
            "rgba(201, 203, 207, 0.8)", // Grey for Cardano
            "rgba(0, 255, 0, 0.8)", // Green for TRON
            "rgba(128, 0, 128, 0.8)", // Dark Purple for Sui
            "rgba(0, 128, 128, 0.8)", // Dark Teal for Polkadot
          ],
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        x: {
          ticks: {
            color: "white",
          },
          grid: {
            color: "white",
          },
        },
        y: {
          beginAtZero: true,
          ticks: {
            color: "white",
          },
          title: {
            display: true,
            text: "Percentage Change (%)",
            color: "white",

            color: "white",
          },
          grid: {
            color: "white",
          },
        },
      },
      plugins: {
        legend: {
          labels: {
            color: "white",
          },
        },
        title: {
          display: true,
          text: "Bar Chart Representation",
          color: "white",
        },
      },
    },
  });
}

// Call the function to initialize charts
setUpPricePercentageChart();
