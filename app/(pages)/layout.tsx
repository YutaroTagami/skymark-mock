import Header from "../_components/header";
import SideMenu from "../_components/sideMenu";

export default function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main>
        <Header />
        <div style={{ display: "flex", backgroundColor: "#DAEDFA", height: "calc(100vh - (80 / 1920 * 100vw))", overflowX: "hidden" }}>
          <SideMenu />
          <section style={{ padding: "calc(40 / 1920 * 100vw)", width: "100vw", overflowY: "auto" }}>
            {children}
          </section>
        </div>
      </main>
    </>
  );
}
