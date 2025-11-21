import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { FeedPage } from "./pages/feed-page";
import { createTheme } from "@mantine/core";

const theme = createTheme({
  primaryColor: "teal",
  defaultRadius: "xl",
});

export const Application = () => {
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <FeedPage />
    </MantineProvider>
  );
};
