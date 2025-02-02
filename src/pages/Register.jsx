import { useState } from "react";

import axios from "axios";

import { Link, useNavigate } from "react-router-dom";

import Loading from "../components/Loading";

const Register = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    username: "",
    password: "",
  });
  const [avatarImage, setAvatarImage] = useState(null);
  const [coverImage, setcoverImage] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    const { id, files } = e.target;
    if (id === "avatarImage") setAvatarImage(files[0]);
    if (id === "coverImage") setcoverImage(files[0]);
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Prepare FormData for file uploads
      const form = new FormData();
      form.append("fullName", formData.fullName);
      form.append("email", formData.email);
      form.append("username", formData.username);
      form.append("password", formData.password);
      if (avatarImage) form.append("avatar", avatarImage);
      if (coverImage) form.append("coverImage", coverImage);

      // Make API request
      const response = await axios.post(
        "api/v1/users/register",
        form,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setIsLoading(false);
      console.log("User registered:", response.data);
      alert("Registration successful!");
      navigate("/login");
    } catch (error) {
      setIsLoading(false);
      console.error(
        "Error registering user:",
        error.response?.data || error.message
      );
      console.log(error);
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-[#121212]">
      <>
        <header className="fixed top-0 z-10 mx-auto w-full bg-[#121212] p-6 text-white lg:px-10 bg-transparent">
          <div className="mr-4 w-12 absolute shrink-0 sm:w-16">
            <svg
              className="width:100%"
              viewBox="0 0 63 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M47.25 47.458C55.9485 38.7595 55.9485 24.6565 47.25 15.958C38.5515 7.25952 24.4485 7.25952 15.75 15.958C7.05151 24.6565 7.05151 38.7595 15.75 47.458C24.4485 56.1565 38.5515 56.1565 47.25 47.458Z"
                stroke="#E9FCFF"
                strokeWidth="1.38962"
                strokeMiterlimit="10"
              ></path>
              <path
                d="M10.5366 47.7971V17.5057C10.5366 16.9599 11.1511 16.6391 11.599 16.9495L33.4166 32.0952C33.8041 32.3639 33.8041 32.9368 33.4166 33.2076L11.599 48.3533C11.1511 48.6657 10.5366 48.3429 10.5366 47.7971Z"
                stroke="url(#paint0_linear_53_10115)"
                strokeWidth="6.99574"
                strokeMiterlimit="10"
                strokeLinecap="round"
              ></path>
              <path
                d="M18.1915 27.6963C20.1641 27.6963 21.7285 28.7066 21.7285 30.9021C21.7285 33.0976 20.1621 34.2433 18.1915 34.2433H16.8854V37.8677H14.1733V27.6984H18.1915V27.6963Z"
                fill="#E9FCFF"
              ></path>
              <path
                d="M25.2053 27.6963V35.4868H28.484V37.8657H22.4932V27.6963H25.2053Z"
                fill="#E9FCFF"
              ></path>
              <path
                d="M35.3142 27.6963L39.4553 37.8657H36.5328L35.9162 36.1763H32.1939L31.5773 37.8657H28.6548L32.7959 27.6963H35.3101H35.3142ZM34.9143 33.5663L34.2144 31.7832C34.1582 31.6395 33.954 31.6395 33.8978 31.7832L33.1979 33.5663C33.1541 33.6767 33.2354 33.7975 33.3562 33.7975H34.756C34.8747 33.7975 34.958 33.6767 34.9143 33.5663Z"
                fill="#E9FCFF"
              ></path>
              <path
                d="M40.9491 27.6963L42.8592 30.5188L44.7694 27.6963H48.0355L44.2132 33.2559V37.8657H41.5011V33.2559L37.6787 27.6963H40.9449H40.9491Z"
                fill="#E9FCFF"
              ></path>
              <path
                d="M16.894 32.1396V29.9129C16.894 29.8212 16.9982 29.7671 17.0732 29.8191L18.6771 30.9315C18.7417 30.9773 18.7417 31.0731 18.6771 31.1189L17.0732 32.2313C16.9982 32.2834 16.894 32.2313 16.894 32.1375V32.1396Z"
                fill="#232323"
              ></path>
              <defs>
                <linearGradient
                  id="paint0_linear_53_10115"
                  x1="2.23416"
                  y1="20.3361"
                  x2="26.863"
                  y2="44.9649"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#007EF8"></stop>
                  <stop offset="1" stopColor="#FF4A9A"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </header>
        <div className="mx-auto flex w-full max-w-4xl flex-col items-stretch justify-start gap-6 p-6 pt-20">
          <form
            className="mx-auto flex w-full max-w-4xl flex-col items-stretch justify-start gap-6 p-6 pt-20"
            onSubmit={handleSubmit}
          >
            <div className="w-full">
              <h1 className="mb-2 text-4xl font-extrabold text-white">
                Register
              </h1>
              <p className="text-sm text-slate-400">
                Before we start, please create your account
              </p>
            </div>
            <div className="flex flex-col gap-4">
              {/* Input Fields */}
              {[
                {
                  label: "Full name",
                  name: "fullName",
                  placeholder: "Enter a full name...",
                },
                {
                  label: "Email",
                  name: "email",
                  placeholder: "Enter an email...",
                },
                {
                  label: "Username",
                  name: "username",
                  placeholder: "Enter a username...",
                },
                {
                  label: "Password",
                  name: "password",
                  placeholder: "Enter a password...",
                  type: "password",
                },
              ].map(({ label, name, placeholder, type = "text" }) => (
                <div
                  className="flex w-full flex-col items-start justify-start gap-2"
                  key={name}
                >
                  <label className="text-xs text-slate-200">{label}</label>
                  <input
                    name={name}
                    placeholder={placeholder}
                    autoComplete="off"
                    type={type}
                    className="w-full border-[1px] border-white bg-black p-3 text-white placeholder:text-gray-500"
                    value={formData[name]}
                    onChange={handleChange}
                  />
                </div>
              ))}

              {/* File Uploads */}
              {[
                { label: "Upload Avatar", id: "avatarImage" },
                { label: "Upload Cover Image", id: "coverImage" },
              ].map(({ label, id }) => (
                <div
                  className="flex w-full flex-col items-start justify-start gap-2"
                  key={id}
                >
                  <label className="text-xs text-slate-200">{label}</label>
                  <input
                    type="file"
                    id={id}
                    className="w-full border-[1px] border-white bg-black p-3 text-white"
                    accept="image/*"
                    onChange={handleFileChange}
                  />
                </div>
              ))}

              {/* Create Account Button */}
              <button
                type="submit"
                className="w-full bg-[#ae7aff] p-3 text-center font-bold text-black shadow-[5px_5px_0px_0px_#4f4e4e] transition-all duration-150 ease-in-out active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#4f4e4e]"
              >
                {isLoading ? (
                  <Loading /> // Display loading spinner while processing
                ) : (
                  "Create Account"
                )}
              </button>
              <p className="mt-6 text-sm font-light text-white">
                Already registered?{" "}
                <span className="cursor-pointer font-bold hover:underline">
                  <Link to="/login">Sign in to your account</Link>
                </span>
              </p>
            </div>
          </form>
        </div>
      </>
    </div>
  );
};

export default Register;
