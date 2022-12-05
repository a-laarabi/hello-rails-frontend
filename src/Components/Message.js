import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMessages } from '../Redux/messageSlice';

const Message = () => {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.message);

  useEffect(() => {
    dispatch(fetchMessages());
  }, [dispatch]);

  return (
    <div className="greeting_div">
      <h1 className="heading">Refresh the page to see greeting in different languages</h1>
      <ul className="list">
        {message.map((message) => (
          <li className="list_item" key={message.id}>{message.greeting}</li>
        ))}
      </ul>
    </div>
  );
};

export default Message;
