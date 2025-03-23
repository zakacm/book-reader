export default function SidebarItem({
  link,
  icon,
  title,
  textBadge,
  nbrBadge,
}) {
  return (
    <li>
      <a
        href={link}
        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
      >
        {icon}
        <span className="flex-1 ms-3 whitespace-nowrap">{title}</span>
        {textBadge && (
          <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
            {textBadge}
          </span>
        )}
        {nbrBadge && (
          <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
            {nbrBadge}
          </span>
        )}
      </a>
    </li>
  );
}
