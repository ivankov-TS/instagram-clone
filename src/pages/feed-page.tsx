import { AppShell, Text } from "@mantine/core";
import { Header } from "../shared/header";

export function FeedPage() {
  return (
    <AppShell
      header={{ height: 70 }}
      navbar={{ width: 300, breakpoint: "xl" }}
      aside={{ width: 300, breakpoint: "xl" }}
      padding="md"
    >
      <Header />
      <AppShell.Navbar p="md">
        Navbar is collapsed on mobile at sm breakpoint. At that point it is no
        longer offset by padding in the main element and it takes the full width
        of the screen when opened.
      </AppShell.Navbar>
      <AppShell.Main>
        <Text>This is the main section, your app content here.</Text>
        <Text>
          Layout used in most cases – Navbar and Header with fixed position
        </Text>
      </AppShell.Main>
      <AppShell.Aside p="md">Aside</AppShell.Aside>
    </AppShell>
  );
}
