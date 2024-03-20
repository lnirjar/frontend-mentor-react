import { Attribution } from "./Attribution"

export const Layout = ({ children }) => {
  return (
    <>
      {children}
      <Attribution />
    </>
  )
}
