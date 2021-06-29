import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import MainPage from "./MainPage";
import Workshop from "./Workshop";
import Classes from "./Classes";
import CopyrightNotice from "react-copyright-notice-component";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import InstagramIcon from "@material-ui/icons/Instagram";
import TelegramIcon from "@material-ui/icons/Telegram";
import EmailIcon from "@material-ui/icons/Email";

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
}));

function App() {
  const styles = useStyles();
  return (
    <HashRouter>
      <div>
        <Switch>
          <Route path="/" component={MainPage} exact />
          <Route path="/classes" component={Workshop} />
          <Route path="/workshop" component={Classes} />
          {/* <Route component={Error} /> */}
        </Switch>
        <div className="custom-center" style={{ marginTop: "15px" }}>
          <a href="https://t.me/RiaGohel">
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
          </a>
          <a href="https://www.instagram.com/kidsdrawingclasses/">
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
          </a>
          <a
            class="mailto"
            href="mailto:riag2000@gmail.com?subject=Enquiry about class"
          >
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
          </a>
        </div>
        <div
          className="custom-center"
          style={{
            fontSize: "13px",
            fontWeight: "bold",
            marginTop: "7px",
          }}
        >
          <CopyrightNotice copyrightHolder="CRYSTAL"></CopyrightNotice>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
