import Feed from "@/components/Feed";
import News from "@/components/News";
import Sidebar from "@/components/Sidebar";
import { currentUser } from "@clerk/nextjs/server";


export default async function Home() {
 const user = await currentUser();
 const plainUser = user
  ? {
      id: user.id,
      imageUrl: user.imageUrl,
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
    }
  : null;
 
  return (
    <div className="pt-20 ">
      <div className="max-w-6xl mx-auto flex justify-between gap-8">
        <Sidebar user = {plainUser}/>
        <Feed user={plainUser}/>
        <News/>

      </div>
    </div>
  );
}
