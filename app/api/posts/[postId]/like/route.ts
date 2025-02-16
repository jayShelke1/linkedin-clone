import connectDB from "@/lib/db";
import { Post } from "@/models/post.model";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req:NextRequest,{params}:{params:{postId:string}})=>{
    try{
        await connectDB();
        const post = await Post.findById({_id:params.postId});
        if(!post) return NextResponse.json({error:'Post not found'})
        return NextResponse.json(post.likes);
    }
    catch(error:any){
        console.error(error);
        return NextResponse.json({error:'an error occured.'});
    }
}

export const POST = async (req:NextRequest, {params}:{params:{postId:string}})=>{
    try{
        await connectDB();
        const userId = await req.json();
        const post = await Post.findById({_id:params.postId});
        if(!post) return NextResponse.json({error:"Post not found."});

        await post.updateOne({$addToSet:{likes:userId}})
        return NextResponse.json({message:'Post like successfully.'})
    }
    catch(error:any){
        console.error(error);
        return NextResponse.json({error:'An error occured.'})
    }
}