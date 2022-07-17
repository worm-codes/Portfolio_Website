import styles from "../styles/Project.module.css";


function ProjectItem({ image, name, id }) {

  return (
    <div
      className={styles.projectItem}
      onClick={() => {
        window.location.href="/project/" + id+"#somethin"
       
      }}
    >
      <div style={{ backgroundImage: `url(${image})` }} className={styles.bgImage} />
      <h1> {name} </h1>
    </div>
  );
}

export default ProjectItem;
