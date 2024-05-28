# QuiikMart Version 0

This README details the setup and usage instruction for this application.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: Version 18.17 or later. [Download Node.js](https://nodejs.org/)
- **Yarn**: Our package manager. [Install Yarn](https://yarnpkg.com/getting-started/install)
- **Watchman**: For watching file changes. [Install Watchman](https://facebook.github.io/watchman/)
- **React Native CLI**: Install via `npm install -g react-native-cli`
- **Xcode** (macOS): For iOS development. [Download from Mac App Store](https://apps.apple.com/us/app/xcode/id497799835)
- **Android Studio**: For Android development. [Download Android Studio](https://developer.android.com/studio)

## Installation

1. Clone the repository:

```
git clone https://github.com/quickmartDev/mobile-app.git
```

2. Navigate to the project directory:

```
cd mobile-app
```

3. Install dependencies with Yarn

```
yarn
```

4. Start the app with

```
yarn start
```

## Resolving Watchman Issues

If you encounter issues with Watchman, such as errors indicating problems with `.watchmanconfig`, follow these steps:

1. Navigate to your project root directory.
2. If `.watchmanconfig` is missing, create it with:

```
touch .watchmanconfig
```

3. Open `.watchmanconfig` and ensure it contains valid JSON. An empty object `{}` is sufficient.
4. Restart Watchman:

```
watchman shutdown
```

5. Re-run your application.

## Publishing
In order to publish the app to view on your iOS or Android device via Expo Go, run the command:

```
eas update
```

## Contributing

1. Fork the repository.
2. Create a branch: `git checkout -b feature_<branch_name>`.
3. Make changes and commit: `git commit -m '<commit_message>'`.
4. Push to the original branch: `git push origin feature_<branch_name>`.
5. Create a pull request to merge into develop.
