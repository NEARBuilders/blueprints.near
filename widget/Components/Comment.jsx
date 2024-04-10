const accountId = props.accountId;
const blockHeight =
  props.blockHeight === "now" ? "now" : parseInt(props.blockHeight);
const content =
  props.content ??
  JSON.parse(Social.get(`${accountId}/post/comment`, blockHeight) ?? "null");
const parentItem = content.item;
const highlight = !!props.highlight;
const raw = !!props.raw;
const groupId = props.groupId;
const groupIdLinkPart = groupId ? `&groupId=${groupId}` : "";
const permissions = props.permissions;

const extractNotifyAccountId = (item) => {
  if (!item || item.type !== "social" || !item.path) {
    return undefined;
  }
  const accountId = item.path.split("/")[0];
  return `${accountId}/post/main` === item.path ? accountId : undefined;
};

const link = `/${alias_mob}/widget/MainPage.N.Comment.Page?accountId=${accountId}&blockHeight=${blockHeight}${groupIdLinkPart}`;

const item = {
  type: "social",
  path: `${accountId}/post/comment`,
  blockHeight,
};

return (
  <>
    <div className={`post ${highlight ? "bg-warning bg-opacity-10" : ""}`}>
      <div className="left">
        <Widget
          loading=""
          src="${alias_mob}/widget/MainPage.N.Post.Left"
          props={{ accountId }}
        />
      </div>
      <div className="right">
        <Widget
          src="${config_account}/widget/Components.Post.Header"
          props={{
            accountId,
            blockHeight,
            link,
            postType: "comment",
            flagItem: item,
          }}
        />
        <Widget
          loading={
            <div
              className="overflow-hidden w-100 placeholder-glow"
              style={{ minHeight: "100px" }}
            />
          }
          src="${alias_mob}/widget/MainPage.N.Post.Content"
          props={{ content, raw }}
        />
        {blockHeight !== "now" ? (
          <div className="buttons d-flex align-items-center gap-4 flex-wrap">
            {parentItem && (
              <div key="comment">
                <Widget
                  loading=""
                  src="${alias_mob}/widget/N.CommentButton"
                  props={{
                    disabled: permissions.disableComment,
                    onClick: () =>
                      !state.showReply && State.update({ showReply: true }),
                  }}
                />
              </div>
            )}
            <Widget
              loading=""
              src="${alias_mob}/widget/N.RepostButton"
              props={{
                item,
                disabled: true,
              }}
            />
            <Widget
              loading=""
              src="${alias_mob}/widget/N.LikeButton"
              props={{
                notifyAccountId,
                item,
              }}
            />
            <Widget
              loading=""
              src="${alias_mob}/widget/MainPage.N.Post.ShareButton"
              props={{ accountId, blockHeight, postType: "comment", groupId }}
            />
          </div>
        ) : (
          <div className="buttons-placeholder" />
        )}
      </div>
    </div>
    {state.showReply && (
      <div className="mb-2" key="reply">
        <Widget
          src="${config_account}/widget/Components.Comment.Compose"
          props={{
            initialText: `@${accountId}, `,
            notifyAccountId: extractNotifyAccountId(parentItem),
            item: parentItem,
            onComment: () => State.update({ showReply: false }),
          }}
        />
      </div>
    )}
  </>
);
