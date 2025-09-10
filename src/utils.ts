import bcrypt from "bcryptjs";

export async function hashPassword(password: string, rounds: number = 10) {
  try {
    const salt = await bcrypt.genSalt(rounds);
    const hash = await bcrypt.hash(password, salt);

    console.log("Hashed password:", hash);
    return hash;
  } catch (error) {
    console.error("Error during password hashing:", error);
    throw error;
  }
}
