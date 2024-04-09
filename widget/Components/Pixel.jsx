const { Button } = VM.require(
  "${config_account}/widget/Components.Pixel.Button",
) || {
  Button: () => <></>,
};

const { Hashtag } = VM.require(
  "${config_account}/widget/Components.Pixel.Hashtag",
) || {
  Hashtag: () => <></>,
};

const { LinkTree } = VM.require(
  "${config_account}/widget/Components.Pixel.LinkTree",
) || {
  LinkTree: () => <></>,
};

return {
  Button,
  Hashtag,
  LinkTree,
};
