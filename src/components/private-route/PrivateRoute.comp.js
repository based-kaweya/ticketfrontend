import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { DefaultLayout } from "../../layout/DefaultLayout";

const isAuth = true;
export const PrivateRoute = () => {
  return (
    <>
      {isAuth ? (
        <DefaultLayout>
          <Outlet />
        </DefaultLayout>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
};
