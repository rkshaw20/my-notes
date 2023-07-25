import * as React from "react";
import { ChakraProvider, Box, Grid, theme } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./features/Notes/Home";
import SignUp from "./features/Auth/SignUp";

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
    element: <Home />,
  },
]);

export const App = () => (
  <ChakraProvider theme={theme}>
    <ColorModeSwitcher justifySelf="flex-end" />
    <RouterProvider router={router} />
  </ChakraProvider>
);
