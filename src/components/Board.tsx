import React from "react";
import { BoardInterface } from "../interface/BoardInterface";
import styles from "../styles/Board.module.css";
import { Card } from "./Card";
import { StoryInterface } from "../interface/StoryInterface";

export const Board = ({ boardData, resetBoardData }: { boardData: BoardInterface, resetBoardData: Function }) => {

  const onDragOverHandler = (event: React.DragEvent) => {
    event.preventDefault();
    const element = event.target as HTMLDivElement;
    element.closest('.board')?.classList.add(styles.borderDragOver);    
  };
  
  const onDragLeaveHandler = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const element = event.target as HTMLDivElement;
    element.closest('.board')?.classList.remove(styles.borderDragOver);
  };
  
  const onDragEndHandler = (event: React.DragEvent) => {
    event.preventDefault();
    const element = event.target as HTMLDivElement;
    element.closest('.board')?.classList.remove(styles.borderDragOver);
  }
  
  const onDropHandler = (event: React.DragEvent) => {
    event.preventDefault();
    const element = event.target as HTMLDivElement;
    element.closest('.board')?.classList.remove(styles.borderDragOver);
    const storyId = parseInt(event.dataTransfer.getData('text'));
    const boardId = boardData.id;
    resetBoardData(storyId, boardId);    
  }

  return (
    <div
      className={`board ${styles.board}`}
      onDragOver={onDragOverHandler}
      onDragLeave={onDragLeaveHandler}
      onDragEnd={onDragEndHandler}
      onDrop={onDropHandler}
    >
      {boardData.title}
      <hr />
      {boardData.stories?.map((story: StoryInterface) => (
        <Card key={story.id} storyData={story} />
      ))}
    </div>
  );
};
