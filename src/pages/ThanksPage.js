/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

const Container = tw.div`flex items-center justify-center h-screen`;
const Border = tw.div`p-1 rounded shadow-lg bg-gradient-to-r from-purple-500 via-green-500 to-blue-500`;
const Content = tw.div`flex flex-col items-center p-4 space-y-2 bg-white`;

const StyledSvg = styled.svg`
  ${tw`text-green-600 w-32 h-32`}
`;
const StyledSvg2 = styled.svg`
  ${tw`w-3 h-3 mr-2`}
`;
const Link = tw.a`inline-flex items-center px-4 py-2 text-white bg-indigo-600 border border-indigo-600 rounded rounded-full hover:bg-indigo-700 focus:outline-none focus:ring`;
const ThanksPage = () => {
  return (
    <Container>
      <Border>
        <Content>
          {/* <Image imageSrc="/images/tick.svg" /> */}
          <StyledSvg
            xmlns="http://www.w3.org/2000/svg"
            // className="text-green-600 w-28 h-28"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </StyledSvg>

          <h1 className="text-4xl font-bold font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
            Thank You !
          </h1>
          <p>
            Thank you for Logging your attendace.
          </p>
          <Link href="/">
            <StyledSvg2
              xmlns="http://www.w3.org/2000/svg"
              // className="w-3 h-3 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </StyledSvg2>
            <span className="text-sm font-medium">Home</span>
          </Link>
        </Content>
      </Border>
    </Container>
  );
};

export default ThanksPage;
