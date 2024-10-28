import React from "react";
import NavBar from "./components/Navbar";
import SideBox from "./components/SideBox";
import MainBox from "./components/MainBox";

function Main() {
  return (
    <main className="main">
      <SideBox />
      <MainBox />
    </main>
  );
}

export default function App() {
  return (
    <>
      <NavBar />
      <Main />
    </>
  );
}
