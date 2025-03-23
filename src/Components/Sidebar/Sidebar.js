import SidebarItem from "./Items/SidebarItem";
import styles from "./Sidebar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Sidebar() {
  return (
    <aside
      id="logo-sidebar"
      className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
        <ul className="space-y-2 font-medium">
          <SidebarItem
            icon={<FontAwesomeIcon icon="fa-solid fa-book-open-reader" />}
            title={"Books"}
            link={"/books"}
          />
          <SidebarItem
            icon={<FontAwesomeIcon icon="fa-solid fa-book-bookmark" />}
            title={"Dictionnary"}
            link={"/dictionnary"}
          />
        </ul>
      </div>
    </aside>
  );
}
