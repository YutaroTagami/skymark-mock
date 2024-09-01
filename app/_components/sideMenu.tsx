"use client"

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SideMenu() {
  const pathname = usePathname();
  const isIncludePathname = (substring: string): boolean => {
    return pathname.includes(substring);
  }

  return (
    <nav style={{ width: "calc(340 / 1920 * 100vw)", height: "100%", overflow: "hidden", borderTop: "1px solid #F5F5F5" }}>
      <div style={{ backgroundColor: "#FFFFFF", padding: "calc(32 / 1920 * 100vw)" }}>
        <p style={{ display: "flex", justifyContent: "space-between", fontSize: "calc(20 / 1920 * 100vw)" }}>
          図面設計・登録
          <Image
            src="/components/sideMenu/arrow.png"
            alt={"Arrow"}
            height={24}
            width={24}
            style={{ objectFit: "contain", width: "calc(24 / 1920 * 100vw)", minWidth: "calc(24 / 1920 * 100vw)", margin: "0" }}
            priority
          />
        </p>
        <ul style={{ marginTop: "calc(24 / 1920 * 100vw)" }}>
          <Link href={"/blueprint-list"}>
            <li style={{ color: `${isIncludePathname("/blueprint-list") ? "#0587DF" : "#1D1D1F"}`, fontSize: "calc(20 / 1920 * 100vw)", margin: "calc(16 / 1920 * 100vw) 0 0 calc(24 / 1920 * 100vw)", fontWeight: "600" }}>CAD図面一覧</li>
          </Link>
          <Link href={"/history-list"}>
            <li style={{ color: `${isIncludePathname("/history-list") ? "#0587DF" : "#1D1D1F"}`, fontSize: "calc(20 / 1920 * 100vw)", margin: "calc(16 / 1920 * 100vw) 0 0 calc(24 / 1920 * 100vw)", fontWeight: "600" }}>過去履歴一覧</li>
          </Link>
          <Link href={"/member-list"}>
            <li style={{ color: `${isIncludePathname("/member-list") ? "#0587DF" : "#1D1D1F"}`, fontSize: "calc(20 / 1920 * 100vw)", margin: "calc(16 / 1920 * 100vw) 0 0 calc(24 / 1920 * 100vw)", fontWeight: "600" }}>部材一覧</li>
          </Link>
        </ul>
        <p style={{ display: "flex", justifyContent: "space-between", fontSize: "calc(20 / 1920 * 100vw)", marginTop: "calc(24 / 1920 * 100vw)" }}>
          見積・発注
          <Image
            src="/components/sideMenu/arrow.png"
            alt={"Arrow"}
            height={24}
            width={24}
            style={{ objectFit: "contain", width: "calc(24 / 1920 * 100vw)", minWidth: "calc(24 / 1920 * 100vw)", margin: "0", transform: "rotate(180deg)" }}
            priority
          />
        </p>
        <p style={{ display: "flex", justifyContent: "space-between", fontSize: "calc(20 / 1920 * 100vw)", marginTop: "calc(24 / 1920 * 100vw)" }}>
          過去履歴
          <Image
            src="/components/sideMenu/arrow.png"
            alt={"Arrow"}
            height={24}
            width={24}
            style={{ objectFit: "contain", width: "calc(24 / 1920 * 100vw)", minWidth: "calc(24 / 1920 * 100vw)", margin: "0", transform: "rotate(180deg)" }}
            priority
          />
        </p>
        <p style={{ display: "flex", justifyContent: "space-between", fontSize: "calc(20 / 1920 * 100vw)", marginTop: "calc(24 / 1920 * 100vw)" }}>
          納期プロセス確認
          <Image
            src="/components/sideMenu/arrow.png"
            alt={"Arrow"}
            height={24}
            width={24}
            style={{ objectFit: "contain", width: "calc(24 / 1920 * 100vw)", minWidth: "calc(24 / 1920 * 100vw)", margin: "0", transform: "rotate(180deg)" }}
            priority
          />
        </p>
      </div>
      <div style={{ backgroundColor: "#EAEFCC", padding: "calc(32 / 1920 * 100vw)", height: "100%" }}>
        <p style={{ fontSize: "calc(16 / 1920 * 100vw)" }}>お気に入り部材</p>
        <ul>
          <li>
            <Image
              src="/components/sideMenu/favoriteA.png"
              alt={"Button"}
              height={40}
              width={260}
              style={{ objectFit: "contain", width: "calc(340 / 1920 * 100vw)", marginTop: "calc(24 / 1920 * 100vw)" }}
              priority
            />
          </li>
          <li>
            <Image
              src="/components/sideMenu/favoriteB.png"
              alt={"Button"}
              height={40}
              width={260}
              style={{ objectFit: "contain", width: "calc(340 / 1920 * 100vw)", marginTop: "calc(16 / 1920 * 100vw)" }}
              priority
            />
          </li>
        </ul>
      </div>
    </nav >
  );
}
