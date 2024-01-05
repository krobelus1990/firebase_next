import getUserDocument from "./getUserlist";
import getUser from "./getUser";
import getPostDocument from "./getPostList";
import getPost from "./getPost";

export const userSearch = async (value: string) => {
    const searchedUsers: any[] = []
    const idResult = await getUserDocument();
    const userList = await Promise.all(idResult.map(getUser));

    userList.forEach((user: any) => user.display_name?.includes(value) && searchedUsers.push(user))
    return searchedUsers;
}


export const postSearch = async (value: string) => {
    const searchedPostList: any[] = []
    const searchedUsers = await userSearch(value);
    const userIds = searchedUsers.map((user) => user.uid)
    const idResult = await getPostDocument();
    const totalpostList = await Promise.all(idResult.map(getPost))
    totalpostList.forEach((post) => {
        userIds.forEach((userId) => {
            post.user_ref.id === userId && searchedPostList.push(post);
        });
    }); console.log(searchedPostList)
    return { searchedPostList, searchedUsers }
}