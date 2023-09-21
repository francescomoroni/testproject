import { useAddress } from "@thirdweb-dev/react";
import Image from "next/image";

export default function Home() {
  const address = useAddress();

  if (!address) {
    return (
      <main className="flex h-screen w-full relative flex-col items-center  bg-cover bg-center bg-[url('/desktop.png')] bg-no-repeat ">
        <p className="pt-4 text-2xl">Please Connect your wallet</p>
      </main>
    );
  }

  return (
    <main className="flex h-screen w-full relative flex-col items-center  bg-cover bg-center bg-[url('/peace.png')] bg-no-repeat ">
      <p className="pt-4 text-2xl">Welcome</p>
    </main>
  );
}
