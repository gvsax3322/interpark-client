import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "../styles/tour.css";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

function Tour() {
  const swiperRef = useRef();

  const [htmlTag, sethtmlTag] = useState([]);

  //외부 데이터 연동 (fetch)
  const axiosJonsData = () => {
    axios
      .get("tour.json")
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
    <section className="tour">
      <div className="tour-inner">
        <div className="tour-header">
          <h2 className="tour-title">투어 특가</h2>
          <span className="tour-txt">해외여행은 인터파크다</span>
        </div>
        <div className="tour-main">
          <div className="tour-category">
            <ul className="tour-list">
              <li>
                <button className="tour-cate-bt tour-cate-bt-active">
                  망설이면 품절
                </button>
              </li>
              <li>
                <button className="tour-cate-bt">패키지</button>
              </li>
              <li>
                <button className="tour-cate-bt">국내숙소</button>
              </li>
              <li>
                <button className="tour-cate-bt">해외숙소</button>
              </li>
            </ul>
          </div>
          <div className="tour-slide-wrap">
            <Swiper
              slidesPerView={3}
              spaceBetween={26}
              slidesPerGroup={3}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              modules={[Navigation]}
              navigation={{
                nextEl: ".tour-slide-wrap .slide-next-bt",
                prevEl: ".tour-slide-wrap .slide-prev-bt",
              }}
              className="tour-slide"
            >
              {htmlTag.map((item, index) => {
                function add(name) {
                  return name
                    ?.toString()
                    ?.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                }
                return (
                  <SwiperSlide key={index}>
                    <div className="tour-slide-item">
                      <a href={item.url} className="tour-link">
                        <div className="tour-link-img">
                          <img src={item.image} alt={item.desc} />
                        </div>
                        <div className="tour-link-info">
                          <div className="tour-link-info-1">{item.title}</div>
                          <div className="tour-link-info-2">{item.desc}</div>
                          <div className="tour-link-info-3">{item.pkg}</div>
                          <div className="tour-link-info-4">
                            <em>{add(item.price)}</em>원~
                          </div>
                        </div>
                      </a>
                    </div>
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
        <div className="tour-footer"></div>
      </div>
    </section>
  );
}
export default Tour;
