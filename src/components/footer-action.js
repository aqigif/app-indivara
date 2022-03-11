import { Button, TextField } from "@mui/material";

function FooterAction({ todoIndex, value, setValue, handleAdd, handleUpdate }) {
  return (
    <>
      <TextField
        size="small"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {todoIndex === null ? (
        <Button variant="contained" disableElevation onClick={handleAdd}>
          add
        </Button>
      ) : (
        <Button color="secondary" variant="contained" disableElevation onClick={handleUpdate}>
          update
        </Button>
      )}
    </>
  );
}

export default FooterAction;
