export const SectionIds = {
  AboutMe: "about-me",
  Projects: "projects",
  Landing: "landing",
};

export const Links = {
  Repositories: "https://github.com/andypandy47?tab=repositories",
  LinkedInProfile: "https://www.linkedin.com/in/andrew-kay-307bb013b/",
  YoutubeChannel: "https://www.youtube.com/channel/UCEAI5uTSFNtCbXGlCKZgwuQ",
  TwitterProfile: "https://twitter.com/AudioPandy",
};

export const NavLinks: { link: string; text: string }[] = [
  {
    link: `/#${SectionIds.Landing}`,
    text: "HOME",
  },
  {
    link: `/#${SectionIds.Projects}`,
    text: "PROJECTS",
  },
  {
    link: `/#${SectionIds.AboutMe}`,
    text: "ABOUT",
  },
];
