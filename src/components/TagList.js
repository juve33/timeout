function TagList({children, color}) {
  return (
    <ul className={"tags " + color}>
      {children}
    </ul>
  );
}

export default TagList;
