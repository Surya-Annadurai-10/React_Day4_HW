import styles from './MyComponent.module.css'
import Card from '../card/card'


const MyComponent = () =>{

    const data = [
        {
            id:1,
            colorName : "PINK",
            colorCode : "FF6663",
            copied : false
        },
        {
            id:2,
            colorName : "GRAY",
            colorCode : "333333",
            copied : false

        },
        {
            id:3,
            colorName : "BLACK",
            colorCode : "000000",
            copied : false

        },
        {
            id:4,
            colorName : "GREEN",
            colorCode : "00FF00",
            copied : false

        },
        {
            id:5,
            colorName : "YELLOW",
            colorCode : "FFF500",
            copied : false

        },
        {
            id:6,
            colorName : "LIGHT GRAY",
            colorCode : "CCCCCC",
            copied : false

        },
        {
            id:7,
            colorName : "PURPLE",
            colorCode : "7E41A2",
            copied : false

        },
        {
            id:8,
            colorName : "BROWN",
            colorCode : "C14911",
            copied : false

        },
        {
            id:9,
            colorName : "ROSE",
            colorCode : "FF007F",
            copied : false

        },
        {
            id:10,
            colorName : "CYAN",
            colorCode : "00FFFF",
            copied : false

        },
        {
            id:11,
            colorName : "DARK GREEN",
            colorCode : "013220",
            copied : false

        },
        {
            id:12,
            colorName : "BLUE",
            colorCode : "0000FF",
            copied : false

        }
    ]
    return <><div className={styles.component}>
    {
        data.map((val , index) =>{
            return <Card {...val} key={index} />
    
        })
    }
    </div>
    </>
}

export default MyComponent;