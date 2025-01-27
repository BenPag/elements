import { inovexContributor } from '../types/contributors';
import { Role } from '../types/roles';

export const CONTRIBUTORS: inovexContributor[] = [
  {
    login: 'janivo',
    name: 'Jan-Niklas',
    roles: [Role.PO, Role.DEV],
  },
  {
    login: 'silentHoo',
    name: 'Patrick',
    roles: [Role.PO],
  },
  {
    login: 'pfecht',
    name: 'Pascal',
    roles: [Role.PO, Role.DEV],
    isInactive: true,
  },
  {
    login: 'BenPag',
    name: 'Benjamin',
    roles: [Role.DEV],
  },
  {
    login: 'JCofman',
    name: 'Jacob',
    roles: [Role.DEV],
    isInactive: true,
  },
  {
    login: 'Sl1nd',
    name: 'Sven',
    roles: [Role.DEV],
    isInactive: true,
  },
  {
    login: 'ninaschlz',
    name: 'Nina',
    roles: [Role.DEV],
    isInactive: true,
  },
  {
    login: 'MariaLStefan',
    name: 'Maria',
    roles: [Role.DEV],
  },
  {
    login: 'TobiasHeimGalindo',
    name: 'Tobias',
    roles: [Role.DEV],
  },
  {
    login: 'BingeCode',
    name: 'Ben',
    roles: [Role.DEV],
  },
  {
    login: 'AlessaRad',
    name: 'Alessa',
    roles: [Role.DEV],
    isInactive: true,
  },
  {
    login: 'MBuchberger',
    name: 'Magda',
    roles: [Role.DESIGN],
  },
  {
    login: 'leagrimm',
    name: 'Lea',
    roles: [Role.DESIGN],
    isInactive: true,
  },
  {
    login: 'subserap',
    name: 'Serap',
    roles: [Role.DESIGN],
  },
];
