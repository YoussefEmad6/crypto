import "./App.css";
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import {
  // Exchanges,
  Homepage,
  News,
  Cryptocurrencies,
  CryptoDetails,
  Navbar,
} from "./components";
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '28bc40dbaemsheee61f352d0cb1cp1c568ejsndfbc4d6a0724',
		'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
	}
};

fetch('https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd/history?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

function App() {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route path="/" element={<Homepage />} />
              {/* <Route exact path="/exchanges" element={<Exchanges />} /> */}
              <Route
                exact
                path="/cryptocurrencies"
                element={<Cryptocurrencies />}
              />
              <Route exact path="/crypto/:coinId" element={<CryptoDetails />} />
              <Route exact path="/news" element={<News />} />
            </Routes>
          </div>
        </Layout>
        <div className="footer">
          <Typography.Title
            level={5}
            style={{ color: "white", textAlign: "center" }}
          >
            Copyright © 2021
            <Link to="/">Cryptoverse Inc.</Link> <br />
            All Rights Reserved.
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/news">News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
}

export default App;
