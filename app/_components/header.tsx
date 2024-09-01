import Image from "next/image";

export default function Header() {
  return (
    <div>
      <Image
        src="/components/header/header.png"
        alt={"Header"}
        height={86}
        width={1920}
        priority
        style={{ objectFit: "contain", width: "100vw" }}
      />
    </div>
  );
}
