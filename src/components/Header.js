import React, {useEffect, useState} from "react"
import {NavLink} from "react-router-dom";

const Header = () => {
  const [info, setInfo] = useState(0);
  const [menuIsOpen, setMenuOpen] = useState(false);

  const menuItemList = ["自分の記録", "体重グラフ", "目標", "選択中のコース", "コラム一覧", "設定"];

  useEffect(() => {
    setInterval(() => setInfo(Math.floor(Math.random() * 5) + 1), 10000)

  }, []);

  return (
    <>
      <div className="header">
        <div className="header-logo">
          <img src="/icon/logo.png" alt="Logo"/>
        </div>
        <NavLink to={"/memo"} className="header-nav">
          <div className="header-nav-icon">
            <img src="/icon/icon_memo.png" alt="Memo"/>
          </div>
          <div className="header-nav-text">
            自分の記録
          </div>
        </NavLink>
        <NavLink to={"/challenge"} className="header-nav">
          <div className="header-nav-icon">
            <img src="/icon/icon_challenge.png" alt="Chalenge"/>
          </div>
          <div className="header-nav-text">
            チャレンジ
          </div>
        </NavLink>
        <NavLink to={"/info"} onClick={() => setInfo(0)} className="header-nav">
          <div className="header-nav-icon">
            <img src="/icon/icon_info.png" alt="Info"/>
            {info > 0 && <span className="notification">{info}</span>}
          </div>
          <div className="header-nav-text">
            お知らせ
          </div>
        </NavLink>
        <div className="header-menu">
          <img onClick={() => setMenuOpen(!menuIsOpen)}
               src={menuIsOpen ? "/icon/icon_close.png" : "/icon/icon_menu.png"}
               alt="Menu"/>
        </div>
      </div>
      {<div className="menu">
        {menuItemList.map((item, index) => (
          <div key={`menu-item-${index}`} className={"menu-item" + (menuIsOpen ? " show" : "")}
               style={{
                 transition: `opacity ${(menuIsOpen ? index : (menuItemList.length - index)) * 0.2}s ease, transform 1s ease`,
                 cursor: menuIsOpen ? "pointer" : "default"
               }}>
            {item}
          </div>
        ))}
      </div>}
    </>
  )
}

export default Header;