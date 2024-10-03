// components/PostCard.js


const PostCard = ( props:any) => {
  const    {postData} = props
  console.log("postData")
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img
        className="w-full h-48 object-cover"
        src='https://via.placeholder.com/400x200'
        alt="post image"
        width={400}
        height={200}
        
        
      />
      <div className="px-6 py-4">
        <div className="font-bold text-md mb-2"> {postData.title}</div>
        <p className="text-gray-700 text-base">
          {postData.body}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <a href="#" className="text-blue-500 hover:underline">
          Read more
        </a>
        
      </div>
    </div>
  );
};
export default PostCard;

