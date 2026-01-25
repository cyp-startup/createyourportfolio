import mailIcon from '../images/icon/mail-icon.svg';
import callIcon from '../images/icon/call-icon.svg';
import webIcon from '../images/icon/web-icon.svg';
import dribbbleIcon from '../images/icon/dribble-icon.svg';
import linkedinIcon from '../images/icon/linkedin-icon.svg';
import facebookIcon from '../images/icon/facebook-icon.svg';
import figma from "../images/home/education-skill/figma-icon.svg"
import photoshop from "../images/home/education-skill/photoshop-icon.svg"
import sketch from "../images/home/education-skill/sketch-icon.svg"
import adobe from "../images/home/education-skill/adobe-icon.svg"
import framer from "../images/home/education-skill/framer-icon.svg"
import invasion from "../images/home/education-skill/invision-icon.svg"

export const pageData = {
  contactBar: {
    contactItems: [
      {
        type: "email",
        label: "hello@imsruthi.com",
        icon: mailIcon,
        link: "mailto:hello@imsruthi.com"
      },
      {
        type: "phone",
        label: "+901 5588 2500",
        icon: callIcon,
        link: "tel:+90155882500"
      },
      {
        type: "website",
        label: "www.mywebsite.com",
        icon: webIcon,
        link: "https://www.mywebsite.com"
      }
    ],
    socialItems: [
      {
        platform: "dribbble",
        icon: dribbbleIcon,
        link: "https://dribbble.com"
      },
      {
        platform: "linkedin",
        icon: linkedinIcon,
        link: "https://linkedin.com"
      },
      {
        platform: "facebook",
        icon: facebookIcon,
        link: "https://facebook.com"
      }
    ]
  },
  educationData: {
    education: [
      {
        title: "Lipsum Collage - 2010",
        description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form Koramangala collage."
      },
      {
        title: "Master Diploma - 2012",
        description: "Combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable."
      },
      {
        title: "Master in User Experience - 2014",
        description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration."
      }
    ],
    skills: [
      {
        name: "Figma",
        icon: figma,
        rating: 5
      },
      {
        name: "Photoshop",
        icon: photoshop,
        rating: 5
      },
      {
        name: "Sketch",
        icon: sketch,
        rating: 4
      },
      {
        name: "Adobe XD",
        icon: adobe,
        rating: 4
      },
      {
        name: "Framer",
        icon: framer,
        rating: 5
      },
      {
        name: "Invasion",
        icon: invasion,
        rating: 3
      }
    ]
  },
  contactLinks: {
    socialLinks: [
      {
        title: "Dribble",
        href: "/"
      },
      {
        title: "Facebook",
        href: "/"
      },
      {
        title: "LinkedIn",
        href: "/"
      }
    ],
    contactInfo: [
      {
        type: "email",
        label: "hello@imsruthi.com",
        link: "mailto:hello@imsruthi.com"
      },
      {
        type: "phone",
        label: "+901 5588 2500",
        link: "tel:+90155882500"
      }
    ]
  }
}
