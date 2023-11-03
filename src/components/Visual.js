import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useEffect, useRef, useState } from "react";
import "swiper/css";
import "../styles/visual.css";

function Visual() {
  // js 코드 자리
  // JSX 에 작성된 html 태그를 React 에서 참조
  // 1. swiper 슬라이드 태그를 참조한다.
  const swiperRef = useRef();

  const fetchGetDate = () => {
    //외부 데이터 연동(fetch)
    fetch("visual.json")
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        // 자료를 출력하자.
        makeVisualSlide(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // visual 슬라이드 내용 채우는 기능
  // 컴포넌트에 출력할 JSX 리액트용 변수
  // 일반변수 말고 리액트용 변수를 state라고 합니다.
  let [visualHtml, setVisualHtml] = useState([]);

  const makeVisualSlide = (_date) => {
    const visualRes = _date;
    let visualArray = [];

    for (let i = 0; i < visualRes.total; i++) {
      visualArray[i] = visualRes["visual_" + (i + 1)];
    }
    // console.log(visualArray);
    setVisualHtml(visualArray);
    // // 배열 자료(visualArray)를 뜯어서 캄포넌트 담기
    // let slideArray = [];
    // for (let i = 0; i < visualRes.total; i++) {
    //   slideArray[i] = <SwiperSlide>
    //     ....
    //   </SwiperSlide>;
    // }
    // console.log(slideArray);
  };

  //컴포넌트가 렌더링 되면
  // 데이터 호출 및 배치
  // 주로 하는 작업
  // 1.네트워크 연동 외부 데이터 불러들임
  // 2.html 을 제어할 때
  // 3.윈도우 (window) 를 제어할때
  // 4.window.addEventLisner 작성할떄
  // 5.window.removeEventLismer 작성할때
  // 6.컴포넌트가 삭제 될때

  useEffect(() => {
    // 랜더링 될때
    // viual.json 데이터 불러들이기 기능실행
    fetchGetDate();

    return () => {
      // 삭제 될때 (clean Up 함수)
    };
  }, []);

  return (
    <section className="visual">
      <div className="visual-inner">
        <Swiper
          slidesPerView={2}
          spaceBetween={24}
          autoplay={{
            delay: 1000, // 대기시간
            disableOnInteraction: false, //사용자 터치후 자동실행 다시
          }}
          modules={[Autoplay]}
          loop
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          className="visual-slide"
        >
          {visualHtml.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="visual-slide-item">
                  <a href={item.url}>
                    <img
                      src={process.env.PUBLIC_URL + item.file}
                      alt={item.rul}
                    />
                  </a>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <button
          className="visual-slide-prev"
          onClick={() => {
            swiperRef.current.slidePrev();
          }}
        ></button>
        <button
          className="visual-slide-next"
          onClick={() => {
            swiperRef.current.slideNext();
          }}
        ></button>
      </div>
    </section>
  );
}

export default Visual;
