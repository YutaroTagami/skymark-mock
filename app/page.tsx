import Image from "next/image";
import Link from "next/link";
import Header from "./_components/header";

export default function Login() {
  return (
    <main>
      <Header />
      <div style={{ display: "flex", alignItems: "center", backgroundColor: "#DAEDFA", height: "calc(100vh - (80 / 1920 * 100vw))" }}>
        <div style={{ width: "calc(660 / 1920 * 100vw)", margin: "0 auto", padding: "calc(60 / 1920 * 100vw)", backgroundColor: "#FFF" }}>
          <div style={{ position: "relative" }}>
            <Image
              src="/pages/login/logo.png"
              alt={"Logo"}
              height={70}
              width={215}
              style={{ objectFit: "contain", width: "calc(215 / 1920 * 100vw)", margin: "0 auto" }}
              priority
            />
          </div>
          <p style={{
            color: "#1D1D1F",
            fontFamily: "Hiragino Kaku Gothic ProN",
            fontSize: "calc(32 / 1920 * 100vw)",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "normal",
            textAlign: "center",
            margin: "calc(20 / 1920 * 100vw)"
          }}>簡易設計・見積もりツール</p>
          <div style={{
            margin: "calc(20 / 1920 * 100vw)"
          }}>
            <div
              style={{ marginTop: "calc(40 / 1920 * 100vw)" }}
            >
              <p style={{
                color: "#1D1D1F",
                fontFamily: "Hiragino Kaku Gothic ProN",
                fontSize: "calc(20 / 1920 * 100vw)",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: "normal",
              }}>ログインID</p>
              <p style={{
                color: "#1D1D1F",
                fontFamily: "Hiragino Kaku Gothic ProN",
                fontSize: "calc(18 / 1920 * 100vw)",
                fontStyle: "normal",
                fontWeight: "300",
                lineHeight: "normal",
                marginTop: "calc(8 / 1920 * 100vw)"
              }}>メールアドレスを入力してください。</p>
              <Image
                src="/pages/login/inputMail.png"
                alt={"Input"}
                height={60}
                width={540}
                style={{ objectFit: "contain", width: "calc(540 / 1920 * 100vw)", marginTop: "calc(16 / 1920 * 100vw)" }}
                priority
              />
            </div>
            <div
              style={{ marginTop: "calc(40 / 1920 * 100vw)" }}
            >
              <p style={{
                color: "#1D1D1F",
                fontFamily: "Hiragino Kaku Gothic ProN",
                fontSize: "calc(20 / 1920 * 100vw)",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: "normal",
              }}>パスワード</p>
              <p style={{
                color: "#1D1D1F",
                fontFamily: "Hiragino Kaku Gothic ProN",
                fontSize: "calc(18 / 1920 * 100vw)",
                fontStyle: "normal",
                fontWeight: "300",
                lineHeight: "normal",
                marginTop: "calc(8 / 1920 * 100vw)"
              }}>半角英数字の大文字小文字8文字以上のパスワードを入力してください。</p>
              <Image
                src="/pages/login/inputPassword.png"
                alt={"Input"}
                height={60}
                width={540}
                style={{ objectFit: "contain", width: "calc(540 / 1920 * 100vw)", marginTop: "calc(16 / 1920 * 100vw)" }}
                priority
              />
              <p style={{
                color: "#3D89E4",
                fontFamily: "Hiragino Kaku Gothic ProN",
                fontSize: "calc(18 / 1920 * 100vw)",
                fontStyle: "normal",
                fontWeight: "300",
                lineHeight: "normal",
                marginTop: "calc(8 / 1920 * 100vw)"
              }}>パスワードを忘れた・変更する場合はこちら</p>
            </div>
            <div
              style={{ marginTop: "calc(40 / 1920 * 100vw)" }}
            >
              <Link
                href="/blueprint-list"
              >
                <Image
                  src="/pages/login/buttonLogin.png"
                  alt={"Button"}
                  height={56}
                  width={360}
                  style={{ objectFit: "contain", width: "calc(360 / 1920 * 100vw)", margin: "0 auto" }}
                  priority
                />
              </Link>
              <Link
                href="/blueprint-list"
              >
                <Image
                  src="/pages/login/buttonTry.png"
                  alt={"Button"}
                  height={56}
                  width={360}
                  style={{ objectFit: "contain", width: "calc(360 / 1920 * 100vw)", margin: "calc(30 / 1920 * 100vw) auto 0" }}
                  priority
                />
              </Link>
            </div>
          </div>
        </div >
      </div>
    </main>
  );
}
