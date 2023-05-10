import React from "react";
import { BoardInterface } from "../interface/BoardInterface";

const NewStory = ({ boards, setBoards, setShowNewStory} : {boards: BoardInterface[], setBoards: Function, setShowNewStory: Function}) => {

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const { title, description, storyPoints } = event.target;
    
    const newStory = {
        'id': Math.ceil(Math.random()*1000),
        'title': title.value,
        'description': description.value,
        'storyPoints': storyPoints.value
    };

    
    let newBoards = [...boards];
    newBoards[0].stories?.unshift(newStory);
    console.log(newBoards);
    setBoards(newBoards);
    setShowNewStory(false);
  };

  return (
    <div className="newStory">
      <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="title">Title:</label>
            <input type="text" name="title" id="title" />
        </div>
        <div>
            <label htmlFor="description">Description:</label>
            <input type="text" name="description" id="description" />
        </div>
        <div>
            <label htmlFor="storyPoints">Story Points:</label>
            <input type="number" name="storyPoints" id="storyPoints" />
        </div>
        <div>
            <button type="submit">
              Submit
            </button>
            <button type="reset">Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default NewStory;
