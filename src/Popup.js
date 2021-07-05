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
import Swal from "sweetalert2";
import axios from "axios";
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

  let [name, setName] = useState();
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  let [email, setEmail] = useState();
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const [time, setTime] = useState();
  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };

  const store = () => {
    const article = { name, email, phoneno: number, date: selectedDate, time };
    axios
      .post(
        "https://main-artclas-qeynzcwsqsmdbbvx-gtw.qovery.io/users/demorequest",
        article
      )
      .then((response) => {
        if (response.data === "Info saved") {
          Swal.fire({
            title: "Submitted successfully",
            text: "We will get back to you soon!",
            confirmButtonText: "OK",
          });
        } else if (response.data === "Not saved") {
          Swal.fire({
            title: "Failed",
            icon: "error",
            text: "Please try again",
            confirmButtonText: "OK",
          });
        } else {
          Swal.fire({
            title: "Failed",
            icon: "error",
            text: response.data,
            confirmButtonText: "OK",
          });
        }
      });
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
            onChange={handleNameChange}
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
            onChange={handleEmailChange}
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
                onChange={handleTimeChange}
              >
                <MenuItem value={"10am to 12noon"}>10am to 12noon</MenuItem>
                <MenuItem value={"4pm to 6pm"}>4pm to 6pm</MenuItem>
                <MenuItem value={"9pm to 10pm"}>9pm to 10pm</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <div style={{ marginLeft: "40%", marginTop: "1px" }}>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => {
              store();
              props.handleClose();
            }}
          >
            submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
