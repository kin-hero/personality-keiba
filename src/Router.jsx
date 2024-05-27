import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import QuestionPage from "./pages/QuestionPage";
import ResultPage from "./pages/ResultPage";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/questions/:id",
      element: <QuestionPage />,
    },
    {
      path: "/results",
      element: <ResultPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
