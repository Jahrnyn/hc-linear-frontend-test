import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/navbar/Navbar";
import Task from "./page/task/Task";
import { APP_ROUTES } from "./config/routes.ts";
import BusesListPage from "./page/buses/BusesListPage";
import BusDetailPage from "./page/buses/BusDetailPage";
import BoardPage from "./page/board/BoardPage";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path={APP_ROUTES.TASK} element={<Task />} />
        <Route path={APP_ROUTES.BUS_CRUD} element={<BusesListPage />} />
        <Route path="/buses/:id" element={<BusDetailPage />} />
        <Route path={APP_ROUTES.BOARD} element={<BoardPage />} />
      </Routes>
    </BrowserRouter>
  );
}
