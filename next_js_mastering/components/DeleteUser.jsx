"use client";
import React from "react";
import { useState } from "react";
import { Button, Input } from "@material-tailwind/react";

const DeleteUser = () => {
  const [id, setId] = useState(null);
  const handleDelete = async () => {
    const response = await fetch(`api/users/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) return  alert("gagal fetching");
    
    setId('')
    return alert("berhasil delete");
  };

  return (
    <div>
      <Input
        label="ID"
        placeholder="masukkan ID"
        type="text"
        onChange={(e) => setId(e.target.value)}
        value={id}
        onKeyDown={(e) => e.key === "Enter" && handleDelete() }
      />
      <Button
        onClick={handleDelete}
        type="submit"
        className="button-sekunder mt-3 w-[23rem]"
      >
        Hapus
      </Button>
    </div>
  );
};

export default DeleteUser;
