const initialState = {
	post : [
		{
		id : 1,
		title : "default post title",
		description : "lorem Ipsum dolor description of post.",
		created_at : +new Date(),
		updated_at : +new Date(),
		draft : true
		}
	]
};

const postReducer = (state = initialState, action) => {
	switch(action.type) {
		case "NEW_POST":
			return {
				...state,
				post : [...state.post, action.payload]
			}
		default:
			return state;
	}
	
}

export default postReducer;