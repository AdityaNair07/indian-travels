import Carousel from "./Carousel";

const Testimonials = () => {
  const testimonialData = [
    {
      clientName: "Ram",
      desc: "Efficient and reliable service! Indian Travels took care of every detail from start to finish.The driver even helped with my luggage and shared some local tips, it was five star experience",
      starCount: 4,
    },
    {
      clientName: "Gopal",
      desc: "I had a fantastic experience with Indian Travels! The cab was on time, clean, and the driver was courteous and professional. Highly recommend their reliable and affordable service.",
      starCount: 5,
    },
    {
      clientName: "Raushan Singh",
      desc: "Traveling with Indian Travels was such a breeze. Professional driver, comfortable ride, and no hidden costs. Perfect for all kind of trips.",
      starCount: 3,
    },
  ];

  return (
    <div className="container px-10 mx-auto lg:px-0 pt-20">
      <h1 className="p-2 mb-5 text-3xl font-bold text-center">
        What our customer says
      </h1>
      <Carousel
        autoPlaySpeed={4000}
        data={testimonialData}
        hasAutoPlay
        isInfinite
        slidesToScroll={1}
        slidesToShow={3}
        speed={2000}
        type="text"
      />
    </div>
  );
};

export default Testimonials;
