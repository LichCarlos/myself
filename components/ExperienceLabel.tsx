import { useSectionInView } from "@/lib/hooks"

export function ExperienceLabel() {
  const { ref } = useSectionInView("Experiences", 0.5)
  return (
    <section
      className="absolute top-96  mt-28 scroll-mt-[600px] w-10 h-[320px] bg-transparent"
      id="experience"
      ref={ref}
    ></section>
  )
}
