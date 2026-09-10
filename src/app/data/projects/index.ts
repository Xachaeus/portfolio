import { Project } from '../../models/project.model';
import { autoPortfolio } from './auto-portfolio';
import { solos } from './solos';

// Register every project file here. Order doesn't matter — the site
// sorts by date automatically.
export const projects: Project[] = [solos, autoPortfolio,];
