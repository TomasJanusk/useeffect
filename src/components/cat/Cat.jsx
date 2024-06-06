const Cat = (props) => {
  return (
    <li>
      <h1>{props.name}</h1>
      <ul>
        <li>
          <p>{props.description}</p>
        </li>
      </ul>
    </li>
  );
};
export default Cat;
