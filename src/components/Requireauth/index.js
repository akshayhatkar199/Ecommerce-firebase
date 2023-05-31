import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { async } from "@firebase/util";
function RequireAuth({ children }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(true);
  const auth = getAuth

  

  const checkIsLogin = async () => {
    // const userId = localStorage.getItem("userId");
    // if (userId) {
    //   const data = await dispatch(checkLogin(userId));
    //   // console.log("data",data.payload?.info?.data)
    //   if (data.payload?.info) {
    //     setIsLogin(true);
    //   } else {
    //     setIsLogin(false);
    //     }
    //   } else {
    //     setIsLogin(false);
    //   }
    //     setLoading(false);
    
            const auth = getAuth();
           await onAuthStateChanged(auth, (user) => {
            if (user && user.emailVerified) {
                console.log("user------",user)
                setIsLogin(true);
                dispatch({
                          type: "LOGGED_IN_USER",
                          payload:{
                            email: user.email,
                            accessToken: user.accessToken
                          }
                        })
                        setLoading(false);        
              
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                // const uid = user.uid;
                // ...
            } else {
                console.log("User is signed out")
                // User is signed out
                setIsLogin(false);
                setLoading(false);        
              
                // ...
            }
            });


      };
      console.log("")

    useEffect(() => {
        checkIsLogin();
    }, []);

  if (loading) {
      return (
           <div className="d-flex align-items-center justify-content-center vh-100">
               {/* <img src={loader} /> */}
               Loading...
           </div>
    );
  }
  if (isLogin === false) {
    return <Navigate to="/login" />;
  }

  return <div>{children}</div>;
}

export default RequireAuth;
