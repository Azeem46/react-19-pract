import Search from "./components/Search";
import { useState } from "react";
const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <main>
      <div className="pattern">
        <div className="wrapper">
          <header>
            <img src="./hero.png" alt="Hero Banner" />
            <h1>
              Find <span className="text-gradient">Moviess</span>You'll Enjoy
              Without the Hassle
            </h1>
          </header>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>
      </div>
    </main>
  );
};

export default App;
