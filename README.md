# Emotion Adaptive Application

An application that records user actions and response data, bundles it into a string and sends that data to a python server connected to a Google ML Natural Language processing algorithm to determine the most likely sentiment of the user. 

The result is a double between 0 and 1 that is sent back to the frontend application through Google Firebase. The frontend application takes in the result and uses an algorithm to determine the most beneficial properties for UI components to take. 

The goal would be to assist the user in feeling more positive emotions when experiencing negative emotions. It would accomplish this through various changes in interaction, colors, and ui appearance to values that are known to positively affect emotions.

## Prototype Explanation 

Contained within this frontend application are three UI components. Each of these can change in various ways in order to adapt to the user's actions.

Component #1, is a container holding questions in regards to various aspects of a user's day. The amount of questions and responses are determined by the user's current emotion and value. Each response has a certain value that is bundled and sent to Google ML.

Component #2, holds 7 circles, each with either a green or red color. This component highlights the previous recorded emotions, red whether they were negative or green if positive.

Component #3, is a component that changes colors depending on their current emotion. The colors displayed should assist the user in handling any negative emotions they are experiencing. 

## Development Server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
