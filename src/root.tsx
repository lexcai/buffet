import React, { useState } from "react";
import { UserContext } from "./config/userContext";
import Application from "./App";

const Root = () => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Application />
    </UserContext.Provider>
  );
};

export default Root;
