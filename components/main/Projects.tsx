import React from "react";
import ProjectCard from "../sub/ProjectCard";
import {useTranslations} from 'next-intl';

const Projects = () => {
  const t = useTranslations('Project');
  return (
    <div
      className="flex flex-col items-center justify-center py-20 relative"
      id="projects"
      style={{ zIndex: 20 }}
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        {t('title')}
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row md:flex-wrap gap-10 px-10
    [&>div]:max-w-[320px] md:[&>div]:max-w-[320px] md:justify-center">
        <ProjectCard
            image="/project/blog.png"
            title={t('blogT')}
            description={t('blog')}
            projectLink="https://blog-frontend-phi-one.vercel.app/"
            githubLink="https://github.com/LeonAntGon/Full-Stack-Blog"
            driveLink="https://drive.google.com/file/d/1G0oclBwg66vSvIbVd1cGHPbZCMyk4ZgI/view?usp=sharing"
          />

          <ProjectCard
            image="/project/periferia.png"
            title={t('periferiT')}
            description={t('periferia')}
            projectLink="https://periferia-digital-leonardos-projects-d36d8da3.vercel.app/"
            githubLink="https://github.com/LeonAntGon/PERIFERIA-DIGITAL"
            // driveLink="https://drive.google.com/file/d/archivoID"
          />

          <ProjectCard
            image="/project/igroup.png"
            title={t('igroupT')}
            description={t('igroup')}
            projectLink="https://i-group.vercel.app/"
            githubLink="https://github.com/LeonAntGon/i-group"
            // driveLink="https://drive.google.com/file/d/archivoID"
          />

          <ProjectCard
            image="/project/inmonuevo.png"
            title={t('inmonuevoT')}
            description={t('inmonuevo')}
            projectLink="https://www.inmonuevo.com.ar/"
            // githubLink="https://github.com/usuario/inmonuevo"
            // driveLink="https://drive.google.com/file/d/archivoID"
          />

          <ProjectCard
            image="/project/mojito.png"
            title={t('mojitoT')}
            description={t('mojito')}
            projectLink="https://mojito-ebon-five.vercel.app/"
            githubLink="https://github.com/LeonAntGon/mojito"
            // driveLink="https://drive.google.com/file/d/archivoID"
          />
          <ProjectCard
            image="/project/shopify.png"
            title={t('shopifyT')}
            description={t('shopify')}
            //projectLink="https://mojito-ebon-five.vercel.app/"
            githubLink="https://github.com/LeonAntGon/my-first-shopify-theme"
            // driveLink="https://drive.google.com/file/d/archivoID"
          />
          <ProjectCard
          image="/certs/sheets.jpeg"
          title={t('anyoneT')}
          description={t('anyone')}
          //githubLink={null} // Si no tenés repo para este proyecto
          //projectLink={null} // Si no hay demo en línea
          driveLink="https://drive.google.com/drive/folders/1lS4bQFQbHI1FQ7KdzbbkB-XjljV0bdh0?usp=drive_link"
        />


      </div>
    </div>
  );
};

export default Projects;
