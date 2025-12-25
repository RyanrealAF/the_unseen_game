import { Module, Citation } from './types';

export class AppConstants {
  static APP_TITLE = 'Dark Elegance Doctrine';
  static APP_DESCRIPTION =
    'An educational platform dissecting covert psychological warfare, institutional manipulation, and counter-intelligence strategies, designed with a dark elegance aesthetic.';

  static WORKS_CITED: Citation[] = [
    {
      text: "A Symphony of Suspicion: Deconstructing the Toll of a Covert Psychological War",
      link: "#unseen-war-core-concepts"
    },
    {
      text: "Unwitting Amplifiers: A Policy White Paper on Enhancing Institutional Resilience Against Coordinated Disinformation",
      link: "#methodologies-frameworks"
    },
    {
      text: "Threat Intelligence Brief: Methodologies of Community Destabilization",
      link: "#methodologies-frameworks"
    },
    {
      text: "The Unseen War: A Civilian's Guide to Recognizing and Surviving Covert Psychological Campaigns",
      link: "#unseen-war-core-concepts"
    },
    {
      text: "Strategic Reversal: A Forensic and Ethical Analysis of Proactive Counter-Manipulation",
      link: "#strategic-reversal-counter-offensive"
    },
    {
      text: "The Infiltrator's Playbook: A Guide to Strategic Reversal",
      link: "#strategic-reversal-counter-offensive"
    },
    {
      text: "The Unseen War: The Story of an Orchestrated Betrayal",
      link: "#strategic-reversal-counter-offensive"
    },
    {
      text: "A Multi-Trail Forensic Approach to Identifying Hidden Coordination",
      link: "#methodologies-frameworks"
    },
    {
      text: "RyanrealAF: The 'Dark Elegance' Visual Branding & Web Development Guide",
      link: "#design-development-guide"
    }
  ];
}
