import styles from '../styles/Project.module.css';

function ProjectItem({ image, name, id }) {
  let bool = false;
  if (name == 'ERP Project') {
    bool = true;
  }

  return (
    <div
      className={styles.projectItem}
      onClick={() => {
        window.location.href = '/project/' + id + '#main';
      }}
    >
      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: bool ? 'auto' : '',
        }}
        className={styles.bgImage}
      />
      <h1> {name} </h1>
    </div>
  );
}

export default ProjectItem;
