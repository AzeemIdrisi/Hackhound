import React from 'react'
import Barriers from '../../component/Barriers'
import { Input } from '../../component/ui/input'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from '../../component/ui/form'
import { Button } from '../../component/ui/button'
import { toast } from '../../component/ui/use-toast'
import { Label } from '../../component/ui/label'
import { DropdownMenuCheckboxes } from '../../component/DropDownMenuCheckboxes'
// UPLOAD
export default function Home() {
  
  function handleSubmit(e) {
    e.preventDefault()
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }
  return (
    <div className='w-screen h-screen grid place-items-center'>
      <form onSubmit={handleSubmit} className="w-2/3 space-y-6 text-gray-10 ">
        <DropdownMenuCheckboxes/>
        <Input type="email" placeholder="Enter your Name"/>
        <h1 className='font-bold text-lg'>Your 10th Marksheet</h1>
        <Input type="file" required/>
        <h1 className='font-bold text-lg'>Your 10th Marksheet</h1>
        <Input type="file"/>
        <Button type="submit" className="text-gray-5">Submit</Button>
      </form>
      </div>
  )
}
