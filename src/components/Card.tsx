import React from "react";
import { StoryInterface } from "../interface/StoryInterface";
import styles from "../styles/Story.module.css";

export const Card = ({ storyData }: { storyData: StoryInterface }) => {
  const onDragStartHandler = (event: React.DragEvent<HTMLDivElement>) => {
    //transfer data while dragging and remove the story from board until dragEnd
    event.dataTransfer.setData("text/plain", storyData.id.toString());
    const element = event.target as HTMLDivElement;

    setTimeout(() => {
      element.classList.add(styles.toggle);
    }, 0);
  };

  const onDragEndHandler = (event: React.DragEvent<HTMLDivElement>) => {
    const element = event.target as HTMLDivElement;
    element.classList.remove(styles.toggle);
  };

  return (
    <div
      className={styles.story}
      draggable={true}
      onDragStart={onDragStartHandler}
      onDragEnd={onDragEndHandler}
    >
      <span className={styles.title}>{storyData.title}</span>
      <span className={styles.description}>{storyData.description}</span>
      <span className={styles.points}>
        Story Points: {storyData.storyPoints}
      </span>
    </div>
  );
};
