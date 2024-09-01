'use client'

import Konva from "konva"
import Image from "next/image"
import React, { useState, useRef, useEffect } from 'react'
import { Stage, Layer, Line, Image as KonvaImage, Transformer } from 'react-konva'
import useImage from 'use-image'

interface GridProps {
  width: number
  height: number
  gridSize: number
}

const Grid: React.FC<GridProps> = ({ width, height, gridSize }) => {
  const lines = []

  // 縦のラインを作成
  for (let i = 0; i < width / gridSize; i++) {
    lines.push(
      <Line
        key={`v-${i}`}
        points={[i * gridSize, 0, i * gridSize, height]}
        stroke="#ddd"
        strokeWidth={1}
      />
    )
  }

  // 横のラインを作成
  for (let j = 0; j < height / gridSize; j++) {
    lines.push(
      <Line
        key={`h-${j}`}
        points={[0, j * gridSize, width, j * gridSize]}
        stroke="#ddd"
        strokeWidth={1}
      />
    )
  }

  return <Layer>{lines}</Layer>
}

const DraggableImage: React.FC<{ src: string, setStageDraggable: (draggable: boolean) => void }> = ({ src, setStageDraggable }) => {
  const [image] = useImage(src)
  const [position, setPosition] = useState({ x: 50, y: 50 })
  const [size, setSize] = useState({ width: 150, height: 150 })
  const [isSelected, setIsSelected] = useState(false)
  const shapeRef = useRef<Konva.Image>(null)
  const trRef = useRef<Konva.Transformer>(null)

  useEffect(() => {
    if (isSelected && trRef.current && shapeRef.current) {
      const transformer = trRef.current
      transformer.nodes([shapeRef.current])
      transformer.getLayer()?.batchDraw()
    }
  }, [isSelected])

  return (
    <>
      <KonvaImage
        image={image}
        x={position.x}
        y={position.y}
        width={size.width}
        height={size.height}
        draggable
        onClick={() => setIsSelected(true)}
        ref={shapeRef}
        onMouseEnter={() => {
          setStageDraggable(false)
        }}
        onMouseLeave={() => {
          setStageDraggable(true)
        }}
        onDragEnd={(e) => {
          setPosition({
            x: e.target.x(),
            y: e.target.y()
          })
        }}
        onTransformEnd={(e) => {
          const node = shapeRef.current
          if (node) {
            const scaleX = node.scaleX()
            const scaleY = node.scaleY()
            node.scaleX(1)
            node.scaleY(1)
            setSize({
              width: Math.max(5, node.width() * scaleX),
              height: Math.max(5, node.height() * scaleY)
            })
          }
        }}
      />
      {isSelected && (
        <Transformer
          ref={trRef}
          boundBoxFunc={(oldBox, newBox) => {
            if (newBox.width < 5 || newBox.height < 5) {
              return oldBox
            }
            return newBox
          }}
          onClick={() => setIsSelected(true)}
        />
      )}
    </>
  )
}

