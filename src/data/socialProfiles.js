import emailIcon from '../assets/email_icon.png';
import githubIcon from '../assets/github_icon.png';
import linkedinIcon from '../assets/linkedin_icon.png';
import twitterIcon from '../assets/twitter_icon.png';

const SOCIAL_PROFILES = [
  {
    id: 1,
    icon: emailIcon,
    title: 'Email',
    link: 'mailto:acsehi@gmail.com',
    visible: true,
  },
  {
    id: 2,
    icon: githubIcon,
    title: 'GitHub',
    link: 'https://github.com/andras468?tab=repositories',
    visible: true,
  },
  {
    id: 3,
    icon: linkedinIcon,
    title: 'LinkedIn',
    link: 'https://www.linkedin.com/in/andras-csehi',
    visible: true,
  },
  {
    id: 4,
    icon: twitterIcon,
    title: 'Twitter',
    link: 'https://twitter.com',
    visible: false,
  },
]

export default SOCIAL_PROFILES;