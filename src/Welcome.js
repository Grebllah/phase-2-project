import { useState, useEffect } from "react"
import NavBar from "./NavBar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function Welcome() {

  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Welcome to the M:tG Lore and Custom Legend Page</h1>
      </main>
    </div>
  );
};

export default Welcome;

