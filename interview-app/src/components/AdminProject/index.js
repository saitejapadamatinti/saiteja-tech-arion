import React, { useState } from "react";
import "./index.css";

function AdminProject() {
  const [fullName, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState({ status: false, message: "" });

  const API_URL = "https://admin.srkprojects.com/web/api/client/v1/contact-us/";

  const changeName = (e) => {
    setFullname(e.target.value);
  };

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  const changeContactMessage = (e) => {
    setContactMessage(e.target.value);
  };

  const sendPushRequest = async (e) => {
    if (!fullName || !email || !contactMessage) {
      alert("Please enter all input fields");
      return;
    }

    e.preventDefault();
    setIsLoading(true);
    setIsError({ status: false, message: "" });
    const reqData = {
      email: email,
      message: contactMessage,
      name: fullName,
    };

    const options = {
      method: "POST",
      body: JSON.stringify(reqData),
    };
    try {
      const response = await fetch(API_URL, options);
      console.log(response);
      if (response.status === 404) {
        throw new Error("404 page not found");
      }

      setIsLoading(false);
      setIsError({ status: false, message: "" });
    } catch (error) {
      setIsLoading(false);
      setIsError({ status: true, message: error.message });
    }
  };

  return (
    <div className="adminproject">
      <div className="admin-center">
        {isLoading && <h1>Loading...</h1>}
        <form className="form-container">
          <div className="input-container">
            <input
              type="text"
              placeholder="enter your name"
              id="fullname"
              value={fullName}
              onChange={changeName}
            />
          </div>
          <div className="input-container">
            <input
              type="email"
              placeholder="enter your email"
              id="email"
              value={email}
              onChange={changeEmail}
            />
          </div>
          <div className="input-container">
            <input
              type="text"
              placeholder="enter your message"
              id="fullname"
              value={contactMessage}
              onChange={changeContactMessage}
            />
          </div>
          <div>
            <button onClick={sendPushRequest} type="submit">
              Submit
            </button>
          </div>
          <h2 className="admin-error">
            {isError &&
              isError.message &&
              (isError.message || "Something went wrong, please try again")}
          </h2>
        </form>
      </div>
    </div>
  );
}

export default AdminProject;
