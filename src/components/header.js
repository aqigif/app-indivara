import MLink from "@mui/material/Link";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import * as React from "react";
import { Link } from "react-router-dom";

function Header(props) {
  const { sections, title } = props;

  return (
    <React.Fragment>
      <Toolbar
        sx={{ overflowX: "auto", borderBottom: 1, borderColor: "divider" }}
      >
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          noWrap
          sx={{ flex: 1 }}
        >
          {title}
        </Typography>
        {sections.map((section) => (
          <Link to={section.url} key={section.title} style={{textDecoration: "none"}}>
            <MLink noWrap variant="body2" sx={{ p: 1, flexShrink: 0,textDecoration: "none", color: "black"}}>
              {section.title}
            </MLink>
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;
