import Image from "next/image";

export default function BlueprintEstimate() {
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <h1 style={{ color: "#0587DF", fontSize: "calc(32 / 1920 * 100vw)", fontWeight: "600" }}>見積もり</h1>
        <div style={{ display: "flex" }}>
          <Image
            src="/pages/blueprintList/detail/button.png"
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
        <ul style={{ display: "flex", flexWrap: "wrap" }}>
          {Array.from({ length: 5 }, (_, index) => (
            <li key={index} style={{ marginTop: `${index === 0 ? "0px" : "calc(20 / 1920 * 100vw)"}` }}>
              <Image
                src={"/pages/blueprintList/detail/card.png"}
                alt={"Card"}
                height={216}
                width={1520}
                style={{ objectFit: "contain", width: "100vw" }}
                priority
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
