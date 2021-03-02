import React, { createContext, useEffect, useState } from "react";
import { auth } from "../FirebaseConfig";
export const UserContext = createContext();

export const Sign_In_Context = (props) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged(function (usr) {
      if (usr) {
        const { email } = usr;
        const updateUser = {
          isSignIn: true,
          email: email,
        };
        setUser(updateUser);
      } else {
        setUser(null);
      }
    });
  }, []);
  console.log(user, "context");
  return (
    <UserContext.Provider value={[user, setUser]}>
      {props.children}
    </UserContext.Provider>
  );
};
