"use client";

import React from "react";
import { List, ListItem, Card } from "@material-tailwind/react";
import { useEffect, useState } from "react";
const Allusers = () => {
  const [users, setUsers] = useState("");
  useEffect(() => {
    const fetchAllUsers = async () => {
      const response = await fetch("/api/users");
      const userInfo = await response.json();
      setUsers(userInfo.data);
    };
    fetchAllUsers();
  }, []);//jangan lupa taruh square bracket [] pada use effect kalau tidak dia terus update habisin data

  return (
    <div>
      {users.length === 0 ? (
        <p>Loading users...</p>
      ) : (
        users.map(
          (
            user //ini jangan lupa, pake parenthesis bukan curly-braces kaya biasa
          ) => (
            <Card key={user.id} className="mb-4">
              <List>
                <ListItem>{user.name}</ListItem>
              </List>
            </Card>
          )
        )
      )}
    </div>
  );
};

export default Allusers;
