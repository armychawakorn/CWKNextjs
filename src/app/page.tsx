import Image from "next/image";
import Link from "next/link";


export const metadata = {
  title: "Chawakorn's Lab",
  description: "This is a website for learning Next.js",
  image: "https://eng.kku.ac.th/wp-content/uploads/2019/05/LogoKKU-Eng.png",
};

export default function Home() {
  return (
    <>
    <div className="flex justify-center">
      <div className="text-center">
        <p className="text-3xl">สวัสดีครับท่านผู้เจริญ</p>
        <p className="text-xl">ยินดีต้อนรับสู่เว็บไซต์ของเรา</p>
        <p className="text-lg">นี่คือเว็บไซต์นี่เป็นส่วนหนึ่งของการเรียนรู้ <span className="font-bold">Next.js</span> ในรายวิชา <span className="font-bold">IN403101</span></p>
        <Link href={"/aboutme"} className="text-blue-500">
          <span className="font-bold">ข้อมูลเพิ่มเติม</span>
        </Link>
      </div>
    </div>
    </>
  );
}
