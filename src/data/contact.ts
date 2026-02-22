import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';

import type { ContactLink } from '@/types/content';

export interface ContactItem extends ContactLink {
  icon: IconDefinition;
}

const data: ContactItem[] = [
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/syed-yawar-hussain-162b17113',
    kind: 'linkedin',
    icon: faLinkedinIn,
  },
  {
    label: 'GitHub',
    link: 'https://github.com/syed-yawar',
    kind: 'github',
    icon: faGithub,
  },
  {
    label: 'Email',
    link: 'mailto:syedyawar2@gmail.com',
    kind: 'email',
    isPrimary: true,
    icon: faEnvelope,
  },
  {
    label: 'Phone (available on request)',
    link: 'mailto:syedyawar2@gmail.com?subject=Phone%20Call%20Request',
    kind: 'phone',
    isPlaceholder: true,
    icon: faEnvelope,
  },
];

export default data;
