import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { SingleSection } from "./single/SingleSection";
import { MultiSection } from "multi/MultiSecion";

export const App = () => {
  return (
    <Routes>
      <Route key="" path="" element={<Navigate to="single" />} />
      <Route key="single" path="single" element={<SingleSection />} />
      <Route key="multi" path="multi" element={<MultiSection />} />
    </Routes>
  );
};
