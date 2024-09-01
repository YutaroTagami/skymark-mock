import Image from "next/image";
import Link from "next/link";

export default function MemberDetail() {
  return (
    <div>
      <Image
        src="/pages/memberList/detail/image.png"
        alt={"Detail"}
        height={750}
        width={1520}
        style={{ objectFit: "contain", width: "calc(1550 / 1920 * 100vw)" }}
        priority
      />
      <Link href={"/member-list"}>
        <Image
          src="/pages/memberList/detail/return.png"
          alt={"Return"}
          height={36}
          width={84}
          style={{ objectFit: "contain", width: "calc(84 / 1920 * 100vw)", marginTop: "calc(135 / 1920 * 100vw)" }}
          priority
        />
      </Link>
    </div>
  );
}
