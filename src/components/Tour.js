import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "../styles/tour.css";
import { useRef } from "react";

function Tour() {
  const swiperRef = useRef();
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
              <SwiperSlide>
                <div className="tour-slide-item">
                  <a href="a.html" className="tour-link">
                    <div className="tour-link-img">
                      <img
                        src="images/tourimg/t1.jpg"
                        alt="공항 10분 거리, 오션뷰 인피니티 풀"
                      />
                    </div>
                    <div className="tour-link-info">
                      <div className="tour-link-info-1">괌</div>
                      <div className="tour-link-info-2">
                        공항 10분 거리, 오션뷰 인피니티 풀
                      </div>
                      <div className="tour-link-info-3">
                        괌 리프 호텔 (구.괌 리프 앤 올리브 스파 리조트)
                      </div>
                      <div className="tour-link-info-4">
                        <em>219,120</em>원~
                      </div>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="tour-slide-item">
                  <a href="a.html" className="tour-link">
                    <div className="tour-link-img">
                      <img
                        src="images/tourimg/t1.jpg"
                        alt="공항 10분 거리, 오션뷰 인피니티 풀"
                      />
                    </div>
                    <div className="tour-link-info">
                      <div className="tour-link-info-1">괌</div>
                      <div className="tour-link-info-2">
                        공항 10분 거리, 오션뷰 인피니티 풀
                      </div>
                      <div className="tour-link-info-3">
                        괌 리프 호텔 (구.괌 리프 앤 올리브 스파 리조트)
                      </div>
                      <div className="tour-link-info-4">
                        <em>219,120</em>원~
                      </div>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="tour-slide-item">
                  <a href="a.html" className="tour-link">
                    <div className="tour-link-img">
                      <img
                        src="images/tourimg/t1.jpg"
                        alt="공항 10분 거리, 오션뷰 인피니티 풀"
                      />
                    </div>
                    <div className="tour-link-info">
                      <div className="tour-link-info-1">괌</div>
                      <div className="tour-link-info-2">
                        공항 10분 거리, 오션뷰 인피니티 풀
                      </div>
                      <div className="tour-link-info-3">
                        괌 리프 호텔 (구.괌 리프 앤 올리브 스파 리조트)
                      </div>
                      <div className="tour-link-info-4">
                        <em>219,120</em>원~
                      </div>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="tour-slide-item">
                  <a href="a.html" className="tour-link">
                    <div className="tour-link-img">
                      <img
                        src="images/tourimg/t1.jpg"
                        alt="공항 10분 거리, 오션뷰 인피니티 풀"
                      />
                    </div>
                    <div className="tour-link-info">
                      <div className="tour-link-info-1">괌</div>
                      <div className="tour-link-info-2">
                        공항 10분 거리, 오션뷰 인피니티 풀
                      </div>
                      <div className="tour-link-info-3">
                        괌 리프 호텔 (구.괌 리프 앤 올리브 스파 리조트)
                      </div>
                      <div className="tour-link-info-4">
                        <em>219,120</em>원~
                      </div>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="tour-slide-item">
                  <a href="a.html" className="tour-link">
                    <div className="tour-link-img">
                      <img
                        src="images/tourimg/t1.jpg"
                        alt="공항 10분 거리, 오션뷰 인피니티 풀"
                      />
                    </div>
                    <div className="tour-link-info">
                      <div className="tour-link-info-1">괌</div>
                      <div className="tour-link-info-2">
                        공항 10분 거리, 오션뷰 인피니티 풀
                      </div>
                      <div className="tour-link-info-3">
                        괌 리프 호텔 (구.괌 리프 앤 올리브 스파 리조트)
                      </div>
                      <div className="tour-link-info-4">
                        <em>219,120</em>원~
                      </div>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="tour-slide-item">
                  <a href="a.html" className="tour-link">
                    <div className="tour-link-img">
                      <img
                        src="images/tourimg/t1.jpg"
                        alt="공항 10분 거리, 오션뷰 인피니티 풀"
                      />
                    </div>
                    <div className="tour-link-info">
                      <div className="tour-link-info-1">괌</div>
                      <div className="tour-link-info-2">
                        공항 10분 거리, 오션뷰 인피니티 풀
                      </div>
                      <div className="tour-link-info-3">
                        괌 리프 호텔 (구.괌 리프 앤 올리브 스파 리조트)
                      </div>
                      <div className="tour-link-info-4">
                        <em>219,120</em>원~
                      </div>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="tour-slide-item">
                  <a href="a.html" className="tour-link">
                    <div className="tour-link-img">
                      <img
                        src="images/tourimg/t1.jpg"
                        alt="공항 10분 거리, 오션뷰 인피니티 풀"
                      />
                    </div>
                    <div className="tour-link-info">
                      <div className="tour-link-info-1">괌</div>
                      <div className="tour-link-info-2">
                        공항 10분 거리, 오션뷰 인피니티 풀
                      </div>
                      <div className="tour-link-info-3">
                        괌 리프 호텔 (구.괌 리프 앤 올리브 스파 리조트)
                      </div>
                      <div className="tour-link-info-4">
                        <em>219,120</em>원~
                      </div>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="tour-slide-item">
                  <a href="a.html" className="tour-link">
                    <div className="tour-link-img">
                      <img
                        src="images/tourimg/t1.jpg"
                        alt="공항 10분 거리, 오션뷰 인피니티 풀"
                      />
                    </div>
                    <div className="tour-link-info">
                      <div className="tour-link-info-1">괌</div>
                      <div className="tour-link-info-2">
                        공항 10분 거리, 오션뷰 인피니티 풀
                      </div>
                      <div className="tour-link-info-3">
                        괌 리프 호텔 (구.괌 리프 앤 올리브 스파 리조트)
                      </div>
                      <div className="tour-link-info-4">
                        <em>219,120</em>원~
                      </div>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="tour-slide-item">
                  <a href="a.html" className="tour-link">
                    <div className="tour-link-img">
                      <img
                        src="images/tourimg/t1.jpg"
                        alt="공항 10분 거리, 오션뷰 인피니티 풀"
                      />
                    </div>
                    <div className="tour-link-info">
                      <div className="tour-link-info-1">괌</div>
                      <div className="tour-link-info-2">
                        공항 10분 거리, 오션뷰 인피니티 풀
                      </div>
                      <div className="tour-link-info-3">
                        괌 리프 호텔 (구.괌 리프 앤 올리브 스파 리조트)
                      </div>
                      <div className="tour-link-info-4">
                        <em>219,120</em>원~
                      </div>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
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
