import { Portfolio } from './interfaces';

export const portfolio: Portfolio[] = [
  {
    image: 'assets/img/portfolio/join.png',
    title: 'Join',
    languages: 'JavaScript | HTML | CSS | API',
    description:
      'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
    directLink: '#',
    gitHubLink: 'https://github.com/LukasNolting/JOIN',
    sequence: 'regular',
  },
  {
    image: 'assets/img/portfolio/el-pollo-loco.png',
    title: 'El Polo Loco',
    languages: 'JavaScript | HTML | CSS',
    description:
      'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
    directLink: '#',
    gitHubLink: 'https://github.com/LukasNolting/El-Polo-Loco',
    sequence: 'reverse',
  },
  {
    image: 'assets/img/portfolio/simple-crm.png',
    title: 'Simple CRM',
    languages: 'Angular | Firebase',
    description:
      'A very Simple Customer Relationship Management system working with CRUD functionality.',
    directLink: '#',
    gitHubLink: 'https://github.com/LukasNolting/Simple-CRM',
    sequence: 'regular',
  },
];
