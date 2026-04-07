// src/api/subscriptionApi.js
import axios from "axios";

const SUBSCRIPTION_API = `${process.env.REACT_APP_BACKEND_URL}/api/subscription`;

export const upgradeSubscription = async (planType, amount) => {
  const token = localStorage.getItem("token");

  return await axios.post(
    `${API_URL}/upgrade`,
    { planType, amount },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};