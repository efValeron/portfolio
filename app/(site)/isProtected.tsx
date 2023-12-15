import { ComponentType } from "react"
import { JSX } from "react/jsx-runtime"
import IntrinsicAttributes = JSX.IntrinsicAttributes
import { UnderMaintenancePage } from "@/app/(site)/UnderMaintenancePage"

type ProtectType = "underMaintenance"

export function isProtected<P extends IntrinsicAttributes>(Component: ComponentType<P>, protectType: ProtectType) {
  return function IsProtected(props: P) {
    if (process.env.NODE_ENV === "development") {
      return <Component {...props} />
    }

    switch (protectType) {
      case "underMaintenance":
        return <UnderMaintenancePage/>
      default:
        return <Component {...props} />
    }
  }
}