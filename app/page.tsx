import Banner from "@/components/banner";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h4>Banner</h4>
      <Banner />
      <h4>Recent Views</h4>
      <h4>Latest Lunch</h4>
    </main>
  );
}
