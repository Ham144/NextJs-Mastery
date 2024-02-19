"use client";

import React from "react";
import { List, ListItem, Card } from "@material-tailwind/react";
import { useEffect, useState } from "react";
const Allusers = () => {
  const [users, setUsers] = useState("");
  useEffect(() => {
    const fetchAllUsers = async () => {
      const response = await fetch("/api/users");
      const users = await response.json();
      setUsers(users);
    };
    fetchAllUsers();
  });

  return (
    <div>
      {users ? (
        users.map((user) => {
          <Card key={user.id} className="mb-4">
            <List>
              <ListItem>{user.name}</ListItem>
            </List>
          </Card>;
        })
      ) : (
        <div>
          <pre>N0thing f0und</pre>
        </div>
      )}
    </div>
  );
};

export default Allusers;
