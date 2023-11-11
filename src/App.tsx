import NotFoundPage from "@/pages/NotFoundPage";
import SignInPage from "@/pages/SignInPage";
import SignUpPage from "@/pages/SignUpPage";

import { Route, Routes } from "react-router-dom";

import NavMenu from "@/components/NavMenu";
import { ROUTES } from "@/utils/routes";

export default function App() {
  return (
    <>
      <NavMenu />
      <Routes>
        <Route path={ROUTES.home} element={<SignInPage />} />
        <Route path={ROUTES.signUp} element={<SignUpPage />} />
        <Route path={ROUTES.notFound} element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
