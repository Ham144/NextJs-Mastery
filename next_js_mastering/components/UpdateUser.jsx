"use client";
import React from "react";
import { useState } from "react";
import { Button, Input } from "@material-tailwind/react";

const UpdateUser = () => {
  const [Id, setId] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      setId(Id);
      setName(name);
      setAge(age);
      setEmail(email);
      setPassword(password);
    } catch (error) {
      return alert("terjadi kesalahan saat memasukkan data ke usestate");
    }
    if (!Id) return alert("No, Diperlukan ID untuk mengedit user data");
    else {
      if ((name, age, email, password)) {
        const response = await fetch(`api/users/${Id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ Id, name, age, email, password }),
        });
        if (response.ok) {
          alert(`Berhasil mengedit data user ${name}`);
          setId("");
          setName("");
          setAge("");
          setEmail("");
          setPassword("");
        } else return console.log("GAGAL, Response is not ok");
      } else {
        const response = await fetch(`api/users/${Id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            age,
            email,
            password,
          }),
        });
        if (response.ok) {
          alert(`Berhasil mengedit data user ${name}`);
          setId("");
          setName("");
          setAge("");
          setEmail("");
          setPassword("");
        } else return console.log("GAGAL, Response is not ok");
      }
    }
  };

  return (
    <form action="sumbit" className="flex flex-col gap-5 ">
      <Input
        label="ID"
        value={Id}
        type="text"
        placeholder="masukkan ID user yang ingin diubah"
        onChange={(e) => setId(e.target.value)}
      />
      <Input
        label="Name"
        type="text"
        value={name}
        placeholder="Alan Turing"
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        label="Age"
        type="number"
        value={age}
        placeholder="23"
        onChange={(e) => setAge(e.target.value)}
      />
      <Input
        label="email"
        type="email"
        value={email}
        placeholder="alanturing@gmail.com"
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        label="new password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button className="button-primer" onClick={handleUpdate}>
        Update user
      </Button>
    </form>
  );
};

export default UpdateUser;
