import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div>
      <Link
        href="/"
      >
        <Image
          src="/components/header/header.png"
          alt={"Header"}
          height={80}
          width={1920}
          priority
          style={{ objectFit: "contain", width: "100vw" }}
        />
      </Link>
    </div>
  );
}
