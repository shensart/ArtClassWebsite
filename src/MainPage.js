import { CustomCard } from "./CustomCard";
import Color from "color";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { useHistory } from "react-router-dom";
import "./MainPage.css";

const useStyles = makeStyles(() => ({
  telecon: {
    backgroundColor: "#9381FF",
    color: "white",
    "&:hover": {
      backgroundColor: "#9381FF",
    },
  },
  instacon: {
    backgroundColor: "#9381FF",
    color: "white",
    "&:hover": {
      backgroundColor: "#9381FF",
    },
  },
  emailcon: {
    backgroundColor: "#9381FF",
    color: "white",
    "&:hover": {
      backgroundColor: "#9381FF",
    },
  },
  actionArea: {
    borderRadius: 16,
    transition: "0.2s",
    height: "200px",
    width: "150px",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  card: ({ color }) => ({
    minWidth: 25,
    borderRadius: 16,
    boxShadow: "none",
    "&:hover": {
      boxShadow: `0 6px 12px 0 ${Color(color)
        .rotate(-12)
        .darken(0.2)
        .fade(0.5)}`,
    },
  }),
  content: ({ color }) => {
    return {
      backgroundColor: color,
      padding: "1rem 1.5rem 1.5rem",
    };
  },
  title: {
    fontFamily: "Keania One",
    fontSize: "2rem",
    color: "#fff",
    textTransform: "uppercase",
  },
  subtitle: {
    fontFamily: "Montserrat",
    color: "#fff",
    opacity: 0.87,
    marginTop: "2rem",
    fontWeight: 500,
    fontSize: 14,
  },
}));
function MainPage() {
  const history = useHistory();

  const styles = useStyles({ color: "#FFB17A" });
  const styles2 = useStyles({ color: "#347FC4" });
  return (
    <div>
      <div id="headingdiv" className="custom-center">
        <h1 id="heading">Kids Drawing Classes</h1>
      </div>
      <div id="box" className="custom-center">
        <div
          style={{
            display: "inline-block",
            transform: "rotate(-20deg)",
            marginRight: "10px",
          }}
          onClick={() => {
            history.push("/workshop");
          }}
        >
          <CustomCard
            classes={styles}
            title={"Work Shop"}
            subtitle={"Be a Legend!"}
          />
        </div>
        <div
          style={{
            display: "inline-block",
            transform: "rotate(20deg)",
            marginLeft: "10px",
          }}
          onClick={() => {
            history.push("/classes");
          }}
        >
          <CustomCard
            classes={styles2}
            title={"Online Class"}
            subtitle={"Be a Legend!"}
          />
        </div>
      </div>
      <div>
        <div className="custom-center" id="linemargin"></div>
        <div style={{ textAlign: "center" }}>
          <p style={{ marginTop: "5px", marginBottom: "5px" }}>Hey there!😊</p>
          <p style={{ marginTop: "0", marginBottom: "5px" }}>
            Enjoy the world of art and colours! Checked out our online drawing
            classes?
          </p>
          <p style={{ marginTop: "0", marginBottom: "5px" }}>Interested?😉</p>
          <p style={{ marginTop: "0", marginBottom: "5px" }}>
            Get in touch with me for a demo class, or just some art chit-chat!
          </p>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
