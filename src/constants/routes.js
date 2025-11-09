const navigationRoutes = [
  {
    path: "/",
    name: "Home",
    icon: '<svg viewBox="0 0 26 26" style="height: 24px; width: 24px;"><path d="M2.25 12.8855V20.7497C2.25 21.8543 3.14543 22.7497 4.25 22.7497H9.25C9.52614 22.7497 9.75 22.5258 9.75 22.2497V17.6822V16.4997C9.75 14.7048 11.2051 13.2497 13 13.2497C14.7949 13.2497 16.25 14.7048 16.25 16.4997V17.6822V22.2497C16.25 22.5258 16.4739 22.7497 16.75 22.7497H21.75C22.8546 22.7497 23.75 21.8543 23.75 20.7497V12.8855C23.75 11.3765 23.0685 9.94814 21.8954 8.99882L16.1454 4.34539C14.3112 2.86094 11.6888 2.86094 9.85455 4.34539L4.10455 8.99882C2.93153 9.94814 2.25 11.3765 2.25 12.8855Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2.5"></path></svg>',
  },
  {
    path: "/search",
    name: "Search",
    icon: '<svg  viewBox="0 0 26 26" style="height: 24px; width: 24px;"><path clip-rule="evenodd" d="M3.5 11.5C3.5 7.08172 7.08172 3.5 11.5 3.5C15.9183 3.5 19.5 7.08172 19.5 11.5C19.5 15.9183 15.9183 19.5 11.5 19.5C7.08172 19.5 3.5 15.9183 3.5 11.5ZM11.5 1C5.70101 1 1 5.70101 1 11.5C1 17.299 5.70101 22 11.5 22C13.949 22 16.2023 21.1615 17.9883 19.756L22.3661 24.1339C22.8543 24.622 23.6457 24.622 24.1339 24.1339C24.622 23.6457 24.622 22.8543 24.1339 22.3661L19.756 17.9883C21.1615 16.2023 22 13.949 22 11.5C22 5.70101 17.299 1 11.5 1Z" fill="currentColor" fill-rule="evenodd"></path></svg>',
  },
  {
    path: "#",
    name: "Create",
    icon: '<svg  viewBox="0 0 12 12" style="height: 24px; width: 24px;"><path d="M6 2v8m4-4H2"  stroke-linecap="round" stroke-width="1.5"></path></svg>',
  },
  {
    path: "/activity",
    name: "Activity",
    icon: '<svg  viewBox="0 0 32 32" style="fill:transparent;height: 30px; width: 30px;"><path d="M5.5 12.8568C5.5 17.224 9.22178 21.5299 15.0332 25.2032C15.3554 25.397 15.7401 25.5909 16 25.5909C16.2703 25.5909 16.655 25.397 16.9668 25.2032C22.7782 21.5299 26.5 17.224 26.5 12.8568C26.5 9.11212 23.8698 6.5 20.4599 6.5C18.4847 6.5 16.9356 7.39792 16 8.74479C15.0851 7.40812 13.5257 6.5 11.5401 6.5C8.14059 6.5 5.5 9.11212 5.5 12.8568Z" stroke="currentColor" stroke-width="2.5"></path></svg>',
  },
  {
    path: "/@:username",
    name: "User",
    icon: '<svg  viewBox="0 0 26 26" style="fill:transparent; height: 24px; width: 24px;"><circle cx="13" cy="7.25" r="4" stroke="currentColor" stroke-width="2.5"></circle><path d="M6.26678 23.75H19.744C21.603 23.75 22.5 23.2186 22.5 22.0673C22.5 19.3712 18.8038 15.75 13 15.75C7.19625 15.75 3.5 19.3712 3.5 22.0673C3.5 23.2186 4.39704 23.75 6.26678 23.75Z" stroke="currentColor" stroke-width="2.5"></path></svg>',
  },
];

export { navigationRoutes };
