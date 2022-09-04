import Post from "./Post";
import mnerf from "./imgs/mnerf.jpg";
const Posts = ({ hr }) => {
    return (
        <div className="   2xl:ml-auto 2xl:mr-0  w-full sm:max-w-fit mx-auto  ">
            {hr ? <div>
                <Post rate="5" user="Network/network" time="1 min" title="First post" content="Hello networkians!! and Summer Break Challenge judges,hope you're doing great, you can find in the posts below some cool facts about our platform. Enjoy your time!" category={['Hello !!', 'WOOHA', 'Happy']} boost={true} />
                <Post rate="4.5" user="Network/network" time="2 min" title="subNetwork" content="A community that gather students plan users and Establishment plan usersallowing them to exchange mutual interests within a credible supervised educational purpose environment.It has Name, subNetwork picture ,owner and moderators, description and a code of conduct." category={['Fact', 'subNetwork']} boost={true} />
                <Post rate="4.7" user="Network/network" time="12h" title="Post" content="
            Users can share content, images,files,videos and choose in which category it falls.
            It is possible to comment, like, share, save and report any post.
            The post owner can update it.
            The owner / moderators of a subNetwork can delete it if it's against our content policy or the rule of conduct. 
            There is an algorithm that checks the content of a post before it will be published,lots of reports or low rating  can lead to the deletion of the post." category={['Fact', 'Post']} boost={false} />
                <Post rate="4.9" user="Network/network" time="1d" title="Sub plans and payment methods" content="We made Subscription plans to distinguish between users,each plan has it privileges, you can always use our platform free.For the payment methods we thought on how to make it easy and available for all and came up with with the idea of paying by SIM card and in our case Djezzy SIM card. " category={['Fact', 'Sub plans', 'payment']} boost={true} />
                <Post rate="4.6" user="Network/network" time="1w" title="Final word" content="Judges we wanna inform you that you reached the last post, we hope that you enjoyed your experience discovering our idea and as always your Network is your Networth,what are you waiting for??" category={['Goodbye', 'Thanks']} boost={false} />
            </div> : <div>
                <Post rate="5" user="Network/network" time="1 min" title="First post" content="" category={['Hello !!', 'WOOHA', 'Happy']} boost={true} follow={true} img={mnerf}/>
                <Post rate="4.5" user="Network/network" time="2 min" title="subNetwork" content="A community that gather students plan users and Establishment plan usersallowing them to exchange mutual interests within a credible supervised educational purpose environment.It has Name, subNetwork picture ,owner and moderators, description and a code of conduct." category={['Fact', 'subNetwork']} boost={true} />
                <Post rate="4.7" user="Network/network" time="12h" title="Post" content="
            Users can share content, images,files,videos and choose in which category it falls.
            It is possible to comment, like, share, save and report any post.
            The post owner can update it.
            The owner / moderators of a subNetwork can delete it if it's against our content policy or the rule of conduct. 
            There is an algorithm that checks the content of a post before it will be published,lots of reports or low rating  can lead to the deletion of the post." category={['Fact', 'Post']} boost={false} />
                <Post rate="4.9" user="Network/network" time="1d" title="Sub plans and payment methods" content="We made Subscription plans to distinguish between users,each plan has it privileges, you can always use our platform free.For the payment methods we thought on how to make it easy and available for all and came up with with the idea of paying by SIM card and in our case Djezzy SIM card. " category={['Fact', 'Sub plans', 'payment']} boost={true} follow={true} />
                <Post rate="4.6" user="Network/network" time="1w" title="Final word" content="Judges we wanna inform you that you reached the last post, we hope that you enjoyed your experience discovering our idea and as always your Network is your Networth,what are you waiting for??" category={['Goodbye', 'Thanks']} boost={false} follow={true}/>
            </div>}
        </div>

    );
}

export default Posts;