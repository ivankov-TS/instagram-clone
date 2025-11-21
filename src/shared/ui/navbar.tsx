import { AppShell, NavLink, Stack } from "@mantine/core";
import { Bookmark, Clapperboard, ClockFading, House } from "lucide-react";
import { useState } from "react";

const data = [
  {
    label: "News Feed",
    icon: House,
  },
  {
    label: "Reels",
    icon: Clapperboard,
  },
  {
    label: "Saved",
    icon: Bookmark,
  },
  {
    label: "Archive",
    icon: ClockFading,
  },
];

export const Navbar = () => {
  const [active, setActive] = useState(0);

  return (
    <AppShell.Navbar
      style={{ position: "sticky", width: "248px" }}
      pl={0}
      p="md"
    >
      <Stack gap="4px">
        {data.map((item, index) => (
          <NavLink
            href="#"
            label={item.label}
            style={{ borderRadius: "20px" }}
            active={index === active}
            onClick={() => setActive(index)}
            leftSection={<item.icon size={20} />}
          />
        ))}
      </Stack>
    </AppShell.Navbar>
  );
};
