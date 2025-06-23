import React from 'react'
import { usePathname } from 'next/navigation'
const NavBar = () => {
    const pathName = usePathname()
  return (
    <>
      {pathName !== '/sigIn' && pathName !=='/signUp' && (
        <nav>
          {/* Your NavBar content here */}
        </nav>
      )}
    </>
  )
}

export default NavBar
