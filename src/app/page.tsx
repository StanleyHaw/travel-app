import { signIn } from '@/auth';

function SignInGoogle() {
  return (
    <form
      action={async () => {
        'use server';
        await signIn('google');
      }}
    >
      <button type="submit">Signin with Google</button>
    </form>
  );
}

function SignInGithub() {
  return (
    <form
      action={async () => {
        'use server';
        await signIn('github');
      }}
    >
      <button type="submit">Signin with GitHub</button>
    </form>
  );
}

export default function Home() {
  return (
    <>
      <SignInGoogle />
      <SignInGithub />
    </>
  );
}
