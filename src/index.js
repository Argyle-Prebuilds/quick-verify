import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import GlobalStyles from "./theme/globalStyles";
import * as serviceWorker from "./serviceWorker";
import Header from "./components/Header";
import Button from "./components/Button";
import Wrapper from "./components/Wrapper";
import MaxWidthWrapper from "./components/MaxWidthWrapper";
import Paragraph from "./components/Paragraph";
import Title from "./components/Title";
import Heading from "./components/Heading";

function connectPayroll() {
  window.initArgyle().open();
}

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <ThemeProvider theme={theme}>
          <>
            <GlobalStyles />
            <Header />
            <Wrapper>
              <MaxWidthWrapper>
                <Title>Let's connect your work accounts</Title>
                <Heading>
                  Connect your work accounts to verify your income and employment and complete your loan application
                </Heading>
                <Paragraph>
                  <div style={{ marginBottom: '15px' }}>
                    By clicking Agree and Connect, you agree to&nbsp;
                    <a href="/agreement" target="_blank">
                      ACME’s End User Agreement
                    </a> and&nbsp;
                    <a href="https://argyle.com/legal/end-user-privacy-policy" target="_blank">
                       Argyle’s Terms of Use and Privacy Policy
                    </a>, and you are allowing Argyle to provide ACME with your payroll information.
                  </div>
                </Paragraph>
                <Button onClick={connectPayroll} />
              </MaxWidthWrapper>
            </Wrapper>
          </>
        </ThemeProvider>
      </Route>
      <Route exact path="/agreement">
        <ThemeProvider theme={theme}>
          <>
            <GlobalStyles />
            <Header />
            <Wrapper>
              <div style={{ marginTop: '40px' }}>
                <Title>ACME's End User Agreement</Title>
              </div>
              <Paragraph>
                You agree that A, Inc., its agents and affiliates, and the bank originating your loan (ACME,” “We” or “Us”) may use your login credentials to access your account(s) on certain third-party workforce platform(s) (each, a “Workforce Platform”) and obtain your data, including payroll information, employment information, and other personal and financial information stored in the Workforce Platform (“End User Data”).  We may access and obtain End User Data from any Workforce Platform accounts available through your login credentials.  You authorize Us to use the End User Data for any lawful purpose, including to verify your income and employment, identity, for anti-fraud purposes, and to determine or verify eligibility (including for a loan or for specific terms such as pricing).
              </Paragraph>
              <Paragraph>
                Through this service, you are using Argyle Systems Inc. (“Argyle”) to gather your End User Data from Workforce Platforms and to provide that information to ACME. You agree that when ACME retrieves End User Data, we are acting as your agent, and not as the agent of or on behalf of any third party.  For purposes of this agreement and solely to obtain and provide End User Data to ACME on your behalf, you grant ACME a limited power of attorney, and appoint ACME as your true and lawful attorney-in-fact and agent, with full power of substitution and re-substitution, for you and in your name, place and stead, in any and all capacities, to access the applicable Workforce Platforms to retrieve End User Data and to use End User Data as described in this agreement, with the full power and authority to do and perform each and every act and thing requisite and necessary to be done in connection with such activities, as fully to all intents and purposes as you might or could do.  You further agree that the Workforce Platforms shall be entitled to rely on the foregoing express authorization, agency, and power of attorney granted by you, and shall be entitled to release End User Data to ACME and its service provider Argyle Systems Inc. (“Argyle”).
              </Paragraph>
              <Paragraph>
                By using the Argyle service, you agree to your End User Data being collected, transferred, stored and accessed by Argyle in accordance with the Argyle End-User Terms of Use & Privacy Policy. For information on how Argyle stores and uses your login credentials, End User Data, and account information, please review Argyle’s privacy policy, available at <a href="https://argyle.com/legal/privacy-policy" target="_blank">https://argyle.com/legal/privacy-policy</a>.
              </Paragraph>
              <Paragraph>
                You understand that if you provide inaccurate credentials we may be unable to process your loan application. If we are not able to verify necessary items through the Argyle service, you may be required to undergo manual verification. By providing ACME or Argyle with your login credentials or other information for a Workforce Platform, you represent and warrant that such information is accurate, complete, and owned by you, and that you are authorized to provide such information for the purpose of collecting and using End User Data as described in this agreement.  You further represent and warrant that you are authorized to permit third parties, including ACME and Argyle, to electronically access the Workforce Platform accounts and electronically retrieve End User Data therefrom. You represent and warrant that by using the Argyle service and entering into and complying with this agreement, you are not violating any agreements you may have with any Workforce Platform or any third party.
              </Paragraph>
              <Paragraph>
                You shall defend, indemnify, and hold ACME, Argyle, and our and their respective owners, members, officers, directors, employees, agents, successors, licensees, licensors, and assigns harmless from and against any damages, liabilities, losses, expenses, claims, actions, and/or demands, including, without limitation, reasonable legal and accounting fees, arising from or in connection with: (i) your breach of this agreement including, without limitation, any of the representations and warranties set forth herein above; (ii) your violation of any third-party rights, including without limitation any copyright, trademark, property, publicity, or privacy right; or (iii) your gross negligence, willful misconduct, or fraud.
              </Paragraph>
            </Wrapper>
          </>
        </ThemeProvider>
      </Route>
    </Switch>
  </Router>

);

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
