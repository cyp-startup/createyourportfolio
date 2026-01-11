'use client'

import { UserIcon, SettingsIcon, LogOutIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { useNavigate } from 'react-router-dom'

const ProfileDropdown = () => {
    const navigate = useNavigate()

    const handleProfileClick = () => {
        navigate('/profile')
    }

    const handleSettingsClick = () => {
        navigate('/profile')
    }

    return (
        <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button variant='secondary' size='icon' className='overflow-hidden rounded-full'>
                <div className='w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-medium'>
                    b
                </div>
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='w-56 z-[101]'>
            <DropdownMenuLabel>
                khamidullayevam...@gmail.com
            </DropdownMenuLabel>
            <DropdownMenuGroup>
                <DropdownMenuItem onClick={handleProfileClick} className='cursor-pointer'>
                    <UserIcon />
                    <span className='text-popover-foreground'>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleSettingsClick} className='cursor-pointer'>
                    <SettingsIcon />
                    <span className='text-popover-foreground'>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuItem className='cursor-pointer'>
                    <LogOutIcon />
                    <span className='text-popover-foreground'>Sign Out</span>
                </DropdownMenuItem>
            </DropdownMenuGroup>
        </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default ProfileDropdown