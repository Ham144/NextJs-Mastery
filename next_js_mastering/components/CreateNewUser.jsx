"use client";
import React from "react";
import { Button, Input } from "@material-tailwind/react";
import { useState } from "react";

const CreateNewUser = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandle = async (e) => {
    e.preventDefault();
    if (!name || !age || !email || !password)
      return alert("Fields perlu diisi");
    try {
      setName(name);
      setAge(age);
      setEmail(email);
      setPassword(password);
    } catch (error) {
      alert(error);
      return;
    }
    const response = await fetch("api/users", {
      method: "POST",
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
      alert("Berhasil membuat new user");
      setName("");
      setAge("");
      setEmail("");
      setPassword("");
      return;
    } else {
      alert("Gagal membuat New user");
      return;
    }
  };

  return (
    <form
      action="submit"
      onSubmit={submitHandle}
      className="flex flex-col gap-3"
    >
      <Input
        label="Name"
        value={name}
        type="text"
        placeholder="Alan Turing"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <Input
        label="Age"
        value={age}
        type="number"
        placeholder="41"
        onChange={(e) => {
          setAge(e.target.value);
        }}
      />
      <Input
        label="Email"
        value={email}
        type="email"
        placeholder="alanturingWW2@hero.com"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <Input
        label="Password"
        value={password}
        type="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <Button type="submit" onClick={submitHandle} className="button-sekunder">
        Sign Up
      </Button>
    </form>
  );
};

export default CreateNewUser;
