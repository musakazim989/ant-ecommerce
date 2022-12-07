import React, { useState } from "react"
import { Menu } from "antd"
import {
  UserOutlined,
  AppstoreOutlined,
  SettingOutlined,
  HomeOutlined,
  UserAddOutlined,
} from "@ant-design/icons"
import { Link } from "react-router-dom"

const Header = () => {
  let handleClickSelect = (e) => {
    console.log(e.key)
  }
  return (
    <>
      <Menu
        onClick={handleClickSelect}
        mode="horizontal"
        defaultSelectedKeys={["home"]}
      >
        <Menu.Item key="home" icon={<HomeOutlined />}>
          <Link to="/">Home</Link>
        </Menu.Item>

        <Menu.Item
          key="login"
          icon={<UserOutlined />}
          style={{ marginLeft: "auto" }}
        >
          <Link to="/login">Login</Link>
        </Menu.Item>

        <Menu.Item key="register" icon={<UserAddOutlined />}>
          <Link to="/register">Register</Link>
        </Menu.Item>
      </Menu>
    </>
  )
}

export default Header

{
  /* <Menu.SubMenu
          key="SubMenu"
          title="Navigation Two - Submenu"
          icon={<SettingOutlined />}
        >
          <Menu.Item key="two" icon={<HomeOutlined />}>
            Navigation Two
          </Menu.Item>
          <Menu.Item key="three" icon={<AppstoreOutlined />}>
            Navigation Three
          </Menu.Item>
          <Menu.ItemGroup title="Item Group">
            <Menu.Item key="four" icon={<AppstoreOutlined />}>
              Navigation Four
            </Menu.Item>
            <Menu.Item key="five" icon={<AppstoreOutlined />}>
              Navigation Five
            </Menu.Item>
          </Menu.ItemGroup>
        </Menu.SubMenu> */
}
