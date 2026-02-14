import type { ConfigContext, ExpoConfig } from "expo/config";

const IS_LOCAL = process.env.APP_VARIANT === "local";
const IS_STAGING = process.env.APP_VARIANT === "staging";

function getAppName(): string {
  if (IS_LOCAL) return "Variant Example (Local)";
  if (IS_STAGING) return "Variant Example (Staging)";
  return "Variant Example";
}

function getBundleIdentifier(): string {
  if (IS_LOCAL) return "com.eetann.expovariantexample.local";
  if (IS_STAGING) return "com.eetann.expovariantexample.staging";
  return "com.eetann.expovariantexample";
}

function getScheme(): string {
  if (IS_LOCAL) return "expovariantexample-local";
  if (IS_STAGING) return "expovariantexample-staging";
  return "expovariantexample";
}

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: getAppName(),
  slug: "expo-variant-example",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/images/icon.png",
  scheme: getScheme(),
  userInterfaceStyle: "automatic",
  newArchEnabled: true,
  ios: {
    supportsTablet: true,
    bundleIdentifier: getBundleIdentifier(),
    infoPlist: {
      ITSAppUsesNonExemptEncryption: false,
    },
  },
  android: {
    adaptiveIcon: {
      backgroundColor: "#E6F4FE",
      foregroundImage: "./assets/images/android-icon-foreground.png",
      backgroundImage: "./assets/images/android-icon-background.png",
      monochromeImage: "./assets/images/android-icon-monochrome.png",
    },
    edgeToEdgeEnabled: true,
    package: getBundleIdentifier(),
  },
  web: {
    output: "static" as const,
    favicon: "./assets/images/favicon.png",
  },
  plugins: [
    "expo-router",
    [
      "expo-splash-screen",
      {
        image: "./assets/images/splash-icon.png",
        imageWidth: 200,
        resizeMode: "contain",
        backgroundColor: "#ffffff",
        dark: {
          backgroundColor: "#000000",
        },
      },
    ],
  ],
  experiments: {
    typedRoutes: true,
    reactCompiler: true,
  },
  extra: {
    APP_VARIANT: process.env.APP_VARIANT ?? "production",
    eas: {
      projectId: process.env.PROJECT_ID,
    },
  },
});
