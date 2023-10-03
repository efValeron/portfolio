"use client";

import {useTheme} from "next-themes";
import {useEffect, useState} from "react";
import {MoonIcon, SunIcon} from "lucide-react";
import {Switch} from "@nextui-org/react";

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false)
  const {theme, setTheme} = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return <Switch
    defaultSelected
    size="lg"
    color="success"
    isSelected={theme === "light"}
    onValueChange={value => value ? setTheme('light') : setTheme('dark')}
    startContent={<SunIcon />}
    endContent={<MoonIcon />}
  />
}
