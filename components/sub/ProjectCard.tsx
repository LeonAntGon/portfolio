import React from "react";
import { FaGithub, FaExternalLinkAlt, FaGoogleDrive } from "react-icons/fa";

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string; // Opcional
  projectLink?: string; // Puede estar o no
  githubLink?: string; // Opcional
  driveLink?: string; // Opcional
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  projectLink,
  githubLink,
  driveLink,
}) => {
  return (
    <div className="bg-neutral-900 rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105 duration-300">
      {/* Imagen */}
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
          loading="lazy"
        />
      )}

      {/* Contenido */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="text-neutral-400 text-sm mt-2">{description}</p>

        {/* Links */}
        <div className="flex items-center gap-4 mt-4">
          {/* Link principal */}
          {projectLink && (
            <a
              href={projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 z-200 cursor-pointer"
              title="Ver Proyecto"
            >
              <FaExternalLinkAlt size={20} />
            </a>
          )}

          {/* GitHub */}
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
              title="Ver en GitHub"
            >
              <FaGithub size={22} />
            </a>
          )}

          {/* Google Drive */}
          {driveLink && (
            <a
              href={driveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:text-green-300"
              title="Ver en Google Drive"
            >
              <FaGoogleDrive size={22} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
