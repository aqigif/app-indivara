
function FooterAction({ todoIndex, value, setValue, handleAdd, handleUpdate }) {
  return (
    <>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      {todoIndex === null ? (
        <button onClick={handleAdd}>add</button>
      ) : (
        <button onClick={handleUpdate}>update</button>
      )}
    </>
  );
}

export default FooterAction;
