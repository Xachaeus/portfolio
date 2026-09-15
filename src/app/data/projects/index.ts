import { Project } from '../../models/project.model';
import { autoPortfolio } from './auto-portfolio';
import { nTea } from './n-tea';
import { multicyclePipelinedRiscVCpu } from './cpu';
import { minecraftShaders } from './minecraft-shaders';
import { bulletHellGame } from './bulletHell';
import { solos } from './solos';

// Register every project file here. Order doesn't matter — the site
// sorts by date automatically.
export const projects: Project[] = [solos, autoPortfolio, nTea, multicyclePipelinedRiscVCpu, minecraftShaders, bulletHellGame];
