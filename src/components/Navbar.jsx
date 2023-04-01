import React, { useState, useEffect } from "react";
import { Button, Menu, Typography, Avatar } from "antd";
import { Link, useNavigate } from "react-router-dom";
import {
  HomeOutlined,
  // MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from "@ant-design/icons";

import icon from "../images/cryptocurrency.png";

const items = [
  {
    label: "Home",
    key: "/",
    icon: <HomeOutlined />,
  },
  {
    label: "Cryptocurrencies",
    key: "/cryptocurrencies",
    icon: <FundOutlined />,
  },
  // {
  //   label: "Exchanges",
  //   key: "/exchanges",
  //   icon: <MoneyCollectOutlined />,
  // },
  {
    label: "News",
    key: "/news",
    icon: <BulbOutlined />,
  },
];

const Navbar = () => {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(undefined);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 800) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large" />
        <Typography.Title level={2} className="logo">
          <Link to="/">Cryptoverse</Link>
        </Typography.Title>
        <Button
          className="menu-control-container"
          onClick={() => setActiveMenu(!activeMenu)}
        >
          <MenuOutlined />
        </Button>
      </div>
      {activeMenu && (
        <Menu
          onClick={({ key }) => key && navigate(key)}
          theme="dark"
          items={items}
        />
      )}
    </div>
  );
};

export default Navbar;
