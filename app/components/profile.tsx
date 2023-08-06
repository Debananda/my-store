"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import React from "react";

function Profile() {
  const { data: session } = useSession();
  if (session) {
    return (
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            {/* <Image src="/images/stock/photo-1534528741775-53994a69daeb.jpg" /> */}
          </div>
        </label>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <a className="justify-between">
              Profile
              <span className="badge">New</span>
            </a>
          </li>
          <li>
            <a>Settings</a>
          </li>
          <li>
            <button onClick={() => signOut()}>Logout</button>
          </li>
        </ul>
      </div>
    );
  }
  return (
    <div className="flex gap-2">
      <button onClick={() => signIn()}>Signin</button>
      <a href="/auth/new-user">Signup</a>
    </div>
  );
}

export default Profile;
