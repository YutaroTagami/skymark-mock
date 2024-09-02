import Calendar from "./_components/calendar";
import Header from "./_components/header";
import Image from "next/image";

export default function Main() {
  return (
    <main>
      <Header />
      <div style={{ display: "flex", backgroundColor: "#F9F9F9", height: "calc(100vh - (86 / 1920 * 100vw))" }}>
        <div style={{ margin: "14px calc(80 / 1920 * 100vw) 20px" }}>
          <Image
            src="/infoBar.png"
            alt={"InfoBar"}
            height={56}
            width={1760}
            style={{ objectFit: "contain", width: "calc(1760 / 1920 * 100vw)" }}
            priority
          />
          <Image
            src="/ctrlBar.png"
            alt={"CtrlBar"}
            height={56}
            width={1760}
            style={{ objectFit: "contain", width: "calc(1760 / 1920 * 100vw)", margin: "24px 0 12px" }}
            priority
          />
          <Calendar />
        </div>
      </div>
    </main>
  );
}
