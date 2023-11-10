import NotFoundPage from "@/pages/NotFoundPage";
import SignInPage from "@/pages/SignInPage";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ROUTES } from "@/utils/routes";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.home} element={<SignInPage />} />
        <Route path={ROUTES.notFound} element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
