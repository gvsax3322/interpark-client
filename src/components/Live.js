import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "../styles/live.css";
import { useRef, useEffect, useState } from "react";
import axios from "axios";

function Live() {
  const swiperRef = useRef();

  const [htmlTag, sethtmlTag] = useState([]);

  const axiosJonsData = () => {
    axios
      .get("live.json")
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

  useEffect(() => {
    axiosJonsData();
  }, []);

  return (
    <section className="live">
      <div className="live-inner">
        <div className="live-main">
          <h2 className="live-title">
            <img src="./images/live.svg" alt="라이브" />
          </h2>
          <div className="live-slide-wrap">
            <Swiper
              slidesPerView={4}
              spaceBetween={28}
              slidesPerGroup={4}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              modules={[Navigation]}
              navigation={{
                nextEl: ".live-slide-wrap .slide-next-bt",
                prevEl: ".live-slide-wrap .slide-prev-bt",
              }}
              className="live-slide"
            >
              {htmlTag.map((item, index) => {
                let discount = item.discount === "" ? "" : item.discount + "%";
                let price = item.price === "" ? "" : item.price + "원";
                function add(name) {
                  return name
                    ?.toString()
                    ?.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                }
                return (
                  <SwiperSlide key={index}>
                    <div className="swiper-slide">
                      <div className="live-link">
                        <img
                          src={item.image}
                          alt=""
                          className="live-link-img"
                        />
                        <a href={item.url} alt={item.desc}>
                          <div
                            className={
                              item.date === ""
                                ? "live-link-info"
                                : "live-link-info live-link-info-bg"
                            }
                          >
                            <div className="live-link-info-1">
                              <i>{item.title}</i>
                              <em>{item.desc}</em>
                            </div>
                            <div className="live-link-info-2">
                              <div className="live-link-info-2-a">
                                {item.date}
                              </div>
                              <div className="live-link-info-2-b">
                                {item.hour}
                              </div>
                            </div>
                          </div>
                        </a>
                        <a href={item.url2} className="xxx">
                          <div className="live-link-info-3">
                            {item.simage === "" ? (
                              ""
                            ) : (
                              <img src={item.simage} alt="" />
                            )}

                            <div className="live-link-info-3-a">
                              {item.detail}
                              <span className="live-good-info-price">
                                <b>{discount}</b>
                                <em>{add(price)}</em>
                              </span>
                            </div>
                          </div>
                        </a>
                      </div>
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
        <div className="live-footer"></div>
      </div>
    </section>
  );
}

export default Live;
