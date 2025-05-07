"use client"
import Head from 'next/head'
import { motion } from "framer-motion"
import { links } from "@/lib/data"
import Link from "next/link"
import clsx from "clsx"
import { headerLanguageMap } from "@/lib/data"
import { useActiveSectionContext } from "@/context/action-section-context"
import { useLocale } from "next-intl"

function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext()
  const activeLocale = useLocale()
  return (
    <>
      <div>
        <Head>
          <title>柴浩天 - 前端开发工程师 | 个人作品集</title>
          <meta name="description" content="柴浩天的个人网站，展示前端开发项目、技术博客和专业技能。专注于React、Next.js和现代Web开发技术。" />
          <meta name="keywords" content="柴浩天,前端开发,React开发,Next.js,个人网站,作品集,Web开发" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content={"https://lichcarlos.top${router.asPath}"} />
          <meta property="og:title" content="柴浩天 - 前端开发工程师" />
          <meta property="og:description" content="探索柴浩天的前端开发作品集和技术博客" />
          <meta property="og:image" content="https://lichcarlos.top/images/httpslichcarlos.topzh.png" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:image:alt" content="柴浩天的个人作品集封面" />
          <meta property="og:site_name" content="柴浩天的个人网站" />
          <meta property="og:locale" content="zh_CN" />

          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="柴浩天 - 前端开发工程师" />
          <meta name="twitter:description" content="探索柴浩天的前端开发作品集和技术博客" />
          <meta name="twitter:image" content="https://lichcarlos.top/images/httpslichcarlos.topzh.png" />

          {/* 其他 */}
          <link rel="canonical" href={"https://lichcarlos.top${router.asPath}"} />
          <link rel="icon" href="/favicon.ico" sizes="any" />
          <link rel="icon" href="/icon.svg" type="image/svg+xml" />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

          {/* 结构化数据 */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "柴浩天",
              "url": "https://lichcarlos.top",
              "jobTitle": "前端开发工程师",
              "skills": ["React", "Next.js", "JavaScript", "前端开发"],
              "sameAs": [
                "https://github.com/lichcarlos",
              ]
            })}
          </script>
        </Head>
      </div>
      <header className="z-[999] relative">
        <motion.div
          className="fixed top-0 left-1/2 -translate-x-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-40
        shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[30rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
          initial={{ y: -100, x: "-50%", opacity: 0 }}
          animate={{ y: 0, x: "-50%", opacity: 1 }}
        ></motion.div>
        <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
          <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5  ">
            {links.map((link, index) => (
              <motion.li
                key={link.hash}
                className="h-3/4 flex items-center justify-center relative break-keep"
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <Link
                  href={link.hash}
                  className={clsx(
                    "flex w-full items-center justify-center px-3 py-3 no-wrap hover:text-gray-950 dark:hover:text-gray-300 transition",
                    {
                      "text-gray-950": activeSection === link.name,
                      "dark:hover:text-gray-600": activeSection == link.name,
                    }
                  )}
                  onClick={() => {
                    setActiveSection(link.name)
                    setTimeOfLastClick(Date.now())
                  }}
                >
                  {activeLocale === "zh"
                    ? headerLanguageMap[link.name]
                    : link.name}
                  {link.name === activeSection && (
                    <motion.span
                      className="bg-gray-100 rounded-full absolute inset-0 -z-10"
                      layoutId="activeSection"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    ></motion.span>
                  )}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header
