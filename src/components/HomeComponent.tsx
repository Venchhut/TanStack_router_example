import React from "react";
import {
  Container,
  Grid,
  Card,
  Text,
  Slider,
  Checkbox,
  Button,
  Select,
  TextInput,
  Group,
  Badge,
  Stack,
  SimpleGrid,
} from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

function ProductFilter() {
  return (
    <SimpleGrid>
      <Stack>
        {/* Keywords Section */}
        <TextInput
          placeholder="Keywords"
          label="Keywords"
          defaultValue="Spring, Smart"
          rightSection={
            <Button variant="outline" size="xs">
              ×
            </Button>
          }
        />

        {/* Category Select */}
        <Select
          label="Category"
          placeholder="Modern"
          data={["Modern", "Classic", "Vintage"]}
        />

        {/* Checkbox Filters */}
        <Stack>
          <Checkbox label="Label" />
          <Checkbox label="Label" />
          <Checkbox label="Label" />
        </Stack>

        {/* Slider for Range */}
        <div>
          <Text>Label</Text>
          <Slider defaultValue={50} labelAlwaysOn />
        </div>

        {/* Color Filter */}
        <Text>Color</Text>
        <Stack>
          <Checkbox label="Label" />
          <Checkbox label="Label" />
          <Checkbox label="Label" />
        </Stack>

        {/* Size Filter */}
        <Text>Size</Text>
        <Stack>
          <Checkbox label="Label" />
          <Checkbox label="Label" />
          <Checkbox label="Label" />
        </Stack>
      </Stack>
    </SimpleGrid>
  );
}

function ProductCard() {
  return (
    <Card shadow="sm" padding="lg">
      <div
        style={{ height: 140, backgroundColor: "#f0f0f0", borderRadius: "4px" }}
      />
      <Text>Text</Text>
      <Text align="center" color="dimmed">
        $0
      </Text>
    </Card>
  );
}

function ProductGrid() {
  return (
    <Grid gutter="lg">
      {[...Array(6)].map((_, index) => (
        <Grid.Col key={index} span={4}>
          <ProductCard />
        </Grid.Col>
      ))}
    </Grid>
  );
}

function HomeComponent() {
  return (
    <Container
      size="xl"
      style={{ backgroundColor: "#f8f9fa", padding: "20px" }}
    >
      <Grid>
        {/* Sidebar */}
        <Grid.Col span={3}>
          <ProductFilter />
        </Grid.Col>

        {/* Main Content */}
        <Grid.Col span={9}>
          <Group position="apart" mb="lg">
            {/* Search Input */}
            <TextInput
              placeholder="Search"
              icon={<IconSearch size={16} />}
              style={{ flexGrow: 1, marginRight: "10px" }}
            />

            {/* Filter Buttons */}
            <Group spacing="xs">
              <Badge color="dark" variant="filled">
                New
              </Badge>
              <Button variant="outline" size="xs">
                Price ascending
              </Button>
              <Button variant="outline" size="xs">
                Price descending
              </Button>
              <Button variant="outline" size="xs">
                Rating
              </Button>
            </Group>
          </Group>

          {/* Product Grid */}
          <ProductGrid />
        </Grid.Col>
      </Grid>
    </Container>
  );
}

export default HomeComponent;
