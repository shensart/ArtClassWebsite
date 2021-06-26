import { CustomCard } from "./CustomCard";
import Color from "color";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import InstagramIcon from "@material-ui/icons/Instagram";
import TelegramIcon from "@material-ui/icons/Telegram";
import EmailIcon from "@material-ui/icons/Email";
import CopyrightNotice from "react-copyright-notice-component";
import React from "react";
import { useHistory } from "react-router-dom";

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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            fontFamily: "Chewy",
            fontSize: "100px",
            marginTop: "10px",
            marginBottom: "0",
          }}
        >
          Kids Drawing Classes
        </h1>
      </div>
      <div style={{ marginLeft: "35%", marginTop: "45px" }}>
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
            // image={
            //   "https://steamcdn-a.akamaihd.net/apps/dota2/images/blog/play/dota_heroes.png"
            // }
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
            // image={
            //   "https://steamcdn-a.akamaihd.net/apps/dota2/images/blog/play/dota_heroes.png"
            // }
          />
        </div>
      </div>
      <div>
        <div
          style={{
            borderTop: "10px solid #cc6",
            marginTop: 50,
            marginLeft: "10%",
            marginRight: "10%",
          }}
        ></div>
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
      {/* <div style={{ marginLeft: "42%", marginTop: "15px" }}>
        <div
          style={{
            display: "inline-block",
            marginLeft: "10px",
          }}
        >
          <Fab className={styles.telecon} size="medium" aria-label="add">
            <TelegramIcon />
          </Fab>
        </div>
        <div
          style={{
            display: "inline-block",
            marginLeft: "10px",
          }}
        >
          <Fab
            className={styles.instacon}
            size="medium"
            color="secondary"
            aria-label="add"
          >
            <InstagramIcon />
          </Fab>
        </div>
        <div
          style={{
            display: "inline-block",
            marginLeft: "10px",
          }}
        >
          <Fab
            className={styles.emailcon}
            size="medium"
            backgroundColor="red"
            aria-label="add"
          >
            <EmailIcon />
          </Fab>
        </div>
      </div> */}
      {/* <div
        style={{
          fontSize: "13px",
          fontWeight: "bold",
          marginLeft: "45%",
          marginTop: "7px",
        }}
      >
        <CopyrightNotice copyrightHolder="CRYSTAL"></CopyrightNotice>
      </div> */}
    </div>
  );
}

export default MainPage;
