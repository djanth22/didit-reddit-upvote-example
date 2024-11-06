import auth from "../app/middleware";
import Link from "next/link";
import { LoginButton } from "./LoginButton";
import { LogoutButton } from "./LogoutButton";

export async function UserInfo() {
  const session = await auth();

  return (
    <div>
      {session ? (
        <div className="flex">
          <div className="mr-3  hover:bg-zinc-400 p-2 rounded bg-pink-400 text-black">
            <Link
              href="/profile"
              className="mr-3  hover:bg-zinc-400 p-2 rounded bg-pink-400 text-black"
            >
              {session.user.name}{" "}
            </Link>

            <span className="text-xs text-zinc-800 mr-3">
              #{session.user.id}
            </span>
          </div>
          <LogoutButton />
        </div>
      ) : (
        <div>
          <span className="mr-4">Welcome, Guest!</span>
          <LoginButton />
        </div>
      )}
    </div>
  );
}
