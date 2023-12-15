import { UnderMaintenancePage } from "@/app/(site)/UnderMaintenancePage"

type ProtectType = "underMaintenance"

export function isProtected(Component: any, protectType: ProtectType) {
  return function IsProtected(props: any) {
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