import { configureStore } from "@reduxjs/toolkit";
import LikeCounterReducer from './Redux-toolkit-project/ReduxSlice/LikeSlice';
import Newsubscribers from './Redux-toolkit-project/ReduxSlice/SubscriberSlice';
import UserComment from './Redux-toolkit-project/ReduxSlice/CommentSlice';
import DataForm from './Redux-toolkit-project/Redux-table/TableSlice/FormSlice';
import userdata from './Redux-toolkit-project/ReduxApi/DataApiSlice'
import ReduxUserData from './Redux-toolkit-project/ReduxApiEx2/ReduxDataApiSlice'

export const store = configureStore({
    reducer:{
        likecounter: LikeCounterReducer,
        subscribers: Newsubscribers,
        userComments: UserComment,
        formdata:DataForm,
        UserData:userdata,
        reduxdataApi:ReduxUserData
    },
})