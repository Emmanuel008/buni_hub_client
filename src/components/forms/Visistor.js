/* eslint-disable no-unused-vars */
/* eslint-disable import/no-anonymous-default-export */
import React, {useState} from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import axios from "axios";
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2";
import { urlDev } from "utils/API";


const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto`;
const TextColumn = styled(Column)((props) => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft
    ? tw`md:mr-12 lg:mr-16 md:order-first`
    : tw`md:ml-12 lg:ml-16 md:order-last`,
]);

const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-contain bg-no-repeat bg-center h-full`,
]);
const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
// const Heading = tw(SectionHeading)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;

const Form = tw.form`mt-8 md:mt-10 text-sm flex flex-col max-w-sm mx-auto md:mx-0`;
const Input = tw.input`mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500`;
const Textarea = styled(Input).attrs({ as: "textarea" })`
  ${tw`h-24`}
`;

const SubmitButton = tw(PrimaryButtonBase)`inline-block mt-8`;

export default ({
  subheading = "Attandace Form  for Visitor",
  description = "Fill this form to Log your attendace of today",
  submitButtonText = "Send",
  formAction = "#",
  formMethod = "get",
  textOnLeft = true,
}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.
  const navigate = useNavigate()
  const [values, setValues] = useState({
    first_name: "",
    last_name: "",
    email: "",
    role: "",
    phone_number: ""
  });

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { first_name,last_name,email, role, phone_number } = values;
      await axios
        .post(`${urlDev}/api/visitor/createVisitor`, {
          first_name,
          last_name,
          email,
          role,
          phone_number,
        })
        .then((res) => {
          if (res.status === 200) {
            navigate("/thanks");
          }
        });
    } catch (error) {
      Error.fire({
        icon: "error",
        title: error.message,
      });
    }
  };
  return (
    <Container>
      <TwoColumn>
        <ImageColumn>
          <Image imageSrc="/images/attendace.svg" />
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            {subheading && <Subheading>{subheading}</Subheading>}
            {/* <Heading>{heading}</Heading> */}
            {description && <Description>{description}</Description>}
            <Form onSubmit={handleSubmit}>
              <Input
                type="text"
                name="first_name"
                placeholder="First Name"
                onChange={handleChange}
              />
              <Input
                type="text"
                name="last_name"
                placeholder="Last Name"
                onChange={handleChange}
              />
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                onChange={handleChange}
              />
              <Input
                type="text"
                name="role"
                placeholder="Your Role"
                onChange={handleChange}
              />
              <Input
                type="text"
                name="phone_number"
                placeholder="0756989812"
                onChange={handleChange}
              />
              <SubmitButton>{submitButtonText}</SubmitButton>
            </Form>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};

const Error = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  // timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  },
});