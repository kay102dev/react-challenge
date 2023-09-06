import React, {useEffect, useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import SwiperCore, {Autoplay} from 'swiper';
import {useApiData} from "../../utils/dataProvider";
import './slider.scss';

export interface SlideItem {
    imageUrl: string;
    title: string;
    description: string;
}

interface SliderContentProps {
    item: SlideItem;
}

function SliderContent(props: SliderContentProps) {
    const {item} = props;

    const bgImg = {
        backgroundImage: `url(${item.imageUrl})`,
    };

    return (
        <div className="slide-content" style={bgImg}>
            <div className="container px-5 position-relative">
                <div className="px-5">
                    <h1 className="title fw-bolder text-white">{item.title}</h1>
                    <h2 className="description text-white my-3">{item.description}</h2>
                    <button type="button" className="btn btn-primary mt-3">View project</button>
                </div>
            </div>
        </div>
    );
}


SwiperCore.use([Autoplay]);

function Slider() {
    const [data, setData] = useState([] as SlideItem[]);
    const fetchData: SlideItem[] = useApiData();

    useEffect(() => {
        /**
         * @important
         * setTimeout only for demonstration purposes to show loader, remove for prod deployment
         */
        setTimeout(() => setData(fetchData), 1000)
    }, [fetchData]);

    return (
        <div className="slider-component">
            {data.length > 0 ? (
                <Swiper
                    autoplay={true}
                    spaceBetween={50}
                    loop={true}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    modules={[Autoplay]}
                >
                    {data.map((slideContent: SlideItem, index: number) => (
                        <SwiperSlide key={index}>
                            <SliderContent item={slideContent}/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            ) : (
                <div className="loader"><p>Loading data...</p></div>
            )}
        </div>
    );
}

export default Slider;
