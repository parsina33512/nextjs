import Hello from "./components/hello";

export default function Home() {

  console.log('what am i doing here -- SERVER');
  return (
    <>
    <h1 className="text-3xl">welcome to Next.JS </h1>
    <Hello />

    </>
  );
}
