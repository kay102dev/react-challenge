import React from 'react';

import web from '../../assets/images/web-dev.svg';
import ux from '../../assets/images/ux.svg';

import mobile from '../../assets/images/mobile.svg';
import chain from '../../assets/images/block-chain.svg';
import './what-we-do.scss';

interface Service {
    image: string;
    alt: string;
    title: string;
    description: string;
}

interface ServiceCardProps {
    service: Service;
}

function ServiceCard({service}: ServiceCardProps) {
    const {image, alt, title, description} = service;

    return (
        <div className="content">
            <img src={image} alt={alt}/>
            <h3 className="heading my-5">{title}</h3>
            <p className="regular mt-4">{description}</p>
        </div>
    );
}

function WhatWeDo() {
    const services = [
        {
            image: web,
            alt: 'web',
            title: 'Web development',
            description: 'We use cutting-edge web development technologies to help our clients fulfill their business goals through functional, reliable solutions.',
        },
        {
            image: ux,
            alt: 'ui',
            title: 'User experience & design',
            description: 'Our complete web design services will bring your ideas to life and provide you with a sleek, high-performing product that elevates your business.',
        },
        {
            image: mobile,
            alt: 'mobile',
            title: 'Mobile app development',
            description: 'Our extensive mobile development experience allows us to create custom native and cross-platform iOS and Android mobile solutions for our clients.',
        },
        {
            image: chain,
            alt: 'chain',
            title: 'Blockchain solutions',
            description: 'We conduct market research to determine the optimal blockchain-based solutions to help you grow your company and achieve your business goals.',
        },
    ];

    return (
        <div className="what-we-do-component container mt-5 p-5">
            <div className="px-5">
                <div className="title mb-5">
                    <h3 className="subtitle">What we Do</h3>
                    <h2 className="mt-5">We offer a complete range of bespoke design and development services to help
                        you turn your ideas into digital masterpieces</h2>
                </div>
                <div className="content-wrapper">
                    <div className="d-flex justify-content-around gap-4">
                        {services.map((service, index) => (
                            <ServiceCard key={index} service={service}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhatWeDo;
