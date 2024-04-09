const { Button } = VM.require("bos.workspace/widget/Components.Button") || {
  Button: () => <></>,
};
const { LinkTree } = VM.require(
  "bos.workspace/widget/Components.Profile.LinkTree"
) || {
  LinkTree: () => <></>,
};
const { FollowStats } = VM.require(
  "bos.workspace/widget/Components.Profile.FollowStats"
) || {
  FollowStats: () => <></>,
};
const { Hashtag } = VM.require("bos.workspace/widget/Components.Hashtag") || {
  Hashtag: () => <></>,
};
return {
  Button,
  LinkTree,
  FollowStats,
  Hashtag,
};
