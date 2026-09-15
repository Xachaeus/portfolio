import { Project } from '../../models/project.model';

export const minecraftShaders: Project = {
  slug: 'minecraft-shaders',
  name: 'Minecraft Shaders',
  tagline: 'A functional Minecraft shaderpack written in GLSL as a first introduction to real-time graphics programming.',
  description:
    "This project is a working Minecraft shaderpack that I wrote to teach myself graphics programming. It required " +
    "learning a new language (GLSL) and a different way of thinking about programs, since the massively " +
    "parallel nature of shader code doesn't map cleanly onto the sequential programming I was used to. Custom " +
    "shaders in Minecraft are made possible by graphics mods like OptiFine or Iris, which swap out the vanilla " +
    "rendering pipeline for one built from user-supplied GLSL programs. That pipeline runs in stages -- a shadow " +
    "pass, gbuffers passes for each object type, deferred passes, composite passes, and a final full-screen post-" +
    "processing pass -- and understanding how data flows between all of those stages was as much a part of the " +
    "project as the GLSL itself. The finished shaderpack handles colored shadows, sunrise and sunset lighting, and " +
    "renders the front and back faces of grass separately so light passes through it more believably; it still has " +
    "some sunrise/sunset performance dips and minor light leaks in caves.",
  technologies: ['GLSL', 'Parallel Programming', 'Shader Programming', 'Graphics Programming', 'Game Development'],
  githubUrl: 'https://github.com/Xachaeus/Personal-Portfolio/tree/main/College%20Projects/Minecraft%20Shaders',
  links: [],
  highlights: [
    {
      title: 'Multi-Stage Rendering Pipeline',
      description:
        'The shaderpack is built across the full OptiFine rendering pipeline: a shadow pass renders a depth map and ' +
        'colored views of the scene from the light source, per-object-type gbuffers programs handle things like ' +
        'terrain, water, and entities individually, deferred passes run additional computation before the composite ' +
        'passes run in order as full-screen effects, and a final pass handles post-processing. Learning how to divide ' +
        'work across these stages -- rather than write one monolithic shader -- was the core challenge of the project.',
    },
    {
      title: 'Double-Sided Translucent Grass',
      description:
        'Grass in the pack is rendered with its front and back faces handled separately, rather than as a single ' +
        'double-sided surface, which lets light pass through the blades in a way that far more closely matches how ' +
        'thin, translucent grass actually looks in real life.',
    },
  ],
  conciseHighlights: [
    {
      title: 'Full Custom Render Pipeline',
      description: 'Implements shadow, gbuffers, deferred, composite, and final passes across the OptiFine/Iris pipeline',
    },
    {
      title: 'Translucent Grass Rendering',
      description: 'Renders grass front and back faces separately to more realistically simulate light passing through it',
    },
    {
      title: 'Dynamic Lighting',
      description: 'Handles colored shadows and full sunrise/sunset lighting transitions',
    },
  ],
  date: '2024-05-09',
  featured: false,
  status: 'completed',
};
