import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Navbar from '../../component/Navbar'
import { Dialog, DialogContent, DialogHeader, DialogOverlay, DialogTitle, DialogTrigger } from '../../component/ui/dialog'
// import { HoverCard, HoverCardContent, HoverCardTrigger } from '../../component/ui/hover-card'
import { Avatar, AvatarFallback, AvatarImage } from '../../component/ui/avatar'
import { buttonVariants } from '../../component/ui/button'
import { GroupIcon, HomeIcon, UploadIcon } from 'lucide-react'
import { User, useAuth0 } from '@auth0/auth0-react'

export default function MainLayout() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  // console.log(user)
  return (
    <div className='bg-base-tertiary text-gray-5 overflow-x-hidden'>
      <div className='absolute w-screen z-10'>
      {/* <Navbar/> */}
      <div className='fixed text-gray-5 bg-base-primary grid justify-center w-52 pt-6 h-screen'>
        <div className="text-center">
          <h1 className='flex gap-4 justify-start px-4 font-bold text-xl pb-16'> NormalEZ</h1>
          <ul className='grid gap-2 text-gray-3 text-md font-semibold'>
            <Link to="/" className={buttonVariants({ variant: "secondary", size: "sm", className: "flex w-52 text-gray-5 gap-4 hover:bg-base-accent hover:text-gray-10" })}><HomeIcon/> My Documents</Link>
            {/* <Link to="/friends" className={buttonVariants({ variant: "secondary", size: "sm", className: "flex w-52 text-gray-10 gap-4 hover:bg-gray-5 hover:text-gray-10" })}><GroupIcon/> Friends</Link> */}
            
            <Dialog className="">
              <DialogTrigger className="flex w-52 gap-4  px-10 py-2 rounded-lg hover:bg-base-accent hover:text-gray-10"><UploadIcon/> Upload</DialogTrigger>
              <DialogOverlay className="w-screen h-screen grid place-items-center">
                <DialogContent className=" p-5 rounded-2xl sm:max-w-[425px] bg-gray-5 text-gray-10">
                  <DialogHeader>
                    <DialogTitle className="font-bold text-xl">Upload</DialogTitle>
                  </DialogHeader>
                  <div className="grid w-full max-w-sm items-center gap-1.5">
                    Upload
                    {/* <Upload contract={contract} account={account} provider={provider}/> */}
                  </div>
                </DialogContent>
              </DialogOverlay>
            </Dialog>
            {/* <LogoutButton /> */}
          </ul>
        </div>
      </div>
      </div>
      <div>
         <Outlet/>
      </div>
      {/* <HoverCard className="">
        <HoverCardTrigger className="absolute z-20 right-5 top-5 flex cursor-pointer items-center gap-2 bg-gray-6 p-2 rounded-3xl">
          

        </HoverCardTrigger>
        <HoverCardContent className="z-20 mt-2 grid gap-2 text-center w-44 bg-gray-6 p-2">
          <h1 className="text-sm tracking-widest">{user.name}</h1>
          <h1 className="text-gray-1">AccountType: Sellers</h1>

        </HoverCardContent>
      </HoverCard> */}
      <div className='absolute z-10 right-10 bg-gray-6 '>
      <Avatar className="w-8">
            <AvatarImage className="rounded-full" src={user.picture} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
      </div>
      
    </div>
  )
}
