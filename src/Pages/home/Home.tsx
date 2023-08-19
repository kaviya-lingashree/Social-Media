import { getDocs, collection } from "firebase/firestore";
import { db } from "../../config/firebase";
import { useState } from "react";
import { Post } from "./Post";

export interface Post{
    description: string;
    title: string;
    id: string;
    userId: string;
    username: string;
}

export const Home = () => {
    const [postsList, setPostsList] = useState<Post[] | null>(null);
    const postsRef = collection(db, "posts");

    

    const getPosts = async () => {
        const data = await getDocs(postsRef);
        setPostsList(data.docs.map(
            (doc) => 
        ({...doc.data(), id:doc.id}) 
        ) as Post[]);
        
    }

    getPosts();
    return (<div>
        <h1>Home page</h1>
        <div className="card-group">
        {postsList?.map((post) => <Post post={ post} />)}
        </div>
    </div>);
}