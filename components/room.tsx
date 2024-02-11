"use client";

import { ReactNode } from "react";
import { ClientSideSuspense } from "@liveblocks/react";

import { RoomProvider } from "@/liveblocks.config";

interface RoomProps {
    children: ReactNode;
    roomId: string;
    fallBack: NonNullable<ReactNode> | null;
}

export const Room = ({
    children,
    roomId,
    fallBack
}: RoomProps) => {
    return(
        <RoomProvider id={roomId} initialPresence={{
            cursor: null,
        }}>
        <ClientSideSuspense fallback={fallBack}>
            {() => children}

        </ClientSideSuspense>

    </RoomProvider>
    );
    
};