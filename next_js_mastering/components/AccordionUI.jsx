"use client";
import React, { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import Allusers from "./Allusers";
import SpecificUser from "./SpecificUser";
import CreateNewUser from "./CreateNewUser";

const AccordionUI = () => {
  const [open, setOpen] = useState(0);
  const handleOpen = (value) => setOpen(open == value ? 0 : value);

  return (
    <div>
      <Accordion open={open === 1} className="w-[23rem]  ">
        <AccordionHeader onClick={() => handleOpen(1)}>
          SHOW ALL USERS
        </AccordionHeader>
        <AccordionBody>
          <Allusers />
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} className="w-[23rem]">
        <AccordionHeader onClick={() => handleOpen(2)}>
          Search Specific User
        </AccordionHeader>
        <AccordionBody>
          <SpecificUser />
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} className="w-[23rem]">
        <AccordionHeader onClick={() => handleOpen(3)}>
            Create new User
        </AccordionHeader>
        <AccordionBody>
            <CreateNewUser />            
        </AccordionBody>
      </Accordion>
    </div>
  );
};

export default AccordionUI;
