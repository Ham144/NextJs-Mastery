"use client";
import React from "react";
import { Button, Card, List, ListItem, Input } from "@material-tailwind/react";
import { useState } from "react";

const SpecificUser = () => {
  const [userId, setUserID] = useState("");
  const [userData, setUserData] = useState(null);

  const fetchSpecificData = async () => {
    const response = await fetch(`api/users/${userId}`);
    if (response.ok) {
      const res = await response.json();
      return setUserData(res.found);
      //   console.log(res.found[0].name);
    }
    console.log(" EROR Terjadi saat fetching");
    return setUserData(null);
  };

  return (
    <div>
      <div className="flex">
        <div className="w-72">
          <Input
            type="text"
            value={userId}
            label="Masukkan Id pencarian"
            onChange={(e) => setUserID(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                fetchSpecificData();
              }
            }}
          />
          <Button
            id="search"
            onClick={fetchSpecificData}
            className="button-primer mt-5"
          >
            Search
          </Button>
          {userData ? (
            userData.map(
              (
                user // JANGAN LUPA PAKAI RETURN ATAU PARENTHESIS, JANGAN PAKAI CURLY BRACES,,,didalam jsx return, fungsi arrownya () => () bukan kaya biasa () => {}. tolol kali sampe satu hari nemu ini react babi
              ) => (
                <Card className="w-96 mt-5" key={user.id + 1}>
                  <List>
                    <ListItem>ID : {user.id}</ListItem>
                    <ListItem key={user.age}>Usia : {user.age}</ListItem>
                    <ListItem key={user.email}>Email: {user.email}</ListItem>
                    <ListItem key={user.password}>
                      Password : {user.password}
                    </ListItem>
                  </List>
                </Card>
              )
            )
          ) : (
            <p className="mt-2">Search for specific user</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SpecificUser;
