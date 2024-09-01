import Image from "next/image";
import Link from "next/link";

const RepeatedListItems = () => {
  const images = ['cardA.png', 'cardB.png', 'cardC.png', 'cardD.png'];

  return (
    <ul>
      {Array.from({ length: 4 }, (_, index) => (
        <li key={index} style={{ marginTop: `${index === 0 ? "0px" : "calc(20 / 1920 * 100vw)"}` }}>
          <Image
            src={`/pages/blueprintList/estimate/${images[index % images.length]}`}
            alt={`Card ${String.fromCharCode(65 + index)}`}
            height={216}
            width={1520}
            style={{ objectFit: "contain", width: "100vw" }}
            priority
          />
        </li>
      ))}
    </ul>
  )
}

export default function BlueprintDetail() {
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <h1 style={{ color: "#0587DF", fontSize: "calc(32 / 1920 * 100vw)", fontWeight: "600" }}>納入ドキュメント詳細</h1>
        <div style={{ display: "flex" }}>
          <Image
            src="/pages/blueprintList/estimate/button.png"
            alt={"Button"}
            height={56}
            width={280}
            style={{ objectFit: "contain", width: "calc(280 / 1920 * 100vw)" }}
            priority
          />
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
        <RepeatedListItems />
      </div>
      <div style={{ marginTop: "calc(20 / 1920 * 100vw)" }}>
        <Link href={"/blueprint-list"}>
          <Image
            src="/pages/blueprintList/estimate/return.png"
            alt={"Return"}
            height={36}
            width={84}
            style={{ objectFit: "contain", width: "calc(84 / 1920 * 100vw)" }}
            priority
          />
        </Link>
      </div>
    </div>
  );
}
