import React, { useState } from "react";
import { BoardInterface } from "../interface/BoardInterface";
import { Board } from "./Board";
import styles from "../styles/Container.module.css";

export const JiraContainer = ({
  initialData,
}: {
  initialData: BoardInterface[];
}) => {
  const [boardData, setBoardData] = useState(initialData);

  const resetBoardData = (storyId: string, targetBoardId: string) => {
    let currentStory: any = null;
    const filteredStory = [];
    for (let i = 0; i < boardData.length; i++) {
      const data = boardData[i];
      const Story = data.stories?.find((story) => story?.id === parseInt(storyId));
      if(Story) {
        currentStory = Story;
      }
      const newStories = data.stories?.filter((story) => story?.id !== parseInt(storyId));
      data.stories = newStories;
      filteredStory.push(data);
    }

    const latestBoardData = filteredStory.map((board) => {
      if(board.id === parseInt(targetBoardId)){
        board.stories?.push(currentStory);
      }
      return board;
    })
    setBoardData(latestBoardData);
  };

  return (
    <div className={styles.container}>
      {boardData.map((data: BoardInterface) => (
        <Board key={data.id} boardData={data} resetBoardData={resetBoardData} />
      ))}
    </div>
  );
};
