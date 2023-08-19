import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/splide/css'; // デフォルトのテーマを読み込み（コアスタイルのみ読み込む設定も可能）
import './Slider.scss';

const Slider = () => {
  const slideData = [
    {
      img: "./src/assets/banner/hokusai.png",
      alt: "FGO 葛飾北斎 特集"
    },
    {
      img: "./src/assets/banner/C102.png",
      alt: "C102 あの夏へ"
    },
    {
      img: "./src/assets/banner/HeavenBurnsRed.png",
      alt: "HeavenBurnsRed"
    },
    {
      img: "./src/assets/banner/skillUp.png",
      alt: "イラストスキルアップ 特集"
    },
    {
      img: "./src/assets/banner/vtuber.png",
      alt: "熱闘!! Vtuber甲子園!!"
    },
    {
      img: "./src/assets/banner/spell.png",
      alt: "呪文のコツ 総まとめ!!"
    }
  ];

  return (
    <>
      <div className="slider_area">
        <Splide
          aria-label="バナースライド"
          options={{
            type: 'loop',
            rewind: true, // スライダーの終わりから先頭への巻き戻し
            rewindByDrag: true, // ドラッグまたはスワイプ操作
            height: '30rem',
            width: '100%',
            perPage: 3,
          }}
        >
          {slideData.map((slide, index) => (
            <SplideSlide key={index}>
              <img className="slide-img" src={slide.img} alt={slide.alt} />
            </SplideSlide>
          ))}

        </Splide>
      </div>
    </>
  )
};

export default Slider;