import React, { useState, useEffect} from 'react';
import {Routes, Route} from 'react-router-dom';
import "@aws-amplify/ui-react/styles.css";
import security from "./assets/security.jpg";

import Home from './routes/Home';
import Pricing from './routes/Pricing'
// import Register from './routes/auth/RegisterPage';

import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";

function App({ signOut }) {
  return (
     <><View className="App">
      <Card>
        <Image src={security} className="App-logo" alt="logo" />
        <Heading level={1}>we now have Auth!</Heading>
      </Card>
      <Button onClick={signOut}>Sign Out</Button>
    </View><Routes>
        <Route path='/' element={<Home />} />
      </Routes></>
  );
}

export default withAuthenticator(App);
