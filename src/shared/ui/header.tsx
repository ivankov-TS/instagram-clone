import {
  ActionIcon,
  AppShell,
  Avatar,
  Container,
  Group,
  Indicator,
  TextInput,
} from "@mantine/core";
import { Logo } from "./logo";
import { Search, Plus, MessageCircle, Bell } from "lucide-react";

export const Header = () => {
  return (
    <AppShell.Header>
      <Container size="xl" h="100%">
        <Group h="100%" align="center" justify="space-between">
          <Logo />
          <TextInput
            placeholder="Search..."
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
            w={300}
            size="md"
            leftSection={<Search size={20} />}
          />
          <Group>
            <ActionIcon size="lg" variant="default">
              <Plus size={20} />
            </ActionIcon>
            <ActionIcon size="lg" variant="default">
              <MessageCircle size={20} />
            </ActionIcon>
            <Indicator size={15} offset={4} withBorder>
              <ActionIcon size="lg" variant="default">
                <Bell size={20} />
              </ActionIcon>
            </Indicator>
            <Avatar variant="filled" color="black" src="/avatar.png" />
          </Group>
        </Group>
      </Container>
    </AppShell.Header>
  );
};
