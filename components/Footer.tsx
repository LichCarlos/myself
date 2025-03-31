import React from "react"
import beian from "@/public/beian.png";
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; 2025 Carlos personal website
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this Website:</span> built with
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS.
      </p>
      <p className="text-xs">
        <span className="font-semibold">关于本网站:</span> 使用
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS.构建
      </p>
      {/* 添加ICP和公安备案信息在同一行 */}
      <div className="mt-4 flex justify-center space-x-3 items-center text-xs text-gray-500 space-x-3">
        {/* 公安备案信息在前 */}
        <div className="flex items-center space-x-1">
          <Image src={beian} alt="Police Badge Icon" width={15} height={15} />
          {' '}
          <a href="https://beian.mps.gov.cn/#/query/webSearch?code=14010802080403" target="_blank" rel="noopener noreferrer" className="hover:underline">
            晋公网安备14010802080403号
          </a>
        </div>
        {/* ICP备案信息 */}
        <a href="https://beian.miit.gov.cn" target="_blank" rel="noopener noreferrer" className="hover:underline">
          晋ICP备2025056344号-1
        </a>
      </div>
    </footer>
  )
}
