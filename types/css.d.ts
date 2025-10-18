declare module "*.module.css" {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module "*.css" {}

declare module "*.css?url" {
  export default string;
}
