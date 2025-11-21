import { AppShell, Container, Group, Text } from '@mantine/core';
import { Header } from '../shared/ui/header';
import { Navbar } from '../shared/ui/navbar';
import { Aside } from '../shared/ui/aside';

export function FeedPage() {
  return (
    <AppShell
      header={{ height: 70 }}
      navbar={{ width: 248, breakpoint: 'none' }}
      aside={{ width: 248, breakpoint: 'none' }}
      padding="md"
    >
      <Header />
      <Container size="xl">
        <Group gap={0}>
          <Navbar />
          <AppShell.Main style={{ flex: 1 }}>
            <Text>This is the main section, your app content here.</Text>
            <Text>Layout used in most cases – Navbar and Header with fixed position</Text>
          </AppShell.Main>
          <Aside />
        </Group>
      </Container>
    </AppShell>
  );
}
