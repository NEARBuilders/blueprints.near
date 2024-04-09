const accountId = props.accountId ?? context.accountId;

const profileLayout = Social.getr(`${accountId}/profile`).profileLayout;

return profileLayout === "pixel" ? (
  <Widget src="${config_account}/widget/Profile.Pixel" props={props} />
) : (
  <Widget src="${config_account}/widget/Profile.Modern" props={props} />
);
