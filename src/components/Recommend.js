/* eslint-disable jsx-a11y/anchor-is-valid */
import { BtCate } from "../components/ui/buttons";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import "../styles/recommend.css";
import "../styles/common.css";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

import { InnerArea, SectionTag } from "../components/layout/layout";

function Recommend() {
  // js 코드 자리
  // JSX 의 요소를 React 에서 참조
  const swiperRef = useRef();

  // JSON 데이터 저정해 두고, 자료가 바뀌면 화면을 변경할
  // 리액트 변수를 만든다.
  const [htmlTag, sethtmlTag] = useState([]);

  const axiosJonsData = () => {
    axios
      .get("recommed.json")
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

  //외부 데이터 연동 (fetch)
  // const getJsonData = () => {
  //   fetch("recommed.json")
  //     .then((res) => {
  //       // 자료가 불러들여졌을 때
  //       //console.log("response: ", res);
  //       return res.json();
  //     })
  //     .then((res) => {
  //       // console.log("result: ", res);
  //       // 저료를 원하는대로 처리하겠다.
  //       // 리턴결과 화면 출력
  //       // 자료가 바뀌면 화면을 변경하는 기능을 생성하겠다.
  //       let arr = [];
  //       for (let i = 0; i < res.total; i++) {
  //         const obj = res["good_" + (i + 1)];
  //         arr[i] = obj;
  //       }
  //       //console.log(arr);
  //       sethtmlTag(arr);
  //     })
  //     .catch((err) => {
  //       console.log("err: ", err);
  //       // 에러 발생
  //     });
  // };

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
    <SectionTag pt={0} pb={90}>
      <InnerArea>
        <div className="recommend-header">
          <h2 className="recommend-title">쇼핑추천</h2>
          <span className="recommend-txt">
            할인이 쎄다! 지금, 특가 상품을 확인하세요.
          </span>
        </div>

        <div className="recommend-main">
          <div className="recommend-category">
            <ul className="recommend-list">
              <li>
                <BtCate active={true}>쎈딜</BtCate>
              </li>
              <li>
                <BtCate>베스트</BtCate>
              </li>
              <li>
                <BtCate>블프데이</BtCate>
              </li>
              <li>
                <BtCate>디지털프라자</BtCate>
              </li>
              <li>
                <a href="#" className="recommend-cate-bt">
                  소담상회
                </a>
              </li>
            </ul>
          </div>
          <div className="recommend-slide-wrap">
            <Swiper
              slidesPerView={4}
              spaceBetween={27}
              slidesPerGroup={4}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              modules={[Navigation]}
              navigation={{
                nextEl: ".recommend-slide-wrap .slide-next-bt",
                prevEl: ".recommend-slide-wrap .slide-prev-bt",
              }}
              className="recommend-slide"
            >
              {htmlTag.map((item, index) => {
                let discount = item.discount === 0 ? "" : item.discount + "%";
                function add(name) {
                  return name
                    ?.toString()
                    ?.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                }
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
                      <div className="recommend-slide-item">
                        <a href={item.url} className="recommend-link">
                          <div className="recommend-img">
                            <img src={item.image} alt={item.desc} />
                          </div>
                          <div className="recommend-info">
                            <ul className="recommend-good-list">
                              <li>
                                <span className="recommend-good-info-price">
                                  <b>{discount}</b>
                                  <em>{add(item.price)}</em>원
                                </span>
                              </li>
                              <li>
                                <p className="recommend-good-info-desc">
                                  {item.desc}
                                </p>
                              </li>
                            </ul>
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
        <div className="recommend-footer"></div>
      </InnerArea>
    </SectionTag>
  );
}
export default Recommend;
