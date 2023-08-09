import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { Post as IPost } from "./Home";
import { auth, db } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect, useState } from "react";

interface Props{
    post: IPost;
}

export const Post = (props: Props) => {
    const {post} = props;
    const [user] = useAuthState(auth);
    const [likes, setLikes] = useState<Like[] | null>(null); 
    const likesRef = collection(db, "likes");

    interface Like{
        userId : string;
    }

    const likesDoc = query(likesRef, where("postId", "==", post.id));

    const getLikes = async () => {
        const data = await getDocs(likesDoc);
        setLikes(data.docs.map((doc) => ({userId : doc.data().userId})));
    }

    const hasUserLiked = likes?.find((like) => like.userId === user?.uid);

    useEffect(() => {
        getLikes();
    }, [])

    const addLike = async () => {
        await addDoc(likesRef, {
            userId: user?.uid,
            postId: post.id,
        });
        if (user){
        setLikes((prev) => prev ? [...prev, {userId : user?.uid}] : [{userId : user?.uid}]);
        }
    }
    return (<div className="card text-white bg-info border-primary">
        <div className="title card-header "><h1>{post.title}</h1></div>
        <div className="body card-body"><p>{post.description}</p></div>
        <div className="footer card-footer">
            <p>@{post.username}</p>
            <button className="btn btn-outline-warning border-3" onClick={addLike}>
                {hasUserLiked ? <>&#128078;</> : <>&#128077;</>}
            </button>
            {likes && <p>Likes: {likes.length}</p>}
        </div>
    </div>);
}