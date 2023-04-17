import Link from 'next/link';
export default function FirstPage() {
  return (
    <div>
      <h2>정유경</h2>
      <Link href="/">Back to home</Link>
      <hr />
      <br />
      <Link href="/ball-bouncing_processing.html">ball bouncing</Link>
      <br />
      <Link href="/ball-bouncing_processing.html">ball colliding</Link>
    </div>
  );
}
