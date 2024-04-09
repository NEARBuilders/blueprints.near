const accountId = props.accountId ?? context.accountId;
const profileLayout = Social.getr(`${accountId}/profile`).profileLayout;
return profileLayout === "pixel" ? (
  <Widget src="bos.workspace/widget/Profile.Pixel" props={props} />
) : (
  <Widget src="bos.workspace/widget/Profile.Modern" props={props} />
);
