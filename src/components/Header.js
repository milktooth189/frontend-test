import React, {useEffect, useState} from "react"

const Header = () => {
  const [info, setInfo] = useState(0);

  useEffect(() => {
    setInterval(() => setInfo(Math.floor(Math.random() * 5) + 1), 10000)
  }, []);

  return (
    <div className="header">
      <div className="header-logo">
        <img src="/icon/logo.png" alt="Logo"/>
      </div>
      <div className="header-nav">
        <div className="header-nav-icon">
          <img src="/icon/icon_memo.png" alt="Memo"/>
        </div>
        <div className="header-nav-text">
          自分の記録
        </div>
      </div>
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
        <img src="/icon/icon_menu.png" alt="Menu"/>
      </div>
    </div>
  )
}

export default Header;