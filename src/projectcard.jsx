// src/ProjectCard.js
import React from 'react';
import { Builder } from '@builder.io/react';
import 'ProjectCard.css';

const ProjectCard = ({ title, description, tags, imageSrc, imageAlt }) => {
  return (
    <div className="card">
      <h1 className="title">{title}</h1>
      <p className="description">{description}</p>
      <div className="tags">
        {tags && tags.map((tag, index) => (
          <span key={index} className="tag">{tag}</span>
        ))}
      </div>
      <div className="image-placeholder">
        <img src={imageSrc} alt={imageAlt} />
      </div>
    </div>
  );
};

// Register the component with Builder.io
Builder.registerComponent(ProjectCard, {
  name: 'ProjectCard',
  inputs: [
    {
      name: 'title',
      type: 'string',
      defaultValue: 'Acme Website Redesign',
    },
    {
      name: 'description',
      type: 'string',
      defaultValue: 'A complete redesign of the Acme Inc website, featuring a modern and responsive layout, improved user experience, and custom illustrations.',
    },
    {
      name: 'tags',
      type: 'list',
      subFields: [{ name: 'tag', type: 'string' }],
      defaultValue: ['UI Design', 'Web Development', 'Illustration', 'Responsive'],
    },
    {
      name: 'imageSrc',
      type: 'file',
      allowedFileTypes: ['jpeg', 'jpg', 'png', 'gif'],
      defaultValue: 'path-to-your-image.png', // Replace with a default image path or URL
    },
    {
      name: 'imageAlt',
      type: 'string',
      defaultValue: 'Acme Website Redesign',
    },
  ],
});

export default ProjectCard;
