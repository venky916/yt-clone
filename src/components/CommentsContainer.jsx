import React from 'react'

const commentsData = [
  {
    name: 'Venkatesh Maliga',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
    replies: [],
  },
  {
    name: 'Venkatesh Maliga',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quibusdam nisi ad pariatur doloribus officiis dolor amet accusantium iure facere, possimus assumenda at optio quaerat quos placeat? Fuga, sapiente delectus!',
    replies: [
      {
        name: 'Venkatesh Maliga',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quibusdam nisi ad pariatur doloribus officiis dolor amet accusantium iure facere, possimus assumenda at optio quaerat quos placeat? Fuga, sapiente delectus!',
        replies: [
          {
            name: 'Venkatesh Maliga',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
            replies: [],
          },
          {
            name: 'Venkatesh Maliga',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
            replies: [
              {
                name: 'Venkatesh Maliga',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
                replies: [],
              },
            ],
          },
        ],
      },
      {
        name: 'Venkatesh Maliga',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quibusdam nisi ad pariatur doloribus officiis dolor amet accusantium iure facere, possimus assumenda at optio quaerat quos placeat? Fuga, sapiente delectus!',
        replies: [],
      },
    ],
  },
];

const Comment = ({data}) =>{
    const {name , text , replies} = data;
    return <div className='flex shadow-sm bg-gray-100 p-2 rounded-lg my-2'>
        <img className='w-12 h-12' alt="user" src='https://static.vecteezy.com/system/resources/previews/000/576/206/original/vector-sign-of-people-icon.jpg' />
        <div className='px-3 line-clamp-2'>
            <p className='font-semibold'>{name}</p>
            <p className='tracking-tighter'>{text}</p> 
        </div>
    </div>
}

const CommentsList = ({comments})=>{
    return comments.map((comment, index) => (
      <div key={index}>
        <Comment data={comment} />
        <div className="pl-5 border border-l-black ml-5 ">
          <CommentsList comments={comment.replies} />
        </div>
      </div>
    ));
}


const CommentsContainer = () => {
  return (
    <div className='m-5 p-2 w-full border'>
        <h1 className='text-3xl font-bold'>Comments : </h1>
        <CommentsList comments = {commentsData} />
    </div>
  )
}

export default CommentsContainer