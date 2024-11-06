import { db } from "@/db";
import auth from "/src/app/middleware.js";
import { revalidatePath } from "next/cache";

export default async function Profile() {
  const session = await auth();

  // console.log(session);
  const name = session.user.name;
  const email = session.user.email;
  const userID = session.user.id;

  async function handleProfile(formData) {
    "use server";
    const bio = formData.get("bio");

    await db.query(
      `INSERT INTO profile (bio, user_id, name, email) VALUES ($1, $2, $3, $4) ON CONFLICT (user_id) DO UPDATE SET bio = EXCLUDED.bio `,
      [bio, userID, name, email]
    );

    revalidatePath("/profile");
  }

  const userbio = await db.query(`SELECT * FROM profile WHERE user_id = $1`, [
    userID,
  ]);

  const UBr = userbio.rows;

  return (
    <>
      <h1 className="text-center m-4">profile info</h1>

      {UBr.map((item) => {
        return (
          <div className="text-center mt-4 bg-cyan-800 p-10" key={item.id}>
            <p className="bg-cyan-300 rounded-xl p-2 m-2">
              username: {item.name}
            </p>
            <p className="bg-cyan-300 rounded-xl p-2 m-2">
              email: {item.email}
            </p>
            <p className="bg-cyan-300 rounded-xl p-2 m-2">
              user id: #{item.user_id}
            </p>
            <p className="bg-cyan-300 rounded-xl p-2 m-2">
              user bio: {item.bio}
            </p>
          </div>
        );
      })}

      <form
        className="text-center mt-20 bg-cyan-800 p-10"
        action={handleProfile}
      >
        <label htmlFor="bio" className="bg-cyan-400 p-2 rounded-xl">
          edit bio
        </label>
        <br />
        <textarea name="bio" id="bio" required type="text" />
        <br />
        <button className="bg-pink-400 p-2 rounded-xl" type="submit">
          save
        </button>
      </form>
    </>
  );
}
