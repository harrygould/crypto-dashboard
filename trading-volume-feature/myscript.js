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

async function setUpCharts() {
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

setUpCharts();
