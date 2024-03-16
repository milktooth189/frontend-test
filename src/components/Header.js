import React, {useEffect, useState} from "react"
import {Link, NavLink} from "react-router-dom";

const Header = (props) => {
  const [info, setInfo] = useState(0);
  const [menuIsOpen, setMenuOpen] = useState(false);

  const menuItemList = [
    {
      "text": "自分の記録",
      "path": "/my-record"
    },
    {
      "text": "体重グラフ",
      "path": ""
    },
    {
      "text": "目標",
      "path": ""
    },
    {
      "text": "選択中のコース",
      "path": ""
    },
    {
      "text": "コラム一覧",
      "path": "/recommend"
    },
    {
      "text": "設定",
      "path": ""
    }
  ];

  // set random 1-5 notification each 10s
  useEffect(() => {
    setInterval(() => setInfo(Math.floor(Math.random() * 5) + 1), 10000)
    console.log(props)
  }, []);


  return (
    <div className="header">
      <NavLink to={"/"} className="header-logo">
        <img src="/icon/logo.png" alt="Logo"/>
      </NavLink>
      <NavLink to={"/my-record"} className="header-nav">
        <div className="header-nav-icon">
          <img src="/icon/icon_memo.png" alt="Memo"/>
        </div>
        <div className="header-nav-text">
          自分の記録
        </div>
      </NavLink>
      <div className="header-nav">
        <div className="header-nav-icon">
          <img src="/icon/icon_challenge.png" alt="Chalenge"/>
        </div>
        <div className="header-nav-text">
          チャレンジ
        </div>
      </div>
      <div onClick={() => setInfo(0)} className="header-nav">
        <div className="header-nav-icon">
          <img src="/icon/icon_info.png" alt="Info"/>
          {info > 0 && <span className="notification">{info}</span>}
        </div>
        <div className="header-nav-text">
          お知らせ
        </div>
      </div>
      <div className="header-menu">
        <img onClick={() => setMenuOpen(!menuIsOpen)}
             src={menuIsOpen ? "/icon/icon_close.png" : "/icon/icon_menu.png"}
             alt="Menu"/>
      </div>
      <div className="menu">
        {menuItemList.map((item, index) => (
          <Link onClick={() => setMenuOpen(false)} to={menuIsOpen ? item.path : "#"} key={`menu-item-${index}`}
                className={"menu-item" + (menuIsOpen ? " show" : "")}
                style={{
                  transition: `opacity ${(menuIsOpen ? index : (menuItemList.length - index)) * 0.2}s ease, transform 1s ease`,
                  cursor: menuIsOpen ? "pointer" : "default"
                }}>
            {item.text}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Header;