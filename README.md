# pruebas

## Development Guidelines

### 1. Create a issue or pick one already created:

- The issue description should have a list of checkpoint to complete

### 2. Create a branch with the issue number

- From main create a branch with the number and name of the issue:
```sh
git checkout main
git checkout -b <NumberOfTheIssue>-<Descriptive-Name-Of-Issue>
```

### 3. Work on your branch, commit regulary

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

### 4. Create pull request
- give the pull request the same name of the related issue
`<Number of the issue>-<Name-of-the-issue>`
(exp 3-configure-environment)

- assign reviewers to your pull request and wait for their approve

### 5. Merge to main and start again!

### 6. Remember to clean
- close the related issue
- delete the branch if you want