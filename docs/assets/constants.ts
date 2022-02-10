import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class Constants {
    public TITLE: any = "Rishabh Saxena";
    public ABOUT: any = "About";
    public SKILLS: any = "Skills";
    public EXPERIENCE: any = "Experience";
    public PROJECTS: any = "Projects";
    public EDUCATION: any = "Education";
    public CERTIFICATIONS: any = "Certifications";
    public ACCOMPLISHMENTS: any = "Accomplishments";
    public RECOMMENDATIONS: any = "Recommendations";
    public VOLUNTEERING: any = "Volunteering";
    public BLOG: any = "Blog";
    public CONTACT: any = "Contact";
    public INTRO: any = "Hello! I am Rishabh";
    public SUBINTRO: any = "I am currently working as a Specialist Programmer at Infosys. I like to learn about new technologies in the market, changes happening around us, and how can I contribute to make this world a better place to live. I have a passion for teaching and understand human psychology quite well. Feel free to explore this little space to know me better.🚀";
    public RESUMELINK: any = "https://drive.google.com/file/d/1VvUuBJYzfWbyvZO1T8LDS5prR8wcJ49o/view?usp=sharing";
    public GETINTOUCH: any = "Get in touch";
    public VIEWRESUME: any = "View Resume";
    public GITHUBLINK: any = "https://github.com/rishabhsax";
    public LINKEDINLINK: any = "https://www.linkedin.com/in/rishabhsax/";
    public GMAILLINK: any = "rishabh.saxena2@gmail.com";
    public YOUTUBELINK: any = "https://www.youtube.com/channel/UCRpSyVTun-JZrFY3sUn_YOA";
    public TIMELINETITLE: any = "Timeline";
    public TIMELINE = [
        {
          heading: "Specialist Programmer",
          duration: "Current",
          subtitle: "Infosys Limited, Chandigarh",
          content: "Full Stack Developer; Open-source contributor; Hackathons; Tutor-Mathematics",
          className1: "container left",
          className2: "container right"
        },
        {
          heading: "Computer Science & Engineering",
          duration: "2018",
          subtitle: "Dr A.P.J. Abdul Kalam Technical University",
          content: "E-Leader of Entrpreneurship & Innovation Cell; been active participant of various technical & cultural clubs; Member of Corporate Relations Committee.",
          className1: "container right",
          className2: "prt_about_learnbox_right"
        },
        {
            heading: "Higher Secondary (12th)",
            duration: "2014",
            subtitle: "CBSE Board",
            content: "Computer Science, Mathematics, Physics, English, & Chemistry as majors.",
            className1: "container left",
            className2: "prt_about_learnbox_left"
          },
        {
          heading: "Secondary Stage (10th)",
          duration: "2012",
          subtitle: "CBSE Board",
          content: "Secured CGPA 10 with Merit in All Subjects; inter-school Debate Competitions; Computer Science Olympiads",
          className1: "container right",
          className2: "prt_about_learnbox_right"
        }
        ];
    public CONTACTINFO = {
            title: "Contact Me ",
            subtitle: "Do you want to stay in touch or know more about me? Or would you like to share something about yourself? Please feel free to hit me up in any case, see you soon.. ^_^"
          };
}
