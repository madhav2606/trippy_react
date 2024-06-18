import DestinationData from "./DestinationData";
import "./DestinationStyles.css";
const Destination = () =>{
    return(
        <div className="destination">
            <h1>Popular Destination
            </h1>
            <p>Tours give you an opportunity to see a lot in a time frame</p>
            <br />

            <DestinationData
            classname="first-des"
            heading="Tall Volcanon, Batangas"
            text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores error, commodi consectetur, quasi molestiae ut nulla ea culpa magnam dolorum aspernatur illum minima quibusdam nesciunt doloribus voluptatem tenetur veritatis inventore rerum. Vero, facilis dolorum! "
            img1 = "https://th.bing.com/th/id/OIP.lOZXhKTj8nZydWliFpZQ5gHaFj?w=1024&h=768&rs=1&pid=ImgDetMain"
            img2 = "https://th.bing.com/th/id/R.3d042c92d9b167c065d4875c964d0b4a?rik=j%2bwe8hUaZqdmSA&riu=http%3a%2f%2fwallup.net%2fwp-content%2fuploads%2f2015%2f12%2f74165-nature-HDR-river-trees-mountain-landscape.jpg&ehk=yHKVetDTiL5y89jHLEMdJx0A%2f0iGuZctDOo3T9ozKvg%3d&risl=&pid=ImgRaw&r=0"
            />
            <br /><br />

<DestinationData
classname="first-des-reverse"
            heading="Mt. Dagandul, Batangas"
            text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores error, commodi consectetur, quasi molestiae ut nulla ea culpa magnam dolorum aspernatur illum minima quibusdam nesciunt doloribus voluptatem tenetur veritatis inventore rerum. Vero, facilis dolorum! wergwtg wetgwtewthwt4h w4thw4thw4th tw th erthertheryneryher yhtwqerergetheryherth "
            img1 = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
            img2 = "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_1280.jpg"
            />
        </div>


    );
    
}
export default Destination;