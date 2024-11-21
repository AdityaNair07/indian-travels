const Footer = () => {
  return (
    <div className="w-full h-full bg-my_black">
      <div className="container px-10 mx-auto lg:px-0">
        <div className="flex flex-col w-full py-10 xl:gap-64 lg:gap-40 md:gap-20 gap-14 md:flex-row">
          <div className="flex flex-col w-full gap-3 text-gray-400">
            <div>
              <h3 className="py-2 text-lg font-extrabold text-transparent uppercase cursor-pointer sm:text-3xl bg-clip-text bg-gradient-to-r from-primary to-[#0021f6]">
                Indian Travels
              </h3>
            </div>
            <p>Indian Travels Providing reliable service since 2015</p>
            <p>Shop no: 2, Nagar Nigam Complex,</p>
            <p>Beside Escort Hospital,</p>
            <p>Rajbandha Maidan, Raipur, Chhattisgarh</p>
          </div>
          <div className="flex flex-col w-full gap-3 text-lg text-gray-500">
            <p className="mb-2 text-xl font-bold uppercase">Company</p>
            <a
              href=""
              className="flex items-center gap-2 text-gray-400 transition-all duration-500 ease-in-out hover:underline hover:text-primary hover:translate-x-2"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                className="text-orange-400"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M8 5v14l11-7z"></path>
              </svg>
              About us
            </a>

            <a
              href=""
              className="flex items-center gap-2 text-gray-400 transition-all duration-500 ease-in-out hover:underline hover:text-primary hover:translate-x-2"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                className="text-orange-400"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M8 5v14l11-7z"></path>
              </svg>
              FAQs
            </a>

            <a
              href=""
              className="flex items-center gap-2 text-gray-400 transition-all duration-500 ease-in-out hover:underline hover:text-primary hover:translate-x-2"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                className="text-orange-400"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M8 5v14l11-7z"></path>
              </svg>
              Terms & Condition
            </a>

            <a
              href=""
              className="flex items-center gap-2 text-gray-400 transition-all duration-500 ease-in-out hover:underline hover:text-primary hover:translate-x-2"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                className="text-orange-400"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M8 5v14l11-7z"></path>
              </svg>
              Privacy Policy
            </a>

            <a
              href=""
              className="flex items-center gap-2 text-gray-400 transition-all duration-500 ease-in-out hover:underline hover:text-primary hover:translate-x-2"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                className="text-orange-400"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M8 5v14l11-7z"></path>
              </svg>
              Cancellation & Refund Policy
            </a>
          </div>
          <div className="flex flex-col w-full gap-3 text-lg text-gray-500">
            <p className="mb-2 text-xl font-bold uppercase">Contact</p>
            <a href="" className="text-gray-400 hover:underline">
              Email
            </a>
            <a href="" className="text-gray-400 hover:underline">
              indiantravelsraipur@gmail.com
            </a>
            <a href="" className="text-gray-400 hover:underline">
              Phone
            </a>
            <a href="" className="text-gray-400 hover:underline">
              +91 8517911111
            </a>
            <a href="" className="text-gray-400 hover:underline">
              +91 9827465500
            </a>
          </div>
        </div>
        <div className="w-full p-5 text-center text-gray-400">
          Copyright © $2024 - All right reserved by Indian Travels Ltd
        </div>
      </div>
    </div>
  );
};

export default Footer;
