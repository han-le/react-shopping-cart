import React, { Component } from "react";

export default class FormValidation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        //Chua nhung text user nhap vao
        manv: "",
        tennv: "",
        email: "",
      },
      errors: {
        //Chua nhung thong bao khi user nhap SAI
        manv: "",
        tennv: "",
        email: "",
      },

      formValid: false, //Disbale Submit Button
      manvValid: false, //No error
      tennvValid: false,
      emailValid: false,
    };
  }

  handleOnChange = (event) => {
    let value = event.target.value;
    let name = event.target.name;

    this.setState({ values: { ...this.state.values, [name]: value } });
    //[name] : value la cu phap cua REact => Tu phan bo value vao lan luot tung name dung voi no
  };

  handleError = (event) => {
    let value = event.target.value;
    let name = event.target.name;

    //Neu click vao ma khong nhap, sau do click cho khac => bao loi

    let message = ""; //Chua thong bao loi

    let manvValid = this.state.manvValid;
    let tennvValid = this.state.tennvValid;
    let emailValid = this.state.emailValid;

    // let m = "";

    // if ((name = "tennv")) {
    //   m = "Ten Nhan Vien";
    // } else if ((name = "manv")) {
    //   m = "Ma Nhan Vien";
    // } else {
    //   m = "Email";
    // }

    if (value === "") {
      message = "PLEASE FILL IN " + name;
    }

    //Valid cac o input, dua vao name cua cac o input. message !== "" => ERROR
    switch (name) {
      case "manv":
        manvValid = message !== "" ? false : true; //message !== "" ? error : OK;

        //The length of manv must > 3
        if (value && value.length < 4) {
          manvValid = false;
          message = "Do dai ki tu lon hon 3";
        }

        break;
      case "tennv":
        tennvValid = message !== "" ? false : true;

        break;
      case "email":
        emailValid = message !== "" ? false : true;

        //Handle error: when value has text but dont meet the patter email @something.com
        if (value && !value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
          emailValid = false;
          message = "Email is invalid. Example: name@something.com";
        }

        break;

      default:
        break;
    }

    //message is empty => error => Update state
    this.setState(
      {
        errors: {
          ...this.state.errors,
          [name]: message,
        },
        manvValid,
        tennvValid,
        emailValid,
      },
      () => {
        console.log(this.state);
        this.handleFormValid();
      }
    );
  };

  handleFormValid = () => {
    //After get updated in state. If ALL of them is true => the form is ok and SUBMIT is enabled
    const manvValid = this.state.manvValid;
    const tennvValid = this.state.tennvValid;
    const emailValid = this.state.emailValid;

    this.setState({
      formValid: manvValid && tennvValid && emailValid,
    });
  };

  render() {
    return (
      <div className="container">
        <h3 className="title">*FormValidation</h3>
        <form>
          {/* ==== MA NHAN VIEN ==== */}
          <div className="form-group">
            <label>Ma Nhan Vien</label>
            <input
              type="text"
              className="form-control"
              name="manv"
              onChange={this.handleOnChange}
              onBlur={this.handleError} //onBlur: Click vao then click sang cho khac
              onKeyUp={this.handleError}
            />

            {/* MESSAGE WHEN ERROR, ONLY DISPLAY WHEN THERE IS ERROR */}

            {this.state.errors.manv !== "" ? (
              <div className="alert alert-danger">{this.state.errors.manv}</div>
            ) : (
              ""
            )}
          </div>

          {/* ==== INPUT TEN NHAN VIEN ==== */}
          <div className="form-group">
            <label>Ten Nhan Vien</label>
            <input
              type="text"
              className="form-control"
              name="tennv"
              onChange={this.handleOnChange}
              onBlur={this.handleError}
              onKeyUp={this.handleError}
            />

            {/* MESSAGE WHEN ERROR, ONLY DISPLAY WHEN THERE IS ERROR */}

            {this.state.errors.tennv !== "" ? (
              <div className="alert alert-danger">
                {this.state.errors.tennv}
              </div>
            ) : (
              ""
            )}
          </div>

          {/* ==== INPUT EMAIL ==== */}
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              onChange={this.handleOnChange}
              onBlur={this.handleError}
              onKeyUp={this.handleError}
            />

            {/* MESSAGE WHEN ERROR, ONLY DISPLAY WHEN THERE IS ERROR */}

            {this.state.errors.email !== "" ? (
              <div className="alert alert-danger">
                {this.state.errors.email}
              </div>
            ) : (
              ""
            )}
          </div>
          <button
            type="submit"
            className="btn btn-success"
            disabled={!this.state.formValid}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}
