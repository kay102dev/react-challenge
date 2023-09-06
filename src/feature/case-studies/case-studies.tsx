import React from 'react';

import {useApiData} from "../../utils/dataProvider";
import {SlideItem} from "../slider/slider";
import './case-studies.scss';

interface ServiceCardProps {
    item: SlideItem;
}

function ServiceCard({item}: ServiceCardProps) {

    const bgImage = {
        backgroundImage: `url(${item.imageUrl})`,
    };

    return (
        <div className="content case-studies p-4 text-white" style={bgImage}>
            <h3 className="heading mb-4">{item.title}</h3>
            <p className="description mt-2">{item.description}</p>
        </div>
    );
}

function CaseStudies() {
    const services: SlideItem[] = useApiData();
    return (
        <div className="case-studies-component container mt-5 p-5">
            <div className="px-5">
                <div className="title mb-5">
                    <h3 className="subtitle">Case Studies</h3>
                </div>
                <div className="content-wrapper">
                    <div className="d-flex justify-content-around gap-4">
                        {services.map((service: SlideItem, index: number) => (
                            <ServiceCard key={index} item={service}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CaseStudies;
