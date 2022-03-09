function ListItem({ index, item, handleDone, handleGet, handleRemove }) {
  return (
    <span key={index} style={styles.container}>
      <p
        onClick={() => {
          handleDone(index);
        }}
        className={`p-pointer ${item.isDone ? "p-done" : ""}`}
      >
        {item.name}
      </p>
      <span
        style={{ marginLeft: 10, cursor: "pointer", color: "red" }}
        onClick={() => {
          handleRemove(item);
        }}
      >
        x
      </span>
      <span
        style={{ marginLeft: 10, cursor: "pointer", color: "blue" }}
        onClick={() => handleGet({ item, index })}
      >
        edit
      </span>
    </span>
  );
}

export const styles = {
    container: { display: "flex", alignItems: "center" }
}

export default ListItem;
