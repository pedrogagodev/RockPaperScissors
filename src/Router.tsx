import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { PlayGame } from "./pages/PlayGame";
import { Result } from "./pages/Result";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<PlayGame />} />
        <Route path="/result" element={<Result />} />
      </Route>
    </Routes>
  );
}
