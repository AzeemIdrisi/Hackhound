import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Navbar from '../../component/Navbar'

export default function MainLayout() {
  return (
    <div className='bg-gray-9 text-gray-5 overflow-x-hidden'>
      <div className='absolute w-screen z-10'>
      {/* <Navbar/> */}
      <div className='fixed text-gray-5 bg-base-primary grid justify-center w-52 pt-6 h-screen'>
        <div className="text-center">
          <h1 className='flex gap-4 justify-start px-4 font-bold text-xl pb-16'> Doc-Vault</h1>
          <ul className='grid gap-2 text-gray-3 text-md font-semibold'>
            <Link to="/" className={buttonVariants({ variant: "secondary", size: "sm", className: "flex w-52 gap-4 hover:bg-gray-5 hover:text-gray-10" })}><HomeIcon /> My Documents</Link>
            <Link to="/friends" className={buttonVariants({ variant: "secondary", size: "sm", className: "flex w-52 gap-4 hover:bg-gray-5 hover:text-gray-10" })}><GroupIcon /> Friends</Link>
            
            <Dialog>
              <DialogTrigger className="flex w-52 gap-4 px-3 py-2 rounded-lg hover:bg-gray-5 hover:text-gray-10"><UploadIcon/> Upload</DialogTrigger>
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
            <LogoutButton />
          </ul>
        </div>
      </div>
      </div>
      <div>
         <Outlet/>
      </div>
      <HoverCard className="">
        <HoverCardTrigger className="absolute z-20 right-5 top-5 flex cursor-pointer items-center gap-2 bg-gray-6 p-2 rounded-3xl">
          <Avatar className="w-8">
            <AvatarImage className="rounded-full" src={user.picture} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

        </HoverCardTrigger>
        <HoverCardContent className="z-20 mt-2 grid gap-2 text-center w-44 bg-gray-6 p-2">
          <h1 className="text-sm tracking-widest">{user.name}</h1>
          <h1 className="text-gray-1">AccountType: Sellers</h1>

        </HoverCardContent>
      </HoverCard>
    </div>
  )
}
