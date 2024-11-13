import { Grid, SimpleGrid, UnstyledButton } from "@mantine/core";
import React from "react";
import classes from "./HomeComponent.module.css";
const mockData = [
  {
    username: "john.doe",
    name: "John Doe",
    date: "2000-01-01",
    age: 20,
    phoneNumber: "123-456-7890",
  },
  {
    username: "jane.smith",
    name: "Jane Smith",
    date: "1990-01-01",
    age: 30,
    phoneNumber: "987-654-3210",
  },
  {
    username: "bob.johnson",
    name: "Bob Johnson",
    date: "1980-02-02",
    age: 40,
    phoneNumber: "555-123-4567",
  },
  {
    username: "alice.williams",
    name: "Alice Williams",
    date: "1995-03-03",
    age: 25,
    phoneNumber: "901-234-5678",
  },
  {
    username: "mike.davis",
    name: "Mike Davis",
    date: "1970-04-04",
    age: 50,
    phoneNumber: "111-222-3333",
  },
  {
    username: "emily.chen",
    name: "Emily Chen",
    date: "2005-05-05",
    age: 15,
    phoneNumber: "444-555-6666",
  },
  {
    username: "david.lee",
    name: "David Lee",
    date: "1985-06-06",
    age: 35,
    phoneNumber: "777-888-9999",
  },
  {
    username: "sarah.taylor",
    name: "Sarah Taylor",
    date: "1992-07-07",
    age: 28,
    phoneNumber: "333-444-5555",
  },
  {
    username: "kevin.white",
    name: "Kevin White",
    date: "1975-08-08",
    age: 45,
    phoneNumber: "666-777-8888",
  },
  {
    username: "olivia.martin",
    name: "Olivia Martin",
    date: "2002-09-09",
    age: 18,
    phoneNumber: "999-000-1111",
  },
];
const HomeComponent = () => {
  const items = mockData.map((item, index) => (
    <UnstyledButton className={classes.item}>
      <div key={index}>{item.name}</div>
    </UnstyledButton>
  ));
  return <SimpleGrid cols={{ base: 2, md: 4 }}>{items}</SimpleGrid>;
};

export default HomeComponent;
