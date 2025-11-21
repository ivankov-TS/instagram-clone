import {
  AppShell,
  Avatar,
  Button,
  Group,
  Stack,
  Text,
  Title,
} from "@mantine/core";

const adata = [
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
        {adata.map((item) => (
          <Group align="center">
            <Avatar radius="xl" src={item.src} />
            <Stack gap={4}>
              <Text c="white" size="sm">
                {item.nickname}
              </Text>
              <Text c="gray" size="xs">
                {item.description}
              </Text>
            </Stack>
          </Group>
        ))}
        <Button variant="outline" radius="xl" color="teal" w="100px" size="sm">
          See more...
        </Button>
      </Stack>
    </AppShell.Aside>
  );
};
