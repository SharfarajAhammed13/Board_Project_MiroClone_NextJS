import  Image  from "next/image";
import { CreateOrganization } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog";

export const EmptyOrg = () => {
    return (
        <div className="h-full flex items-center flex-col justify-center">
           <Image 
                src="/elements.svg"
                alt="empty"
                height={200}
                width={200}
                priority
           />
           <h2 className="text-2xl font-semibold mt-6">
            Welcome To Board
           </h2>
           <p className="text-muted-foreground text-sm mt-2">
            Create an organization to get started
           </p>
           <div className="mt-6">
                <Dialog>
                    <DialogTrigger asChild>
                        <Button size="lg">
                            Create Organization
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="p-0 bg-transparent border-none max-w-[480px]">
                        <CreateOrganization/>
                    </DialogContent>
                </Dialog>
           </div>
        </div>
    );
};