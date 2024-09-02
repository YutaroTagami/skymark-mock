"use client";

import React, { useState, useRef, useEffect } from 'react';
import Image from "next/image";

// 時間からcolStartとcolEndを計算する関数
const calculateColIndex = (hour: number, minute: number) => {
  if (hour === 0) {
    return 203; // 翌日の0:00は特別な位置に対応
  }
  return (hour - 8) * 12 + Math.floor(minute / 5);
};

// スケジュールの背景色を設定するための関数
const addBackgroundCellColor = (
  rowIndex: number,
  startTime: string,
  endTime: string,
  color: string
) => {
  const [startHour, startMinute] = startTime.split(':').map(Number);
  const [endHour, endMinute] = endTime.split(':').map(Number);
  const colStart = calculateColIndex(startHour, startMinute);
  const colEnd = calculateColIndex(endHour, endMinute);
  return { rowIndex, colStart, colEnd, color };
};

// 予定を追加するための関数
const addScheduledCell = (
  rowIndex: number,
  startTime: string,
  endTime: string,
  leftNumber: string,
  rightNumber: string,
  color: string
) => {
  const [startHour, startMinute] = startTime.split(':').map(Number);
  const [endHour, endMinute] = endTime.split(':').map(Number);
  const colStart = calculateColIndex(startHour, startMinute);
  const colEnd = calculateColIndex(endHour, endMinute);
  return { rowIndex, colStart, colEnd, startTime, endTime, leftNumber, rightNumber, color };
};

