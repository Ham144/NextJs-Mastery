"use client";
import React, { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import Allusers from "./Allusers";

const AccordionUI = () => {
  const [open, setOpen] = useState(1);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div>
      <Accordion open={open === 1} className="w-[23rem] justify-self-end">
        <AccordionHeader onClick={() => handleOpen(1)}>
          SHOW ALL USERS
        </AccordionHeader>
        <AccordionBody>
          <Allusers />
        </AccordionBody>
      </Accordion>
    </div>
  );
};

export default AccordionUI;
