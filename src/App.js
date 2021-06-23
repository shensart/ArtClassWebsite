import { CustomCard } from "./CustomCard";
import Color from "color";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
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
function App() {
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
    </div>
  );
}

export default App;
