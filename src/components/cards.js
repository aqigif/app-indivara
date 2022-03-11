import AddIcon from "@mui/icons-material/Add";
import { Card, IconButton, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function PokemonCard({ onClick, id, name, img, item, index }) {
  const navigate = useNavigate()
  return (
    <Card
      style={{
        margin: 14,
        marginLeft: 0,
        marginRight: 28,
        marginBottom: 30,
        background: "white",
        padding: 10,
        borderRadius: 10,
        cursor: "pointer",
      }}
    >
      <img
        onClick={() => navigate(`/pokemons/${id}?name=${name}`)}
        src={img}
        alt="span"
        style={{ height: 200 }}
      />
      <div style={{ marginBottom: 4 }}>
        <Typography variant="h6" gutterBottom>
          {name}
        </Typography>
        <Typography variant="subtitle">Lorem ipsum is placeholder</Typography>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div />
        <IconButton
          size="small"
          style={{ backgroundColor: "#006cff", color: "white" }}
          onClick={(e) => {
            e.preventDefault();
            onClick(item, index);
          }}
        >
          <AddIcon />
        </IconButton>
      </div>
    </Card>
  );
}

export default PokemonCard;
