const initState = {
    posts: [
       {id: '1', title: 'Ways to keep your mind sharp', body: 'The importance of keeping your mind sharp cannot be overstated. We’re all part of a fantastic intellectual and information economy, which thrives on ideas, creativity and intelligence. Keeping your mind sharp is sure to give you the edge over the competition, and more importantly lead to your own higher levels of happiness. Running a top PR agency takes its toll, and mindfulness is crucial.'},
       {id: '2', title: 'i just to make my money', body: 'Give your mind time to assimilate knowledge we live in a culture where we are constantly experiencing and learning new things and taking in new information'},
       {id: '3', title: 'need to increase my typing speed', body: 'Eat well, sleep well and exercise often giving your mind the proper rest and energy is essential to getting the best performance out of it. This one is pretty self explanatory, but people often forget that you need proper fuel and proper rest to function optimally. Also, putting your physical body through the paces is a surefire way to rejuvenate yourself mentally.'}
    ]
}

const rootReducer = (state = initState, action) => {
    if (action.type === 'DELETE_POST') {
        let newPosts = state.posts.filter(post => {
            return action.id !== post.id
        });
        return {
            ...state,
            posts: newPosts
        }
    }
    return state;
}

export default rootReducer;