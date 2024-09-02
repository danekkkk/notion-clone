"use client";

import Image from "next/image";
import { useUser } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { PlusCircleIcon } from "lucide-react";

const DocumentsPatge = () => {
  const { user } = useUser();
  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4">
      <Image
        src="/empty.png"
        height="300"
        width="300"
        alt="Empty"
        className="dark:hidden"
      />
      <Image
        src="/empty-dark.png"
        height="300"
        width="300"
        alt="Empty"
        className="hidden dark:block"
      />
      {user && user.firstName && <h2>Welcome to {user.firstName}&apos;s Notion</h2>}
      <Button>
        <PlusCircleIcon className="size-4 mr-2" />
        Create a note
      </Button>
    </div>
  );
};

export default DocumentsPatge;
