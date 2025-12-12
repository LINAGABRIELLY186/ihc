// app/(auth)/sign-up/page.tsx
import { SignUp } from "@clerk/nextjs";
export default function SignUpPage() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      {/* Redirecionamento é configurado no .env.local: NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL */}
      <SignUp />
    </div>
  );
}