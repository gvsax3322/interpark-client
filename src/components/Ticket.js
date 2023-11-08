import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "../styles/ticket.css";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

function Ticket() {
  const swiperRef = useRef();

  const [htmlTag, sethtmlTag] = useState([]);

  //외부 데이터 연동 (fetch)
  const axiosJonsData = () => {
    axios
      .get("ticket.json")
      .then((res) => {
        let arr = [];
        for (let i = 0; i < res.data.total; i++) {
          const obj = res.data["good_" + (i + 1)];
          arr[i] = obj;
        }
        sethtmlTag(arr);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // html 이 준비가 되면, json을 불러들인다.
  // 1.외부데이터 부르기
  // 2윈도우 (window) 를 제어할때
  // 3.window.addEventLisner 작성할떄
  // 4.html 태그 참조 (useRef)
  // 5.컴퍼넌트 삭제 할때
  // 6, 타이머 만들고 , 제거할때
  // 컴포넌트 화면에 보여질 때 실행할 내용 기재 장소
  // use 는 hook 이라고 한다. 원하는 시점을 감시하고 실핼할 함수
  useEffect(() => {
    // 외부 데이터 불러들이기
    //getJsonData();
    axiosJonsData();
  }, []);
  return (
    <section className="ticket">
      <div className="ticket-inner">
        <div className="ticket-header">
          <h2 className="ticket-title">티켓 랭킹</h2>
          <span className="ticket-txt">오늘 뭐볼까? 지금 HOT한 공연</span>
        </div>
        <div className="ticket-main">
          <div className="ticket-category">
            <ul className="ticket-list">
              <li>
                <button className="ticket-cate-bt ticket-cate-bt-active">
                  뮤지컬
                </button>
              </li>
              <li>
                <button className="ticket-cate-bt">콘서트</button>
              </li>
              <li>
                <button className="ticket-cate-bt">스포츠</button>
              </li>
              <li>
                <button className="ticket-cate-bt">전시/행사</button>
              </li>
              <li>
                <button className="ticket-cate-bt">클래식/무용</button>
              </li>
              <li>
                <button className="ticket-cate-bt">아동/가족</button>
              </li>
              <li>
                <button className="ticket-cate-bt">연극</button>
              </li>
              <li>
                <button className="ticket-cate-bt">레저/캠핑</button>
              </li>
            </ul>
          </div>
          <div className="ticket-slide-wrap">
            <Swiper
              slidesPerView={4}
              spaceBetween={27}
              slidesPerGroup={4}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              modules={[Navigation]}
              navigation={{
                nextEl: ".ticket-slide-wrap .slide-next-bt",
                prevEl: ".ticket-slide-wrap .slide-prev-bt",
              }}
              className="ticketr-slide"
            >
              {htmlTag.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    {index === htmlTag.length - 1 ? (
                      <div className="swiper-slide-view">
                        <a href={item.url} className="swiper-a-view">
                          <img
                            src="images/btn_moreProduct.31dedf7e.svg"
                            alt=""
                          />
                          <h3>전체보기</h3>
                        </a>
                      </div>
                    ) : (
                      <div className="ticket-slide-item">
                        <a href={item.url} className="ticket-link">
                          <div className="ticket-link-info">
                            <div className="ticket-link-img">
                              <img src={item.image} alt={item.desc} />
                              <div className="ticket-link-h2">
                                <h2 className="ccc">{item.ranking}</h2>
                              </div>
                            </div>
                            <div className="ticket-link-f">
                              <div>
                                <h3>{item.title}</h3>
                              </div>
                              <div>
                                <p className="ticket-link-f-p1">{item.desc}</p>
                              </div>
                              <div>
                                <p className="ticket-link-f-p2">{item.date}</p>
                              </div>
                              {item.event === "좌석우위" && (
                                <div className="ticket-link-f-b">
                                  {item.event}
                                </div>
                              )}
                              {item.event === "단독판매" && (
                                <div className="ticket-link-f-r">
                                  {item.event}
                                </div>
                              )}
                            </div>
                          </div>
                        </a>
                      </div>
                    )}
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <button className="slide-prev-bt">
              <img src="images/slider_arrow.svg" alt="" />
            </button>
            <button className="slide-next-bt">
              <img src="images/slider_arrow.svg" alt="" />
            </button>
          </div>
        </div>
        <div className="ticket-footer"></div>
      </div>
    </section>
  );
}
export default Ticket;
