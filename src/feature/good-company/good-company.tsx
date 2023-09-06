import React from 'react';
import './good-company.scss';

import bbc from '../../assets/images/brands/bbc.svg';
import distell from '../../assets/images/brands/distell.svg';
import engen from '../../assets/images/brands/engen.svg';
import liquid from '../../assets/images/brands/liquid.svg';
import microsoft from '../../assets/images/brands/micorsoft.svg';
import multichoice from '../../assets/images/brands/multichoice.svg';
import pnp from '../../assets/images/brands/pnp.svg';
import sanlam from '../../assets/images/brands/sanlam.svg';
import santam from '../../assets/images/brands/santam.svg';

import spotify from '../../assets/images/brands/spotify.svg';
import tfg from '../../assets/images/brands/tfg.svg';
import tyme from '../../assets/images/brands/tyme.svg';
import visa from '../../assets/images/brands/visa.svg';
import wesgro from '../../assets/images/brands/wesgro.svg';
import nike from '../../assets/images/brands/nike.svg';


const images = [
    bbc,
    distell,
    engen,
    liquid,
    microsoft,
    multichoice,
    pnp,
    nike,
    sanlam,
    santam,
    spotify,
    tfg,
    tyme,
    visa,
    wesgro,
];

function GoodCompany() {
    return (
        <div className="good-company-component container mt-4 p-5">
            <div className="px-5">
                <div className="title mb-4">
                    <h3 className="subtitle">You'll be in good company</h3>
                </div>
                <h2 className="heading">Trusted by leading Brands</h2>
                <div className="content-wrapper">
                    <div className="d-flex justify-content-around flex-wrap gap-5-custom mt-5 pt-5 px-5">
                        {images.map((src, index) => (
                            <img
                                src={src}
                                alt={`brand ${index + 1}`}
                                key={index}
                                className="brand-logo"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GoodCompany;
