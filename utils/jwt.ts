import jwt, { JwtPayload } from "jsonwebtoken";

interface SignOption {
  expiresIn?: string | number;
}

interface UserJWDPayload extends JwtPayload {
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  phone: string;
}

const DEFAULT_SIGN_OPTION: SignOption = {
  expiresIn: "2h",
};

export function signJwtAccessToken(
  payload: JwtPayload,
  options: SignOption = DEFAULT_SIGN_OPTION
) {
  const secret_key = process.env.JWT_SECRET;
  const token = jwt.sign(payload, secret_key!, options);
  return token;
}

export function verifyJwt(token: string): UserJWDPayload | null {
  try {
    const secret_key = process.env.JWT_SECRET;
    const decoded = jwt.verify(token, secret_key!);
    return decoded as UserJWDPayload;
  } catch (error) {
    console.error(error);
    return null;
  }
}
