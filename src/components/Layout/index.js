import React from "react"
import { ThemeProvider } from "styled-components"

import theme from "utils/theme"

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <main>{children}</main>
    </ThemeProvider>
  )
}

export default Layout
