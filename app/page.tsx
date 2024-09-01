import Calendar from "./_components/calendar";
import Header from "./_components/header";
import Image from "next/image";

export default function Main() {
  return (
    <main>
      <Header />
      <div style={{ display: "flex", height: "calc(100vh - (86 / 1920 * 100vw))" }}>
        <div style={{ margin: "14px 80px 20px" }}>
          <Image
            src="/infoBar.png"
            alt={"InfoBar"}
            height={56}
            width={1760}
            style={{ objectFit: "contain", width: "calc(1760 / 1920 * 100vw)" }}
            priority
          />
          <Calendar />
        </div>
      </div>
    </main>
  );
}
