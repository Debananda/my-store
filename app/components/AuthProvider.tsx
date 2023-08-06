"use client";
import { SessionProvider } from "next-auth/react";
import React, { ReactNode } from "react";

function AuthProvider(props: { children: ReactNode }) {
  return <SessionProvider>{props.children}</SessionProvider>;
}

export default AuthProvider;
