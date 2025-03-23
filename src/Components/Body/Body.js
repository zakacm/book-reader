import styles from "./Body.module.css";

export default function Body({ children }) {
  return (
    <div className="p-4 sm:ml-64">
      <div className="mt-14">{children}</div>
    </div>
  );
}
