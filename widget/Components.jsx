const { Button } = VM.require("${config_account}/widget/Components.Button") || {
  Button: () => <></>,
};

const { LinkTree } = VM.require(
  "${config_account}/widget/Components.Profile.LinkTree",
) || {
  LinkTree: () => <></>,
};

const { FollowStats } = VM.require(
  "${config_account}/widget/Components.Profile.FollowStats",
) || {
  FollowStats: () => <></>,
};

const { Hashtag } = VM.require(
  "${config_account}/widget/Components.Hashtag",
) || {
  Hashtag: () => <></>,
};

return {
  Button,
  LinkTree,
  FollowStats,
  Hashtag,
};
