

import React from 'react';
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'
import ava04 from '../../assets/images/ava-3.jpg'

const Testimonials = () => {
        const settings= {
            dots:true,
            infinite:true,
            autopolay:true,
            speed:1000,
            swipeToSlide:true,
            autopolaySpeed:2000,
            slidesToShow:3,

            responsive:[
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinte: true,
                        dots: true,
                    },
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        }

    return (
    <Slider {...settings}>
        <div className="testimonial py-4 px-3">
            <p>A professional and effective service. 
                Messages were crisp and clear. Consultant was obliging
                 and understood any queries and changes we wanted.
                  Nothing seemed to be too much trouble.</p>

            <div className="d-flex align-items-center gap-4 mt-3">

                <img src={ava01} className='w-25 h-25 rounded-2' alt="" />
                <div>
                    <h6 className="mb-0 mt-3">John Doe</h6>
                    <p>Customer
                    </p>
                </div>
            </div>
        </div>
        <div className="testimonial py-4 px-3">
            <p>The all inclusive airfares, transfers, accommodation 
                 etc were greatly appreciated. Nicole helped us understand 
                 how to redeem a Jetstar Covid.19 voucher and we really appreciated that. 
                 </p>

            <div className="d-flex align-items-center gap-4 mt-3">

                <img src={ava02} className='w-25 h-25 rounded-2' alt="" />
                <div>
                    <h6 className="mb-0 mt-3">Jelia silva</h6>
                    <p>Customer
                    </p>
                </div>
            </div>
        </div>
        <div className="testimonial py-4 px-3">
            <p>This experience and service in booking and taking this holiday package 
                was 1st class. It was easy to book, the emailed vouchers
                 we received were clear and all were honoured. 
                 </p>

            <div className="d-flex align-items-center gap-4 mt-3">

                <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
                <div>
                    <h6 className="mb-0 mt-3">Wick koe</h6>
                    <p>Customer
                    </p>
                </div>
            </div>
        </div>
        <div className="testimonial py-4 px-3">
            <p>Our holiday was great value for the money spent. 
                Easy online service and telephone service if needed 
                and thanks for the opportunity to provide feedback.</p>

            <div className="d-flex align-items-center gap-4 mt-3">

                <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
                <div>
                    <h6 className="mb-0 mt-3">caton bil</h6>
                    <p>Customer
                    </p>
                </div>
            </div>
        </div> 
        
    </Slider>    
    );
}

export default Testimonials;

