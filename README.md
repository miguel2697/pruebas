# INSPIRANZA DEV

## Installation

### Requirements
- [Node.js](https://nodejs.org/en)
- [Git](https://git-scm.com/downloads)
- [VSC](https://code.visualstudio.com/download)
- [Expo CLI](https://docs.expo.dev/more/expo-cli/)
- [Expo Go](https://expo.dev/go)

### Commands

- Enter to the folder with the app
```sh
cd proof-of-concept
```

- Install app dependencies
```sh
npm i
```

- Run app on dev mode with expo
```sh
npm start
```

- Build apk
```sh
expo login
eas build --platform android --profile production
```

## Development Guidelines

We work with an hybrid of trunk-based development with forks to ensure a safe environment in case of wanting to develop new experimental features. The non-experimental develop features need to be created on short-lived branches that will be merged back into the main branch frequently (not more than a week).

### 1. Fork the repo and clone it
- You may need to configure some environment variables:
<br/><br/> in `/proof-of-concept/.env`
```
PROJECT_ID = <expo project id>
```

### 2. Create an issue or pick one already created

- The issue description can have a list of checkpoints to complete
- In the project backlog, move the issue ticket from "TODO" to "In Progress"

### 3. Create a branch with the issue number

- First of all, be sure to have on your fork the most recent changes in main:
```sh
git checkout main
git fetch upstream
git merge upstream/main
```

- From main create a branch with the number and name of the issue:
```sh
git checkout -b <NumberOfTheIssue>-<Descriptive-Name-Of-Issue>
```

### 4. Work on your branch, commit regulary

#### How to commit:

- Give the commit a short but descriptive name, and add a # with the number of the issue

```sh
git add <route-of-the-files-changed>
git commit -m '<infinitive action> <what has changed> #<number of the issue>'
```

#### Accepted "infinitive actions" for commits
- add
- fix
- delete
- refactor
- update

### 5. Create pull request (PR)
- Give the PR the same name of the related issue. **E.g.** 3-configure-environment
``` 
<Number of the issue>-<Name-of-the-issue>
```
- Assing de PR to your self and connect it to the issue 
- Assign reviewers to your PR
- Move the backlog ticket of your issue to "Review"
- Wait for your PR to be validated

### 6. Merge to main and start again!

### 7. Remember to clean
- Close the related issue
- Delete the branch if you want
