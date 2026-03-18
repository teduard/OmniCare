import ErrorPage from "../pages/ErrorPage";
import ExpenseRoutes from "./ExpenseRoutes";
import DashboardRoutes from "./DashboardRoutes";
import TaskifierRoutes from "./TaskifierRoutes";
import FitnessRoutes from "./FitnessRoutes";

import Landing from "../Landing";
import About from "../pages/About";
import Login from "../pages/Login";
import ShowWebLLM from "../pages/tools/ShowWebLLM.tsx";

import AppLauncher from "../components/AppLauncher";

const AppRoutes = [
  {
    path: "/",
    element: (
      <AppLauncher>
        <Landing />
      </AppLauncher>
    ),
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/tools/webllm",
    element: <ShowWebLLM />,
  },

  ...ExpenseRoutes.routes,
  ...DashboardRoutes.routes,
  ...TaskifierRoutes.routes,
  ...FitnessRoutes.routes,
  {
    path: "*",
    element: <ErrorPage />,
  },
];

export {
  AppRoutes,
  DashboardRoutes,
  ExpenseRoutes,
  TaskifierRoutes,
  FitnessRoutes,
};
