import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  Container,
  SimpleGrid,
} from "@mantine/core";
import postData from "../../data/postData";

export default function Post() {
  return (
    <Container size="xl" mt="xs">
      <SimpleGrid cols={3}>
        {postData.map((post) => (
          <Card
            key={post.id}
            shadow="sm"
            padding="lg"
            radius="md"
            withBorder
            mb="sm"
          >
            <Card.Section>
              <Image src={post.image} height={160} alt={post.title} />
            </Card.Section>

            <Group justify="space-between" mt="md" mb="xs">
              <Text fw={500}>{post.title}</Text>
              <Badge color="pink">{post.badgeText}</Badge>
            </Group>

            <Text size="sm" c="dimmed">
              {post.description}
            </Text>

            <Button color="blue" fullWidth mt="md" radius="md">
              Book now
            </Button>
          </Card>
        ))}
      </SimpleGrid>
    </Container>
  );
}
