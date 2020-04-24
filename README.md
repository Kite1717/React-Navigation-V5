# React-Navigation-V5
## React Navigation Version 5 for React Native


[Getting started](https://reactnavigation.org/docs/getting-started)

## Installation

#### npm
`` npm install @react-navigation/native ``

#### Yarn
`` yarn add @react-navigation/native ``

## Installing dependencies into an Expo managed project

### In your project directory, run :

`` expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view ``

## Installing dependencies into a bare React Native project
### In your project directory, run :

#### npm

``npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view ``

#### Yarn

``yarn add react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view``

> Note: You might get warnings related to peer dependencies after installation. They are usually caused by incorrect version ranges > > > specified in some packages. You can safely ignore most warnings as long as your app builds.

**From React Native 0.60 and higher, linking is automatic. So you don't need to run react-native link.**

**If you're on a Mac and developing for iOS, you need to install the pods (via Cocoapods) to complete the linking.**

``npx pod-install ios``


**To finalize installation of react-native-gesture-handler, add the following at the top (make sure it's at the top and there's nothing else before it) of your entry file, such as index.js or App.js:**

``import 'react-native-gesture-handler';``

> Note: If you skip this step, your app may crash in production even if it works fine in development.

**Now, we need to wrap the whole app in NavigationContainer. Usually you'd do this in your entry file, such as index.js or App.js:**

```
import 'react-native-gesture-handler';

import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';


export default function App() {

  return (
 
    <NavigationContainer>{/* Rest of your app code */}</NavigationContainer>
   
  );
  
}
```

> Note: When you use a navigator (such as stack navigator), you'll need to follow the installation instructions of that navigator for > > any additional dependencies. If you're getting an error "Unable to resolve module", you need to install that module in your project.





