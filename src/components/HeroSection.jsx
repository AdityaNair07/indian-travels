import { useEffect, useState } from "react";
import Carousel from "./Carousel";

const HeroSection = () => {
  const bookCabData = [
    {
      svg: (
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 512 512"
          className="text-2xl lg:text-3xl "
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M128 480h256V80c0-26.5-21.5-48-48-48H176c-26.5 0-48 21.5-48 48v400zm64-384h128v32H192V96zm320 80v256c0 26.5-21.5 48-48 48h-48V128h48c26.5 0 48 21.5 48 48zM96 480H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48h48v352z"></path>
        </svg>
      ),
      mainHeading: "outstation",
      data: [
        { heading: "oneway" },
        { heading: "roundtrip" },
        { heading: "multicity" },
      ],
    },
    {
      svg: (
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          version="1.1"
          viewBox="0 0 16 16"
          className="text-2xl lg:text-3xl "
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8 0c-2.761 0-5 2.239-5 5 0 5 5 11 5 11s5-6 5-11c0-2.761-2.239-5-5-5zM8 8c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"></path>
        </svg>
      ),
      mainHeading: "local",
      data: [{ heading: "halfday" }, { heading: "fullday" }],
    },
    {
      svg: (
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 24 24"
          className="text-2xl lg:text-3xl "
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M19.924 10.383a1 1 0 0 0-.217-1.09l-5-5-1.414 1.414L16.586 9H4v2h15a1 1 0 0 0 .924-.617zM4.076 13.617a1 1 0 0 0 .217 1.09l5 5 1.414-1.414L7.414 15H20v-2H5a.999.999 0 0 0-.924.617z"></path>
        </svg>
      ),
      mainHeading: "transfer",
      data: [
        { heading: "railwaystation" },
        { heading: "airport" },
        { heading: "hotel" },
      ],
    },
    {
      svg: (
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 24 24"
          className="text-2xl lg:text-3xl "
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path d="m21.41 11.58-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z"></path>
        </svg>
      ),
      mainHeading: "deal",
      data: [{ heading: "onewaydeal" }],
    },
  ];

  const [selectedService, setSelectedService] = useState(
    bookCabData[0].mainHeading
  );
  const [selectedSubService, setSelectedSubService] = useState(
    bookCabData.find((item) => item.mainHeading === selectedService).data[0]
      .heading
  );

  useEffect(() => {
    const selectedData = bookCabData.find(
      (item) => item.mainHeading === selectedService
    );
    if (selectedData) {
      setSelectedSubService(selectedData.data[0].heading);
    }
  }, [selectedService]);

  const sliderImageData = ["sliderImg1", "sliderImg2", "sliderImg3"];

  const servicesData = [
    {
      svg: (
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 512 512"
          className="p-2 text-5xl text-white rounded-full bg-primary"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M192 0c-17.7 0-32 14.3-32 32V64c0 .1 0 .1 0 .2c-38.6 2.2-72.3 27.3-85.2 64.1L39.6 228.8C16.4 238.4 0 261.3 0 288V432v48c0 17.7 14.3 32 32 32H64c17.7 0 32-14.3 32-32V432H416v48c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32V432 288c0-26.7-16.4-49.6-39.6-59.2L437.2 128.3c-12.9-36.8-46.6-62-85.2-64.1c0-.1 0-.1 0-.2V32c0-17.7-14.3-32-32-32H192zM165.4 128H346.6c13.6 0 25.7 8.6 30.2 21.4L402.9 224H109.1l26.1-74.6c4.5-12.8 16.6-21.4 30.2-21.4zM96 288a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm288 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"></path>
        </svg>
      ),
      heading: "Drop Cab Service",
      points: [
        "One Way Cab",
        "Round Trip Cab",
        "Airport Pickup &amp; Drop Cab",
      ],
    },
    {
      svg: (
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 512 512"
          className="p-2 text-5xl text-white rounded-full bg-primary"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M225.814 32.316c-3.955-.014-7.922-.01-11.9.007-19.147.089-38.6.592-58.219 1.32l5.676 24.893c20.431-2.31 42.83-4.03 65.227-4.89 12.134-.466 24.194-.712 35.892-.65 35.095.183 66.937 3.13 87.77 11.202l8.908 3.454-3.977 8.685c-29.061 63.485-35.782 124.732-31.228 184.826 2.248-71.318 31.893-134.75 70.81-216.068-52.956-8.8-109.634-12.582-168.959-12.78zm28.034 38.79c-8.74.007-17.65.184-26.559.526-41.672 1.6-83.199 6.49-110.264 12.096 30.233 56.079 54.69 112.287 70.483 167.082a71.934 71.934 0 0 1 5.894.045c4.018.197 7.992.742 11.875 1.59-16.075-51.397-34.385-98.8-57.146-146.131l-5.143-10.694 11.686-2.068c29.356-5.198 59.656-7.21 88.494-7.219 1.922 0 3.84.007 5.748.024 18.324.16 35.984 1.108 52.346 2.535l11.054.965-3.224 10.617c-18.7 61.563-22.363 127.678-11.79 190.582.176.163.354.325.526.49 3.813-1.336 7.38-2.698 10.705-4.154-8.254-67.394-4.597-136.923 26.229-209.201-17.202-4.383-43.425-6.674-72.239-7.034a656.656 656.656 0 0 0-8.675-.05zm144.945 7.385c-30.956 65.556-52.943 118.09-56.547 174.803 20.038-66.802 58.769-126.685 102.904-165.158a602.328 602.328 0 0 0-46.357-9.645zM103.832 97.02c-18.76 3.868-37.086 8.778-54.812 15.562 8.626 7.48 24.22 21.395 43.14 39.889 8.708-8.963 17.589-17.818 26.852-25.87a1067.587 1067.587 0 0 0-15.18-29.581zm142.023 7.482c-13.62-.066-27.562.324-41.554 1.293-1.468 13.682-9.56 26.482-19.225 39.07 15.431 36.469 28.758 73.683 40.756 113.194 18.375 5.42 36.554 11.827 51.28 19.504-5.47-42.458-4.722-85.963 2.38-128.508-12.885-13.31-19.597-28.09-20.135-44.34a621.48 621.48 0 0 0-13.502-.213zm182.018 26.985c-24.73 29.3-46.521 65.997-61.37 105.912 27.264-38.782 60.79-69.032 96.477-90.4a1318.664 1318.664 0 0 0-35.107-15.512zm-300.74 11.959c-14.594 13.188-29.014 29.017-44.031 44.097 32.289 19.191 59.791 41.918 82.226 67.66 1.393-.526 2.8-.999 4.215-1.43-10.498-36.096-24.885-73.033-42.41-110.327zM360.52 268.198c-16.397 19.788-31.834 30.235-53.09 38.57 2.391 9.22-1.16 19.805-9.334 27.901-4.808 4.761-10.85 10.188-19.684 13.715a62.896 62.896 0 0 0 3.9 2.127c12.364 6.17 34.207 4.18 54.5-5.049 20.23-9.2 38.302-25.092 45-41.191 3.357-9.05.96-13.77-4.917-20.692-4.184-4.925-10.295-9.89-16.375-15.38zm-170.079.586c-10.715-.098-21.597 2.994-30.59 9.76-12.79 9.623-22.65 26.784-22.738 55.934v.2l-.01.2c-2.92 61.381 1.6 89.7 10.555 105.065 7.904 13.562 21.05 20.054 40.28 31.994.916-2.406 1.87-5.365 2.765-9.098 2.277-9.499 4.161-22.545 5.355-36.975 2.389-28.858 2.04-63.51-1.955-88.445l-2.111-13.19 13.016 2.995c31.615 7.273 49.7 8.132 60.2 6.28 10.502-1.854 14.061-5.523 20.221-11.624 5.79-5.732 5.682-7.795 4.456-11.021-1.227-3.227-6.149-8.545-14.5-13.633-16.703-10.176-45.085-19.611-71.614-26.647a53.988 53.988 0 0 0-13.33-1.795zm189.1 69.416c-10.013 9.754-22.335 17.761-35.277 23.647-20.983 9.542-44.063 13.907-63.211 7.553-6.76 2.516-10.687 5.407-12.668 7.8-2.718 3.284-2.888 5.7-1.967 9.16.92 3.46 3.665 7.568 7.059 10.524 3.393 2.956 7.426 4.492 8.959 4.564 46.794 2.222 67.046-11.207 92.277-26.783 7.358-4.542 10.174-13.743 9.469-22.931-.353-4.594-1.69-8.911-3.233-11.63a9.009 9.009 0 0 0-1.408-1.904zm-166.187 9.096c2.727 25.068 2.772 54.314.642 80.053-1.247 15.072-3.175 28.779-5.789 39.685-1.137 4.746-2.388 8.954-3.9 12.659l146.697-6.465c-1.656-6.149-3.344-12.324-5.031-18.502a127.004 127.004 0 0 1-17.24 4.424l.044.73-8.316.518c-5.121.614-10.452.953-15.983.992l-83.86 5.21 2.493-11.607c7.947-37.006 8.68-69.589 3.778-105.234a353.433 353.433 0 0 1-13.536-2.463zm31.972 4.684c3.948 31.933 3.473 62.41-2.406 95.2l19.264-1.196a39.44 39.44 0 0 1-6.1-14.778c-1.296-6.88-.575-14.538 3.926-20.87.199-.281.414-.55.627-.821-5.246-4.845-9.628-11.062-11.614-18.524-2.114-7.944-.794-17.67 5.497-25.27 2.079-2.51 4.592-4.776 7.543-6.816-2.61-2.08-4.898-4.285-6.874-6.582-3.064.021-6.345-.093-9.863-.343zm132.666 41.785c-23.456 14.253-49.81 27.876-96.41 25.664a26.402 26.402 0 0 1-4.518-.615c-1.233.553-1.891 1.256-2.382 1.947-.963 1.355-1.532 3.8-.909 7.113 1.248 6.627 7.525 13.889 13.37 14.569 41.385 4.813 69.979-8.726 87.341-24.477 8-7.258 8.068-11.9 6.89-16.951-.59-2.523-1.89-4.969-3.382-7.25zm-6.683 49.062a114.657 114.657 0 0 1-8.547 4.86c1.65 6.051 3.304 12.102 4.937 18.154l19.92-3.572c-5.14-4.387-9.162-8.954-12.39-13.496-1.442-2.029-2.713-4.001-3.92-5.946z"></path>
        </svg>
      ),
      heading: "Lowest Cab Fare",
      points: ["Save 40% on One Way", "Brand New Cabs", "Sanitized Cabs"],
    },
    {
      svg: (
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 576 512"
          className="p-2 text-5xl text-white rounded-full bg-primary"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M163.9 136.9c-29.4-29.8-29.4-78.2 0-108s77-29.8 106.4 0l17.7 18 17.7-18c29.4-29.8 77-29.8 106.4 0s29.4 78.2 0 108L310.5 240.1c-6.2 6.3-14.3 9.4-22.5 9.4s-16.3-3.1-22.5-9.4L163.9 136.9zM568.2 336.3c13.1 17.8 9.3 42.8-8.5 55.9L433.1 485.5c-23.4 17.2-51.6 26.5-80.7 26.5H192 32c-17.7 0-32-14.3-32-32V416c0-17.7 14.3-32 32-32H68.8l44.9-36c22.7-18.2 50.9-28 80-28H272h16 64c17.7 0 32 14.3 32 32s-14.3 32-32 32H288 272c-8.8 0-16 7.2-16 16s7.2 16 16 16H392.6l119.7-88.2c17.8-13.1 42.8-9.3 55.9 8.5zM193.6 384l0 0-.9 0c.3 0 .6 0 .9 0z"></path>
        </svg>
      ),
      heading: "24x7 Available",
      points: ["On Call support", "GPS Tracking", "Well Mannered Drivers"],
    },
    {
      svg: (
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 24 24"
          className="p-2 text-5xl text-white rounded-full bg-primary"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path d="M21 12.22C21 6.73 16.74 3 12 3c-4.69 0-9 3.65-9 9.28-.6.34-1 .98-1 1.72v2c0 1.1.9 2 2 2h1v-6.1c0-3.87 3.13-7 7-7s7 3.13 7 7V19h-8v2h8c1.1 0 2-.9 2-2v-1.22c.59-.31 1-.92 1-1.64v-2.3c0-.7-.41-1.31-1-1.62z"></path>
          <circle cx="9" cy="13" r="1"></circle>
          <circle cx="15" cy="13" r="1"></circle>
          <path d="M18 11.03A6.04 6.04 0 0 0 12.05 6c-3.03 0-6.29 2.51-6.03 6.45a8.075 8.075 0 0 0 4.86-5.89c1.31 2.63 4 4.44 7.12 4.47z"></path>
        </svg>
      ),
      heading: "100%",
      points: ["Satisfaction rate"],
    },
  ];

  return (
    <>
      <div className="absolute top-0 w-full h-[300px] bg-primary rounded-b-full left-0 -z-5"></div>
      <div className="container relative w-full max-h-full min-h-screen px-10 pt-20 mx-auto lg:px-0">
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 place-items-center">
          <div className="flex flex-col w-full md:w-[80%] mb-10">
            <div className="flex flex-col mb-10">
              <h1 className="w-full py-2 text-2xl font-extrabold text-center text-white lg:text-4xl md:py-4">
                Book cab online
              </h1>
              <div className="flex gap-5 md:gap-10 items-center justify-center md:flex-row flex-col">
                <button className="w-full md:w-60 p-3 text-xl font-semibold text-white rounded-md bg-my_blue ">
                  (+91)-8517911111
                </button>
                <button className="w-full md:w-60 p-3 text-xl font-semibold text-black rounded-md bg-yellow-400">
                  Chat with us
                </button>
              </div>
            </div>

            <div className="flex items-center w-full gap-5 font-bold justify-center flex-wrap">
              {bookCabData.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedService(item.mainHeading)}
                  className={`uppercase text-my_blue border-sky-500 flex flex-col gap-2 items-center justify-center px-3 py-2 rounded-md w-32 ${
                    selectedService === item.mainHeading
                      ? "bg-yellow-400"
                      : "bg-white border-2"
                  }`}
                >
                  {item.svg}
                  {item.mainHeading}
                </button>
              ))}
            </div>

            <div className="mt-5">
              {selectedService && (
                <>
                  <div className="flex gap-5 items-center mt-3 justify-center flex-wrap">
                    {bookCabData
                      .find((item) => item.mainHeading === selectedService)
                      ?.data.map((dataItem, index) => (
                        <button
                          key={index}
                          onClick={() =>
                            setSelectedSubService(dataItem.heading)
                          }
                          className={`text-black md:text-2xl p-2 pb-4 relative font-bold uppercase ${
                            selectedSubService === dataItem.heading
                              ? "after:w-full after:absolute after:bottom-0 after:left-0 after:h-1 after:bg-my_blue"
                              : ""
                          }`}
                        >
                          {dataItem.heading}
                        </button>
                      ))}
                  </div>
                </>
              )}
            </div>

            <div className="mt-10 bg-my_blue w-full md:w-[80%] mx-auto h-full border-t-4 border-primary p-5">
              <h1 className="text-center text-lg text-white md:text-2xl font-bold p-2">
                Book Your{" "}
                <span className="capitalize">{selectedSubService}</span> Taxi
              </h1>
              <form
                action=""
                className="w-full h-full flex flex-col mt-5 gap-5 pb-5"
                onSubmit={console.log("form submitted")}
              >
                <div className="flex md:flex-row gap-3 flex-col">
                  <div className="flex flex-col gap-2 w-full">
                    <label className="text-white text-lg" htmlFor="fullName">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="w-full p-2"
                      id="fullName"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div className="flex flex-col gap-2 w-full">
                    <label className="text-white text-lg" htmlFor="contact">
                      Contact
                    </label>
                    <input
                      type="text"
                      className="w-full p-2"
                      id="contact"
                      placeholder="Enter your contact"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-white text-lg">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="p-2 w-full"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="pickup" className="text-white text-lg">
                    Pickup Address
                  </label>
                  <div className="w-full relative">
                    <span className="border-r border-black absolute left-0 top-0 h-full text-yellow-400 p-1">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        version="1.2"
                        baseProfile="tiny"
                        viewBox="0 0 24 24"
                        height="100%"
                        width="100%"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M17.657 5.304c-3.124-3.073-8.189-3.073-11.313 0-3.124 3.074-3.124 8.057 0 11.13l5.656 5.565 5.657-5.565c3.124-3.073 3.124-8.056 0-11.13zm-5.657 8.195c-.668 0-1.295-.26-1.768-.732-.975-.975-.975-2.561 0-3.536.472-.472 1.1-.732 1.768-.732s1.296.26 1.768.732c.975.975.975 2.562 0 3.536-.472.472-1.1.732-1.768.732z"></path>
                      </svg>
                    </span>
                    <input
                      type="text"
                      id="pickup"
                      className="p-2 w-full h-full pl-12"
                      placeholder="Enter pickup location"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="drop" className="text-white text-lg">
                    Drop Address
                  </label>
                  <div className="w-full relative">
                    <span className="border-r border-black absolute left-0 top-0 h-full text-yellow-400 p-1">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        version="1.2"
                        baseProfile="tiny"
                        viewBox="0 0 24 24"
                        height="100%"
                        width="100%"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M17.657 5.304c-3.124-3.073-8.189-3.073-11.313 0-3.124 3.074-3.124 8.057 0 11.13l5.656 5.565 5.657-5.565c3.124-3.073 3.124-8.056 0-11.13zm-5.657 8.195c-.668 0-1.295-.26-1.768-.732-.975-.975-.975-2.561 0-3.536.472-.472 1.1-.732 1.768-.732s1.296.26 1.768.732c.975.975.975 2.562 0 3.536-.472.472-1.1.732-1.768.732z"></path>
                      </svg>
                    </span>
                    <input
                      type="text"
                      id="drop"
                      className="p-2 w-full h-full pl-12"
                      placeholder="Enter drop location"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="pickupDate" className="text-white text-lg">
                    Pickup Date and Time
                  </label>
                  <div className="w-full relative">
                    <span className="border-r border-black absolute left-0 top-0 h-full text-yellow-400 p-1">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 24 24"
                        height="100%"
                        width="100%"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"></path>
                      </svg>
                    </span>
                    <input
                      type="datetime-local"
                      id="pickupDate"
                      className="p-2 w-full h-full pl-12"
                      placeholder="Enter pickup date and time"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="dropDate" className="text-white text-lg">
                    Drop Date and Time
                  </label>
                  <div className="w-full relative">
                    <span className="border-r border-black absolute left-0 top-0 h-full text-yellow-400 p-1">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 24 24"
                        height="100%"
                        width="100%"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"></path>
                      </svg>
                    </span>
                    <input
                      type="datetime-local"
                      id="dropDate"
                      className="p-2 w-full h-full pl-12"
                      placeholder="Enter drop date and time"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="bg-primary text-white font-bold md:text-xl text-lg p-2 rounded-md w-[80%] lg:w-1/2 mx-auto mt-5"
                >
                  Search Cab
                </button>
              </form>
            </div>
          </div>
          <div className="flex flex-col w-full px-3 gap-y-4 lg:w-[80%] lg:mt-10 xl:mt-20">
            <Carousel
              data={sliderImageData}
              isInfinite={true}
              slidesToScroll={1}
              slidesToShow={1}
              hasAutoPlay={true}
              autoPlaySpeed={3000}
              speed={1000}
              type="image"
            />
            <Carousel
              data={servicesData}
              isInfinite={true}
              slidesToScroll={1}
              slidesToShow={1}
              hasAutoPlay={true}
              autoPlaySpeed={3500}
              speed={2000}
              type="services"
            />
            <div className="flex flex-col gap-2 md:flex-row">
              <div className="flex items-center gap-4 p-2 bg-white rounded-md md:w-1/2">
                <img
                  className="w-10 h-10"
                  src=" /images/driverIcon.png"
                  alt="driver icon"
                />
                <p className="font-bold">Experienced and polite drivers</p>
              </div>
              <div className="flex items-center p-2 font-bold bg-white rounded-md md:w-1/2">
                Comfortable rides
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
