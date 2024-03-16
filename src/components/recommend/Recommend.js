import React from "react";
import Header from "../Header";
import Footer from "../Footer";

const Recommend = () => {

  const recommendMenu = [
    {
      type: "COLUMN",
      text: "オススメ"
    },
    {
      type: "DIET",
      text: "ダイエット"
    },
    {
      type: "BEAUTY",
      text: "美容"
    },
    {
      type: "HEALTH",
      text: "健康"
    },
  ]

  const recommendList = [
    {
      time: "2021.05.17   23:25",
      imgUrl: "/img/recommend--1.png",
      text: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
      tag: "#魚料理  #和食  #DHA"
    },
    {
      time: "2021.05.17   23:25",
      imgUrl: "/img/recommend--2.png",
      text: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
      tag: "#魚料理  #和食  #DHA"
    },
    {
      time: "2021.05.17   23:25",
      imgUrl: "/img/recommend--3.png",
      text: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
      tag: "#魚料理  #和食  #DHA"
    },
    {
      time: "2021.05.17   23:25",
      imgUrl: "/img/recommend--4.png",
      text: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
      tag: "#魚料理  #和食  #DHA"
    },
    {
      time: "2021.05.17   23:25",
      imgUrl: "/img/recommend--5.png",
      text: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
      tag: "#魚料理  #和食  #DHA"
    },
    {
      time: "2021.05.17   23:25",
      imgUrl: "/img/recommend--6.png",
      text: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
      tag: "#魚料理  #和食  #DHA"
    },
    {
      time: "2021.05.17   23:25",
      imgUrl: "/img/recommend--7.png",
      text: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
      tag: "#魚料理  #和食  #DHA"
    },
    {
      time: "2021.05.17   23:25",
      imgUrl: "/img/recommend--8.png",
      text: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
      tag: "#魚料理  #和食  #DHA"
    },
  ]

  //handle scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="container">
      <Header/>
      <Footer/>
      <img className="scroll-top" onClick={scrollToTop} src="/icon/component_scroll.png" alt="scroll"/>

      <div className="recommend">
        <div className="recommend-menu">
          {recommendMenu.map((item, index) => (
            <div key={`recommend-menu-item-${index}`} className="recommend-menu-item">
              <span className="recommend-menu-item-title">RECOMMEND</span>
              <span className="recommend-menu-item-title">{item.type}</span>
              <div className="recommend-menu-item-border"></div>
              <div className="recommend-menu-item-text">{item.text}</div>
            </div>
          ))}

        </div>

        <div className="recommend-content">
          {recommendList.map((item, index) => (
            <div key={`recommend-item-${index}`} className="recommend-content-item">
              <span>
                <img src={item.imgUrl} alt="recommend"/>
                <div className="recommend-content-item-time">
                  <span>{item.time}</span>
                </div>
              </span>
              <span className="recommend-content-item-text">{item.text}</span>
              <span className="recommend-content-item-tag">{item.tag}</span>
            </div>
          ))}
        </div>

        <div className="add-daily">
          <div className="add-daily-btn">
            <span>コラムをもっと見る</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Recommend;