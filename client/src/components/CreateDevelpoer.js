import React, { Component } from "react";
import AuthNavbar from "./AuthNavbar";
import "../style/register.css";
import { Label, Input, FormFeedback } from "reactstrap";

class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      skills: "",
      score: "",
      experience: "",
      linkedin: "",
      location: "",
      reference: "",

      touched: {
        firstname: false,
        lastname: false,
        email: false,
        phone: false,
        skills: false,
        score: false,
        experience: false,
        location: false,
        linkedin: false,
        reference: false,
        message: false
      },
      isEnable: true
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
      isEnable: false
    });
  };

  handleSubmit = e => {
    console.log(this.state);
    e.preventDefault();

    this.setState({
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      skills: "",
      score: "",
      experience: "",
      location: "",
      linkedin: "",
      reference: "",

      touched: {
        firstname: false,
        lastname: false,
        email: false,
        phone: false,
        skills: false,
        score: false,
        experience: false,
        location: false,
        linkedin: false,
        reference: false
      },
      isEnable: true
    });
  };
  handleBlur = feild => event => {
    this.setState({
      touched: { ...this.state.touched, [feild]: true }
    });
  };

  validate = (
    firstname,
    lastname,
    email,
    phone,
    skills,
    score,
    experience,
    location,
    linkedin,
    reference
  ) => {
    const error = {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      skills: "",
      score: "",
      experience: "",
      location: "",
      linkedin: "",
      reference: "",
      isEnable: false
    };

    if (this.state.touched.email && email.length < 1) {
      error.email = "Please provide a valid email address";
      error.isEnable = true;
    }

    if (this.state.touched.firstname && firstname.length < 3) {
      error.firstname = "First Name must contains atleast 3 charchters";
      error.isEnable = true;
    } else if (this.state.touched.firstname && firstname.length > 20) {
      error.firstname = "First Name can contains atmost 20 charchters";
      error.isEnable = true;
    }

    if (this.state.touched.lastname && lastname.length < 3) {
      error.lastname = "Last Name must contains atleast 3 charchters";
      error.isEnable = true;
    } else if (this.state.touched.lastname && lastname.length > 20) {
      error.lastname = "lastname can contains atmost 20 charchters";
      error.isEnable = true;
    }
    if (this.state.touched.phone && phone.length < 8) {
      error.phone = "Phone must contain atleast 8 letters";
      error.isEnable = true;
    } else if (this.state.touched.phone && phone.length > 20) {
      error.phone = "Phone length must be less then 20";
      error.isEnable = true;
    }
    if (this.state.touched.skills && skills.length < 1) {
      error.skills = "Skill field can not be empty.";
      error.isEnable = true;
    }
    if (this.state.touched.score && score.length < 1) {
      error.score = "Score Field cannot be empty.";
      error.isEnable = true;
    } else if (parseInt(score) < 0) {
      error.score = "Score cannot be negative. Please provide a valid Score.";
      error.isEnable = true;
    }
    if (this.state.touched.experience && experience.length < 1) {
      error.experience = "Experience Field cannot be empty.";
      error.isEnable = true;
    } else if (parseInt(experience) < 0) {
      error.experience =
        "Experience cannot be negative. Please enter correctly!";
      error.isEnable = true;
    }
    if (this.state.touched.location && location.length < 1) {
      error.location = "Location Field cannot be empty.";
      error.isEnable = true;
    }

    if (this.state.touched.linkedin && linkedin.length < 1) {
      error.linkedin = "Please provide a valid linkedin Profile";
      error.isEnable = true;
    }
    if (this.state.touched.reference && reference.length < 1) {
      error.reference = "Please provide a valid Reference.";
      error.isEnable = true;
    }

    return error;
  };

  render() {
    const errors = this.validate(
      this.state.firstname,
      this.state.lastname,
      this.state.email,
      this.state.phone,
      this.state.skills,
      this.state.score,
      this.state.experience,
      this.state.location,
      this.state.reference,
      this.state.linkedin
    );
    const isEnable =
      errors.isEnable ||
      !(
        this.state.touched.firstname &&
        this.state.touched.lastname &&
        this.state.touched.email &&
        this.state.touched.phone &&
        this.state.touched.skills &&
        this.state.touched.score &&
        this.state.touched.experience &&
        this.state.touched.location &&
        this.state.touched.reference &&
        this.state.touched.linkedin
      ) ||
      this.state.isEnable;

    return (
      <React.Fragment>
        <AuthNavbar />

        <section className="section">
          <div className="container">
            <h3>Create Developer Profile</h3>
            <div className="row">
              <div
                className="col-md-6 padding  offset-md-3"
                data-wow-delay=".2s"
              >
                <div className="row">
                  <div className="col-md-6 padding">
                    <div className="form-group">
                      <Label htmlFor="firstname" className="label">
                        First Name *
                      </Label>
                      <Input
                        id="firstname"
                        type="text"
                        name="firstname"
                        className="form-control"
                        placeholder="Please enter firstname"
                        value={this.state.firstname}
                        valid={
                          errors.firstname === "" &&
                          this.state.touched.firstname
                        }
                        invalid={errors.firstname !== ""}
                        onChange={this.handleChange}
                        onBlur={this.handleBlur("firstname")}
                      />
                      <FormFeedback>{errors.firstname}</FormFeedback>
                    </div>
                  </div>
                  <div className="col-md-6 padding">
                    <div className="form-group">
                      <label htmlFor="lastname" className="label">
                        Last Name *
                      </label>
                      <Input
                        id="lastname"
                        type="text"
                        name="lastname"
                        className="form-control"
                        placeholder="Please enter Surname "
                        value={this.state.lastname}
                        valid={
                          errors.lastname === "" && this.state.touched.lastname
                        }
                        invalid={errors.lastname !== ""}
                        onChange={this.handleChange}
                        onBlur={this.handleBlur("lastname")}
                      />
                      <FormFeedback>{errors.lastname}</FormFeedback>
                    </div>
                  </div>
                </div>
                {/* Email */}
                <div className="form-group label-floating">
                  <label htmlFor="email" className="label">
                    Email *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Please enter Email *"
                    value={this.state.email}
                    valid={errors.email === "" && this.state.touched.email}
                    invalid={errors.email !== ""}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur("email")}
                  />
                  <FormFeedback>{errors.email}</FormFeedback>
                </div>

                {/* Phone Number */}

                <div className="form-group label-floating">
                  <label htmlFor="phone" className="label">
                    Phone Number *
                  </label>
                  <Input
                    id="phone"
                    type="text"
                    name="phone"
                    className="form-control"
                    placeholder="Please enter your phone number *"
                    value={this.state.phone}
                    valid={errors.phone === "" && this.state.touched.phone}
                    invalid={errors.phone !== ""}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur("phone")}
                  />
                  <FormFeedback>{errors.phone}</FormFeedback>
                </div>

                {/* Skills */}
                <div className="form-group label-floating">
                  <label htmlFor="skills" className="label">
                    Skills *
                  </label>
                  <Input
                    id="skills"
                    type="string"
                    name="skills"
                    className="form-control"
                    placeholder="Please enter skills *"
                    value={this.state.skills}
                    valid={errors.skills === "" && this.state.touched.skills}
                    invalid={errors.skills !== ""}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur("skills")}
                  />
                  <FormFeedback>{errors.skills}</FormFeedback>
                </div>

                {/* Score & Experience */}

                <div className="row">
                  <div className="col-md-6 padding">
                    <div className="form-group">
                      <label htmlFor="score" className="label">
                        Score *
                      </label>
                      <Input
                        id="score"
                        type="number"
                        name="score"
                        className="form-control"
                        placeholder="Please enter score *"
                        value={this.state.score}
                        valid={errors.score === "" && this.state.touched.score}
                        invalid={errors.score !== ""}
                        onChange={this.handleChange}
                        onBlur={this.handleBlur("score")}
                      />
                      <FormFeedback className="">{errors.score}</FormFeedback>
                    </div>
                  </div>

                  <div className="col-md-6 padding">
                    <div className="form-group">
                      <label htmlFor="experience" className="label">
                        Experience *
                      </label>
                      <Input
                        id="experience"
                        type="number"
                        name="experience"
                        className="form-control"
                        placeholder="Please enter experience *"
                        value={this.state.experience}
                        valid={
                          errors.experience === "" &&
                          this.state.touched.experience
                        }
                        invalid={errors.experience !== ""}
                        onChange={this.handleChange}
                        onBlur={this.handleBlur("experience")}
                      />
                      <FormFeedback>{errors.experience}</FormFeedback>
                    </div>
                  </div>
                </div>

                {/* Catgory */}

                <label htmlFor="category" className="label">
                  Catagory*
                </label>
                <div className="form-group">
                  <div className="row">
                    <div className="col-md-3 paddingRadio">
                      <div className="row">
                        <div className="col-md-3 paddingRadio">
                          <input
                            id="category"
                            type="radio"
                            name="category"
                            className="form-control"
                            value={this.state.category}
                            onChange={this.handleChange}
                            onBlur={this.handleBlur}
                          />
                        </div>
                        <div className="col-md-9 paddingRadio">
                          <span>Consultant</span>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-3 paddingRadio">
                      <div className="row">
                        <div className="col-md-3 paddingRadio">
                          <input
                            id="category"
                            type="radio"
                            name="category"
                            className="form-control"
                            value={this.state.category}
                            onChange={this.handleChange}
                            onBlur={this.handleBlur}
                          />
                        </div>
                        <div className="col-md-9 paddingRadio">
                          <span>Freelancer</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 paddingRadio">
                      <div className="row">
                        <div className="col-md-3 paddingRadio">
                          <input
                            id="category"
                            type="radio"
                            name="category"
                            className="form-control"
                            value={this.state.category}
                            onChange={this.handleChange}
                            onBlur={this.handleBlur}
                          />
                        </div>
                        <div className="col-md-9 paddingRadio">
                          <span>Inhouse team</span>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-3 paddingRadio">
                      <div className="row">
                        <div className="col-md-3 paddingRadio">
                          <input
                            id="category"
                            type="radio"
                            name="category"
                            className="form-control"
                            value={this.state.category}
                            onChange={this.handleChange}
                            onBlur={this.handleBlur}
                          />
                        </div>
                        <div className="col-md-9 paddingRadio">
                          <span>Remote worker</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>{errors.category}</div>
                </div>

                {/* Location and Reference */}

                <div className="row">
                  <div className="col-md-6 padding">
                    <div className="form-group">
                      <label htmlFor="location" className="label">
                        Location *
                      </label>
                      <Input
                        id="location"
                        type="string"
                        name="location"
                        className="form-control"
                        placeholder="Please enter location *"
                        value={this.state.location}
                        valid={
                          errors.location === "" && this.state.touched.location
                        }
                        invalid={errors.location !== ""}
                        onChange={this.handleChange}
                        onBlur={this.handleBlur("location")}
                      />
                      <FormFeedback>{errors.location}</FormFeedback>
                    </div>
                  </div>
                  <div className="col-md-6 padding">
                    <div className="form-group">
                      <label htmlFor="reference" className="label">
                        Reference *
                      </label>
                      <Input
                        id="reference"
                        type="string"
                        name="reference"
                        className="form-control"
                        placeholder="Enter reference*"
                        value={this.state.reference}
                        valid={
                          errors.reference === "" &&
                          this.state.touched.reference
                        }
                        invalid={errors.reference !== ""}
                        onChange={this.handleChange}
                        onBlur={this.handleBlur("reference")}
                      />
                      <FormFeedback>{errors.reference}</FormFeedback>
                    </div>
                  </div>
                </div>

                {/* Contract */}
                <label htmlFor="contract" className="label">
                  Contract *
                </label>
                <div className="form-group">
                  <div className="row">
                    <div className="col-md-6 padding">
                      <div className="row">
                        <div className="col-md-3 paddingRadio">
                          <input
                            id="category"
                            type="radio"
                            name="category"
                            className="form-control"
                            value={this.state.category}
                            onChange={this.handleChange}
                            onBlur={this.handleBlur}
                          />
                        </div>
                        <div className="col-md-9 paddingRadio">
                          <span>Freelancer</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 padding">
                      <div className="row">
                        <div className="col-md-3 paddingRadio">
                          <input
                            id="category"
                            type="radio"
                            name="category"
                            className="form-control"
                            value={this.state.category}
                            onChange={this.handleChange}
                            onBlur={this.handleBlur}
                          />
                        </div>
                        <div className="col-md-9 paddingRadio">
                          <span>Freelancer</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="">{errors.contract}</div>
                </div>
                {/* Git Link */}
                <div className="form-group label-floating">
                  <label htmlFor="github" className="label">
                    GitHub *
                  </label>
                  <input
                    id="github"
                    type="url"
                    name="github"
                    className="form-control"
                    placeholder="Please enter your Github link *"
                    value={this.state.github}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                  />
                  <div>{errors.github}</div>
                </div>

                {/* LinkedIn Link */}
                <div className="form-group label-floating">
                  <label htmlFor="linkedin" className="label">
                    LinkedIn *
                  </label>
                  <Input
                    id="linkedin"
                    type="url"
                    name="linkedin"
                    className="form-control"
                    placeholder="Please enter your LinkedIn link *"
                    value={this.state.linkedin}
                    valid={
                      errors.linkedin === "" && this.state.touched.linkedin
                    }
                    invalid={errors.linkedin !== ""}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur("linkedin")}
                  />
                  <FormFeedback>{errors.linkedin}</FormFeedback>
                </div>

                <div className="form-submit mt-5">
                  <button
                    className="btn3"
                    type="submit"
                    disabled={errors.disabled}
                  >
                    Send
                  </button>
                  <div id="msgSubmit" className="h3 text-center hidden" />
                  <div className="clearfix" />
                  <p style={{ marginTop: "-1%" }}>*These field are required</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
export default ContactUs;
