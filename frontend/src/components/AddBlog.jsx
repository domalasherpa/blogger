import Button from "./Button";
import api from "../utils/api";
import { useState } from "react";

export default function AddBlog() {
    const [title, setTitle] = useState("");
    const [subtitle, setSubtitle] = useState("");
    const [content, setContent] = useState("");
    const [tags, setTags] = useState([]);
    const [tag, setTag] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission
        try {
            const res = await api.post('/blog', {
                title: title,
                subtitle: subtitle,
                body: content,
                tags: tags
            });
            console.log(res.data);
        } catch (error) {
            console.error("Error posting blog:", error);
        }
    };

    const handleTags = (e) => {
        e.preventDefault(); // Prevent default form submission
        if (tag && !tags.includes(tag)) {
            setTags((prevTags) => [...prevTags, tag]);
            setTag(""); // Clear the tag input
        }
    };

    const removeTag = (index)=>{
        if(index < tags.length){
            setTags(
                (prevTags)=>prevTags.filter((_, i)=> i!= index)
            );
        }
    }

    return (
        <div className="bg-gray-600 p-4 rounded-xl">
            <form className="w-full" onSubmit={handleSubmit}>
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    value={title}
                    className="border-2 border-slate-500 focus:border-blue-500 rounded-lg outline-none bg-slate-500 p-1 w-full mb-2"
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <label htmlFor="subtitle">Sub-title</label>
                <input
                    type="text"
                    value={subtitle}
                    onChange={(e) => setSubtitle(e.target.value)}
                    className="border-2 border-slate-500 focus:border-blue-500 rounded-lg outline-none bg-slate-500 p-1 w-full mb-2"
                    required
                />
                <label htmlFor="content">Body</label> <br />
                <textarea
                    name="content"
                    id="content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Enter your body content here"
                    className="border-2 border-slate-500 focus:border-blue-500 rounded-lg outline-none bg-slate-500 p-1 w-full mb-2"
                ></textarea> <br />

                <label htmlFor="tags">Tags</label>
                <div className="flex flex-wrap justify-between border-2 p-2 border-slate-500 focus:border-blue-500 rounded-lg outline-none bg-slate-500 w-full mb-2">
                    <input
                        type="text"
                        value={tag}
                        onChange={(e) => setTag(e.target.value)}
                        className="border-none bg-transparent outline-none m-0"
                    />
                    <button onClick={handleTags} className="bg-slate-600 text-white p-1 px-2 rounded">
                        Add
                    </button>
                </div>
                {/* Render tags */}
                {tags.length > 0 && (
                    <div className="flex gap-3 text-slate-500 flex-wrap mb-3">
                        {tags.map((tag, index) => (
                            <p key={index} className="bg-slate-300 p-1 rounded mb-1 inline-block">
                                {tag}
                                <span className="ml-3 cursor-pointer px-3" onClick={()=>{removeTag(index)}}>x</span>
                            </p>
                        ))}
                    </div>
                )}

                <Button text="Post" onClick={handleSubmit} className="bg-slate-700" />
            </form>
        </div>
    );
}
