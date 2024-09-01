import Image from "next/image";
import Link from "next/link";

export default function HistoryList() {
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <h1 style={{ color: "#0587DF", fontSize: "calc(32 / 1920 * 100vw)", fontWeight: "600" }}>過去履歴一覧</h1>
        <div>
          <Link href={"/blueprint-list/drawing"}>
            <Image
              src="/pages/historyList/button.png"
              alt={"Button"}
              height={56}
              width={280}
              style={{ objectFit: "contain", width: "calc(280 / 1920 * 100vw)" }}
              priority
            />
          </Link>
        </div>
      </div>
      <div style={{ marginTop: "calc(20 / 1920 * 100vw)" }}>
        <ul style={{ display: "flex", flexWrap: "wrap" }}>
          {Array.from({ length: 5 }, (_, index) => (
            <li key={index} style={{ marginTop: `${index === 0 ? "0px" : "calc(20 / 1920 * 100vw)"}` }}>
              <Link href={"/blueprint-list/detail"}>
                <Image
                  src={`${index % 2 ? "/pages/historyList/cardB.png" : "/pages/historyList/cardA.png"}`}
                  alt={"Card"}
                  height={216}
                  width={1520}
                  style={{ objectFit: "contain", width: "100vw" }}
                  priority
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
