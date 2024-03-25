function Message() {
  const name = 'Chris';
  if (name)
    return <h1>Hello {name}</h1>;
  return <h1>Hello there</h1>;
}

export default Message;
