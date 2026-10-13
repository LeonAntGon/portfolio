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
            image="/project/lanorita.png"
            title={t('blogT')}
            description={t('blog')}
            projectLink="https://cabañaslanorita.com"
            //githubLink=""
            //driveLink=""
          />

          <ProjectCard
            image="/project/guarida-del-zorro.png"
            title={t('zorroT')}
            description={t('zorro')}
            projectLink="https://guaridadelzorro.com"
            // githubLink="https://github.com/LeonAntGon/guarida-del-zorro"
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
            image="/project/lenceriayas.png"
            title={t('lenceriaT')}
            description={t('lenceria')}
            projectLink="https://lenceriayas.shop"
            // githubLink="https://github.com/LeonAntGon/lenceria-yas"
            // driveLink="https://drive.google.com/file/d/archivoID"
          />

          <ProjectCard
            image="/project/ulpiano.png"
            title={t('ulpianoT')}
            description={t('ulpiano')}
            projectLink="https://ulpiano.net"
            // githubLink="https://github.com/LeonAntGon/ulpiano"
            // driveLink="https://drive.google.com/file/d/archivoID"
          />

          <ProjectCard
            image="/project/zentt.png"
            title={t('zenttT')}
            description={t('zentt')}
            projectLink="https://zentt.agency"
            // githubLink="https://github.com/LeonAntGon/zentt"
            // driveLink="https://drive.google.com/file/d/archivoID"
          />


      </div>
    </div>
  );
};

export default Projects;
