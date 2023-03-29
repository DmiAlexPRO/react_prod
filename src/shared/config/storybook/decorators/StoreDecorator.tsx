import {Story} from '@storybook/react';
import {StateScheme, StoreProvider} from 'app/providers/StoreProvider';
import {loginReducer} from 'features/AuthByUsername/model/slice/loginSlice';
import {profileReducer} from 'entities/Profile';
import {ReducersList} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {articleDetailsReducer} from 'entities/Article/model/slice/articleDetailsSlice';
import {articleDetailsCommentsReducer} from 'pages/ArticleDetailsPage/model/slices/articleDetailsCommentsSlice';
import {addCommentFormReducer} from 'features/addCommentForm/model/slices/addCommentFormSlice';

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    addCommentForm: addCommentFormReducer,
    articleDetailsComments: articleDetailsCommentsReducer
};

export const StoreDecorator = (
    state: DeepPartial<StateScheme>,
    asyncReducers?: ReducersList
) => (StoryComponent: Story) => (
    <StoreProvider
        initialState={state}
        asyncReducers={{...defaultAsyncReducers, ...asyncReducers}}
    >
        <StoryComponent />
    </StoreProvider>
);
