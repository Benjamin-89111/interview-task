import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

const Logout = () => {
  const history = useHistory();

  useEffect(() => {
    localStorage.setItem("user", "");
    history.push("/login");
    window.location.reload();
  }, [history]);

  return null;
};

export default Logout;