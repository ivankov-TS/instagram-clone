import {
  Avatar,
  Button,
  Group,
  Menu,
  MantineProvider,
  ActionIcon,
  Indicator,
  TextInput,
  AppShell,
  Container,
  Box,
  NavLink,
} from '@mantine/core';
import '@mantine/core/styles.css';
import { Bell, ChevronDown, Home, MessageCircle, Plus, Search } from 'lucide-react';

const avatarSrc = 'https://www.blexar.com/avatar.png';

export const Application = () => {
  return (
    <MantineProvider defaultColorScheme="dark">
      <AppShell header={{ height: 70 }}>
        <AppShell.Header>
          <Container size="xl" h="100%">
            <Group justify="space-between" align="center" h="100%">
              <TextInput leftSection={<Search size={16} />} w={291} style={{ opacity: 0 }} placeholder="Search" />
              <TextInput radius="md" leftSection={<Search size={16} />} w={300} placeholder="Search" />

              <Group gap="xs">
                <ActionIcon color="gray" variant="default" size="lg" radius="xl">
                  <Plus size={20} />
                </ActionIcon>
                <ActionIcon color="gray" variant="default" size="lg" radius="xl">
                  <MessageCircle size={20} />
                </ActionIcon>
                <Indicator size={12} offset={4} withBorder color="green">
                  <ActionIcon color="gray" variant="default" size="lg" radius="xl">
                    <Bell size={20} />
                  </ActionIcon>
                </Indicator>
                <Menu shadow="md" width={200}>
                  <Menu.Target>
                    <Button
                      pl={4}
                      pr={12}
                      radius="xl"
                      color="gray"
                      variant="default"
                      size="sm"
                      leftSection={<Avatar src={avatarSrc} size={28} />}
                      rightSection={<ChevronDown size={16} />}
                    >
                      user
                    </Button>
                  </Menu.Target>

                  <Menu.Dropdown>
                    <Menu.Item>Профиль</Menu.Item>

                    <Menu.Divider />
                    <Menu.Item color="red">Выйти</Menu.Item>
                  </Menu.Dropdown>
                </Menu>
              </Group>
            </Group>
          </Container>
        </AppShell.Header>
        <Container size="xl">
          <Box style={{ display: 'flex' }}>
            <AppShell.Navbar style={{ position: 'sticky', width: 255 }} p="md">
              <NavLink
                href="#required-for-focus"
                active
                py={8}
                px={12}
                color="gray"
                style={{ borderRadius: 4 }}
                label="Home"
                leftSection={<Home size={16} />}
              />
              <NavLink href="#required-for-focus" label="Home" leftSection={<Home size={16} />} />
            </AppShell.Navbar>
            <AppShell.Main style={{ flex: 1 }}> </AppShell.Main>
            <AppShell.Aside style={{ position: 'sticky', width: 255 }} p="md">
              aside
            </AppShell.Aside>
          </Box>
        </Container>
      </AppShell>
    </MantineProvider>
  );
};
