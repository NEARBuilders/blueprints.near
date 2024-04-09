const { Button } = VM.require(
  "bos.workspace/widget/Components.Pixel.Button"
) || {
  Button: () => <></>,
};
const { Hashtag } = VM.require(
  "bos.workspace/widget/Components.Pixel.Hashtag"
) || {
  Hashtag: () => <></>,
};
const { LinkTree } = VM.require(
  "bos.workspace/widget/Components.Pixel.LinkTree"
) || {
  LinkTree: () => <></>,
};
return {
  Button,
  Hashtag,
  LinkTree,
};
