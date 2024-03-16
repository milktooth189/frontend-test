import React, {useEffect, useState} from "react"
import LineChart from "./Chart"
import "react-perfect-scrollbar/dist/css/styles.css";
import PerfectScrollbar from "react-perfect-scrollbar"
import Header from "../Header";
import Footer from "../Footer";

const MyRecord = (props) => {
  const [currentTime, setCurrentTime] = useState("");
  const [chartType, setChartType] = useState(1);

  //get date time and for mat to yyyy.MM.dd
  useEffect(() => {
    const interval = setInterval(() => {
      const currentDate = new Date();
      const formattedDate = currentDate.toISOString().slice(0, 10).replace(/-/g, ".");
      setCurrentTime(formattedDate);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const exeItem = {
    text: "家事全般（立位・軽い）",
    cal: "26kcal",
    time: "10 mins",
  }

  const fakeArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

  const diaryArr = [1, 2, 3, 4, 5, 6, 7, 8];

  const diaryItem = {
    date: "2021.05.21",
    time: "23:25",
    title: "私の日記の記録が一部表示されます。",
    content: "私の日記の記録が一部表示されます。\n" +
      "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
  }

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
      <div className={"memo"}>

        <div className="memo-action">
          <div className={"memo-action-item"}>
            <img src="/img/MyRecommend-1.jpeg" alt="recommend1"/>
            <div className="memo-action-item-info">
              <div className="memo-action-item-info-text">
                BODY RECORD
              </div>
              <div className="memo-action-item-info-btn">
                自分のカラダの記録
              </div>
            </div>
          </div>
          <div className={"memo-action-item"}>
            <img src="/img/MyRecommend-2.jpeg" alt="recommend2"/>
            <div className="memo-action-item-info">
              <div className="memo-action-item-info-text">
                MY EXERCISE
              </div>
              <div className="memo-action-item-info-btn">
                自分の運動の記録
              </div>
            </div>
          </div>
          <div className={"memo-action-item"}>
            <img src="/img/MyRecommend-3.jpeg" alt="recommend3"/>
            <div className="memo-action-item-info">
              <div className="memo-action-item-info-text">
                MY DIARY
              </div>
              <div className="memo-action-item-info-btn">
                自分の日記
              </div>
            </div>
          </div>
        </div>
        <div className="chart">
          <div className="chart-container">
            <div className="chart-title">
              <div className="chart-title-text">
                <span>BODY</span>
                <span>RECORD</span>
              </div>
              <div className="chart-title-date">{currentTime}</div>
            </div>
            <div className="chart-content">
              <LineChart/>
            </div>

            <div className="chart-bottom">
              <div onClick={() => setChartType(1)}
                   className={"chart-bottom-btn" + (chartType === 1 ? " chart-bottom-btn-active" : "")}>日
              </div>
              <div onClick={() => setChartType(2)}
                   className={"chart-bottom-btn" + (chartType === 2 ? " chart-bottom-btn-active" : "")}>週
              </div>
              <div onClick={() => setChartType(3)}
                   className={"chart-bottom-btn" + (chartType === 3 ? " chart-bottom-btn-active" : "")}>月
              </div>
              <div onClick={() => setChartType(4)}
                   className={"chart-bottom-btn" + (chartType === 4 ? " chart-bottom-btn-active" : "")}>年
              </div>
            </div>
          </div>

        </div>
        <div className="exe">
          <div className="chart-title">
            <div className="chart-title-text">
              <span>MY</span>
              <span>EXERCISE</span>
            </div>
            <div className="chart-title-date">{currentTime}</div>
          </div>
          <PerfectScrollbar className="custom-scrollbar">
            <div className="exe-content">
              {fakeArr.map((item, index) => (
                <div key={`exe-item-${index}`} className="exe-content-item">
                  <div className="exe-content-item-left">
                    <span className="exe-content-item-left-text">{exeItem.text}</span>
                    <span className="exe-content-item-left-cal">{exeItem.cal}</span>
                  </div>
                  <div className="exe-content-item-time">{exeItem.time}</div>
                </div>
              ))}
            </div>
          </PerfectScrollbar>
        </div>
        <div className="diary">
          <div className="diary-title">MY DIARY</div>
          <div className="diary-content">
            {diaryArr.map((item, index) => (
              <div key={`diary-item-${index}`} className="diary-content-item">
                <div className="diary-content-item-time">
                  <span>{diaryItem.date}</span>
                  <span>{diaryItem.time}</span>
                </div>
                <div className="diary-content-item-content">{diaryItem.content}</div>
              </div>
            ))}

          </div>
        </div>
        <div className="add-daily">
          <div className="add-daily-btn">
            <span>自分の日記をもっと見る</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyRecord;