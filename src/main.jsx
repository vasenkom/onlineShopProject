import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Root, {
  loader as rootLoader,
  action as rootAction,
} from "./routes/root.jsx";
import ErrorPage from "./error-page.jsx";
import Contact from "./routes/contact.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
