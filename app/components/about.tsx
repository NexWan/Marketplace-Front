import { Swiper, SwiperSlide } from "swiper/react"
import React from "react";
import { Autoplay } from "swiper/modules";
import ReviewCard from "./reviewCard";

import 'swiper/css';

export default function About() {
    const swiperRef:any = React.useRef(null);
    const fakeReviews = [
        {
            name: "John Doe",
            review: "This marketplace is amazing! I found exactly what I was looking for.",
            date: "2025-10-01",
            rating: 5,
        },
        {
            name: "Jane Smith",
            review: "Great selection of products and fast shipping. Highly recommend!",
            date: "2025-10-02",
            rating: 4,
        },
        {
            name: "Alice Johnson",
            review: "I love the variety of items available. Will definitely shop here again.",
            date: "2025-10-03",
            rating: 5,
        },
    ];
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
            <h1 className="text-4xl font-bold mb-4">About</h1>
            <p className="text-lg mb-8 max-w-4xl text-justify">
                Here in the Marketplace, you will be able to find a variety of products and services that cater to your needs. Our platform is designed to connect buyers and sellers in a seamless and efficient manner.
                Whether you're looking for the latest gadgets, unique handmade items, or professional services, we've got you covered. Our user-friendly interface makes it easy to browse, compare, and purchase items with confidence.
                We prioritize customer satisfaction and strive to provide a secure and enjoyable shopping experience. Our dedicated support team is always here to assist you with any questions or concerns you may have.
            </p>
            <h1 className="text-4xl font-bold mb-4">Hear it from our clients!</h1>
            <Swiper
                modules={[Autoplay]}
                spaceBetween={50}
                slidesPerView={2}
                autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
                loop={true}
                pagination={{ clickable: true }}
                className="max-w-xl "
                onMouseEnter={() => console.log("Mouse Entered")}
                >
                {fakeReviews.map((review, index) => (
                    <SwiperSlide key={index}>
                        <ReviewCard
                            title={`Review by ${review.name}`}
                            review={review.review}
                            author={review.name}
                            date={review.date}
                            readingTime="2 min"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}