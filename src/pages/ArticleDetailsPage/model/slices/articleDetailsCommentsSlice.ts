import {
    createEntityAdapter,
    createSlice, PayloadAction
} from '@reduxjs/toolkit';

import {Comment} from 'entities/Comment';
import {StateScheme} from 'app/providers/StoreProvider';
import {
    fetchCommentsByArticleId
} from 'pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import {ArticleDetailsCommentsScheme} from '../types/ArticleDetailsCommentsScheme';

const commentsAdapter = createEntityAdapter<Comment>({
    selectId: (comment) => comment.id
});

export const getArticleComments = commentsAdapter.getSelectors<StateScheme>(
    (state) => state.articleDetailsComments || commentsAdapter.getInitialState()
);

const articleDetailsCommentsSlice = createSlice({
    name: 'articleDetailsCommentsSlice',
    initialState: commentsAdapter.getInitialState<ArticleDetailsCommentsScheme>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {}
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCommentsByArticleId.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchCommentsByArticleId.fulfilled, (
                state,
                action: PayloadAction<Comment[]>
            ) => {
                state.isLoading = false;
                commentsAdapter.setAll(state, action.payload);
            })
            .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    }
});

export const {reducer: articleDetailsCommentsReducer} = articleDetailsCommentsSlice;