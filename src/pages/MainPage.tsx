import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';

import { useEffect, useState, useRef, type JSX } from "react";
import { Document, Page, pdfjs } from 'react-pdf';
import workerSrc from 'pdfjs-dist/build/pdf.worker.min?url';
import fileUrl from '../assets/pdf/1.report.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

export const MainPage = (): JSX.Element => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);


  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = 0;
    }
  }, [fileUrl, numPages]);
  
  return (
    <div className="flex flex-row items-center justify-center h-full w-full">
      <div className="flex flex-row items-center justify-center h-full w-full">
        <div className="h-full w-full flex flex-col items-center justify-center bg-[#f3f5f7] border-r-1 border-gray-300 z-10">
          <div className="flex flex-row w-full items-center justify-center gap-2 px-20 py-10">
            <button
              onClick={() => setScale(prev => Math.max(prev - 0.2, 0.5))}
              className="px-2 py-1 test-xs bg-gray-100 hover:bg-gray-200 rounded"
              title="축소"
            >
              -
            </button>
            <button
              onClick={() => setScale(1)}
              className="px-2 py-1 text-xs bg-gray-100 hover:bg-gray-200 rounded min-w-[60px] text-center"
              title="원래 크기"
            >
              {Math.round(scale * 100)}%
            </button>
            <button
              onClick={() => setScale(prev => Math.min(prev + 0.2, 2))}
              className="px-2 py-1 text-xs bg-gray-100 hover:bg-gray-200 rounded"
              title="확대"
            >
              +
            </button>
          </div>
          <div className="h-800 w-full flex flex-col items-center justify-center overflow-y-auto">
            <Document
              file={fileUrl}
              onLoadSuccess={onDocumentLoadSuccess}
              onLoadError={(err) => {
                console.error('PDF 로드 오류:', err);
              }}
              loading={<div className="text-sm text-gray-400 text-center">PDF 로딩 중...</div>}
              error={<div className="text-red-500 text-center">PDF 로딩 중 오류가 발생했습니다.</div>}
            >
              <div className="min-h-min w-full flex justify-center">
                <Page
                  pageNumber={pageNumber}
                  width={500}
                  scale={scale}
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                />
              </div>
            </Document>
          </div>
          <div className="w-full flex flex-row items-center justify-center bg-[#f3f5f7] border-r-1 border-gray-300 z-10 gap-20">
          <div className="flex items-center justify-center w-full gap-10 px-20">
            <button
              onClick={() => setPageNumber(page => Math.max(1, page - 1))}
              disabled={pageNumber <= 1}
              className="px-10 py-4 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-300"
            >
              이전
            </button>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {pageNumber} / {numPages}
            </span>
            <button
              onClick={() => setPageNumber(page => Math.min(numPages || 0, page + 1))}
              disabled={pageNumber >= (numPages || 0)}
              className="px-10 py-4 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-300"
            >
              다음
            </button>
          </div>
          </div>
        </div>
        <div className="h-full w-full flex flex-col items-center justify-center bg-[#f3f5f7] gap-10">
          <div className="w-900 flex items-center justify-start text-center">
            <span className="flex items-center justify-center h-30 w-80 bg-white rounded-10 text-14">JSON</span>
          </div>
          <div className="h-800 w-900 p-30 bg-white">
          </div>
        </div>
      </div>
    </div>
  );
};