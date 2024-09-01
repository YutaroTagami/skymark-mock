import Image from "next/image";
import Link from "next/link";

export default function MemberList() {
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <h1 style={{ color: "#0587DF", fontSize: "calc(32 / 1920 * 100vw)", fontWeight: "600" }}>部材一覧</h1>
        <div>
          <Image
            src="/pages/memberList/pagination.png"
            alt={"Pagination"}
            height={40}
            width={396}
            style={{ objectFit: "contain", width: "calc(396 / 1920 * 100vw)" }}
            priority
          />
        </div>
      </div>
      <div style={{ marginTop: "calc(20 / 1920 * 100vw)" }}>
        <ul style={{ display: "flex", justifyContent: "space-between" }}>
          <li>
            <Link href={"/member-list/detail"}>
              <Image
                src="/pages/memberList/card.png"
                alt={"Card"}
                height={535}
                width={500}
                style={{ objectFit: "contain", width: "calc(500 / 1920 * 100vw)" }}
                priority
              />
            </Link>
          </li>
          <li>
            <Link href={"/member-list/detail"}>
              <Image
                src="/pages/memberList/card.png"
                alt={"Card"}
                height={535}
                width={500}
                style={{ objectFit: "contain", width: "calc(500 / 1920 * 100vw)" }}
                priority
              />
            </Link>
          </li>
          <li>
            <Link href={"/member-list/detail"}>
              <Image
                src="/pages/memberList/card.png"
                alt={"Card"}
                height={535}
                width={500}
                style={{ objectFit: "contain", width: "calc(500 / 1920 * 100vw)" }}
                priority
              />
            </Link>
          </li>
        </ul>
        <ul style={{ display: "flex", justifyContent: "space-between", marginTop: "calc(20 / 1920 * 100vw)" }}>
          <li>
            <Link href={"/member-list/detail"}>
              <Image
                src="/pages/memberList/card.png"
                alt={"Card"}
                height={535}
                width={500}
                style={{ objectFit: "contain", width: "calc(500 / 1920 * 100vw)" }}
                priority
              />
            </Link>
          </li>
          <li>
            <Link href={"/member-list/detail"}>
              <Image
                src="/pages/memberList/card.png"
                alt={"Card"}
                height={535}
                width={500}
                style={{ objectFit: "contain", width: "calc(500 / 1920 * 100vw)" }}
                priority
              />
            </Link>
          </li>
          <li>
            <Link href={"/member-list/detail"}>
              <Image
                src="/pages/memberList/card.png"
                alt={"Card"}
                height={535}
                width={500}
                style={{ objectFit: "contain", width: "calc(500 / 1920 * 100vw)" }}
                priority
              />
            </Link>
          </li>
        </ul>
      </div>
    </div >
  );
}
