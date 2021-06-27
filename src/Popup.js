import React, { useState } from "react";
import "./Popup.css";
import MuiPhoneNumber from "material-ui-phone-number";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import DateFnsUtils from "@date-io/date-fns";
import "date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "25ch",
  },
  formControl: {
    // margin: theme.spacing(1),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(5),
    minWidth: 220,
    maxWidth: 300,
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

const Popup = (props) => {
  const classes = useStyles();
  let [number, setNumber] = useState();
  function handleOnChange(value) {
    setNumber(value);
  }
  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  //   const classes = useStyles();
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>
          x
        </span>
        <div style={{ marginLeft: "8px", marginBottom: "5px" }}>Hey You!</div>
        <div>
          <TextField
            id="standard-full-width"
            label="Name"
            style={{ margin: 8 }}
            placeholder="Full Name"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
        <div>
          <TextField
            id="standard-full-width"
            label="Email ID"
            style={{ margin: 8 }}
            placeholder="Valid Email ID"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
        <div style={{ marginLeft: "8px", marginTop: "8px" }}>
          <MuiPhoneNumber
            label="Phone Number"
            defaultCountry={"in"}
            onChange={handleOnChange}
            placeholder={number}
          />
        </div>
        <div style={{ marginLeft: "8px" }}>
          <div style={{ display: "inline-block", marginRight: "8px" }}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="Pick a date"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
            </MuiPickersUtilsProvider>
          </div>
          <div
            style={{
              display: "inline-block",
            }}
          >
            <FormControl
              className={classes.formControl}
              style={{ marginTop: "15px" }}
            >
              <InputLabel id="demo-simple-select-label">
                Preferred Time
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                onChange={handleChange}
              >
                <MenuItem value={10}>10am to 12noon</MenuItem>
                <MenuItem value={20}>4pm to 6pm</MenuItem>
                <MenuItem value={30}>9pm to 10pm</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <div style={{ marginLeft: "40%", marginTop: "1px" }}>
          <Button
            variant="contained"
            color="secondary"
            onClick={props.handleClose}
          >
            submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
