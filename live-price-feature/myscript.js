// Run function after all html, css elements loaded for page flow
document.addEventListener("DOMContentLoaded", function () {
  function loadTradingViewWidget(ticker) {
    // Clear any existing widget content after each search to only bring up one chart at a time
    document.getElementById("tradingview-widget-container").innerHTML = "";

    // Load the TradingView widget with inbuilt TV widget settings
    new TradingView.widget({
      container_id: "tradingview-widget-container",
      symbol: ticker.toUpperCase(),
      width: "100%",
      height: 400,
      interval: "D",
      timezone: "Etc/UTC",
      theme: "dark",
      style: "1",
      locale: "en",
      toolbar_bg: "#f1f3f6",
      enable_publishing: false,
      hide_side_toolbar: false,
      allow_symbol_change: true,
      studies: ["RSI@tv-basicstudies", "MACD@tv-basicstudies"],
    });
  }

  // Add event listener to the search bar for crypto tickers 'entered'
  document
    .getElementById("search-bar")
    .addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        const input = e.target.value.toUpperCase();
        if (input) {
          const ticker = `BINANCE:${input}USDT`; // I am using Binance which is a populer exchange, so the data pulled is always live price, not market cap or other data assigned to the ticker.
          loadTradingViewWidget(ticker); // Call function with user input
        } else {
          alert("Please enter a valid crypto ticker.");
        }
      }
    });
});
