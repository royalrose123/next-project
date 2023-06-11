export const handleMessageEmit = ({ socketRef, message }) => {
  socketRef.current.send(JSON.stringify(message));
};
