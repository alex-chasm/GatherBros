'use client'
import Link from 'next/link'
import Box from '@mui/material/Box'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import HomeIcon from '@mui/icons-material/Home'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import { usePathname } from 'next/navigation'

export default function BottomNav() {
  const pathname = usePathname()

  const functionSetNavigation = () => {
    switch (pathname) {
      case '/':
        return 0
      case '/location':
        return 1
      default:
        return 0
    }
  }

  return (
    <Box sx={{ width: '100%', margin: 'auto' }}>
      <BottomNavigation showLabels value={functionSetNavigation()}>
        <BottomNavigationAction
          LinkComponent={Link}
          href="/"
          label="Home"
          icon={<HomeIcon />}
        />
        <BottomNavigationAction
          LinkComponent={Link}
          href="/location"
          label="Location"
          icon={<LocationOnIcon />}
        />
        {/* <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} /> */}
      </BottomNavigation>
    </Box>
  )
}
