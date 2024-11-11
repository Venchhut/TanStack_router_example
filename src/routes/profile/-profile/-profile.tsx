import {
  Accordion,
  Button,
  Grid,
  GridCol,
  Paper,
  ScrollArea,
  Stack,
  TextInput,
  Title,
} from "@mantine/core";
import groceries from "../../../data/mockdata";

export default function Profile() {
  return (
    <ScrollArea h={1000}>
      <Grid justify="center" align="center">
        <Grid.Col span={4}>
          <Paper withBorder p="md">
            <Stack>
              <Title>Edit Profile</Title>
              <TextInput label="title" placeholder="input title " />
              <TextInput label="title" placeholder="input title " />
              <TextInput label="title" placeholder="input title " />

              <Button>Submit</Button>
            </Stack>
          </Paper>
        </Grid.Col>
        <GridCol span={8}>
          <Paper withBorder p="md">
            <Title __size="ms">Your info</Title>
            <DetailItem />
          </Paper>
        </GridCol>
      </Grid>
    </ScrollArea>
  );
}

function DetailItem() {
  const items = groceries.map((item, index) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion>{item.value}</Accordion>
      <Accordion>{item.description}</Accordion>
      <Accordion>{index}</Accordion>
    </Accordion.Item>
  ));
  return <Accordion>{items}</Accordion>;
}
