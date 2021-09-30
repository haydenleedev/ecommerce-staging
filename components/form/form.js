import React, { Component } from "react";
import Button from "components/buttons/button";
import layout from "styles/layout.module.scss";
import form from "./form.module.scss";

class ContactForm extends Component {
  render() {
    return (
      <div className={form["form-container"]}>
        <form action="">
          <fieldset className={layout.row}>
            <div className={`${layout.col} ${layout["col-2"]}`}>
              <label htmlFor="email">
                <span className={form.required}>*</span> Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                maxLength="50"
                data-validate="email required"
                aria-required="true"
                required
              />
            </div>
            <div className={`${layout.col} ${layout["col-2"]}`}>
              <label htmlFor="phone">
                <span className={form.required}>*</span> Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                title="Phone Number"
                required=""
                minLength="3"
              ></input>
            </div>
          </fieldset>

          <fieldset className={layout.row}>
            <div className={`${layout.col} ${layout["col-2"]}`}>
              <label htmlFor="firstName">
                <span className={form.required}>*</span> First Name
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                autoComplete="firstName"
                maxLength="50"
                data-validate="firstName required"
                aria-required="true"
                required
              />
            </div>
            <div className={`${layout.col} ${layout["col-2"]}`}>
              <label htmlFor="lastName">
                <span className={form.required}>*</span> Last Name
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                autoComplete="lastName"
                maxLength="50"
                data-validate="lastName required"
                aria-required="true"
                required
              />
            </div>
          </fieldset>

          <fieldset className={layout.row}>
            <div className={`${layout.col} ${layout["col-2"]}`}>
              <label htmlFor="firstName">
                <span className={form.required}>*</span> Company Name
              </label>
              <input
                type="text"
                name="companyName"
                id="companyName"
                autoComplete="companyName"
                maxLength="50"
                data-validate="companyName required"
                aria-required="true"
                required
              />
            </div>
            <div className={`${layout.col} ${layout["col-2"]}`}>
              <label htmlFor="lastName">
                <span className={form.required}>*</span> Job Title
              </label>
              <input
                type="text"
                name="jobTitle"
                id="jobTitle"
                autoComplete="jobTitle"
                maxLength="50"
                data-validate="jobTitle required"
                aria-required="true"
                required
              />
            </div>
          </fieldset>

          <fieldset className={layout.row}>
            <div className={`${layout.col} ${layout["w-100"]}`}>
              <label htmlFor="employees">
                <span className={form.required}>*</span> # of Employees
              </label>
              <input
                type="text"
                name="employees"
                id="employees"
                autoComplete="employees"
                maxLength="50"
                data-validate="employees required"
                aria-required="true"
                required
              />
            </div>
          </fieldset>

          <div className={layout.col}>
            <label htmlFor="subscriber" className={form.booleancheckbox}>
              <input
                id="subscriber"
                type="checkbox"
                name="subscriber_to_the_ujet_blog"
                value="true"
              />
              <span className={form.check}>
                Subscribe to UJET's marketing blog{" "}
              </span>
            </label>
          </div>

          <div className={`${layout.col} ${form["mb-10px"]}`}>
            <label
              htmlFor="permission-received"
              className={`${form.booleancheckbox} ${layout["d-flex"]}`}
            >
              <input
                name="permission-received"
                type="checkbox"
                value="checked"
                id="permission-received"
              />
              <span className={form.check}>
                <span className={form.required}>* </span>
                By proceeding I agree to{" "}
                <a href="#" className={`${layout.bold} ${form["mlr-5px"]}`}>
                  UJET's Privacy Statement
                </a>
                and
                <a href="#" className={`${layout.bold} ${form["mlr-5px"]}`}>
                  Terms of Services.
                </a>
              </span>
            </label>
          </div>
          <p className={form.paragraph}>
            We&#x27;re commited to your privacy. UJET uses the information you
            provide to us to contact you about our relevant content, products,
            and services. You may unsubscribe from these communications at any
            time. For more information, check out our{" "}
            <a href="#" className={`${layout.bold} ${form["mlr-5px"]}`}>
              Privacy Policy.
            </a>
          </p>
          <div className={layout.col}>
            <Button color="btn-navy" size="btn-big" text="Continue" />
          </div>
        </form>
      </div>
    );
  }
}

export default ContactForm;
