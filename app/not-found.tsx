"use client"

export default function NotFound() {
  return (
    <html>
      <body>
        <div className="text-red-900 bg-red-100 m-10 p-10 mt-10 rounded-md ">
          <h1 className="font-semibold"> 出了点问题！</h1>
          <br />
          <br />
          尝试在路径的开头添加“zh”。例如:
          localhost:3000/zh
        </div>
      </body>
    </html>
  )
}
