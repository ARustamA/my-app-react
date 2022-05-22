import { reRenderEntireTree } from "../Render";

let state = {
   profilePage: {
      PostData: [
         { id: 1, message: 'hi, I miss you', likesCount: 4 },
         { id: 2, message: 'winter os coming', likesCount: 5 },
         { id: 3, message: 'hi, I need my phone', likesCount: 6 },
         { id: 4, message: 'Yo yo yo', likesCount: 2 },
         { id: 5, message: 'goodbye', likesCount: 1 },
         { id: 6, message: 'I do not understand you', likesCount: 3 },
      ],

   },
   dialogsPage: {
      dialogsData: [
         { id: 1, name: 'Aisy' },
         { id: 2, name: 'Ruslan' },
         { id: 3, name: 'Vlad' },
         { id: 4, name: 'Zulf' },
         { id: 5, name: 'Fidan' },
         { id: 6, name: 'Vildan' },
      ],
      messageData: [
         { id: 1, message: 'hi, I miss you' },
         { id: 2, message: 'winter os coming' },
         { id: 3, message: 'hi, I need my phone' },
         { id: 4, message: 'Yo yo yo' },
         { id: 5, message: 'goodbye' },
         { id: 6, message: 'I do not understand you' },
      ],
      avaData: [
         { id: 1, ava: "<img src='https://media.kasperskydaily.com/wp-content/uploads/sites/92/2016/07/06021844/social-networking-rules-featured.jpg' //>" },
         { id: 2, ava: "<img src='https://media.kasperskydaily.com/wp-content/uploads/sites/92/2016/07/06021844/social-networking-rules-featured.jpg' //>" },
         { id: 3, ava: "<img src='https://media.kasperskydaily.com/wp-content/uploads/sites/92/2016/07/06021844/social-networking-rules-featured.jpg' //>" },
         { id: 4, ava: "<img src='https://media.kasperskydaily.com/wp-content/uploads/sites/92/2016/07/06021844/social-networking-rules-featured.jpg' //>" },
         { id: 5, ava: "<img src='https://media.kasperskydaily.com/wp-content/uploads/sites/92/2016/07/06021844/social-networking-rules-featured.jpg' //>" },
         { id: 6, ava: "<img src='https://media.kasperskydaily.com/wp-content/uploads/sites/92/2016/07/06021844/social-networking-rules-featured.jpg' //>" },
        
      ],
   },

}

export let addPost = (postMessage) => {
      debugger;
   let newPost = {
      id: 5,
      message: postMessage,
      likesCount: 0,
   }

   state.profilePage.PostData.push(newPost);
   reRenderEntireTree(state);
}




export default state;