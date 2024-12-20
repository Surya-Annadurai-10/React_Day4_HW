import styles from './card.module.css'


const Card = (props) =>{
    console.log(props);
    const onCopy = (ele) =>{
     console.log(ele.id);
     const textToCopy = `background-color: #${ele.colorCode};`
     navigator.clipboard.writeText(textToCopy)
     .then(() =>{
        
     alert("Copied");
      
     }).catch(() =>{
        alert("Failed to Copy");
     });   
    }
  return <>
   <div className={styles.container}>
     <div style={{backgroundColor: `#${props.colorCode}`}} className={styles.color_box}></div>
     <div className={styles.down_box}>
        <h2>#{props.colorCode}</h2>
        <h3 style={{color: `#${props.colorCode}`}}>{props.colorName}</h3><span>  <button onClick={() =>{onCopy(props)}} className={styles.btn}>Copy CSS</button></span>
    </div>
  

</div>
  </>


  
}

export default Card;