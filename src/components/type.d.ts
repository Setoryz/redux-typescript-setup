// INTERFACE FOR ARTICLE OBJECT
interface IArticle {
  id: number;
  title: string;
  body: string;
}

//  TYPE FOR STATE OBJECT
type ArticleState = {
  articles: IArticle[];
};

// TYPES FOR ACTION CREATORS
type ArticleAction = {
  type: string;
  article: IArticle;
};

// TYPE FOR DISPATCH
type DispatchType = (args: ArticleAction) => ArticleAction;
