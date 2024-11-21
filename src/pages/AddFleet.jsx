import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const AddFleet = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contact, setContact] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [drivingLicence, setDrivingLicence] = useState("");

  const handleSubmit = () => {
    console.log("Form submitted");
  };

  return (
    <div className="w-full h-full bg-secondary">
      <Navbar />
      <div className="container px-10 py-16 mx-auto lg:px-0">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 p-10 mx-auto bg-white border-b-2 rounded-md md:w-1/2 border-primary"
        >
          <h1 className="mb-5 text-xl font-bold text-center lg:text-2xl">
            Register with Indian Travels
          </h1>
          <div className="flex flex-col w-full gap-2">
            <label className="text-lg font-bold" htmlFor="firstName">
              First Name
            </label>
            <input
              className="p-2 border-2 border-gray-200 rounded-md"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
            />
          </div>
          <div className="flex flex-col w-full gap-2">
            <label className="text-lg font-bold" htmlFor="lastName">
              Last Name
            </label>
            <input
              className="p-2 border-2 border-gray-200 rounded-md"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last name "
            />
          </div>
          <div className="flex flex-col w-full gap-2">
            <label className="text-lg font-bold" htmlFor="contact">
              Contact
            </label>
            <input
              className="p-2 border-2 border-gray-200 rounded-md"
              type="number"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              placeholder="Enter your contact "
            />
          </div>
          <div className="flex flex-col w-full gap-2">
            <label className="text-lg font-bold" htmlFor="email">
              Email
            </label>
            <input
              className="p-2 border-2 border-gray-200 rounded-md"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>
          <div className="flex flex-col w-full gap-2">
            <label className="text-lg font-bold" htmlFor="city">
              City
            </label>
            <input
              className="p-2 border-2 border-gray-200 rounded-md"
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Enter your city "
            />
          </div>
          <div className="flex flex-col w-full gap-2">
            <label className="text-lg font-bold" htmlFor="licence">
              Driving Licence
            </label>
            <input
              className="p-2 border-2 border-gray-200 rounded-md"
              type="text"
              value={drivingLicence}
              onChange={(e) => setDrivingLicence(e.target.value)}
              placeholder="Enter your DL Register"
            />
          </div>
          <div className="w-full mt-5 text-center">
            <button
              type="submit"
              className="w-[70%] bg-primary text-white font-bold rounded-md uppercase text-xl mx-auto px-5 py-3"
            >
              Register
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default AddFleet;
