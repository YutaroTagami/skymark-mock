import Image from "next/image";
import Link from "next/link";

export default function DrawingHeader() {
  return (
    <div>
      <Link
        href="/blueprint-list"
      >
        <Image
          src="/components/header/drawingHeader.png"
          alt={"Drawing Header"}
          height={80}
          width={1920}
          priority
          style={{ objectFit: "contain", width: "100vw" }}
        />
      </Link>
    </div>
  );
}
