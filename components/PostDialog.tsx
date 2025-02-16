import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

import ProfilePhoto from "./ProfilePhoto"
import { Textarea } from "./ui/textarea"
import { Images } from "lucide-react"
import { useRef, useState } from "react"
import { readFileAsDataUrl } from "@/lib/utils"
import Image from "next/image"
import { createPostAction } from "@/lib/serveractions"


const PostDialog=({setOpen, open , src}:{setOpen:any, open:boolean, src:string})=> {

  const inputRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile]= useState<string>("");
  const [inputText, setInputText]= useState<string>("");

  const changeHandler=(e:any)=>{
    setInputText(e.target.value);
  }
  const fileChangedHandler= async(e:React.ChangeEvent<HTMLInputElement>)=>{
    const file = e.target.files?.[0];
    if(file){
      const dataUrl = await readFileAsDataUrl(file)
      setSelectedFile(dataUrl);
    }
  }
  const postActionHandler = async(formData:FormData)=>{
    const inputText = formData.get('inputText') as string;
    try{
      await createPostAction(inputText,selectedFile)
    }
    catch(error){
      console.log(error)
    }
    setInputText("");
    setOpen(false);
  }
  return (
    <Dialog open={open}>
      <DialogContent className="sm:max-w-[425px]" onInteractOutside={()=>setOpen(false)}>
        <DialogHeader>
          <DialogTitle className="flex gap-2 items-center ">
            <ProfilePhoto src={src}/>
            <div>
              <h1>Jay The Modern Developer</h1>
              <p className="text-xs font-normal">Post to anyone</p>
            </div>
          </DialogTitle>
        </DialogHeader>
          <form action={postActionHandler}>
            <div className="flex flex-col">
            <Textarea placeholder="Type your message here." 
            id="name"
            name="inputText"
            value={inputText}
            onChange={changeHandler}
            className=" border-none text-lg  focus-visible:ring-0"/>

            <div className="my-4">
              {
                selectedFile && (
                  <Image
                  src={selectedFile}
                  alt='preview-image'
                  width={400}
                  height={400}
                  />
                )
              }
            </div>
            </div>

        <DialogFooter>
          <div className=" flex items-center gap-4">
            <input ref={inputRef} onChange={fileChangedHandler} type="file" className="hidden" accept="image/*" /> 
          <Button type="submit">Post</Button>
          </div>
        </DialogFooter>
          </form>
          <Button onClick={()=> inputRef?.current?.click()} variant={'ghost'}>
            <Images className="text-blue-500"/>
            <p className="pt-1">Media</p>
          </Button>
      </DialogContent>
    </Dialog>
  )
}

export default PostDialog;