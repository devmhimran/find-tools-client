import { useEffect, useState } from "react";
import auth from "../firebase.init";
import { signOut } from "firebase/auth";

const useAdminCheck = (user) => {
  const [admin, setAdmin] = useState(false);
  const [adminLoader, setAdminLoader] = useState(true);
  useEffect(() => {
    const email = user?.email;
    if (email) {
      fetch(`https://find-tools-server.vercel.app/admin/${email}`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => {
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem("accessToken");
          }
          return res.json();
        })
        .then((data) => {
          setAdmin(data.admin);
          setAdminLoader(false);
        });
    }
  }, [user]);

  return [admin, adminLoader];
};

export default useAdminCheck;
