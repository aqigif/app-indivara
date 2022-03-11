import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { serviceLogin } from "../services/auth";
import { useSMState, useSMUpdater } from "./useSM";

const useAuth = (params) => {
  const navigate = useNavigate();
  const dispatch = useSMUpdater();
  const state = useSMState();

  useEffect(() => {
    if (!state?.token && params === "protected") {
      navigate("/login");
    }
    if (state?.token && params === "no-auth-only") {
      navigate("/pokemons/cart");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params, state]);

  const doLogin = async ({ email, password }) => {
    try {
      const payload = await serviceLogin({ email, password }); // post service login
      if (payload?.status === 200) { // service login success
        dispatch({
          type: "DO_LOGIN",
          token: payload?.data?.token,
        });
        return {
          token: payload?.data?.token,
        };
      } else throw payload;
    } catch (error) { // service login error
      return error?.response || error;
    }
  };

  const doLogout = async () => {
    dispatch({
      type: "DO_LOGOUT",
    });
    navigate("/login");
  };

  return { doLogin, token: state?.token, doLogout };
};

export default useAuth;
