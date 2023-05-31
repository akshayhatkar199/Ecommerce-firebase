import React from "react";
import {
  AppstoreOutlined,
  SettingOutlined,
  UserOutlined,
  UserAddOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { Button, Col, Drawer, Menu, Row } from "antd";
import { useState } from "react";
import {faBars} from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from "react-redux";
import "./header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

// const items = [
//   {
//     label: "Login",
//     key: "login",
//     icon: <MailOutlined />,
//     navigate: "/login",
//   },
//   {
//     label: "Register",
//     key: "register",
//     icon: <AppstoreOutlined />,
//     navigate: "/register",
//   },
//   {
//     label: "Home",
//     key: "app",
//     icon: <AppstoreOutlined />,
//     navigate: "/",
//   },
// ];

const items1 = [
  {
    label: "Home",
    key: "app",
    icon: <AppstoreOutlined />,
    navigate: "/",
  },
  {
    label: "Username",
    key: "UserName",
    icon: <SettingOutlined />,
    children: [
      {
        type: "group",
        //   label: 'Item 1',
        children: [
          {
            label: "Option 1",
            key: "setting:1",
          },
          {
            label: "Option 2",
            key: "setting:2",
          },
          {
            label: "Logout",
            key: "logout",
          },
        ],
      },
    ],
  },
];

const items2 = [
  {
    label: "Register",
    key: "register",
    icon: <UserAddOutlined />,
    navigate: "/register",
  },
  {
    label: "Login",
    key: "login",
    icon: <UserOutlined />,
    navigate: "/login",
  },
];

const Header = () => {
  const [current, setCurrent] = useState("homes");
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [bgColor, setBgColor] = useState(false);
  const dispatch = useDispatch();

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => { 
    setOpen(false);
  }

  

  const onClick = (e) => {
    const key = e.key;
    // console.log("e.key",e.key)
    if(e.key === "logout"){
      const auth = getAuth();
      signOut(auth).then(() => {
        dispatch({
          type: "LOGOUT",
          payload:null
        })
        // Sign-out successful.
        navigate("/login");
      }).catch((error) => {
        // An error happened.
      });

    }else{
    const menuItem = items1.filter((item) => item.key === key);
    if (menuItem.length > 0) {
      console.log(menuItem[0])
      const selMenu = menuItem[0];
      //   console.log(selMenu.navigate);
      navigate(selMenu.navigate);
      setCurrent(key);
    }
    const menuItem2 = items2.filter((item) => item.key === key);
    if (menuItem2.length > 0) {
      const selMenu2 = menuItem2[0];
      //   console.log(selMenu2.navigate);
      navigate(selMenu2.navigate);
      setCurrent(key);
    }
  }
  };
  return (
  <>
    <div className="desktopheard">
      <Row className="main-title-header">
        <Col
          xs={{ span: 12 }}
          sm={{ span: 12 }}
          md={{ span: 12 }}
          lg={{ span: 12 }}
          xl={{ span: 12 }}
          xxl={{ span: 12 }}
        >
          <div>
            <Menu
              onClick={onClick}
              selectedKeys={[current]}
              mode="horizontal"
              items={items1}
            />
          </div>
        </Col>

        <Col
          xs={{ span: 12 }}
          sm={{ span: 12 }}
          md={{ span: 12 }}
          lg={{ span: 12 }}
          xl={{ span: 12 }}
          xxl={{ span: 12 }}
        >
          <div className="header-login_register-menu">
            <Menu
              onClick={onClick}
              selectedKeys={[current]}
              mode="horizontal"
              items={items2}
            />
          </div>
        </Col>
      </Row>
  </div>
      <div className='mobileVisible'>
 <div className='mobilehead-main'>
 <div className="logo-mobile" >
    {/* <Link to='http://www.google.com'> {<img alt="example" src={Logo} className="logo-set" />}</Link> */}
    </div>
  <Button type="" className='mobilehead-right' onClick={showDrawer}>
  <FontAwesomeIcon icon= {faBars}  className={bgColor ? "bar-icon-scroll":"bar-icon" }/>
      </Button>
      </div>
      <Drawer  placement="right" onClose={onClose} open={open}>
        <Menu
              onClick={onClick}
              selectedKeys={[current]}
              mode="vertical"
              items={items1}
            />
         <Menu
              onClick={onClick}
              selectedKeys={[current]}
              mode="vertical"
              items={items2}
            />
      </Drawer>
<hr/>
  </div>
    </>
  );
};

export default Header;
