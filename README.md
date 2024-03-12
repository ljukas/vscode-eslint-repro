<p align="center">
  <img src="https://files.bovra.se/bovra-mail-logo-x2.png" />
</p>

<p align="center">
  Monorepo for the bovra consumer app <br/>
  Contains the react native mobile app, gateway and related packages
</p>
<br/>

## App
The mobile app is written in [React native](https://reactnative.dev/) using the [Expo](https://expo.dev/) platform.
It uses mainly typescript

[Changelog](../apps/native/CHANGELOG.md)

## Gateway
The mobile gateway acts a backend for frontend, it communicates with the bovra microservices and provides one source for the app to communicate with.
Communication between the app and gateway is done via [GraphQL](https://graphql.org/)

[Changelog](../apps/gateway/CHANGELOG.md)

## Changeset
This repo uses [changesets](https://github.com/changesets/changesets) to generate changelogs.

## Branch management

- `main`: master branch
- `initials/feature-name.or.issue-number`: Feature branch, ie. `ll/new-dashboard-design` or `ll/1991`
- `hotfix/bug-name.or.issue-number`: Hotfix branch, ie. `hotfix/fix-dashboard-bug` or `ll/1992`

Any pull request to `main` will trigger a release if any changeset files are detected. This will bump the version of any
affected packages. To create a larger release that contain a collection of features a release branch has to be used.

So any bigger release will have the following flow:
 - Feature branches are created from `main` and merged into `release/x` via pull-request.
 - Once all features are merged into `release/x` a pull-request is created to merge `release/x` into `main`.
 - This will trigger a release and bump the version of any affected packages.

This results in `hotfixes` being very easy to produce since any merge into `main` will automatically trigger a release.



