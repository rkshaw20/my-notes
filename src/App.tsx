import * as React from "react";
import { ChakraProvider, Box, Grid, theme } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./features/Notes/Home";
import SignUp from "./features/Auth/SignUp";
import Layout from "./Components/Layout/Layout";
import Archive from "./features/Notes/Archive";
import Trash from "./features/Notes/Trash";

const router = createBrowserRouter([
  {
    path: "/login",
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/archive", element: <Archive /> },
      { path: "/trash", element: <Trash /> },
    ],
  },
]);

export const App = () => (
  <ChakraProvider theme={theme}>

      {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
      <RouterProvider router={router} />
  </ChakraProvider>
);
