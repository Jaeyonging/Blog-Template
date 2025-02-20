import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

const fetchComments = async () => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/comments");
  return response.data;
};

export const Home = () => {

  return (
    <div className="mainpage">
      hoe
    </div>
  );
};
