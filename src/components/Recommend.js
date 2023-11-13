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
      .get(
        "https://port-0-interpark-server-3yl7k2blopixf4o.sel5.cloudtype.app/recommend"
      )
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
        const dmObj = {
          total: 12,
          good_1: {
            image: "images/r1.jpg",
            discount: 47,
            price: 6090,
            desc: "[오쎈특가 쿠폰최종가 소형 5,070원]  [2024년 달력 얼리버드] 어린왕자, 앤, 곰돌이푸, 애드워드호퍼, 모네, 고흐, 윤동주 등",
            url: "a.html",
          },
          good_2: {
            image: "images/r2.jpg",
            discount: 0,
            price: 12900,
            desc: "유혜광 통등심돈까스 10장 (총 5팩)",
            url: "a.html",
          },
          good_3: {
            image: "images/r3.jpg",
            discount: 42,
            price: 12900,
            desc: "[10/31 단하루/한정수량] 매일 어메이징 오트 언스위트 190ml 24팩 + 오리지널 6팩 증정",
            url: "a.html",
          },
          good_4: {
            image: "images/r4.jpg",
            discount: 2,
            price: 8240,
            desc: "단하루! 베베숲 센시티브 20매 휴대 캡 12팩 외 휴대용 아기 물티슈 모음 / 외출 필수품",
            url: "a.html",
          },
          good_5: {
            image: "images/r5.jpg",
            discount: 22,
            price: 3900,
            desc: "★10월 마지막!★ 베어파우 키즈 방한 패딩 양털 부츠 베이비 남아 여아 아기 어린이 유아",
            url: "a.html",
          },
          good_6: {
            image: "images/r6.jpg",
            discount: 29,
            price: 34900,
            desc: "[스포츠파크]  뉴발란스 남성 UNI 에센셜 스몰로고 맨투맨 4종택1",
            url: "a.html",
          },
          good_7: {
            image: "images/r7.jpg",
            discount: 2,
            price: 22220,
            desc: "[더쎈위크]  롯데빼빼로 3종 x 20갑 (오리지널/아몬드/초코필드) 골라담기",
            url: "a.html",
          },
          good_8: {
            image: "images/r8.jpg",
            discount: 35,
            price: 26900,
            desc: "[한정수량특가]  한양식품 국내산 꽃보다오징어 오리지날 260g+260g",
            url: "a.html",
          },
          good_9: {
            image: "images/r9.jpg",
            discount: 14,
            price: 18260,
            desc: "샤오미 미지아 가습기2/미지아 스마트 살균가습기2/MJJSQ06DY/관부가세포함",
            url: "a.html",
          },
          good_10: {
            image: "images/r10.jpg",
            discount: 18,
            price: 2930,
            desc: "[쇼핑앱특가2400원] 아이팝 무라벨 먹는샘물 생수 2L*6펫 / 하이트진로",
            url: "a.html",
          },
          good_11: {
            image: "images/r11.jpg",
            discount: 25,
            price: 10410,
            desc: "제주 삼다수 2L 12병 (유/무라벨 랜덤발송) ",
            url: "a.html",
          },
          good_12: {
            url: "go.html",
          },
        };
        let arr = [];
        for (let i = 0; i < dmObj.total; i++) {
          const obj = dmObj["good_" + (i + 1)];
          arr[i] = obj;
        }
        sethtmlTag(arr);
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
