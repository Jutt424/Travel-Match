import { router } from "expo-router";

export const navigateTo = (path: Parameters<typeof router.push>[0]) => {
  router.push(path);
};
