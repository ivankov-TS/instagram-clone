import { AppShell, Container, Group, Text } from "@mantine/core";
import { Header } from "../shared/ui/header";
import { Navbar } from "../shared/ui/navbar";

export function FeedPage() {
  return (
    <AppShell header={{ height: 70 }} padding="md">
      <Header />
      <Container size="xl">
        <Group gap={0}>
          <Navbar />
          <AppShell.Main style={{ flex: 1 }}>
            <Text>This is the main section, your app content here.</Text>
            <Text>
              Layout used in most cases – Navbar and Header with fixed position
            </Text>
          </AppShell.Main>
          <AppShell.Aside
            style={{ position: "sticky", width: "212px" }}
            pr={0}
            p="md"
          >
            Aside
          </AppShell.Aside>
        </Group>
      </Container>
    </AppShell>
  );
}
