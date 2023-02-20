import { useRouter } from 'next/router';
import { ProjectList } from '../../helpers/ProjectList';
import GitHubIcon from '@mui/icons-material/GitHub';
import styles from '../../styles/ProjectIDetail.module.css';
import WorldIcon from '@mui/icons-material/Language';
import Image from 'next/image';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import useResponsive from '../../hooks/useResponsive';

const Index = () => {
  const { width } = useWindowDimensions();
  const { isTablet } = useResponsive();
  const router = useRouter();
  const { id } = router.query;

  const project = ProjectList[id];

  const list = project?.skills?.map((skil, i) => {
    return <li key={i}>{skil}</li>;
  });

  const list2 = project?.skills?.map((skil, i) => {
    return (
      <span
        style={{ fontSize: '22.375px' }}
        key={i}
      >
        {skil +
          (project?.skills[project.skills.length - 1] !== skil ? ', ' : '')}
      </span>
    );
  });
  return project ? (
    <div>
      <div
        id="main"
        className={styles.project}
      >
        <h1> {project.name}</h1>

        {project.videoLink && (
          <iframe
            className={styles.video}
            width={width > 600 ? (width < 932 ? width - 200 : '900') : '370'}
            height={width > 600 ? (width < 932 ? width - 400 : '450') : '200'}
            src={project.videoLink}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        )}
        {project.iframeLink && (
          <iframe
            style={{ border: 'none' }}
            src={project.iframeLink}
            width="100%"
            height={isTablet ? '450px' : '700px'}
          ></iframe>
        )}
        {project.image && !project.videoLink && (
          <Image
            width={width > 600 ? (width < 932 ? width - 200 : '900') : '370'}
            height={width > 600 ? (width < 932 ? width - 400 : '450') : '200'}
            src={project.image}
            alt={project.name}
          />
        )}

        <p>
          <b>Skills:</b>

          {width < 600 ? list : list2}
        </p>
        <div className={styles.linkGroup}>
          <a
            className={styles.hrefMargin}
            target="_newblank"
            href={project.github}
          >
            <div className={styles.iconAndLink}>
              <GitHubIcon />
              <h3>Github</h3>
            </div>
          </a>
          {project.liveLink && (
            <a
              className={styles.hrefMargin}
              target="_newblank"
              href={project.liveLink}
            >
              <div className={styles.iconAndLink}>
                <WorldIcon />
                <h3>Live</h3>
              </div>
            </a>
          )}
        </div>
      </div>
    </div>
  ) : (
    ''
  );
};

export default Index;
