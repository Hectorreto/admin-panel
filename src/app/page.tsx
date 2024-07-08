import { Link } from 'next-view-transitions';

export default function Home() {
  return (
    <main className="min-h-screen flex justify-center items-center">
      <Link href="/dashboard">
        <h1 className="underline">Home</h1>
      </Link>
    </main>
  );
}