export default function Calendar() {
  // 行見出しの定義（サブラベル付き）
  const rowLabels = [
    "19",
    "20",
    { label: "21", subLabel: "JAL" },
    "22",
    "35B",
    { label: "41", subLabel: "JAL" },
    { label: "501", subLabel: "SNJ" },
    { label: "401", subLabel: "CAB" },
  ];

  const topRow: (number | string)[] = [...Array.from({ length: 16 }, (_, i) => (i + 8) % 24), "翌0"];
  const bottomRow: string[] = Array.from({ length: 17 }, (_, i) => `${(i + 23) % 24}Z`);

  const cellHeight = 'calc(82 / 1920 * 100vw)';
  const calendarCellHeight = 'calc(96 / 1920 * 100vw)';
  const hourWidth = 'calc(96 / 1920 * 100vw)';
  const cellWidth = `calc(${hourWidth} / 12)`;
  const labelWidth = 'calc(120 / 1920 * 100vw)';
  const headerHeight = 'calc(40 / 1920 * 100vw)';

  // 背景色
  const [backgroundCells, setBackgroundCells] = useState<{ rowIndex: number; colStart: number; colEnd: number; color: string }[]>([
    addBackgroundCellColor(2, '08:00', '09:00', 'lightgray'),
    addBackgroundCellColor(2, '15:00', '16:00', 'lightgray'),
    addBackgroundCellColor(2, '16:00', '17:00', 'dimgray'),
    addBackgroundCellColor(2, '17:00', '22:00', 'lightgray'),
    addBackgroundCellColor(5, '8:00', '20:00', 'lightgray'),
    addBackgroundCellColor(5, '8:00', '9:00', 'lightgray'),
    addBackgroundCellColor(5, '21:00', '0:00', 'lightgray'),
    addBackgroundCellColor(5, '21:00', '0:00', 'lightgray'),
    addBackgroundCellColor(6, '8:00', '12:00', 'lightgray'),
    addBackgroundCellColor(6, '19:00', '0:00', 'lightgray'),
    addBackgroundCellColor(7, '8:00', '9:00', 'lightgray'),
    addBackgroundCellColor(7, '22:00', '0:00', 'lightgray'),
  ]);

  const [scheduledCells, setScheduledCells] = useState<{ rowIndex: number; colStart: number; colEnd: number; startTime: string; endTime: string; leftNumber: string; rightNumber: string; color: string }[]>([
    // 1段目
    addScheduledCell(0, '08:00', '08:40', '', '513', 'blue'), // 8:00〜8:40
    addScheduledCell(0, '08:50', '09:30', '300', '', 'blue'), // 8:50〜9:30
    addScheduledCell(0, '09:40', '10:30', '510', '', 'blue'), // 9:40〜10:30
    addScheduledCell(0, '11:00', '11:45', '302', '011', 'blue'), // 11:00〜11:45
    addScheduledCell(0, '12:20', '13:00', '710', '105', 'blue'), // 12:20〜13:00
    addScheduledCell(0, '13:50', '14:35', '008', '719', 'blue'), // 13:50〜14:35
    addScheduledCell(0, '14:55', '15:35', '714', '519', 'blue'), // 14:55〜15:35
    addScheduledCell(0, '16:20', '17:05', '716', '521', 'blue'), // 16:20〜17:05
    addScheduledCell(0, '17:35', '18:25', '112', '523', 'red'), // 17:35〜18:25
    addScheduledCell(0, '19:15', '20:00', '520', '027', 'blue'), // 19:15〜20:00
    addScheduledCell(0, '20:20', '21:15', '022', '119', 'blue'), // 20:20〜21:15
    addScheduledCell(0, '21:40', '22:30', '024', '', 'blue'), // 21:40〜22:30
    addScheduledCell(0, '22:55', '00:00', '522', '', 'blue'), // 22:55〜0:00

    // 2段目
    addScheduledCell(1, '08:00', '08:20', '503', '201', 'blue'), // 8:00〜8:20
    addScheduledCell(1, '08:35', '09:35', '503', '201', 'blue'), // 8:35〜9:35
    addScheduledCell(1, '10:25', '11:00', '503', '201', 'blue'), // 10:25〜11:00
    addScheduledCell(1, '11:55', '12:35', '503', '201', 'blue'), // 11:55〜12:35
    addScheduledCell(1, '13:15', '15:05', '503', '201', 'blue'), // 13:15〜15:05
    addScheduledCell(1, '15:25', '16:05', '503', '201', 'blue'), // 15:25〜16:05
    addScheduledCell(1, '16:25', '17:25', '503', '201', 'blue'), // 16:25〜17:25
    addScheduledCell(1, '17:50', '18:40', '503', '201', 'blue'), // 17:50〜18:40
    addScheduledCell(1, '19:50', '20:30', '503', '201', 'blue'), // 19:50〜20:30
    addScheduledCell(1, '20:50', '21:55', '503', '201', 'blue'), // 20:50〜21:55
    addScheduledCell(1, '22:30', '00:00', '503', '201', 'blue'), // 22:30〜翌0

    // 3段目
    addScheduledCell(2, '08:45', '09:55', '503', '201', 'white'), // 8:45〜9:55
    addScheduledCell(2, '10:30', '11:15', '503', '201', 'blue'), // 10:30〜11:15
    addScheduledCell(2, '12:10', '12:50', '503', '201', 'blue'), // 12:10〜12:50
    addScheduledCell(2, '13:20', '14:05', '503', '201', 'blue'), // 13:20〜14:05
    addScheduledCell(2, '15:40', '16:30', '503', '201', 'white'), // 15:40〜16:30
    addScheduledCell(2, '21:35', '22:15', '503', '201', 'white'), // 21:35〜22:15
    addScheduledCell(2, '22:40', '00:00', '503', '201', 'blue'), // 22:40〜翌0

    // 4段目
    addScheduledCell(3, '08:50', '09:55', '503', '201', 'blue'), // 8:50〜9:55
    addScheduledCell(3, '10:30', '11:15', '503', '201', 'blue'), // 10:30〜11:15
    addScheduledCell(3, '12:10', '12:50', '503', '201', 'blue'), // 12:10〜12:50
    addScheduledCell(3, '13:20', '14:05', '503', '201', 'blue'), // 13:20〜14:05
    addScheduledCell(3, '15:40', '16:30', '503', '201', 'blue'), // 15:40〜16:30
    addScheduledCell(3, '21:35', '22:15', '503', '201', 'blue'), // 21:35〜22:15
    addScheduledCell(3, '22:40', '00:00', '503', '201', 'blue'), // 22:40〜翌0

    // 5段目
    addScheduledCell(4, '22:35', '00:00', '503', '201', 'blue'), // 22:35〜翌0

    // 6段目
    addScheduledCell(5, '10:40', '15:35', '503', '201', 'blue'), // 10:40〜15:35
    addScheduledCell(5, '17:00', '18:20', '503', '201', 'red'), // 17:00〜18:20

    // 7段目
    addScheduledCell(6, '16:50', '17:55', '503', '201', 'blue'), // 16:50〜17:55
  ]);

  const [modalPosition, setModalPosition] = useState<{ top: number; left: number } | null>(null);
  const [draggedGroup, setDraggedGroup] = useState<{ rowIndex: number; colStart: number; colEnd: number; startTime: string; endTime: string; leftNumber: string; rightNumber: string; color: string } | null>(null);
  const [selectedCell, setSelectedCell] = useState<{ rowIndex: number; colStart: number; colEnd: number } | null>(null);
  const dragPreviewRef = useRef<HTMLDivElement | null>(null);

  const isScheduled = (rowIndex: number, colIndex: number): boolean => {
    return scheduledCells.some(
      (cell) => cell.rowIndex === rowIndex && colIndex >= cell.colStart && colIndex <= cell.colEnd
    );
  };

  const isBackgroundColored = (rowIndex: number, colIndex: number): string | undefined => {
    const backgroundCell = backgroundCells.find(
      (cell) => cell.rowIndex === rowIndex && colIndex >= cell.colStart && colIndex <= cell.colEnd
    );
    return backgroundCell ? backgroundCell.color : undefined;
  };

  const handleDragStart = (e: React.DragEvent<HTMLSpanElement>, rowIndex: number, colStart: number, colEnd: number) => {
    setSelectedCell(null);

    const draggedCell = scheduledCells.find(
      (cell) => cell.rowIndex === rowIndex && cell.colStart === colStart && cell.colEnd === colEnd
    );

    if (draggedCell) {
      setDraggedGroup({
        rowIndex,
        colStart,
        colEnd,
        startTime: draggedCell.startTime,
        endTime: draggedCell.endTime,
        leftNumber: draggedCell.leftNumber,
        rightNumber: draggedCell.rightNumber,
        color: draggedCell.color
      });

      if (dragPreviewRef.current) {
        const previewElement = dragPreviewRef.current;
        previewElement.style.width = `calc(${cellWidth} * ${colEnd - colStart + 1})`;
        e.dataTransfer.setDragImage(previewElement, 0, 0);
      }
    } else {
      e.preventDefault();
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (rowIndex: number) => {
    if (draggedGroup) {
      const newColStart = draggedGroup.colStart;
      const newColEnd = draggedGroup.colEnd;

      const isOverlapping = scheduledCells.some(
        (cell) =>
          cell.rowIndex === rowIndex &&
          cell !== draggedGroup &&
          (
            (newColStart >= cell.colStart && newColStart <= cell.colEnd) ||
            (newColEnd >= cell.colStart && newColEnd <= cell.colEnd) ||
            (newColStart <= cell.colStart && newColEnd >= cell.colEnd)
          )
      );

      if (!isOverlapping) {
        const newScheduledCells = scheduledCells
          .filter((cell) => !(cell.rowIndex === draggedGroup.rowIndex && cell.colStart === draggedGroup.colStart))
          .concat([{ ...draggedGroup, rowIndex }]);

        setScheduledCells(newScheduledCells);
      }

      setDraggedGroup(null);
    }
  };

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (selectedCell !== null) {
        setSelectedCell(null);
        setModalPosition(null); // モーダルを非表示にする
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [selectedCell]);


  const handleCellClick = (
    e: React.MouseEvent<HTMLDivElement>,
    rowIndex: number,
    colStart: number,
    colEnd: number
  ) => {
    setSelectedCell({ rowIndex, colStart, colEnd });

    // モーダルの位置を設定（クリックされたセルの右側に表示）
    const cellRect = e.currentTarget.getBoundingClientRect();
    setModalPosition({
      top: cellRect.top + window.scrollY,
      left: cellRect.right + window.scrollX + 10, // 10px右側にオフセット
    });

    e.stopPropagation();
  };

  const getStartMinute = (colStart: number) => (colStart % 12) * 5;
  const getEndMinute = (colEnd: number) => ((colEnd + 1) % 12) * 5;

  const getTextColor = (color: string): string => {
    if (color === 'blue' || color === 'red') return '#FFFFFF';
    if (color === 'white') return '#2B2B2B';
    return '#000000';
  };

  const getBackgroundColor = (color: string): string => {
    if (color === 'blue') return '#071A6D';
    if (color === 'red') return '#DC3636';
    if (color === 'white') return '#F9F9F9';
    return 'transparent';
  };

  const getCellOpacity = (rowIndex: number, colStart: number, colEnd: number) => {
    if (selectedCell) {
      return selectedCell.rowIndex === rowIndex && colStart === selectedCell.colStart && colEnd === selectedCell.colEnd ? 1 : 0.2;
    }
    return 1;
  };

  return (
    <div>
      <div
        ref={dragPreviewRef}
        style={{
          position: 'absolute',
          top: '-1000px',
          pointerEvents: 'none',
          height: cellHeight,
          backgroundColor: 'lightgray',
          opacity: 0.5,
        }}
      />

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', backgroundColor: '#F8DB4A', height: headerHeight, width: "fit-content" }}>
          <span
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '10px',
              margin: '0',
              fontWeight: 'bold',
              borderRight: '2px solid #071A6D',
              fontSize: 'calc(16 / 1920 * 100vw)',
              width: labelWidth,
              height: headerHeight,
              lineHeight: headerHeight,
            }}
          >
            JST
          </span>
          {topRow.map((label, index) => (
            <span
              key={index}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '10px',
                margin: '0',
                fontWeight: 'bold',
                borderRight: '1px solid #D8D8D8',
                fontSize: 'calc(16 / 1920 * 100vw)',
                width: hourWidth,
                height: headerHeight,
                lineHeight: headerHeight,
              }}
            >
              {label}
            </span>
          ))}
        </div>
        <div style={{ display: 'flex', backgroundColor: '#DFAC3B', height: headerHeight, width: "fit-content" }}>
          <span
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '10px',
              margin: '0',
              fontWeight: 'bold',
              borderRight: '2px solid #071A6D',
              fontSize: 'calc(16 / 1920 * 100vw)',
              width: labelWidth,
              height: headerHeight,
              lineHeight: headerHeight,
            }}
          >
            UTC
          </span>
          {bottomRow.map((label, index) => (
            <span
              key={index}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '10px',
                margin: '0',
                width: hourWidth,
                height: headerHeight,
                borderRight: '1px solid #D8D8D8',
                fontSize: 'calc(16 / 1920 * 100vw)',
                lineHeight: headerHeight,
              }}
            >
              {label}
            </span>
          ))}
        </div>
      </div>

      {rowLabels.map((row, rowIndex) => (
        <div
          key={rowIndex}
          style={{
            display: 'flex'
          }}
          onDragOver={(e) => handleDragOver(e)}
          onDrop={() => handleDrop(rowIndex)}
        >
          <span
            style={{
              padding: '10px',
              margin: '0',
              width: labelWidth,
              height: calendarCellHeight,
              textAlign: 'center',
              lineHeight: 'normal',
              borderRight: '2px solid #071A6D',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              backgroundColor: typeof row !== 'string' && row.label === "401" ? '#DFAC3B' : 'transparent',
            }}
          >
            <span style={{ fontWeight: 'bold', fontSize: 'calc(16 / 1920 * 100vw)' }}>
              {typeof row === 'string' ? row : row.label}
            </span>
            {typeof row !== 'string' && row.subLabel && (
              <span style={{ fontSize: 'calc(12 / 1920 * 100vw)' }}>
                {row.subLabel}
              </span>
            )}
          </span>
          {topRow.map((_, hourIndex) => (
            <div
              key={hourIndex}
              style={{
                display: 'flex',
                alignItems: 'center',
                width: hourWidth,
                height: calendarCellHeight,
                borderLeft: '1px solid #ccc',
                borderRight: hourIndex === topRow.length - 1 ? '1px solid #ccc' : 'none',
                backgroundColor: isBackgroundColored(rowIndex, hourIndex * 12) || 'transparent',
              }}
            >
              {Array.from({ length: 12 }).map((_, minuteIndex) => {
                const colIndex = hourIndex * 12 + minuteIndex;
                const associatedGroup = scheduledCells.find(
                  (cell) =>
                    cell.rowIndex === rowIndex && colIndex >= cell.colStart && colIndex <= cell.colEnd
                );
                const isDraggable = associatedGroup !== undefined;
                const isFirstInGroup = colIndex === associatedGroup?.colStart;

                return (
                  <div
                    key={colIndex}
                    style={{
                      position: 'relative',
                      flex: 1,
                      height: cellHeight,
                      boxSizing: 'border-box',
                    }}
                  >
                    {isScheduled(rowIndex, colIndex) && isFirstInGroup && (
                      <div
                        draggable={isDraggable}
                        onClick={(e) => handleCellClick(e, rowIndex, associatedGroup.colStart, associatedGroup.colEnd)}
                        onDragStart={(e) => {
                          if (associatedGroup) {
                            handleDragStart(e, associatedGroup.rowIndex, associatedGroup.colStart, associatedGroup.colEnd);
                          }
                        }}
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: `calc(${cellWidth} * ${associatedGroup.colEnd - associatedGroup.colStart + 1})`,
                          height: '100%',
                          backgroundColor: getBackgroundColor(associatedGroup?.color || ''),
                          color: getTextColor(associatedGroup?.color || ''),
                          cursor: 'pointer',
                          border: 'none',
                          borderTopLeftRadius: '8px',
                          borderBottomLeftRadius: '8px',
                          borderTopRightRadius: '8px',
                          borderBottomRightRadius: '8px',
                          zIndex: 1,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '0 4px',
                          boxSizing: 'border-box',
                          boxShadow: '0px 2px 2px 0px #0000004D',
                          opacity: getCellOpacity(rowIndex, associatedGroup.colStart, associatedGroup.colEnd),
                        }}
                      >
                        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0', flexDirection: 'column', height: '100%' }}>
                          <span style={{ fontSize: 'calc(14 / 1920 * 100vw)', fontWeight: 600, color: getTextColor(associatedGroup?.color || '') }}>
                            {associatedGroup.leftNumber}
                          </span>
                          <span style={{ fontSize: 'calc(12 / 1920 * 100vw)', color: getTextColor(associatedGroup?.color || '') }}>
                            {getStartMinute(associatedGroup.colStart)}
                          </span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0', flexDirection: 'column', alignItems: 'end', height: '100%' }}>
                          <span style={{ fontSize: 'calc(14 / 1920 * 100vw)', fontWeight: 600, color: getTextColor(associatedGroup?.color || '') }}>
                            {associatedGroup.rightNumber}
                          </span>
                          <span style={{ fontSize: 'calc(12 / 1920 * 100vw)', color: getTextColor(associatedGroup?.color || '') }}>
                            {getEndMinute(associatedGroup.colEnd)}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      ))}

      {modalPosition && (
        <div
          style={{
            position: 'absolute',
            top: modalPosition.top,
            left: modalPosition.left,
            width: 'max-content',
            zIndex: 1000,
          }}
        >
          <Image
            src="/card.png"
            alt={"Card"}
            height={305}
            width={348}
            style={{ objectFit: "contain", width: "calc(348 / 1920 * 100vw)" }}
            priority
          />
        </div>
      )}
    </div>

  );
}
