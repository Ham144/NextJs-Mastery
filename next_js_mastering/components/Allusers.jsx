"use client";

import React from "react";
import { List, ListItem, Card } from "@material-tailwind/react";
import { useEffect, useState } from "react";
const Allusers = () => {
  const [users, setUsers] = useState("");
  let userInfo = null;
  useEffect(() => {
    const fetchAllUsers = async () => {
      const response = await fetch("/api/users");
      userInfo = await response.json();
      setUsers(userInfo.data);
    };
    fetchAllUsers();
  }, []) //jangan lupa taruh square bracket [] pada use effect kalau tidak dia terus update habisin internet

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
                <ListItem className="flex flex-row justify-center">
                  <div className="absolute left-4  text-blue-300 font-bold">
                    {user.id}
                  </div>
                  <div className="flex justify-center  text-blue-300 font-bold">
                    {user.name}
                  </div>
                </ListItem>
              </List>
            </Card>
          )
        )
      )}
    </div>
  );
};

export default Allusers;
