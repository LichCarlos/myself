"use client"

import React from "react"
import { motion } from "framer-motion"
import SectionHeading from "./SectionHeading"
import { useSectionInView } from "@/lib/hooks"
import { useLocale, useTranslations } from "next-intl"

export default function About() {
  const { ref } = useSectionInView("About")
  const t = useTranslations("AboutSection")
  const sectionLan = useTranslations("SectionName")
  const activeLocale = useLocale()

  return (
    <motion.section
      ref={ref}
      //@ts-ignore
      className="mb-50 max-w-[45rem] text-start leading-8 sm:mb-40 scroll-mt-28 mb-28 "
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>{sectionLan("about")}</SectionHeading>
      {activeLocale == "zh" ? (
        <div className="flex flex-col gap-2">
          <div>
            <span className="text-xl md:text-2xl font-bold italic">大家好!</span>
            <span className="text-xl md:text-2xl font-bold">😘</span>我是 🌟用代码作画的全栈梦想家🌟</div>
          <span className="md:text-1xl font-bold ">人生的奋斗目标：中华人民共和国万岁！  世界人民大团结万岁！</span>
          <div>
            我的专业是软件工程,教育背景偏向后端开发📟，但我对新兴的交互体验感兴趣，特别是前端编程、3d渲染、AI、和开发💻等方面。
            面对即将毕业工作未来，我在努力💪寻找自己的道路，在劳动中创造自己的价值，来到这个世界🌏留下痕迹。
          </div>
          <div>虽未入职场，我通过前端、后端开发及产品经理等角色积累了丰富经验✨，并在实验室担任部长提升自身的领导力💪与团队协作能力。
            展望未来，我计划💫深入研究前端新技术，如响应式设计和Web性能优化，构建用户体验卓越的网站🔥；
            积极参与开源前端项目，拓宽技术视野并增强实战能力🛠️；
            坚持开源精神💡，与志同道合的朋友共同探索前端创新。
            我致力于用专业知识为社会贡献价值，追寻梦想，留下独特印记🌈。</div>
          <div>
            无论未来如何，都要保持对生活的热情和对梦想的追求，坚持所爱，勇往直前！🚀🚀🚀
          </div>


          <div>
            目前，我在准备开发一个AI的RAG个人知识库问答网站。上线部署中，并且打算在<a
              className="text-xl md:text-2xl font-bold italic underline"
              href="https://space.bilibili.com/3546840882481998?spm_id_from=333.1007.0.0"
              target="_blank"
            >
              b站
            </a> 记录技术和生活。
          </div>
        </div>
      ) : (
        <>
          <div className="flex flex-col gap-2">
            <div>
              <span className="text-xl md:text-2xl font-bold italic">hello everyone!</span>
              <span className="text-xl md:text-2xl font-bold">😘</span>I&apos;m 🌟 A Full Stack Dreamer Drawing with Code</div>
            <span className="md:text-1xl font-bold ">Life&apos;s goal: Long live the People&apos;s Republic of China! Long live the great unity of the people of the world!</span>
            <div >
              My major is software engineering, and my educational background leans towards backend development 📟， But I am interested in emerging interactive experiences, especially front-end programming, 3D rendering AI、 And development 💻 In terms of other aspects.
              Facing the upcoming graduation and future job, I am working hard 💪 Find your own path, create your own value through labor, and come into this world 🌏 Leave traces.
            </div>
            <div>Although I haven&apos;t entered the workplace yet, I have accumulated rich experience through roles such as front-end and back-end development, and product manager ✨， And serve as the head of the laboratory to enhance one&apos;s leadership skills 💪 Ability to collaborate with a team.
              Looking ahead to the future, I plan to 💫 Conduct in-depth research on new front-end technologies, such as responsive design and web performance optimization, to build websites with excellent user experience 🔥；
              Actively participate in open-source front-end projects, broaden technical horizons, and enhance practical capabilities 🛠️；
              Adhere to the spirit of open source 💡， Explore front-end innovation with like-minded friends.
              I am committed to contributing value to society with my professional knowledge, pursuing my dreams, and leaving a unique mark 🌈。</div>
            <div>
              No matter what the future holds, we must maintain our passion for life and pursue our dreams, persist in what we love, and move forward courageously! 🚀🚀🚀
            </div>


            <div>
              Currently, I am preparing to develop an AI based RAG personal knowledge base Q&A website. Online deployment is underway and we plan to launch it in<a
                className="text-xl md:text-2xl font-bold italic underline"
                href="https://space.bilibili.com/3546840882481998?spm_id_from=333.1007.0.0"
                target="_blank"
              >
                BillBill
              </a> Record technology and life.
            </div>
          </div>
        </>
      )
      }
    </motion.section >
  )
}
