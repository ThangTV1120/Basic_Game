import axios from "axios";
// import React from 'react'

const instance = axios.create({
    baseURL: 'http://localhost:3001',
  });
export default instance;