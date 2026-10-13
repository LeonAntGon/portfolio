"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslations } from "next-intl";
import { skillCategories, type SkillCategory } from "@/constants";
import SkillText from "../sub/SkillText";

const categoryVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const CategoryCard = ({
  category,
  index,
}: {
  category: SkillCategory;
  index: number;
}) => {
  const t = useTranslations("Skills");
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <motion.div
      ref={ref}
      variants={categoryVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition-all duration-300 hover:border-purple-500/40"
    >
      <div className="mb-5 flex items-center justify-between">
        <h3 className="flex items-center gap-2 text-lg font-semibold text-white">
          <span className="h-2 w-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500" />
          {t(`categories.${category.titleKey}`)}
        </h3>
        <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs text-gray-400">
          {category.skills.length}
        </span>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {category.skills.map((skill) => {
          const Icon = skill.icon;
          const name = skill.nameKey ? t(`items.${skill.nameKey}`) : skill.name;
          const note = skill.noteKey ? t(`notes.${skill.noteKey}`) : undefined;

          return (
            <div
              key={skill.name}
              className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.03] p-3 transition-all duration-300 hover:scale-[1.02] hover:border-purple-500/50 hover:shadow-[0_0_15px_rgba(168,85,247,0.4)]"
            >
              <Icon
                className="h-6 w-6 shrink-0"
                style={{ color: skill.color }}
                aria-hidden="true"
              />
              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-gray-100">
                  {name}
                </p>
                {note && (
                  <p className="truncate text-[11px] text-gray-500">{note}</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative flex w-full flex-col items-center justify-center overflow-hidden py-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[#030014]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(60,20,120,0.35),transparent_65%)]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.15] [background-image:linear-gradient(to_right,rgba(148,163,184,0.25)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.25)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)] [-webkit-mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
      />

      <div className="relative z-20 mx-auto flex w-full max-w-6xl flex-col items-center px-6">
        <SkillText />

        <div className="mt-12 grid w-full grid-cols-1 gap-6 md:grid-cols-2">
          {skillCategories.map((category, index) => (
            <CategoryCard
              key={category.id}
              category={category}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
