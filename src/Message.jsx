function Message() {
  const name = "Ashwani";
  // null check on name
  if (name) {
    return <h1> {name} Says hello</h1>;
  }
  return <h1> Hello </h1>;
}

export default Message;
