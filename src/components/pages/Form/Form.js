import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Formik, Form, useField, useFormikContext } from "formik";
import * as Yup from "yup";
import styled from "@emotion/styled";
import "./Form.css";
import "./custom.css";
import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";
import itLocale from "i18n-iso-countries/langs/it.json";
import { Button } from "../../Button";



const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <StyledErrorMessage className="error">{meta.error}</StyledErrorMessage>
      ) : null}
    </>
  );
};

const MyCheckbox = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: "checkbox" });
  return (
    <>
      <label className="checkbox">
        <input {...field} {...props} type="checkbox" />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <StyledErrorMessage className="error">{meta.error}</StyledErrorMessage>
      ) : null}
    </>
  );
};

// Styled components ....
const StyledSelect = styled.select`
  color: var(--blue);
`;

const StyledErrorMessage = styled.div`
  font-size: 12px;
  color: var(--red-600);
  width: 400px;
  margin-top: 0.25rem;
  &:before {
    content: "❌ ";
    font-size: 10px;
  }
  @media (prefers-color-scheme: dark) {
    color: var(--red-300);
  }
`;

const StyledLabel = styled.label`
  margin-top: 1rem;
`;

const MySelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <StyledLabel htmlFor={props.id || props.name}>{label}</StyledLabel>
      <StyledSelect {...field} {...props} />
      {meta.touched && meta.error ? (
        <StyledErrorMessage>{meta.error}</StyledErrorMessage>
      ) : null}
    </>
  );
};

