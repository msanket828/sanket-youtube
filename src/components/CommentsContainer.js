import React from "react";
import { BiUserCircle } from "react-icons/bi";
import { v4 as uuidv4 } from "uuid";

const commentsData = [
  {
    name: "Sanket Mane",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, fuga?",
    replies: [
      {
        name: "Sanket Mane",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, fuga?",
        replies: [
          {
            name: "Sushil Jadhav",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing",
            replies: [
              {
                name: "Aditya sawant",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Sanket Mane",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, fuga?",
  },
  {
    name: "Sanket Mane",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, fuga?",
  },
  {
    name: "Sanket Mane",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, fuga?",
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex items-start bg-gray-100 mb-4 p-2">
      <BiUserCircle className="w-8 h-8 object-contain" />
      <div className="ml-2">
        <h1 className="font-semibold text-lg">{name}</h1>
        <p className="text-base font-normal">{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return (
    comments &&
    comments.map((comment) => {
      return (
        <div key={uuidv4()}>
          <Comment data={comment} />
          <div className="ml-5 pl-5 border-l-2 border-black">
            <CommentsList comments={comment.replies} />
          </div>
        </div>
      );
    })
  );
};

function CommentsContainer() {
  return (
    <div className="mt-10">
      <h1 className="font-bold text-2xl mb-5">Comments</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
}

export default CommentsContainer;
