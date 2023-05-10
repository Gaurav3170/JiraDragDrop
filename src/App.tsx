import { useState } from "react";
import "./App.css";
import { Container } from "./components";
import NewStory from "./components/NewStory";

function App() {
  const [showNewStory, setShowNewStory] = useState(false);

  const [boards, setBoards] = useState([
    {
      id: 1,
      title: "Ready For Development",
      stories: [
        {
          id: 10,
          title: "Implement Cache",
          description: "Implement SSR cache from request payload",
          storyPoints: 3,
        },
        {
          id: 11,
          title: "Implement Local Storage",
          description: "Implement SSR local storage from request payload",
          storyPoints: 5,
        },
        {
          id: 12,
          title: "Implement CSR Storage",
          description: "Implement CSR cache from request payload",
          storyPoints: 3,
        },
      ],
    },
    {
      id: 2,
      title: "In Progress",
      stories: [],
    },
    {
      id: 3,
      title: "Done",
      stories: [],
    },
  ]);

  return (
    <>
      <header
        style={{
          backgroundColor: "rgba(200,200,200,0.3)",
          textAlign: "center",
          fontSize: "20px",
          padding: "10px",
          fontWeight: "500",
        }}
      >
        <span className="title">GK Projects Jira Clone</span>
        <button onClick={() => setShowNewStory(!showNewStory)}>{showNewStory ? 'Back' : 'New Story' }</button>
      </header>
      <div className="App">
        {showNewStory ? <NewStory boards={boards} setBoards={setBoards} setShowNewStory={setShowNewStory}/> : <Container initialData={boards} />}
      </div>
    </>
  );
}

export default App;
