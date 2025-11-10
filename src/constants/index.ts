import { Business, Culture, Tech, Developer, Planning, Marketing, Support } from "../assets";

export const navLists = [
  {id: 'list-1', name: 'Home', path: '/'},
  {id: 'list-2', name: 'About Us', path: '#about-us'},
  {id: 'list-3', name: 'Contact Us', path: '#contact-us'},
  {id: 'list-4', name: 'Event', path: '#event'},
]

export const images = [
  { id: 1, src: Tech, label: "Innovation & Technology" },
  { id: 2, src: Business, label: "Leadership & Business" },
  { id: 3, src: Culture, label: "Creativity & Culture" },
  { id: 4, src: Developer, label: "Learning & Development" },
];

export const service = [
  { 
    id: 1,
    src: Planning,
    head: "Event Planning and Management",
    text: "We handle everything from logistics to execution."
  },

  { 
    id: 2, 
    src: Marketing, 
    head: "Marketing and Promotion Solutions", 
    text: "Boost your event's visibility with our strategies."
  },

  { 
    id: 3, 
    src: Support, 
    head: "On-Site Support and Coordination", 
    text: "Our team ensures everything runs smoothly on the day."
  }
]

export const review = [
  {
    id: 1,
    name: "Aisha K., Wedding Client",
    comment: "Summora turned my vision into reality. Every detail was flawless, and my guests couldn’t stop talking about how amazing everything was",
    style: "rotate-[3.12deg]"
  },

  {
    id: 2,
    name: "Daniel M., Corporate Client",
    comment: "From planning to execution, Summora made the entire process stress-free. They handled everything with professionalism and creativity.",
    style: "rotate-[-4.89deg]"
  },

  {
    id: 3,
    name: "David O., Tech Summit Organizer",
    comment: "Our conference went off without a hitch thanks to Summora. The organization, design, and atmosphere were beyond impressive.",
    style: "rotate-[1.46deg]"
  }
]