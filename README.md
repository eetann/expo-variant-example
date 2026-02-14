# expo-variant-example

A sample project demonstrating how to build separate apps per environment (local, staging, production) using Expo's `APP_VARIANT` environment variable.

Each variant produces a distinct app with its own name, bundle identifier, and URI scheme, so they can coexist on the same device. When scanning a development client QR code, the correct variant app is launched automatically thanks to the per-variant scheme configuration.

## How It Works

`APP_VARIANT` controls the app configuration in `app.config.ts`:

| Variant | App Name | Bundle Identifier | URI Scheme |
|---------|----------|--------------------|------------|
| `local` | Variant Example (Local) | `com.eetann.expovariantexample.local` | `expovariantexample-local` |
| `staging` | Variant Example (Staging) | `com.eetann.expovariantexample.staging` | `expovariantexample-staging` |
| `production` | Variant Example | `com.eetann.expovariantexample` | `expovariantexample` |

## Prerequisites

- [Bun](https://bun.sh/)
- [Expo CLI](https://docs.expo.dev/get-started/set-up-your-environment/)
- [EAS CLI](https://docs.expo.dev/build/introduction/) (for development client builds)
- [mise](https://mise.jdx.dev/) (optional, for build task shortcuts)

## Getting Started

```sh
bun install
```

### Using Expo Go

If you don't need native modules, Expo Go is the simplest way to run the app:

```sh
bun run start:go:local
```

### Using a Development Client

If you need native features, you must build a development client first.

#### 1. Build the development client

Using mise:

```sh
mise run LOCAL-build-local
```

Or directly with EAS:

```sh
eas build --platform ios --profile local
```

#### 2. Start the Metro server

```sh
bun run start:dev-client:local
```

Scan the QR code, and the correct variant app will open.

## Available Scripts

| Script | Description |
|--------|-------------|
| `bun run start:go:local` | Start Expo Go with `local` variant |
| `bun run start:go:staging` | Start Expo Go with `staging` variant |
| `bun run start:dev-client:local` | Start Metro for `local` development client |
| `bun run start:dev-client:staging` | Start Metro for `staging` development client |
| `bun run lint` | Run oxlint and oxfmt check |
| `bun run lint:fix` | Run oxlint with auto-fix and oxfmt |
| `bun run format` | Format code with oxfmt |

## EAS Build Profiles

Defined in `eas.json`:

- **local** — Development client build for internal distribution
- **staging** — Internal distribution build
- **production** — Production build

## Tech Stack

- [Expo](https://expo.dev/) SDK 54 + React Native 0.81
- [TypeScript](https://www.typescriptlang.org/) 5.9
- [expo-router](https://docs.expo.dev/router/introduction/) 6
- [oxlint](https://oxc.rs/docs/guide/usage/linter) + [oxfmt](https://oxc.rs/docs/guide/usage/formatter)
- [Bun](https://bun.sh/) (package manager)
