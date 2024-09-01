import Image from "next/image";
import Link from "next/link";

export default function BlueprintList() {
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <h1 style={{ color: "#0587DF", fontSize: "calc(32 / 1920 * 100vw)", fontWeight: "600" }}>CAD図面一覧</h1>
        <div style={{ display: "flex" }}>
          <Link href={"/blueprint-list/estimate"}>
            <Image
              src="/pages/blueprintList/buttonA.png"
              alt={"Button"}
              height={56}
              width={280}
              style={{ objectFit: "contain", width: "calc(280 / 1920 * 100vw)" }}
              priority
            />
          </Link>
          <Link href={"/blueprint-list/drawing"} style={{ marginLeft: "calc(16 / 1920 * 100vw)" }}>
            <Image
              src="/pages/blueprintList/buttonB.png"
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
        <Image
          src="/pages/blueprintList/select.png"
          alt={"Button"}
          height={34}
          width={200}
          style={{ objectFit: "contain", width: "calc(200 / 1920 * 100vw)" }}
          priority
        />
      </div>
      <div style={{ marginTop: "calc(20 / 1920 * 100vw)" }}>
        <ul style={{ display: "flex", flexWrap: "wrap" }}>
          <li>
            <Link href={"/blueprint-list/detail"}>
              <Image
                src="/pages/blueprintList/cardA.png"
                alt={"Card"}
                height={220}
                width={1520}
                style={{ objectFit: "contain", width: "100vw" }}
                priority
              />
            </Link>
          </li>
          <li style={{ marginTop: "calc(20 / 1920 * 100vw)" }}>
            <Link href={"/blueprint-list/detail"}>
              <Image
                src="/pages/blueprintList/cardB.png"
                alt={"Card"}
                height={220}
                width={1520}
                style={{ objectFit: "contain", width: "100vw" }}
                priority
              />
            </Link>
          </li>
          <li style={{ marginTop: "calc(20 / 1920 * 100vw)" }}>
            <Link href={"/blueprint-list/detail"}>
              <Image
                src="/pages/blueprintList/cardC.png"
                alt={"Card"}
                height={220}
                width={1520}
                style={{ objectFit: "contain", width: "100vw" }}
                priority
              />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
