import type { CommentType } from "../types/youtube";

export const commentsData: Array<CommentType> = [
  {
    name: "Atul",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, minima?",
    key: "1",
    replies: [],
  },
  {
    name: "Atul",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, minima?",
    key: "2",
    replies: [
      {
        name: "Atul",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, minima?",
        key: "3",
        replies: [
          {
            name: "Atul",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, minima?",
            key: "4",
            replies: [
              {
                name: "Atul",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, minima?",
                key: "5",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Atul",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, minima?",
    key: "6",
    replies: [
      {
        name: "Atul",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, minima?",
        key: "7",
        replies: [],
      },
    ],
  },
  {
    name: "Atul",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, minima?",
    key: "8",
    replies: [],
  },
  {
    name: "Atul",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, minima?",
    key: "9",
    replies: [],
  },
  {
    name: "Atul",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, minima?",
    key: "10",
    replies: [],
  },
];
