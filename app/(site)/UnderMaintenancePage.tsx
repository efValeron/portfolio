"use client"

import { AlertTriangle, ArrowBigLeft } from "lucide-react"
import { Button, Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react"
import { useRouter } from "next/navigation"

export const UnderMaintenancePage = () => {
  const router = useRouter()

  return (
    <main className="flex min-h-screen pt-28 lg:pt-16 max-lg:pb-12 flex-col lg:justify-center items-center">
      <Card className="max-w-md p-4">
        <CardHeader className="flex flex-col gap-3">
          <AlertTriangle className="w-16 h-16 text-primary-500"/>
          <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold">Under Maintenance</h2>
        </CardHeader>
        <CardBody>
          <p>We apologize for any inconvenience caused by the current maintenance of this page.<br/>Please come back
            later.</p>
        </CardBody>
        <CardFooter className="flex justify-center">
          <Button onClick={() => router.back()} startContent={<ArrowBigLeft/>}>Go back</Button>
        </CardFooter>
      </Card>
    </main>
  )
}