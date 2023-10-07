"use client"

import {useEffect, useMemo, useState} from "react";
import {Profile} from "@/types";
import {getProfileForHome} from "@/sanity/sanity.query";
import {motion} from "framer-motion";
import {Input, Listbox, ListboxItem} from "@nextui-org/react";

export const ContactSec = () => {
  const [profile, setProfile] = useState<Profile | null>(null)

  useEffect(() => {
    getProfileHandle().then(profile => setProfile(profile[0]))
  }, [])

  const getProfileHandle = async () => await getProfileForHome()

  return (
    <>
      {
        profile &&
        <div className="flex gap-32 items-center container">
          <SelectBox/>
        </div>
      }
    </>
  )
}

const SelectBox = () => {
  const [selectedKeys, setSelectedKeys] = useState(new Set(["text"]))

  const selectedValue = useMemo(
    () => Array.from(selectedKeys).join(", "),
    [selectedKeys]
  )

  return (
    <div className="flex flex-col gap-2">
      <div className="border-small px-1 py-2 bg-primary-50 rounded-small border-default-200 dark:border-default-100">
        <h4 className="text-md font-medium mx-3 my-3">Can you also provide who are you:</h4>
        <Listbox
          color="primary"
          aria-label="Who are you?"
          variant="flat"
          disallowEmptySelection
          selectionMode="single"
          selectedKeys={selectedKeys}
          // @ts-ignore
          onSelectionChange={setSelectedKeys} // <-- there is a problem
        >
          <ListboxItem key="stranger">Stranger</ListboxItem>
          <ListboxItem key="hr">HR</ListboxItem>
          <ListboxItem key="notSpecified">I can't say</ListboxItem>
          <ListboxItem key="other">Other</ListboxItem>
        </Listbox>
        {
          selectedValue === "other" &&
          <Input className="mt-2" type="text" label="Who, other?" size="sm" variant="bordered"/>
        }
      </div>
      <p className="text-small text-default-500">Selected value: {selectedValue}</p>
    </div>
  )
}