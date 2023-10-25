# RightCapital Frontend Libraries Mono repository

<!-- Badges area start -->

[![made by RightCapital](https://img.shields.io/badge/made_by-RightCapital-5070e6)](https://rightcapital.com)
![GitHub Workflow Status (with event)](https://img.shields.io/github/actions/workflow/status/RightCapitalHQ/frontend-libraries/ci.yml)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-%23FE5196?logo=conventionalcommits&logoColor=white)](https://conventionalcommits.org)
[![RightCapital frontend style guide](https://img.shields.io/badge/code_style-RightCapital-5c4c64?labelColor=f0ede8)](https://github.com/RightCapitalHQ/frontend-style-guide)

<!-- Badges area end -->

## Introduction

This is a Mono repository contains a set of useful libraries/helpers in TypeScript.

it including the following packages:

- @rightcapital/exceptions: This library provides a set of standard Exceptions ([API Reference](https://github.com/RightCapitalHQ/frontend-libraries/tree/main/packages/exceptions/docs))
- @rightcapital/date-helpers: A utility class providing various date formatting and parsing methods in TypeScript. ([API Reference](https://github.com/RightCapitalHQ/frontend-libraries/blob/main/packages/date-helpers/docs/modules.md))

## Development

If you are confused about Develop and _README.md_, please see the document
[How to Develop]() (to be done)

### Adding new changes

1. After you have finished your develop. Please run `git add` command with the
   files you have changed.
2. Please run `pnpm -w commit` command to commit your changes, it will help you to create a commit that follows the [Conventional Commits](https://www.conventionalcommits.org/zh-hans/v1.0.0/#%e7%ba%a6%e5%ae%9a%e5%bc%8f%e6%8f%90%e4%ba%a4%e8%a7%84%e8%8c%83) specification(\<\- which is enforced in our repository).

> Tips:
>
> If you feels that `pnpm -w commit` is too long to type, you can add an alias to your shell config file, or make use of [reverse-search](https://unix.stackexchange.com/questions/73498/how-to-cycle-through-reverse-i-search-in-bash) of your shell(similar feature could be found on most interactive shells).
>
> Commands start with `pnpm -w` are [executed from the root of the workspace](https://pnpm.io/pnpm-cli#-w---workspace-root), you can use them anywhere in the workspace, they have the same effect.

### Releasing changes

1. Ensure there are no uncommitted changes in your working directory. If there are, please follow the steps in [Adding new changes](#adding-new-changes) to commit them.

2. Run `pnpm -w change`.

   - This command walks you through a couple of questions and will generate the appropriate change file in the /change directory.
   - The generated file will be checked into the repo automatically for you.
   - One of the niceties of using this utility to generate change files is that it will check whether or not you even need a change file or not.
   - Also, it will try to pull in recent commit messages to speed up change file generation .

3. Run `git push` command is used to upload local repository content to a remote repository.

### bootstrap

Install **ALL** dependencies for all sub projects

```sh
# on the root of the workspace
$ pnpm install
```

### Add new package

```sh
$ pnpm -w create:library <package-name>
```

### Add new dependency package to root workspace

```sh
$ pnpm add lodash -w

$ pnpm add -D @types/lodash -w
```

## Test

We prefer to use `jest` as test platform. and if you wanna run all tests for all packages.

```sh
$ pnpm -w test # in anywhere inside the workspace

# if you wanna test individual package. just run
$ pnpm test # in the root of the packages
```

to support TypeScript for jest you need:

```sh
$ pnpm add -D jest @types/jest -w
```

and put config file:

`packages\[your-package]\jest.config.js`

```javascript
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.ts$',
};
```

## Publish

When the PR is merged into the `main` branch, it will trigger the GitHub action to publish the package to the npm registry.
We don't need to run the `publish` command locally.

## Refs

- https://pnpm.io/workspaces
- https://microsoft.github.io/beachball/
- https://commitizen-tools.github.io/commitizen/
- https://www.conventionalcommits.org/
