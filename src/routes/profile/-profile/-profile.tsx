import { Button, Grid } from "@mantine/core";
import { Link } from "@tanstack/react-router";

export default function Profile() {
  return (
    <Grid gutter={{ base: 5, xs: "md", md: "xl", xl: 50 }}>
      <Grid.Col span={4}>
        <Button
          // component={Link}
          // to={"/profile/profileDetail"}
          variant="filled"
          justify="center"
        >
          1
        </Button>
      </Grid.Col>
      <Grid.Col span={4}>
        <Button variant="filled" justify="center">
          2
        </Button>
      </Grid.Col>
      <Grid.Col span={4}>
        <Button variant="filled" justify="center">
          3
        </Button>
      </Grid.Col>
    </Grid>
  );
}
