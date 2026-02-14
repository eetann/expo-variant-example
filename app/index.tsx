import Constants from "expo-constants";
import { StyleSheet, View } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";

const APP_VARIANT = (Constants.expoConfig?.extra?.APP_VARIANT as string) ?? "production";

const VARIANT_CONFIG = {
  local: {
    label: "Local",
    color: "#16a34a",
    backgroundColor: "#dcfce7",
  },
  staging: {
    label: "Staging",
    color: "#ea580c",
    backgroundColor: "#ffedd5",
  },
  production: {
    label: "Production",
    color: "#2563eb",
    backgroundColor: "#dbeafe",
  },
} as const;

function getVariantConfig() {
  if (APP_VARIANT in VARIANT_CONFIG) {
    return VARIANT_CONFIG[APP_VARIANT as keyof typeof VARIANT_CONFIG];
  }
  return VARIANT_CONFIG.production;
}

export default function HomeScreen() {
  const config = getVariantConfig();

  return (
    <ThemedView style={styles.container}>
      <View style={[styles.badge, { backgroundColor: config.backgroundColor }]}>
        <ThemedText style={[styles.badgeText, { color: config.color }]}>{config.label}</ThemedText>
      </View>
      <ThemedText style={styles.description}>APP_VARIANT: {APP_VARIANT}</ThemedText>
      <ThemedText style={styles.bundleId}>
        {Constants.expoConfig?.ios?.bundleIdentifier ??
          Constants.expoConfig?.android?.package ??
          "N/A"}
      </ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
  },
  badge: {
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 16,
  },
  badgeText: {
    lineHeight: 40,
    fontSize: 40,
    fontWeight: "bold",
  },
  description: {
    fontSize: 18,
    opacity: 0.7,
  },
  bundleId: {
    fontSize: 14,
    opacity: 0.5,
  },
});
