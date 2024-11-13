import { Flex, SimpleGrid, Stack, Table, Tabs, Title } from "@mantine/core";
import {
  IconBorderStyle,
  IconBorderStyle2,
  IconPhoto,
} from "@tabler/icons-react";
import {
  Badge,
  Button,
  Group,
  Paper,
  Progress,
  Text,
  ThemeIcon,
} from "@mantine/core";
import { IconChartLine } from "@tabler/icons-react";
import { Link } from "@tanstack/react-router";
import classes from "./state.module.css";
import { useDisclosure } from "@mantine/hooks";
const elements = [
  { position: 6, mass: 12.011, symbol: "C", name: "Carbon", color: "red" },
  { position: 7, mass: 14.007, symbol: "N", name: "Nitrogen", color: "blue" },
  { position: 39, mass: 88.906, symbol: "Y", name: "Yttrium", color: "green" },
  { position: 56, mass: 137.33, symbol: "Ba", name: "Barium", color: "red" },
  { position: 58, mass: 140.12, symbol: "Ce", name: "Cerium", color: "blue" },
];
export const HeaderMegaMenu = () => {
  return (
    <>
      <Title order={4}>Home Detail</Title>
      <Tabs>
        <Tabs.List>
          <Tabs.Tab value="gallery" leftSection={<IconPhoto />}>
            Gallery
          </Tabs.Tab>
          <Tabs.Tab value="border" leftSection={<IconBorderStyle />}>
            Border
          </Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="gallery">
          <h1>All card list </h1>
        </Tabs.Panel>
      </Tabs>
      <Stack>
        <SimpleGrid cols={3}>
          <StatsCard title="Stats" subtitle="Today" />
          <StatsCard title="Stats" subtitle="Today" />
          <StatsCard title="Stats" subtitle="Today" />
        </SimpleGrid>
      </Stack>
      <Flex gap="md" justify="center" align="center">
        <Demo />
      </Flex>
    </>
  );
};

function StatsCard({
  title,
  subtitle,
  to,
}: {
  title: string;
  subtitle: string;
  value: string;
  to?: string;
}) {
  return (
    <Flex justify="center" align="center" gap="md">
      <Paper radius="md" withBorder className={classes.card} mt={20}>
        <ThemeIcon className={classes.icon} size={60} radius={60}>
          <IconChartLine size={36} stroke={1.5} />
        </ThemeIcon>

        <Text ta="center" fw={700} className={classes.title}>
          {title}
        </Text>
        <Text c="dimmed" ta="center" fz="sm">
          {subtitle}
        </Text>

        <Group justify="space-between" mt="xs">
          <Text fz="sm" c="dimmed">
            Progress
          </Text>
          <Badge variant="light" size="sm">
            {subtitle}
          </Badge>
        </Group>

        <Progress value={62} mt={5} />

        <Group justify="flex-end" mt="md">
          <Button variant="outline" size="xs" component={Link} to={to}>
            Detail
          </Button>
        </Group>
      </Paper>
    </Flex>
  );
}

function Demo() {
  const rows = elements.map((element) => (
    <Table.Tr key={element.name}>
      <Table.Td>{element.position}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.symbol}</Table.Td>
      <Table.Td>{element.mass}</Table.Td>
      <Table.Td>{element.color}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Table stickyHeader stickyHeaderOffset={60}>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Element position</Table.Th>
          <Table.Th>Element name</Table.Th>
          <Table.Th>Symbol</Table.Th>
          <Table.Th>Atomic mass</Table.Th>
          <Table.Th>color</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
}

// useDisclosure

function DemoDisclosure() {
  const [opened, handlers] = useDisclosure(false);

  // Sets opened to true
  handlers.open();

  // Sets opened to false
  handlers.close();

  // Sets opened to true if it was false and vice versa
  handlers.toggle();
}
