import { auth, signIn } from '@/auth';
import SignOut from './components/sign-out';

async function Text() {
  const session = await auth();

  if (!session) {
    return <div>please Sign in</div>;
  }

  return (
    <div className="container">
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  );
}

async function SignIn() {
  const session = await auth();

  return (
    <div>
      {session?.user && <SignOut />}
      {!session?.user && (
        <div className="flex flex-col gap-2">
          <form
            action={async () => {
              'use server';
              await signIn('google');
            }}
          >
            <button className="w-fit bg-green-500 p-2" type="submit">
              Signin with Google
            </button>
          </form>
          <form
            action={async () => {
              'use server';
              await signIn('github');
            }}
          >
            <button className="w-fit bg-green-500 p-2" type="submit">
              Signin with GitHub
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <SignIn />
      <Text />
    </>
  );
}
