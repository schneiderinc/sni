# IONIC4 React Boilerplate
## For **Android** and **iOS**

https://dev.azure.com/833085/Schneider%20National%20Inc.%20-%20Demo/_apis/build/status/Schneider%20National%20Inc.%20-%20Demo-CI

## Features

* Capacitor
* View base Responsive Design
* React Container Pattern
* Redux
* Redux-Saga
* Selectors
* Immutability State using Immer.js
* Eslint
* Typescript
* Implemented basic login form
* Jest setup
* Test cases

* **⚡️ Works with [Capacitor](https://capacitor.ionicframework.com/). ⚡️**

### Requirements :
NodeV8.6  and rpmV5.6. it supports yarn swell

### Platforms

#### iOs Development:
Xcode 10 or above
Ionic Appflow to build for iOS even if you're on Windows
Additionally Cocoapods required(sudo gem install cocoapods)
Once you have CocoaPods installed, update your local repo by running ‘pod repo update’

#### Android Development:
Java 8 JDK.Java 9 does not work at the moment.
requires the Android SDK installed with Android Studio.
Capacitor supports Android 5.0 (Lollipop) or above

##Capacitor:

### Install Ionic :

** Install Global Ionic **
```
Npm install ionic -g

```

### Install or Adding Capacitor: 

**Start New Ionic React Project**

```
    ionic start <projectname> <projectType> —capacitor
```

**Existing Ionic Project**

navigate to Inside App Folder : cd <ProjectFolder>  — created ionic project Folder

ionic integrations enable capacitors

**Initialise Capacitor**
```
 npx cap init <appName> <appId>

```
**Build Ionic App :** 

```
ionic build (at least once before adding platform.)
 
```
**Add Platforms:** 

```
npx cap add <Platform(android, ios)>
 
```
**Open IDE to build, run and Deploy.** 
```
npx cap open <platform>
 
```
Syncing App

**Every time performing build that changes you webdirectory ‘www’ or ‘build’.** 
```
npx cap copy :copy those changes down to your native projects.
 
```
