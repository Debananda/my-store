import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      firstName: string;
      lastName: string;
      userName: string;
      email: string;
      phone: string;
      accessToken: string;
    };
  }
}
