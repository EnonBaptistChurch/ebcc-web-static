import type { NavItem } from '@/types/NavItem';

const aboutSection :NavItem =
{
  title: "About Us",
  submenu: [
    { link: "/about/what-we-believe/", title: "What We Believe" },
    { link: "/about/church-history/", title: "Church History" },
    { link: "/about/pastors-message/", title: "Pastor's Message" },
  ],
  submenuOpen: false
}
const whatsonSection: NavItem = {
  title: 'What\'s on',
  submenu: [
    { link: "/whats-on/sunday-services/", title: "Sunday Services" },
    { link: "/whats-on/bible-study/", title: "Bible Study" },
    { link: "/whats-on/womens-meetings/", title: "Women's Meetings" },
    { link: "/whats-on/online-prayer-meeting/", title: "Online Prayer Meeting" },
    { link: "/whats-on/mens-meetings/", title: "Men's Meetings" },
    { link: "/whats-on/youth/", title: "Discoverers" },
    { link: "/whats-on/children/", title: "Children" },

  ],
  link: "/whats-on",
  submenuOpen:false
};

const whatsaChristianSection: NavItem = {
  title: 'What Is A Christian?',
  submenu:[
    { link: "/what-is-a-christian/becoming-a-christian/", title: "Becoming a Christian" },
    { link: "/what-is-a-christian/stop-trying-and-start-trusting/", title: "Stop Trying and Start Trusting" }
  ],
  link:"/what-is-a-christian/becoming-a-christian/",
  submenuOpen:false
};
  
  const testimonySection: NavItem = {
  title: 'Testimonies',
  submenu: [{ link: "/testimonies/", title: "Graham Trice" }],
  link:"/testimonies/",
  submenuOpen:false
};

const sermonSection: NavItem ={ title:"Sermons", link: "/sermons/" }
const findUsSection: NavItem ={ title:"Find Us", link: "/find-us/" }
const contactSection: NavItem ={ title:"Contact Us", link: "/contact-us/" }

const navItems: NavItem[] = [
  aboutSection,
  whatsonSection,
  whatsaChristianSection,
  testimonySection,
  sermonSection,
  findUsSection,
  contactSection
];

export default navItems;