const SignupForm = ({
  sectionId,
  firstName,
  lastName,
  email,
  phoneno,
  jobTitle,
  centerName,
  businessDesc,
  centerStatus,
  licenseCap,
  country,
  comments,
  label
}) => {
  const [submitData, setSubmitData] = useState("");

  const [selectedCountry, setSelectedCountry] = useState("");

  const selectCountryHandler = (value) => setSelectedCountry(value);

  countries.registerLocale(enLocale);
  countries.registerLocale(itLocale);

  const countryObj = countries.getNames("en", { select: "official" });

  const countryArr = Object.entries(countryObj).map(([key, value]) => {
    return {
      label: value,
      value: key
    };
  });
  
  console.log("meow", {submitData});
  return (

    <>
      <div className="form-container" id={sectionId ? sectionId : ''}>
        <div className='container'>
          <div className="col">
            <h1 className='formHead' >Sign-up with us!</h1>
            <Formik
              initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                jobTitle: "",
                centerName: "",
                businessDesc: "",
                centerStatus: "",
                licenseCap: "",
                country: "",
                comments: "",
                acceptedTerms: false,
              }}
              validationSchema={Yup.object({
                firstName: Yup.string()
                  .max(15, "Must be 15 characters or less")
                  .required("Required"),
                lastName: Yup.string()
                  .max(20, "Must be 20 characters or less")
                  .required("Required"),
                email: Yup.string()
                  .email("Invalid email addresss")
                  .required("Required"),
                phone: Yup.string()
                  .min(9, "Invalid phone number")
                  .required("Required"),
                jobTitle: Yup.string()
                  .oneOf(
                    ["owner", "director", "asstDirector", "admin", "cpa", "teacher", "parent", "educator", "consultant", "other"],
                    "Please choose one of the following."
                  )
                  .required("Required"),
                centerName: Yup.string()
                  .min(3, "Invalid center name")
                  .required("Required"),
                businessDesc: Yup.string()
                  .oneOf(
                    ["inHome", "careCenter", "multi", "schoolLarge", "out"],
                    "Please choose one of the following."
                  )
                  .required("Required"),
                centerStatus: Yup.string()
                  .oneOf(
                    ["established", "new", "procare", "manager", "student", "other"],
                    "Please choose one of the following."
                  )
                  .required("Required"),
                licenseCap: Yup.string()
                  .oneOf(
                    ["0", "0-30", "15", "50", "31-60", "61-90", "90+", "100", "101"],
                    "Please choose one of the following."
                  )
                  .required("Required"),
                country: Yup.string()
                  .oneOf(
                    [label],
                    "Please choose one of the following."
                  )
                  .required("Required"),
                acceptedTerms: Yup.boolean()
                  .required("Required")
                  .oneOf([true], "You must accept the terms and conditions.")
              })}
              /*onSubmit={async (values, { setSubmitting }) => {
                
                console.log('first name: ', firstName);
                console.log('last name: ', lastName);
                console.log('email: ', email);
                console.log('phone: ', phoneno);
                console.log('job title: ', jobTitle);
                console.log('center name: ', centerName);
                console.log('business description: ', businessDesc);
                console.log('center status: ', centerStatus);
                console.log('license capacity: ', licenseCap);
                console.log('country: ', country);
                console.log('comments: ', comments);
                await new Promise(r => setTimeout(r, 500));
                setSubmitting(false);
                  
              }}*/
              onSubmit={(values, actions) => {
                return new Promise((resolve, reject) => {
                  setTimeout(() => {
                    setSubmitData(JSON.stringify(values));
                    resolve();
                  }, 1000);
                });
              }}
            >
            {props => (
              <Form className="form-body">
                <MyTextInput
                  label="First Name"
                  name="firstName"
                  type="text"
                  placeholder="Samuel"
                  id={"firstName"}
                />
                <MyTextInput
                  label="Last Name"
                  name="lastName"
                  type="text"
                  placeholder="Ngai"
                  id={"lastName"}
                />
                <MyTextInput
                  label="Email Address"
                  name="email"
                  type="email"
                  placeholder="sam@hotmail.com"
                  id={"email"}
                />
                <MyTextInput
                  label="Phone Number"
                  name="phone"
                  type="text"
                  placeholder="60-1234567"
                  id={"phoneno"}
                />
                <MySelect label="Job Title" name="jobTitle">
                  <option value="">Select a job title</option>
                  <option value="owner">Owner</option>
                  <option value="director">Director</option>
                  <option value="asstDirector">Assistant Director</option>
                  <option value="admin">Administrator</option>
                  <option value="cpa">CPA/Book-keeper</option>
                  <option value="teacher">Teacher</option>
                  <option value="parent">Parent</option>
                  <option value="educator">Educator</option>
                  <option value="consultant">Consultant</option>
                  <option value="other">Other</option>
                </MySelect>
                <MyTextInput
                  label="Center Name"
                  name="centerName"
                  type="text"
                  placeholder="Young Hearts"
                />
                <MySelect label="Business Description" name="businessDesc">
                  <option value="">Select the best description</option>
                  <option value="inHome">In-Home Child Care</option>
                  <option value="careCenter">A Child Care Center</option>
                  <option value="multi">Multi-Center or Franchise Centers</option>
                  <option value="schoolLarge">School District or Large Organization</option>
                  <option value="out">Out-of-School Time Program</option>
                </MySelect>
                <MySelect label="Center Status" name="centerStatus">
                  <option value="">Select your status</option>
                  <option value="established">An Established Center</option>
                  <option value="new">A New Center - Opening Soon</option>
                  <option value="procare">Current Procare User</option>
                  <option value="manager">Childcare Manager</option>
                  <option value="student">A Student or Educational Organization</option>
                  <option value="other">Other</option>
                </MySelect>
                <MySelect label="License Capacity" name="licenseCap">
                  <option value="">Select the suitable license capacity</option>
                  <option value="0">0</option>
                  <option value="0-30">0-30</option>
                  <option value="15">15</option>
                  <option value="50">50</option>
                  <option value="31-60">31-60</option>
                  <option value="61-90">61-90</option>
                  <option value="90+">90+</option>
                  <option value="100">100</option>
                  <option value="101">101</option>
                </MySelect>
                <MySelect label="Country" name="country" value={selectedCountry}
                  onChange={(e) => selectCountryHandler(e.target.value)}
                >
                  <option value="">Select your country</option>
                  {!!countryArr?.length && countryArr.map(({ label, value }) => (
                    <option key={value} value={value}>{label}</option>
                  ))}

                </MySelect>
                <MyTextInput
                  label="Comments"
                  name="comments"
                  type="text"
                />
                <MyCheckbox name="acceptedTerms">
                  I accept the terms and conditions
                </MyCheckbox>

                <Button type="submit" buttonSize='btn--wide' buttonColor='blue' disabled={props.isSubmitting}>Submit</Button>

              </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>

  );

};

export default SignupForm;
