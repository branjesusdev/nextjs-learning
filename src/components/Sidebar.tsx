import { SidebarMenuItem } from "./SidebarMenuItem";

const menuItems = [
  {
    path: "/dashboard/main",
    icon: (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-home"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
          <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
          <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
        </svg>
      </>
    ),
    title: "Dashboard",
  },
  {
    path: "/dashboard/counter",
    icon: (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-numbers"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M8 10v-7l-2 2" />
          <path d="M6 16a2 2 0 1 1 4 0c0 .591 -.601 1.46 -1 2l-3 3h4" />
          <path d="M15 14a2 2 0 1 0 2 -2a2 2 0 1 0 -2 -2" />
          <path d="M6.5 10h3" />
        </svg>
      </>
    ),
    title: "Counter",
  },
  {
    path: "/dashboard/pokemons",
    icon: (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-pokeball"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
          <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          <path d="M3 12h6" />
          <path d="M15 12h6" />
        </svg>
      </>
    ),
    title: "Pokemons",
  },
  {
    path: "/dashboard/favorites",
    icon: (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="icon icon-tabler icons-tabler-filled icon-tabler-star"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z" />
        </svg>
      </>
    ),
    title: "Favoritos",
  },
];

export const Sidebar = () => {
  return (
    <>
      <aside style={{ width: "300px" }} className="min-h-screen">
        <div
          style={{ width: "250px" }}
          className="bg-black z-10 text-slate-300 left-0 fixed h-full"
        >
          <div className="my-4 px-6">
            <h1 className="flex gap-3 text-lg md:text-2xl font-bold text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-brand-nextjs"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 15v-6l7.745 10.65a9 9 0 1 1 2.255 -1.993" />
                <path d="M15 12v-3" />
              </svg>
              <span> Dash </span>
              <span className="text-blue-500">8</span>.
            </h1>
          </div>
          <div id="nav" className="w-full px-6 flex flex-col gap-4 mt-20">
            {menuItems.map((item, index) => (
              <SidebarMenuItem key={index} {...item} />
            ))}
          </div>
        </div>
      </aside>
    </>
  );
};
