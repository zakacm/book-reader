const fs = require("fs");
const path = require("path");

// Get component name and type (component or page)
const componentName = process.argv[2];
const type = process.argv[3] === "page" ? "Pages" : "Components";

if (!componentName) {
  console.error("Please provide a component name.");
  process.exit(1);
}

const baseDir = path.join(__dirname, "src", type, componentName);

// Create directory
fs.mkdirSync(baseDir, { recursive: true });

// Create JSX file
const componentCode = `import styles from "./${componentName}.module.css";

export default function ${componentName}() {
  return (
    <div className={styles.container}>
      <h1>${componentName} Component</h1>
    </div>
  );
}`;

fs.writeFileSync(path.join(baseDir, `${componentName}.js`), componentCode);

// Create CSS Module file
const cssCode = `.container {
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 5px;
}`;

fs.writeFileSync(path.join(baseDir, `${componentName}.module.css`), cssCode);

console.log(
  `Component '${componentName}' created successfully in '${baseDir}'`
);
