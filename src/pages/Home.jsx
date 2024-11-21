import HeroSection from "../components/HeroSection";
import About from "../components/About";
import FaqComponent from "../components/FaqComponent";
import Navbar from "../components/Navbar";
import PointsWithImage from "../components/PointsWithImage";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

const Home = () => {
  const termsData = {
    heading: "Terms and conditions",
    points: [
      "Maximum 4 passenger capacity for Sedan",
      "Maximum 7 passenger capacity for SUV",
      "Minimum 300km coverage for round trip.",
      "One day Round trip close by 11pm at ur pickup",
      "Food break, tea break, & rest room no waiting charges.",
      "Cancellation charges Rs.300 after driver arrived.",
      "Permit charges and Driver Bata is same as quoted.",
      "Toll charges will be paid by customer.",
      "Payment transfer by online or by cash.",
      "Toll fees, interstate Permit, Hill charges pet charges waiting charges (if any) are extra.",
      "1 day means 1 calendar day(from midnight 12 to next midnight 12)",
    ],
  };

  const faqData = [
    {
      heading: "How can I book cheap cabs online?",
      desc: "Indian Travels helps you with online cab booking at the best prices, comparatively much lower than the local vendors. Also you can use promo codes and offers on the Indian Travels website & app on online cab booking to get extra discounts",
    },

    {
      heading: "What are the advantages of online cab booking?",
      desc: "Online taxi booking not only helps you with best prices but also helps you with the convenience of paying through multiple payment options (like Debit Card, Credit Card, eWallets etc.). You can easily compare prices and choose various categories of cabs like Hatchback cars, Sedan and SUV.",
    },

    {
      heading: "Why you should book cabs from Indian Travels?",
      desc: "From Indian Travels you can get confirmed cheap cabs of your choice and budget. Expert and verified drivers will be taken care of your ride. Easy interface of booking with different payment modes available at Indian Travels and finally with no hidden charges, Indian Travels is the best option for online taxi booking.",
    },

    {
      heading: "What are the best options available for cab booking?",
      desc: "While booking cabs online through Indian Travels, you can choose the car based on your requirement and preferences. You can book Hatchback like Indica, Swift, Sedan like Dzire, Etios and SUV like Innova, Ertiga.",
    },

    {
      heading: "What kind of cabs you can book from Indian Travels?",
      desc: "You can book following kinds of cabs from Indian Travels: airport cabs and intercity cabs / outstation cabs. You can book outstation cabs for both one-way transfers & round-trip transfers.",
    },

    {
      heading: "How does it work?",
      desc: "We ask you a few simple questions regarding your trip. We work with the best operators in your city to get you detailed quotations so that you get the best deal.",
    },
  ];

  const aboutData = [
    {
      heading: "Reliable Rides",
      desc: "Whether you need a quick ride to the office, a comfortable trip to the airport, or a leisurely drive around town, we've got you covered. Our fleet is well-maintained, and our drivers are professional and courteous, ensuring you reach your destination safely and on time.",
      svg: (
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 512 512"
          className="p-2 text-white rounded-full bg-primary size-14"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M499.99 176h-59.87l-16.64-41.6C406.38 91.63 365.57 64 319.5 64h-127c-46.06 0-86.88 27.63-103.99 70.4L71.87 176H12.01C4.2 176-1.53 183.34.37 190.91l6 24C7.7 220.25 12.5 224 18.01 224h20.07C24.65 235.73 16 252.78 16 272v48c0 16.12 6.16 30.67 16 41.93V416c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-32h256v32c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-54.07c9.84-11.25 16-25.8 16-41.93v-48c0-19.22-8.65-36.27-22.07-48H494c5.51 0 10.31-3.75 11.64-9.09l6-24c1.89-7.57-3.84-14.91-11.65-14.91zm-352.06-17.83c7.29-18.22 24.94-30.17 44.57-30.17h127c19.63 0 37.28 11.95 44.57 30.17L384 208H128l19.93-49.83zM96 319.8c-19.2 0-32-12.76-32-31.9S76.8 256 96 256s48 28.71 48 47.85-28.8 15.95-48 15.95zm320 0c-19.2 0-48 3.19-48-15.95S396.8 256 416 256s32 12.76 32 31.9-12.8 31.9-32 31.9z"></path>
        </svg>
      ),
    },

    {
      heading: "User-Friendly App",
      desc: "Our app is designed with you in mind. Easy to use, it allows you to book rides in just a few taps. Track your driver, know your fare upfront, and enjoy the convenience of cashless payments.",
      svg: (
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 640 512"
          className="p-2 text-white rounded-full bg-primary size-14"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M192 256c61.9 0 112-50.1 112-112S253.9 32 192 32 80 82.1 80 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C51.6 288 0 339.6 0 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zM480 256c53 0 96-43 96-96s-43-96-96-96-96 43-96 96 43 96 96 96zm48 32h-3.8c-13.9 4.8-28.6 8-44.2 8s-30.3-3.2-44.2-8H432c-20.4 0-39.2 5.9-55.7 15.4 24.4 26.3 39.7 61.2 39.7 99.8v38.4c0 2.2-.5 4.3-.6 6.4H592c26.5 0 48-21.5 48-48 0-61.9-50.1-112-112-112z"></path>
        </svg>
      ),
    },

    { imageName: "aboutImage" },

    {
      heading: "Affordable Pricing",
      desc: "We believe in transparent pricing without hidden charges. With Indian Travels, you can enjoy premium service at competitive rates.",
      svg: (
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 512 512"
          className="p-2 text-white rounded-full bg-primary size-14"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M225.814 32.316c-3.955-.014-7.922-.01-11.9.007-19.147.089-38.6.592-58.219 1.32l5.676 24.893c20.431-2.31 42.83-4.03 65.227-4.89 12.134-.466 24.194-.712 35.892-.65 35.095.183 66.937 3.13 87.77 11.202l8.908 3.454-3.977 8.685c-29.061 63.485-35.782 124.732-31.228 184.826 2.248-71.318 31.893-134.75 70.81-216.068-52.956-8.8-109.634-12.582-168.959-12.78zm28.034 38.79c-8.74.007-17.65.184-26.559.526-41.672 1.6-83.199 6.49-110.264 12.096 30.233 56.079 54.69 112.287 70.483 167.082a71.934 71.934 0 0 1 5.894.045c4.018.197 7.992.742 11.875 1.59-16.075-51.397-34.385-98.8-57.146-146.131l-5.143-10.694 11.686-2.068c29.356-5.198 59.656-7.21 88.494-7.219 1.922 0 3.84.007 5.748.024 18.324.16 35.984 1.108 52.346 2.535l11.054.965-3.224 10.617c-18.7 61.563-22.363 127.678-11.79 190.582.176.163.354.325.526.49 3.813-1.336 7.38-2.698 10.705-4.154-8.254-67.394-4.597-136.923 26.229-209.201-17.202-4.383-43.425-6.674-72.239-7.034a656.656 656.656 0 0 0-8.675-.05zm144.945 7.385c-30.956 65.556-52.943 118.09-56.547 174.803 20.038-66.802 58.769-126.685 102.904-165.158a602.328 602.328 0 0 0-46.357-9.645zM103.832 97.02c-18.76 3.868-37.086 8.778-54.812 15.562 8.626 7.48 24.22 21.395 43.14 39.889 8.708-8.963 17.589-17.818 26.852-25.87a1067.587 1067.587 0 0 0-15.18-29.581zm142.023 7.482c-13.62-.066-27.562.324-41.554 1.293-1.468 13.682-9.56 26.482-19.225 39.07 15.431 36.469 28.758 73.683 40.756 113.194 18.375 5.42 36.554 11.827 51.28 19.504-5.47-42.458-4.722-85.963 2.38-128.508-12.885-13.31-19.597-28.09-20.135-44.34a621.48 621.48 0 0 0-13.502-.213zm182.018 26.985c-24.73 29.3-46.521 65.997-61.37 105.912 27.264-38.782 60.79-69.032 96.477-90.4a1318.664 1318.664 0 0 0-35.107-15.512zm-300.74 11.959c-14.594 13.188-29.014 29.017-44.031 44.097 32.289 19.191 59.791 41.918 82.226 67.66 1.393-.526 2.8-.999 4.215-1.43-10.498-36.096-24.885-73.033-42.41-110.327zM360.52 268.198c-16.397 19.788-31.834 30.235-53.09 38.57 2.391 9.22-1.16 19.805-9.334 27.901-4.808 4.761-10.85 10.188-19.684 13.715a62.896 62.896 0 0 0 3.9 2.127c12.364 6.17 34.207 4.18 54.5-5.049 20.23-9.2 38.302-25.092 45-41.191 3.357-9.05.96-13.77-4.917-20.692-4.184-4.925-10.295-9.89-16.375-15.38zm-170.079.586c-10.715-.098-21.597 2.994-30.59 9.76-12.79 9.623-22.65 26.784-22.738 55.934v.2l-.01.2c-2.92 61.381 1.6 89.7 10.555 105.065 7.904 13.562 21.05 20.054 40.28 31.994.916-2.406 1.87-5.365 2.765-9.098 2.277-9.499 4.161-22.545 5.355-36.975 2.389-28.858 2.04-63.51-1.955-88.445l-2.111-13.19 13.016 2.995c31.615 7.273 49.7 8.132 60.2 6.28 10.502-1.854 14.061-5.523 20.221-11.624 5.79-5.732 5.682-7.795 4.456-11.021-1.227-3.227-6.149-8.545-14.5-13.633-16.703-10.176-45.085-19.611-71.614-26.647a53.988 53.988 0 0 0-13.33-1.795zm189.1 69.416c-10.013 9.754-22.335 17.761-35.277 23.647-20.983 9.542-44.063 13.907-63.211 7.553-6.76 2.516-10.687 5.407-12.668 7.8-2.718 3.284-2.888 5.7-1.967 9.16.92 3.46 3.665 7.568 7.059 10.524 3.393 2.956 7.426 4.492 8.959 4.564 46.794 2.222 67.046-11.207 92.277-26.783 7.358-4.542 10.174-13.743 9.469-22.931-.353-4.594-1.69-8.911-3.233-11.63a9.009 9.009 0 0 0-1.408-1.904zm-166.187 9.096c2.727 25.068 2.772 54.314.642 80.053-1.247 15.072-3.175 28.779-5.789 39.685-1.137 4.746-2.388 8.954-3.9 12.659l146.697-6.465c-1.656-6.149-3.344-12.324-5.031-18.502a127.004 127.004 0 0 1-17.24 4.424l.044.73-8.316.518c-5.121.614-10.452.953-15.983.992l-83.86 5.21 2.493-11.607c7.947-37.006 8.68-69.589 3.778-105.234a353.433 353.433 0 0 1-13.536-2.463zm31.972 4.684c3.948 31.933 3.473 62.41-2.406 95.2l19.264-1.196a39.44 39.44 0 0 1-6.1-14.778c-1.296-6.88-.575-14.538 3.926-20.87.199-.281.414-.55.627-.821-5.246-4.845-9.628-11.062-11.614-18.524-2.114-7.944-.794-17.67 5.497-25.27 2.079-2.51 4.592-4.776 7.543-6.816-2.61-2.08-4.898-4.285-6.874-6.582-3.064.021-6.345-.093-9.863-.343zm132.666 41.785c-23.456 14.253-49.81 27.876-96.41 25.664a26.402 26.402 0 0 1-4.518-.615c-1.233.553-1.891 1.256-2.382 1.947-.963 1.355-1.532 3.8-.909 7.113 1.248 6.627 7.525 13.889 13.37 14.569 41.385 4.813 69.979-8.726 87.341-24.477 8-7.258 8.068-11.9 6.89-16.951-.59-2.523-1.89-4.969-3.382-7.25zm-6.683 49.062a114.657 114.657 0 0 1-8.547 4.86c1.65 6.051 3.304 12.102 4.937 18.154l19.92-3.572c-5.14-4.387-9.162-8.954-12.39-13.496-1.442-2.029-2.713-4.001-3.92-5.946z"></path>
        </svg>
      ),
    },

    {
      heading: "Quick & Easy Booking",
      desc: "Our service offers a seamless and fast booking experience, allowing users to find and book a ride in just a few taps. With real-time cab availability, multiple payment options, and saved preferences, getting a ride is effortless.",
      svg: (
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 448 512"
          className="p-2 text-white rounded-full bg-primary size-14"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M436 160H12c-6.627 0-12-5.373-12-12v-36c0-26.51 21.49-48 48-48h48V12c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v52h128V12c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v52h48c26.51 0 48 21.49 48 48v36c0 6.627-5.373 12-12 12zM12 192h424c6.627 0 12 5.373 12 12v260c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V204c0-6.627 5.373-12 12-12zm333.296 95.947l-28.169-28.398c-4.667-4.705-12.265-4.736-16.97-.068L194.12 364.665l-45.98-46.352c-4.667-4.705-12.266-4.736-16.971-.068l-28.397 28.17c-4.705 4.667-4.736 12.265-.068 16.97l82.601 83.269c4.667 4.705 12.265 4.736 16.97.068l142.953-141.805c4.705-4.667 4.736-12.265.068-16.97z"></path>
        </svg>
      ),
    },
  ];

  return (
    <div className="bg-secondary">
      <Navbar />
      <HeroSection />
      <Testimonials />
      <About aboutData={aboutData} />
      <FaqComponent faqData={faqData} />
      <PointsWithImage
        imgAlignment={"right"}
        textData={termsData}
        imageName="terms"
      />
      <Footer />
    </div>
  );
};

export default Home;
