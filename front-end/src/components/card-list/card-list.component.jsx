import './card-list.style.css'
import Card from "../card/card.component";


const CardList = ({posts}) => {

        return(
            <div className="card-list">
                {posts.map(post => {
                    return (
                        <Card key={post.id} post={post}/>
                    )}
                )}
            </div>
        )
    }


export default CardList;