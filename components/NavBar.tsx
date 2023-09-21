import { ConnectWallet } from "@thirdweb-dev/react";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center">
      <p>Welcome to Serenity</p>
      <ConnectWallet />
    </div>
  );
}
