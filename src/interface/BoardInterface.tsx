import { StoryInterface } from "./StoryInterface";

export interface BoardInterface {
    id: number,
    title: string,
    stories: StoryInterface[] | undefined;
};