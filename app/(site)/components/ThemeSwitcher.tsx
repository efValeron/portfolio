"use client";

import {useTheme} from "next-themes";
import {useEffect, useState} from "react";
import {Moon, Sun} from "lucide-react";
import {Button} from "@nextui-org/react";

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false)
  const {theme, setTheme} = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return theme === "light"
    ? <Button isIconOnly variant="light" onClick={() => setTheme('dark')}>
      <Moon/>
    </Button>
    : <Button isIconOnly variant="light" onClick={() => setTheme('light')}>
      <Sun/>
    </Button>
}
