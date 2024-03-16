import React, {useEffect, useState} from "react";
import Header from "./Header";
import Footer from "./Footer";

import LineChart from "./my-record/Chart"

const dataFilter = [
  {
    type: "Morning",
    date: "05.21",
    imgUrl: "/img/filter-0.png"
  },
  {
    type: "Lunch",
    date: "05.21",
    imgUrl: "/img/filter-1.png"
  },
  {
    type: "Dinner",
    date: "05.21",
    imgUrl: "/img/filter-2.png"
  },
  {
    type: "Snack",
    date: "05.21",
    imgUrl: "/img/filter-3.png"
  },
  {
    type: "Morning",
    date: "05.20",
    imgUrl: "/img/filter-4.png"
  },
  {
    type: "Lunch",
    date: "05.20",
    imgUrl: "/img/filter-5.png"
  },
  {
    type: "Dinner",
    date: "05.20",
    imgUrl: "/img/filter-6.png"
  },
  {
    type: "Snack",
    date: "05.20",
    imgUrl: "/img/filter-7.png"
  },
]

const App = (props) => {
  const [data, setData] = useState(dataFilter);
  const [filterType, setFilterType] = useState(null);

  //handle filter
  useEffect(() => {
    if (!filterType) return;

    const newData = dataFilter.filter((item) => item.type === filterType);
    setData(newData)

  }, [filterType]);

  //handle scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const filterlist = [
    {
      type: "Morning",
      icon: "/icon/knife.png"
    },
    {
      type: "Lunch",
      icon: "/icon/knife.png"
    },
    {
      type: "Dinner",
      icon: "/icon/knife.png"
    },
    {
      type: "Snack",
      icon: "/icon/cup.png"
    },
  ]


  return (
    <div className="container">
      <Header/>
      <Footer/>
      <img className="scroll-top" onClick={scrollToTop} src="/icon/component_scroll.png" alt="scroll"/>

      <div className="dasboard">
        <div className="dashboard-overview">
          <div className="dashboard-overview-percent">
            <img src="/img/dashboard-overview.png" alt="Food"/>
            <div className="circle">
              <span className="circle-date">05/21</span>
              <span className="circle-percent">75%</span>
            </div>
          </div>
          <div className="dashboard-overview-chart">
            <LineChart/>
          </div>
        </div>
        <div className="filters">
          {filterlist.map((filter, index) => (
            <div key={`plan-filter-${index}`} className="filters-item">
              <div onClick={() => setFilterType(filter.type)} className="filters-item-btn">
                <img src={filter.icon} alt="plan"/>
                <span className="filters-item-btn-type">{filter.type}</span>
              </div>

            </div>
          ))}
        </div>
        <div className="plan">
          {data.map((item, index) => (
            <div key={`plan-img-${index}`} className="plan-item">
              <span>
                <img src={item.imgUrl} alt="Plan"/>
                <div className="plan-item-text">
                  <span>{item.type}</span>
                  <span>.{item.date}</span>
                </div>
              </span>

            </div>
          ))}
        </div>

        <div className="add-daily">
          <div className="add-daily-btn">
            <span>記録をもっと見る</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
