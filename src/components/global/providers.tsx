"use client";

import React from "react"
import { MockClerkProvider } from "@/lib/mock-clerk";

interface Props {
    children: React.ReactNode;
}

const Providers = ({ children }: Props) => {
    return (
        <MockClerkProvider>
            {children}
        </MockClerkProvider>
    );
};

export default Providers