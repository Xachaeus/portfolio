import { Project } from '../../models/project.model';

export const bulletHellGame: Project = {
  slug: 'bullet-hell-game',
  name: 'Bullet Hell Game',
  tagline: 'Top-down bullet hell shooter built in Python and Pygame to practice object-oriented design and parallel projectile simulation.',
  description:
    "I built this bullet hell game for myself as an exercise in a few different programming skills at once: " +
    "an object-oriented approach to managing several hundred independently-moving projectiles at a time, the " +
    "parallel-computing mindset needed to simulate all of those trajectories efficiently, and enough game design " +
    "sense to keep the projectiles and UI readable on screen. Since the programming was the point of the project, " +
    "I skipped outside art and audio assets entirely and drew every visual with Pygame's built-in drawing " +
    "functions. The player dodges an enemy's projectile patterns while firing straight up, " +
    "and can only win by also managing a special attack that charges faster the closer the player stays to the " +
    "enemy -- a mechanic that stops the player from just retreating to the bottom of the screen where patterns " +
    "are easiest to dodge.",
  technologies: ['Python', 'Parallel Programming', 'Object-Oriented Programming', 'Game Development'],
  githubUrl: 'https://github.com/Xachaeus/Personal-Portfolio/tree/main/College%20Projects/Bullet%20Hell%20Game',
  links: [],
  highlights: [
    {
      title: 'Timer-Driven Projectile Paths',
      description:
        'Every projectile is its own object with its own movement function, which is called each frame along ' +
        'with the amount of time elapsed since that specific projectile was fired. This lets a single projectile ' +
        'follow an arbitrarily complex, multi-stage path -- for example traveling straight for three seconds, then ' +
        'circling the enemy for two seconds, then continuing straight while slowly growing -- entirely independently ' +
        'of every other projectile on screen. Driving movement off of elapsed time rather than a fixed per-frame ' +
        'step also keeps the game speed consistent regardless of frame rate.',
    },
    {
      title: 'Proximity-Based Special Attack',
      description:
        "The player's special attack only charges while they stay close to the enemy, charges faster the closer " +
        "they get, stops charging once they drift too far away, and slowly drains if they retreat further still. " +
        "This mechanic was designed specifically to prevent a degenerate strategy of hiding at the bottom of the " +
        "screen, where the enemy's projectile patterns naturally spread out and become easiest to avoid.",
    },
    {
      title: 'Pattern-Based Enemy Design',
      description:
        'The enemy attacks in discrete "patterns" -- timed waves of projectiles, each with its own spawn logic, ' +
        'firing rate, and movement paths, separated by short pauses. Each pattern was hand-tuned to have a ' +
        'distinct visual signature and a distinct way of dodging it, turning enemy design into as much of a ' +
        'design problem as a programming one.',
    },
  ],
  conciseHighlights: [
    {
      title: 'Timer-Driven Movement',
      description: 'Every projectile follows its own arbitrary, multi-stage path based on elapsed time rather than frame count',
    },
    {
      title: 'Proximity-Charged Special',
      description: 'Special attack charge is tied to distance from the enemy, discouraging players from camping out of danger',
    },
    {
      title: 'Hand-Designed Attack Patterns',
      description: 'Enemy attacks arrive in distinct, timed waves, each with a unique look and a unique way to dodge it',
    },
  ],
  date: '2024-04-26',
  featured: false,
  status: 'completed',
};
