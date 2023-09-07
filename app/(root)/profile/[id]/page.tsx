import ProfileHeader from "@/components/shared/ProfileHeader";
import ThreadsTabs from "@/components/shared/ThreadsTabs";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { profileTabs } from "@/constants";
import { fetchUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import { TabsContent } from "@radix-ui/react-tabs";
import Image from "next/image";
import { redirect } from "next/navigation";

async function Page({ params }: { params: { id: string } }) {
  const user = await currentUser();

  if (!user) return null;

  const userInfo = await fetchUser(params.id);

  if (!userInfo?.onboarded) redirect("/onboarding");
  return (
    <section>
      <ProfileHeader
        accountId={userInfo.id}
        authUserId={user.id}
        name={userInfo.name}
        username={userInfo.username}
        imgUrl={userInfo.image}
        bio={userInfo.bio}
      />

      <div className="mt-9">
        <ThreadsTabs
          accountId={userInfo.id}
          threadsLength={userInfo?.threads?.length}
          userId={user.id}
        />
      </div>
    </section>
  );
}

export default Page;
