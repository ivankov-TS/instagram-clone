import {
  AppShell,
  Avatar,
  Button,
  Group,
  Stack,
  Text,
  Title,
} from "@mantine/core";

const suggestedUsers = [
  {
    src: "/photo1.png",
    nickname: "Kirti Chadha",
    description: "Followed by wahab.xyz and more",
  },
  {
    src: "/photo2.png",
    nickname: "Durgesh Nadini",
    description: "Followed by John Doe and more",
  },
  {
    src: "/photo3.png",
    nickname: "kurzgesagt",
    description: "Followed by imozix",
  },
  {
    src: "/photo4.png",
    nickname: "mkbhd",
    description: "Followed by imozix and more",
  },
];

export const Aside = () => {
  return (
    <AppShell.Aside
      style={{ position: "sticky", width: "248px" }}
      pr={0}
      p="md"
    >
      <Stack>
        <Title order={3}>Suggestions For You</Title>
        {suggestedUsers.map((item) => (
          <Group
            align="center"
            gap="xs"
            style={{ cursor: "pointer", wrap: "nowrap" }}
          >
            <Avatar src={item.src} />
            <Stack gap={4}>
              <Text size="sm" style={{ whiteSpace: "nowrap" }}>
                {item.nickname}
              </Text>
              <Text c="dimmed" size="xs" style={{ whiteSpace: "nowrap" }}>
                {item.description}
              </Text>
            </Stack>
          </Group>
        ))}
        <Button variant="subtle" size="sm">
          See more...
        </Button>
      </Stack>
    </AppShell.Aside>
  );
};
