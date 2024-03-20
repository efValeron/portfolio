import { ReactNode } from "react"
import { cn } from "@/utils/cn"

type Props = {
  children?: ReactNode;
  className?: string;
}

const h1 = ({ children, className }: Props) => (
  <h1 className={cn(
    "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
    className
  )}>
    {children}
  </h1>
)

const h2 = ({ children, className }: Props) => (
  <h2 className={cn(
    "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
    className
  )}>
    {children}
  </h2>
)

const h3 = ({ children, className }: Props) => (
  <h3 className={cn(
    "scroll-m-20 text-2xl font-semibold tracking-tight",
    className
  )}>
    {children}
  </h3>
)

const h4 = ({ children, className }: Props) => (
  <h4 className={cn(
    "scroll-m-20 text-xl font-semibold tracking-tight",
    className
  )}>
    {children}
  </h4>
)

const p = ({ children, className }: Props) => (
  <p className={cn(
    "leading-7 [&:not(:first-child)]:mt-6",
    className
  )}>
    {children}
  </p>
)

const blockquote = ({ children, className }: Props) => (
  <blockquote className={cn(
    "mt-6 border-l-2 pl-6 italic",
    className
  )}>
    {children}
  </blockquote>
)

const lead = ({ children, className }: Props) => (
  <p className={cn(
    "text-xl text-muted-foreground",
    className
  )}>
    {children}
  </p>
)

const large = ({ children, className }: Props) => (
  <div className={cn(
    "text-lg font-semibold",
    className
  )}>
    {children}
  </div>
)

const small = ({ children, className }: Props) => (
  <small className={cn(
    "text-sm font-medium leading-none",
    className
  )}>
    {children}
  </small>
)

const muted = ({ children, className }: Props) => (
  <p className={cn(
    "text-sm text-muted-foreground",
    className
  )}>
    {children}
  </p>
)

const Typography = {
  h1,
  h2,
  h3,
  h4,
  p,
  blockquote,
  lead,
  large,
  small,
  muted
}
export default Typography