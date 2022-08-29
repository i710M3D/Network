import Post from "./Post";

const Posts = () => {
    return ( 
    <div className=" w-fit ">
        <Post rate="4" user="Network/mnerf_" time="1 min ago" title="first post" content="Hello networkians!!" category={['hello','first try','wooha','happy']} boost={true}  />
        <Post rate="4" user="Network/mnerf_" time="1 min ago" title="first post" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. " category={['hello','first try']} boost={true}  />
        <Post rate="4" user="Network/mnerf_" time="1 min ago" title="first post" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. " category={['hello','first try']} boost={false}  />
        <Post rate="4" user="Network/mnerf_" time="1 min ago" title="first post" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. " category={['hello','first try']} boost={true}  />
        <Post rate="4" user="Network/mnerf_" time="1 min ago" title="first post" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. " category={['hello','first try']} boost={false}  />
    </div> );
}
 
export default Posts;