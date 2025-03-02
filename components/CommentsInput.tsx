"use client"
import { useUser } from '@clerk/nextjs'
import React from 'react'
import ProfilePhoto from './ProfilePhoto';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { createCommentAction } from '@/lib/serveractions';

const CommentsInput = ({postId}:{postId:string}) => {
    const {user}= useUser();
    const commentActionHandler = async ( formData:FormData)=>{
        try{
            if(!user) throw new Error('User not authenticated');
            await createCommentAction(postId, formData);
        }catch(error:any){
          console.error(error);
            throw new Error('An error occured');
        }
    }
  return (
    <div>
      <form action={(formData)=>commentActionHandler(formData)}>
        <div className=' flex items-center gap-2'>
        <ProfilePhoto src={user?.imageUrl!}/>
        <Input
        type='text'
        name='inputText'
        // value='inputText'
        placeholder='Add a Comment'
        className='rounded-full'/>
        <Button type='submit' variant={'outline'} className='rounded-full'>Send</Button>
        </div>
      </form>
    </div>
  )
}

export default CommentsInput
