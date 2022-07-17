
import { useRouter } from "next/router";
import { ProjectList } from "../../helpers/ProjectList"
import GitHubIcon from "@mui/icons-material/GitHub";
import styles from "../../styles/ProjectIDetail.module.css";

import useWindowDimensions from '../../hooks/useWindowDimensions';


const Index = () => {



 const { width } = useWindowDimensions();
  const router = useRouter();
  const { id } = router.query;

  const project = ProjectList[id];

 const list= project?.skills?.map((skil,i)=>{
          return <li key={i}>{skil}</li>
          
        })
  
    const list2= project?.skills?.map((skil,i)=>{
          return <span style={{fontSize:"22.375px"}} key={i}>{skil+(project?.skills[project.skills.length - 1]!==skil? ', ':'')}</span> 
          
        })
  return project?(
    <div id="somethin">
    <div className={styles.project} >
      <h1 > {project.name}</h1>
    
      <iframe  className={styles.video} width={width>600?(width<932?(width-200):'860'):'360'} 

      height={width>600?(width<932 ?(width-400):'440'):'200'} 

      src="https://www.youtube.com/embed/VvZHQJSGnBA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
    
      <p>
      
        <b>Skills:</b> 
        
        {width<600? list: list2}
        
      </p>
      <a target="_newblank" href={project.github}><GitHubIcon/></a> 
      
    </div>
    </div>
  ):'';
  
}

export default Index