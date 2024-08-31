import Image from "next/image";

export const Heroes = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-5xl">
      <div className="flex items-center">
        <div className="relative size-[300px] sm:size-[350px] md:size-[400px]">
            <Image src="/documents.png" fill className="object-contain dark:hidden" alt="Documents" />
            <Image src="/documents-dark.png" fill className="object-contain hidden dark:block" alt="Documents" />
        </div>
      </div>
    </div>
  );
};
