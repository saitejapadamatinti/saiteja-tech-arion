import React, { useState, useEffect } from "react";
import "./index.css";

function GorestAPI() {
  const [apiData, setApiData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState({ status: false, message: "" });

  const fetchApiData = async (comingUrl) => {
    setIsLoading(true);
    setIsError({ status: false, message: "" });
    try {
      const response = await fetch(comingUrl);
      const data = await response.json();
      const fetchedData = data.data;
      setApiData(fetchedData);
      setIsLoading(false);
      setIsError({ status: false, message: "" });
    } catch (error) {
      setIsLoading(false);
      setIsError({ status: true, message: error });
    }
  };

  useEffect(() => {
    fetchApiData("https://gorest.co.in/public/v1/todos");
  }, []);

  if (isLoading) {
    return (
      <div>
        <h1>Loading....</h1>
      </div>
    );
  }

  if (isError && isError.status) {
    return (
      <div>
        <h3> Something went wrong, Please try again!</h3>
      </div>
    );
  }

  return (
    <div className="gorest-container">
      <div className="title">
        <h3>Gorest API</h3>
      </div>
      <div className="gorest-center">
        {apiData.map((eachIterm) => {
          const { id, title, user_id, due_on, status } = eachIterm;

          return (
            <article className="eachCard" key={id}>
              <div className="each-tile">
                <div>user id :</div>
                <div>{user_id}</div>
              </div>
              <div className="each-tile">
                <div>title :</div>
                <div>{title}</div>
              </div>
              <div className="each-tile">
                <div>due date :</div>
                <div>{due_on}</div>
              </div>
              <div className="each-tile">
                <div>status :</div>
                <div>{status}</div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default GorestAPI;
