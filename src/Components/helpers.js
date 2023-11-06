import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

export const storeUser = (data) => {
  localStorage.setItem(
    "user",
    JSON.stringify({
      username: data.user.username,
      jwt: data.jwt,
    })
  );
};

export const userData = () => {
  const stringifiedUser = localStorage.getItem("user") || '""';
  return JSON.parse(stringifiedUser || {});
};

export const Protector = ({ Component }) => {
  const history = useHistory();

  const { jwt } = userData();

  useEffect(() => {
    if (!jwt) {
      history.push("/login");
    }
  }, [history, jwt]);

  return Component ;
};
