const Row = (props: {
  text: string,
  nextRow: () => void
  isLastRow: boolean
}) => {
  const button = () => {
    if (props.isLastRow) {
      return <button onClick={props.nextRow}>Next</button>;
    }
  }

  return (
    <div>
      <p>{props.text}</p>
      {button()}
    </div>
  );
}

export default Row;