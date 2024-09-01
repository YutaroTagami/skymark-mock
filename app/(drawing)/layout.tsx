import DrawingHeader from "@/app/_components/drawingHeader";
export default function DrawingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main>
        <DrawingHeader />
        <div style={{ display: "flex", height: "calc(100vh - (80 / 1920 * 100vw))", overflow: "hidden" }}>
          {children}
        </div>
      </main>
    </>
  );
}
