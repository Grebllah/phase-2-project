
import NavBar from "./NavBar";

function Welcome() {

  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <h1 className="pageDescrip">Welcome to the M:tG Lore and Custom Legend Page</h1>
        <p className="pageDescrip">Use the Navigation Bar above to view the two main sections of this app: a page for creating and storing customized Legendary cards, and a page for viewing Lore-related cards for each of the Planeswalkers, Magic's primary characters!</p>
        <img
          src="https://i.pinimg.com/originals/4f/26/a8/4f26a8e799691ee30f46559dde3eb3b8.png"
          className="App-logo"
          alt="logo"
        />
      </header>
      <main>
      </main>
    </div>
  );
};

export default Welcome;

