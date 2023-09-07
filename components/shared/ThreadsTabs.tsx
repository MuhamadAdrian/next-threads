import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import { profileTabs } from "@/constants";
import Image from "next/image";
import ThreadsTab from "./ThreadsTab";

interface Props {
  accountId: string;
  threadsLength: number;
  userId: string;
}

export default async function ThreadsTabs({
  accountId,
  threadsLength,
  userId,
}: Props) {
  return (
    <Tabs defaultValue="threads" className="w-full">
      <TabsList className="tab">
        {profileTabs.map((tab) => (
          <TabsTrigger key={tab.label} value={tab.value} className="tab">
            <Image
              src={tab.icon}
              alt={tab.label}
              width={24}
              height={24}
              className="object-contain"
            />
            <p className="max-sm:hidden">{tab.label}</p>

            {tab.label === "Threads" && (
              <p className="ml-1 rounded-sm bg-light-4 px-2 py-1 !text-tiny-medium text-light-2">
                {threadsLength}
              </p>
            )}
          </TabsTrigger>
        ))}
      </TabsList>
      {profileTabs.map((tab) => (
        <TabsContent
          key={`content-${tab.label}`}
          value={tab.value}
          className="w-full text-light-1"
        >
          <ThreadsTab
            currentUserId={userId}
            accountId={accountId}
            accountType="User"
          />
        </TabsContent>
      ))}
    </Tabs>
  );
}