const Drawing: React.FC = () => {
  const width = window.innerWidth
  const height = window.innerHeight
  const gridSize = 25
  const [scale, setScale] = useState(1)
  const [stageDraggable, setStageDraggable] = useState(true)
  const [stagePosition, setStagePosition] = useState({ x: 0, y: 0 })
  const [sidebarOpened, setSidebarOpened] = useState(false)
  const [images, setImages] = useState<{ x: number, y: number, src: string }[]>([
    { x: width / 2, y: height / 2, src: "/components/drawing/assetA.png" } // 初期の画像
  ])
  const stageRef = useRef<Konva.Stage>(null)

  const handleZoomIn = () => {
    setScale((prevScale) => prevScale * 1.2)
  }

  const handleZoomOut = () => {
    setScale((prevScale) => prevScale / 1.2)
  }

  const handleResetZoom = () => {
    setScale(1)
    setStagePosition({ x: 0, y: 0 })
  }

  const handleWheel = (e: Konva.KonvaEventObject<WheelEvent>) => {
    e.evt.preventDefault()

    const scaleBy = 1.01
    const stage = stageRef.current
    if (!stage) return

    const oldScale = stage.scaleX()
    const pointer = stage.getPointerPosition()

    if (!pointer) return

    const mousePointTo = {
      x: (pointer.x - stage.x()) / oldScale,
      y: (pointer.y - stage.y()) / oldScale,
    }

    const newScale = e.evt.deltaY > 0 ? oldScale / scaleBy : oldScale * scaleBy

    const newPos = {
      x: pointer.x - mousePointTo.x * newScale,
      y: pointer.y - mousePointTo.y * newScale,
    }

    stage.scale({ x: newScale, y: newScale })
    setStagePosition(newPos)
    stage.position(newPos)
    stage.batchDraw()
  }

  const handleImageClick = () => {
    setImages((prevImages) => [
      ...prevImages,
      { x: width / 2, y: height / 2, src: "/components/drawing/assetA.png" }
    ])
  }

  return (
    <div style={{ position: "relative", width: '100%', height: '100%' }}>
      <div style={{ backgroundColor: "#F1F1F1", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "calc(8 / 1920 * 100vw) calc(40 / 1920 * 100vw)" }}>
        <Image
          src="/components/drawing/toolbar.png"
          alt="Toolbar"
          height={48}
          width={448}
          style={{ objectFit: "contain", width: "calc(448 / 1920 * 100vw)" }}
          priority
        />
        <div style={{ display: "flex" }}>
          <Image
            src="/components/drawing/buttonA.png"
            alt="Button A"
            height={40}
            width={84}
            style={{ objectFit: "contain", width: "calc(84 / 1920 * 100vw)", marginTop: "calc(4 / 1920 * 100vw)" }}
            priority
            onClick={handleZoomIn}
          />
          <Image
            src="/components/drawing/buttonB.png"
            alt="Button B"
            height={40}
            width={84}
            style={{ objectFit: "contain", width: "calc(84 / 1920 * 100vw)", margin: "calc(4 / 1920 * 100vw) 0 0 calc(16 / 1920 * 100vw)" }}
            priority
            onClick={handleZoomOut}
          />
          <Image
            src="/components/drawing/buttonC.png"
            alt="Button C"
            height={40}
            width={116}
            style={{ objectFit: "contain", width: "calc(116 / 1920 * 100vw)", margin: "calc(4 / 1920 * 100vw) 0 0 calc(16 / 1920 * 100vw)" }}
            priority
            onClick={handleResetZoom}
          />
        </div>
      </div>
      <div style={{ position: "absolute", top: "calc(84 / 1920 * 100vw)", right: "calc(30 / 1920 * 100vw)", zIndex: "1" }}>
        <Image
          src="/components/drawing/card.png"
          alt="Card"
          height={520}
          width={380}
          style={{ objectFit: "contain", width: "calc(380 / 1920 * 100vw)" }}
          priority
        />
      </div>
      <div style={{ position: "absolute", top: "calc(84 / 1920 * 100vw)", left: "calc(20 / 1920 * 100vw)", zIndex: "1" }}>
        {!sidebarOpened &&
          <div>
            <Image
              src="/components/drawing/sidebarA.png"
              alt="Sidebar A"
              height={750}
              width={112}
              style={{ objectFit: "contain", width: "calc(112 / 1920 * 100vw)" }}
              priority
              onClick={() => {
                setSidebarOpened(!sidebarOpened)
              }}
            />
          </div>
        }

        {sidebarOpened &&
          <div style={{ display: "flex", alignItems: "flex-start" }}>
            <Image
              src="/components/drawing/sidebarB.png"
              alt="Sidebar B"
              height={750}
              width={112}
              style={{ objectFit: "contain", width: "calc(112 / 1920 * 100vw)" }}
              priority
              onClick={() => {
                setSidebarOpened(!sidebarOpened)
              }}
            />
            <Image
              src="/components/drawing/selectbox.png"
              alt="Sidebar B"
              height={551}
              width={355}
              style={{ objectFit: "contain", width: "calc(355 / 1920 * 100vw)", margin: "calc(20 / 1920 * 100vw) 0 0 calc(20 / 1920 * -100vw)" }}
              priority
              onClick={handleImageClick}
            />
          </div>
        }
      </div>

      <Stage
        ref={stageRef}
        width={width}
        height={height}
        scaleX={scale}
        scaleY={scale}
        draggable={true}
        x={stagePosition.x}
        y={stagePosition.y}
        onWheel={handleWheel}
        onDragEnd={(e) => {
          if (stageDraggable) {
            setStagePosition({
              x: e.target.x(),
              y: e.target.y()
            })
          }
        }}
        onClick={() => {
          setSidebarOpened(false)
        }}
      >
        <Grid width={width} height={height} gridSize={gridSize} />
        <Layer>
          {images.map((img, index) => (
            <DraggableImage key={index} src={img.src} setStageDraggable={setStageDraggable} />
          ))}
        </Layer>
      </Stage>
    </div>
  )
}

export default Drawing
