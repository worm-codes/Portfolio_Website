
import { useRouter } from "next/router";
import { ProjectList } from "../../helpers/ProjectList"
import GitHubIcon from "@mui/icons-material/GitHub";
import styles from "../../styles/ProjectIDetail.module.css";
import { useEffect } from "react";
import useWindowDimensions from '../../hooks/useWindowDimensions';


const Index = () => {



 const { height, width } = useWindowDimensions();
  const router = useRouter();
  const { id } = router.query;

  const project = ProjectList[id];
 console.log(width,height);
 const list= project?.skills?.map((skil,i)=>{
          return <li key={i}>{skil}</li>
          
        })
  
    const list2= project?.skills?.map((skil,i)=>{
          return <span style={{fontSize:width>600?(width<932?(width/34):'32'):'25'}} key={i}>{skil+(project?.skills[project.skills.length - 1]!==skil? ', ':'')}</span> 
          
        })
  return project?(
    <div className={styles.project} id="content">
      <h1 > {project.name}</h1>
      {/*<img src={project.image} />*/}
      <iframe  className={styles.video} width={width>600?(width<932?(width-200):'860'):'400'} height={width>600?(width<932 ?(width-400):'420'):'200'} src="https://www.youtube.com/embed/RC3DJOpl-3E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    
      <p>
      
        <b>Skills:</b> 
        
        {width<600? list: list2}
        
      </p>
      <a target="_newblank" href={project.github}><GitHubIcon/></a> 
      
    </div>
  ):'';
  
}

export default Index